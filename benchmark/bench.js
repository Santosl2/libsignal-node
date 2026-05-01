'use strict';

/**
 * libsignal-node performance benchmark
 *
 * Usage:
 *   node benchmark/bench.js            # all suites
 *   node benchmark/bench.js curve      # only suites whose name contains "curve"
 *
 * Each suite runs a configurable number of operations and reports:
 *   - ops/sec
 *   - median, p95, p99 latency (µs)
 *   - total wall time
 */

const { performance } = require('perf_hooks');
const nodeCrypto = require('crypto');
const path = require('path');

const lib        = require('../index');
const crypto     = require('../src/crypto');
const curve      = require('../src/curve');
const keyhelper  = require('../src/keyhelper');

const InMemoryStorage = require('../tests/helpers/InMemoryStorage');

// ─── config ──────────────────────────────────────────────────────────────────

const DEFAULT_ITERATIONS = 1000;
const WARMUP_ITERATIONS  = 100;

// ─── runner ──────────────────────────────────────────────────────────────────

function percentile(sorted, p) {
    const idx = Math.ceil(p / 100 * sorted.length) - 1;
    return sorted[Math.max(0, idx)];
}

/**
 * Runs a synchronous benchmark.
 * @param {string}   name
 * @param {Function} fn       - sync function to bench
 * @param {object}   [opts]
 * @param {number}   [opts.iterations]
 */
function bench(name, fn, opts = {}) {
    const N = opts.iterations || DEFAULT_ITERATIONS;

    // warmup
    for (let i = 0; i < WARMUP_ITERATIONS; i++) fn();

    const samples = new Array(N);
    const start = performance.now();
    for (let i = 0; i < N; i++) {
        const t0 = performance.now();
        fn();
        samples[i] = (performance.now() - t0) * 1000; // µs
    }
    const wall = performance.now() - start;

    samples.sort((a, b) => a - b);
    const opsPerSec = Math.round(N / (wall / 1000));

    printResult(name, opsPerSec, samples, N);
}

/**
 * Runs an async benchmark (awaits fn() every iteration sequentially).
 * @param {string}   name
 * @param {Function} fn       - async function to bench
 * @param {object}   [opts]
 */
async function benchAsync(name, fn, opts = {}) {
    const N      = opts.iterations || DEFAULT_ITERATIONS;
    const warmup = opts.warmup !== undefined ? opts.warmup : WARMUP_ITERATIONS;

    for (let i = 0; i < warmup; i++) await fn(i);

    const samples = new Array(N);
    const start = performance.now();
    for (let i = 0; i < N; i++) {
        const t0 = performance.now();
        await fn(warmup + i);
        samples[i] = (performance.now() - t0) * 1000; // µs
    }
    const wall = performance.now() - start;

    samples.sort((a, b) => a - b);
    const opsPerSec = Math.round(N / (wall / 1000));

    printResult(name, opsPerSec, samples, N);
}

function printResult(name, opsPerSec, sortedSamples, N) {
    const med = percentile(sortedSamples, 50).toFixed(1);
    const p95 = percentile(sortedSamples, 95).toFixed(1);
    const p99 = percentile(sortedSamples, 99).toFixed(1);

    console.log(
        `  ${name.padEnd(42)} ` +
        `${String(opsPerSec).padStart(8)} ops/s  ` +
        `med=${med}µs  p95=${p95}µs  p99=${p99}µs  (n=${N})`
    );
}

function header(title) {
    console.log(`\n${'─'.repeat(80)}`);
    console.log(`  ${title}`);
    console.log('─'.repeat(80));
}

// ─── suites ──────────────────────────────────────────────────────────────────

const SUITES = [];

function suite(name, fn) {
    SUITES.push({ name, fn });
}

// ── curve ────────────────────────────────────────────────────────────────────

suite('curve', async () => {
    header('curve — key generation & ECDH');

    bench('generateKeyPair()', () => {
        curve.generateKeyPair();
    });

    const alice = curve.generateKeyPair();
    const bob   = curve.generateKeyPair();

    // First call: no cache yet
    bench('calculateAgreement() — first call (no cache)', () => {
        const a = curve.generateKeyPair();
        const b = curve.generateKeyPair();
        curve.calculateAgreement(b.pubKey, a.privKey);
    });

    // Repeated call with same Buffer instances → cache hit
    bench('calculateAgreement() — cached KeyObject', () => {
        curve.calculateAgreement(bob.pubKey, alice.privKey);
    });

    const msg = nodeCrypto.randomBytes(32);
    const sig = curve.calculateSignature(alice.privKey, msg);

    bench('calculateSignature()', () => {
        curve.calculateSignature(alice.privKey, msg);
    });

    bench('verifySignature()', () => {
        curve.verifySignature(alice.pubKey, msg, sig);
    });
});

// ── crypto ───────────────────────────────────────────────────────────────────

suite('crypto', async () => {
    header('crypto — symmetric primitives & HKDF');

    const key32 = nodeCrypto.randomBytes(32);
    const iv16  = nodeCrypto.randomBytes(16);
    const data  = nodeCrypto.randomBytes(256);
    const INFO_A = Buffer.from('WhisperMessageKeys');
    const INFO_B = Buffer.from('WhisperRatchet');
    const ZERO_SALT = Buffer.alloc(32);

    bench('encrypt() 256 bytes', () => {
        crypto.encrypt(key32, data, iv16);
    });

    const ciphertext = crypto.encrypt(key32, data, iv16);

    bench('decrypt() 256 bytes', () => {
        crypto.decrypt(key32, ciphertext, iv16);
    });

    bench('calculateMAC()', () => {
        crypto.calculateMAC(key32, data);
    });

    bench('hash() SHA-512', () => {
        crypto.hash(data);
    });

    bench('deriveSecrets() 3 chunks (cached info)', () => {
        crypto.deriveSecrets(key32, ZERO_SALT, INFO_A);
    });

    bench('deriveSecrets() 2 chunks (cached info)', () => {
        crypto.deriveSecrets(key32, ZERO_SALT, INFO_B, 2);
    });

    bench('deriveSecrets() 3 chunks (fresh info each call)', () => {
        crypto.deriveSecrets(key32, ZERO_SALT, Buffer.from('WhisperMessageKeys'));
    });
});

// ── session — establish ───────────────────────────────────────────────────────

suite('session-establish', async () => {
    header('session — establishment (initOutgoing + first encrypt)');

    async function makeBundle() {
        const store  = new InMemoryStorage('x');
        const id     = keyhelper.generateIdentityKeyPair();
        const regId  = keyhelper.generateRegistrationId();
        const spk    = keyhelper.generateSignedPreKey(id, 1);
        const pk     = keyhelper.generatePreKey(1);

        await store.saveIdentity(id, regId);
        await store.storeSignedPreKey(spk.keyId, spk.keyPair);
        await store.storePreKey(pk.keyId, pk.keyPair);

        return {
            store,
            bundle: {
                identityKey: id.pubKey,
                registrationId: regId,
                signedPreKey: { keyId: spk.keyId, publicKey: spk.keyPair.pubKey, signature: spk.signature },
                preKey: { keyId: pk.keyId, publicKey: pk.keyPair.pubKey }
            }
        };
    }

    await benchAsync('initOutgoing() + first encrypt (PreKey)', async () => {
        const alice = await makeBundle();
        const bob   = await makeBundle();

        await alice.store.saveTrustedIdentity(bob.bundle.identityKey);

        const addr    = new lib.ProtocolAddress('bob', 1);
        const builder = new lib.SessionBuilder(alice.store, addr);
        await builder.initOutgoing(bob.bundle);

        const cipher = new lib.SessionCipher(alice.store, addr);
        await cipher.encrypt(Buffer.from('hello'));
    }, { iterations: 200 });
});

// ── session — encrypt/decrypt ─────────────────────────────────────────────────

suite('session-encrypt-decrypt', async () => {
    header('session — encrypt / decrypt on established session');

    // Build one reusable established session
    async function buildSession() {
        const aliceStore = new InMemoryStorage('alice');
        const bobStore   = new InMemoryStorage('bob');

        async function setup(store) {
            const id    = keyhelper.generateIdentityKeyPair();
            const regId = keyhelper.generateRegistrationId();
            const spk   = keyhelper.generateSignedPreKey(id, 1);
            const pk    = keyhelper.generatePreKey(1);
            await store.saveIdentity(id, regId);
            await store.storeSignedPreKey(spk.keyId, spk.keyPair);
            await store.storePreKey(pk.keyId, pk.keyPair);
            return {
                bundle: {
                    identityKey: id.pubKey,
                    registrationId: regId,
                    signedPreKey: { keyId: spk.keyId, publicKey: spk.keyPair.pubKey, signature: spk.signature },
                    preKey: { keyId: pk.keyId, publicKey: pk.keyPair.pubKey }
                }
            };
        }

        const alice = await setup(aliceStore);
        const bob   = await setup(bobStore);

        await aliceStore.saveTrustedIdentity(bob.bundle.identityKey);
        await bobStore.saveTrustedIdentity(alice.bundle.identityKey);

        const bobAddr   = new lib.ProtocolAddress('bob', 1);
        const aliceAddr = new lib.ProtocolAddress('alice', 1);

        await new lib.SessionBuilder(aliceStore, bobAddr).initOutgoing(bob.bundle);

        const ac = new lib.SessionCipher(aliceStore, bobAddr);
        const bc = new lib.SessionCipher(bobStore,   aliceAddr);

        const init = await ac.encrypt(Buffer.from('init'));
        await bc.decryptPreKeyWhisperMessage(init.body);

        // Bob replies so Alice clears pendingPreKey
        const reply = await bc.encrypt(Buffer.from('ack'));
        await ac.decryptWhisperMessage(reply.body);

        return { ac, bc };
    }

    const { ac, bc } = await buildSession();
    const plaintext = Buffer.from('hello world, this is a typical short Signal message!');

    await benchAsync('encrypt() (WhisperMessage, established)', async () => {
        await ac.encrypt(plaintext);
    });

    // Pre-encrypt a batch so Bob can decrypt without stepping the ratchet forward
    // in a way that invalidates previous ciphertexts.
    // We decrypt one message per iteration (must encrypt fresh each time because
    // each ciphertext can only be decrypted once).
    await benchAsync('encrypt() + decrypt() round-trip', async () => {
        const ct = await ac.encrypt(plaintext);
        await bc.decryptWhisperMessage(ct.body);
    });

    // Measure decrypt side alone.
    // Signal deletes message keys after first use, so we pre-generate exactly
    // (WARMUP + N) unique ciphertexts and consume each one exactly once.
    const DEC_WARMUP = 50;
    const DEC_N      = 300;
    const PRE_TOTAL  = DEC_WARMUP + DEC_N;
    console.log(`\n  (pre-generating ${PRE_TOTAL} ciphertexts for decrypt-only benchmark...)`);
    const { ac: ac2, bc: bc2 } = await buildSession();
    const ciphertexts = [];
    for (let i = 0; i < PRE_TOTAL; i++) {
        ciphertexts.push(await ac2.encrypt(plaintext));
    }

    // fn receives the absolute call index (warmup + iteration offset)
    await benchAsync('decrypt() only (WhisperMessage)', async (idx) => {
        await bc2.decryptWhisperMessage(ciphertexts[idx].body);
    }, { iterations: DEC_N, warmup: DEC_WARMUP });
});

// ── session — concurrent queues ───────────────────────────────────────────────

suite('session-concurrent', async () => {
    header('session — concurrent encrypt across 100 sessions (simulates 100 connections)');

    const CONNECTIONS = 100;
    const MSG_PER_CONN = 5;

    async function buildConn(i) {
        const aliceStore = new InMemoryStorage(`alice-${i}`);
        const bobStore   = new InMemoryStorage(`bob-${i}`);

        async function setup(store) {
            const id    = keyhelper.generateIdentityKeyPair();
            const regId = keyhelper.generateRegistrationId();
            const spk   = keyhelper.generateSignedPreKey(id, 1);
            const pk    = keyhelper.generatePreKey(1);
            await store.saveIdentity(id, regId);
            await store.storeSignedPreKey(spk.keyId, spk.keyPair);
            await store.storePreKey(pk.keyId, pk.keyPair);
            return { bundle: { identityKey: id.pubKey, registrationId: regId,
                signedPreKey: { keyId: spk.keyId, publicKey: spk.keyPair.pubKey, signature: spk.signature },
                preKey: { keyId: pk.keyId, publicKey: pk.keyPair.pubKey } } };
        }

        const alice = await setup(aliceStore);
        const bob   = await setup(bobStore);

        await aliceStore.saveTrustedIdentity(bob.bundle.identityKey);
        await bobStore.saveTrustedIdentity(alice.bundle.identityKey);

        const bobAddr   = new lib.ProtocolAddress(`bob-${i}`, 1);
        const aliceAddr = new lib.ProtocolAddress(`alice-${i}`, 1);

        await new lib.SessionBuilder(aliceStore, bobAddr).initOutgoing(bob.bundle);

        const ac = new lib.SessionCipher(aliceStore, bobAddr);
        const bc = new lib.SessionCipher(bobStore,   aliceAddr);

        const init  = await ac.encrypt(Buffer.from('init'));
        await bc.decryptPreKeyWhisperMessage(init.body);
        const reply = await bc.encrypt(Buffer.from('ack'));
        await ac.decryptWhisperMessage(reply.body);

        return { ac, bc };
    }

    console.log(`\n  (building ${CONNECTIONS} sessions...)`);
    const conns = await Promise.all(
        Array.from({ length: CONNECTIONS }, (_, i) => buildConn(i))
    );
    const plain = Buffer.from('concurrent message payload');

    // Simulate: all 100 sessions encrypt a burst of MSG_PER_CONN messages concurrently
    const ITERS = 20;
    const samples = new Array(ITERS);
    for (let w = 0; w < 5; w++) {
        await Promise.all(conns.map(({ ac }) => ac.encrypt(plain)));
    }

    for (let iter = 0; iter < ITERS; iter++) {
        const t0 = performance.now();
        await Promise.all(
            conns.flatMap(({ ac }) =>
                Array.from({ length: MSG_PER_CONN }, () => ac.encrypt(plain))
            )
        );
        samples[iter] = (performance.now() - t0) * 1000;
    }

    samples.sort((a, b) => a - b);
    const total = CONNECTIONS * MSG_PER_CONN;
    console.log(
        `  ${'concurrent encrypt (100 sessions × 5 msgs)'.padEnd(42)} ` +
        `${String(Math.round(total / (percentile(samples, 50) / 1_000_000))).padStart(8)} ops/s  ` +
        `med=${percentile(samples, 50).toFixed(0)}µs(total)  ` +
        `p95=${percentile(samples, 95).toFixed(0)}µs  (n=${ITERS}×${total} ops)`
    );
});

// ─── main ────────────────────────────────────────────────────────────────────

async function main() {
    const filter = process.argv[2] || '';

    console.log('\n╔══════════════════════════════════════════════════════════════════════════════╗');
    console.log('║              libsignal-node  —  performance benchmark                       ║');
    console.log('╚══════════════════════════════════════════════════════════════════════════════╝');
    if (filter) console.log(`\n  filter: "${filter}"`);

    for (const s of SUITES) {
        if (filter && !s.name.includes(filter)) continue;
        await s.fn();
    }

    console.log('\n' + '─'.repeat(80));
    console.log('  done.\n');
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
