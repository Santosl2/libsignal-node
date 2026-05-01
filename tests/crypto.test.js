'use strict';

const crypto = require('../src/crypto');
const nodeCrypto = require('crypto');

// ─── helpers ─────────────────────────────────────────────────────────────────

function randomBuf(size) {
    return nodeCrypto.randomBytes(size);
}

function zeroSalt() {
    return Buffer.alloc(32);
}

// ─── encrypt / decrypt ───────────────────────────────────────────────────────

describe('encrypt / decrypt', () => {
    test('round-trip returns original plaintext', () => {
        const key = randomBuf(32);
        const iv  = randomBuf(16);
        const plaintext = Buffer.from('hello world');

        const ciphertext = crypto.encrypt(key, plaintext, iv);
        const recovered  = crypto.decrypt(key, ciphertext, iv);

        expect(recovered).toEqual(plaintext);
    });

    test('produces different output for different IVs', () => {
        const key = randomBuf(32);
        const iv1 = randomBuf(16);
        const iv2 = randomBuf(16);
        const plaintext = Buffer.from('same plaintext');

        const c1 = crypto.encrypt(key, plaintext, iv1);
        const c2 = crypto.encrypt(key, plaintext, iv2);

        expect(c1.equals(c2)).toBe(false);
    });

    test('throws when key is not a Buffer', () => {
        expect(() => crypto.encrypt('string', randomBuf(16), randomBuf(16)))
            .toThrow(TypeError);
    });

    test('throws when data is not a Buffer', () => {
        expect(() => crypto.encrypt(randomBuf(32), 'string', randomBuf(16)))
            .toThrow(TypeError);
    });

    test('throws when iv is not a Buffer', () => {
        expect(() => crypto.encrypt(randomBuf(32), randomBuf(16), 'string'))
            .toThrow(TypeError);
    });

    test('decrypt throws on tampered ciphertext', () => {
        const key = randomBuf(32);
        const iv  = randomBuf(16);
        const ct  = crypto.encrypt(key, Buffer.from('data'), iv);
        ct[0] ^= 0xff;
        expect(() => crypto.decrypt(key, ct, iv)).toThrow();
    });
});

// ─── calculateMAC ────────────────────────────────────────────────────────────

describe('calculateMAC', () => {
    test('produces a 32-byte Buffer', () => {
        const mac = crypto.calculateMAC(randomBuf(32), randomBuf(64));
        expect(mac).toBeInstanceOf(Buffer);
        expect(mac.byteLength).toBe(32);
    });

    test('is deterministic for the same inputs', () => {
        const key  = randomBuf(32);
        const data = randomBuf(64);
        expect(crypto.calculateMAC(key, data)).toEqual(crypto.calculateMAC(key, data));
    });

    test('changes when key changes', () => {
        const data = randomBuf(64);
        const m1 = crypto.calculateMAC(randomBuf(32), data);
        const m2 = crypto.calculateMAC(randomBuf(32), data);
        expect(m1.equals(m2)).toBe(false);
    });

    test('matches Node.js HMAC-SHA256 known output', () => {
        const key  = Buffer.alloc(32, 0xaa);
        const data = Buffer.from('test data');
        const expected = nodeCrypto.createHmac('sha256', key).update(data).digest();
        expect(crypto.calculateMAC(key, data)).toEqual(Buffer.from(expected));
    });

    test('throws when key is not a Buffer', () => {
        expect(() => crypto.calculateMAC('key', randomBuf(16))).toThrow(TypeError);
    });
});

// ─── hash ────────────────────────────────────────────────────────────────────

describe('hash', () => {
    test('produces a 64-byte Buffer', () => {
        const h = crypto.hash(randomBuf(32));
        expect(h).toBeInstanceOf(Buffer);
        expect(h.byteLength).toBe(64);
    });

    test('is deterministic', () => {
        const data = randomBuf(64);
        expect(crypto.hash(data)).toEqual(crypto.hash(data));
    });

    test('matches Node.js SHA-512 known output', () => {
        const data = Buffer.from('signal');
        const expected = nodeCrypto.createHash('sha512').update(data).digest();
        expect(crypto.hash(data)).toEqual(Buffer.from(expected));
    });

    test('throws when data is not a Buffer', () => {
        expect(() => crypto.hash('string')).toThrow(TypeError);
    });
});

// ─── verifyMAC ───────────────────────────────────────────────────────────────

describe('verifyMAC', () => {
    function makeMAC(key, data, length) {
        return crypto.calculateMAC(key, data).subarray(0, length);
    }

    test('does not throw when MAC is correct', () => {
        const key  = randomBuf(32);
        const data = randomBuf(64);
        const mac  = makeMAC(key, data, 8);
        expect(() => crypto.verifyMAC(data, key, mac, 8)).not.toThrow();
    });

    test('throws on tampered data', () => {
        const key     = randomBuf(32);
        const data    = randomBuf(64);
        const mac     = makeMAC(key, data, 8);
        const tampered = Buffer.from(data);
        tampered[0] ^= 0xff;
        expect(() => crypto.verifyMAC(tampered, key, mac, 8)).toThrow(/Bad MAC/);
    });

    test('throws on tampered MAC', () => {
        const key  = randomBuf(32);
        const data = randomBuf(64);
        const mac  = makeMAC(key, data, 8);
        mac[0] ^= 0xff;
        expect(() => crypto.verifyMAC(data, key, mac, 8)).toThrow(/Bad MAC/);
    });

    test('throws when provided mac has wrong length', () => {
        const key  = randomBuf(32);
        const data = randomBuf(64);
        const mac  = makeMAC(key, data, 6); // 6 bytes, but we claim 8
        expect(() => crypto.verifyMAC(data, key, mac, 8)).toThrow(/Bad MAC length/);
    });
});

// ─── deriveSecrets ───────────────────────────────────────────────────────────

describe('deriveSecrets', () => {
    const INFO_A = Buffer.from('WhisperMessageKeys');
    const INFO_B = Buffer.from('WhisperRatchet');

    test('returns 3 chunks by default, each 32 bytes', () => {
        const result = crypto.deriveSecrets(randomBuf(32), zeroSalt(), INFO_A);
        expect(result).toHaveLength(3);
        result.forEach(chunk => {
            expect(chunk).toBeInstanceOf(Buffer);
            expect(chunk.byteLength).toBe(32);
        });
    });

    test('returns 1 chunk when chunks=1', () => {
        const result = crypto.deriveSecrets(randomBuf(32), zeroSalt(), INFO_A, 1);
        expect(result).toHaveLength(1);
    });

    test('returns 2 chunks when chunks=2', () => {
        const result = crypto.deriveSecrets(randomBuf(32), zeroSalt(), INFO_A, 2);
        expect(result).toHaveLength(2);
    });

    test('is deterministic for the same inputs', () => {
        const input = randomBuf(32);
        const r1 = crypto.deriveSecrets(input, zeroSalt(), INFO_A);
        const r2 = crypto.deriveSecrets(input, zeroSalt(), INFO_A);
        expect(r1[0]).toEqual(r2[0]);
        expect(r1[1]).toEqual(r2[1]);
        expect(r1[2]).toEqual(r2[2]);
    });

    test('all 3 chunks are distinct', () => {
        const result = crypto.deriveSecrets(randomBuf(32), zeroSalt(), INFO_A);
        expect(result[0].equals(result[1])).toBe(false);
        expect(result[1].equals(result[2])).toBe(false);
    });

    test('different info buffers produce different output (WeakMap key isolation)', () => {
        const input = randomBuf(32);
        const r1 = crypto.deriveSecrets(input, zeroSalt(), INFO_A);
        const r2 = crypto.deriveSecrets(input, zeroSalt(), INFO_B);
        expect(r1[0].equals(r2[0])).toBe(false);
    });

    test('different inputs produce different output', () => {
        const r1 = crypto.deriveSecrets(randomBuf(32), zeroSalt(), INFO_A);
        const r2 = crypto.deriveSecrets(randomBuf(32), zeroSalt(), INFO_A);
        expect(r1[0].equals(r2[0])).toBe(false);
    });

    test('throws when salt is not 32 bytes', () => {
        expect(() => crypto.deriveSecrets(randomBuf(32), Buffer.alloc(16), INFO_A))
            .toThrow('Got salt of incorrect length');
    });

    test('throws when input is not a Buffer', () => {
        expect(() => crypto.deriveSecrets('string', zeroSalt(), INFO_A))
            .toThrow(TypeError);
    });

    test('chunk=1 result equals first element of chunk=3 result (HKDF prefix consistency)', () => {
        const input = randomBuf(32);
        const r1 = crypto.deriveSecrets(input, zeroSalt(), INFO_A, 1);
        const r3 = crypto.deriveSecrets(input, zeroSalt(), INFO_A, 3);
        expect(r1[0]).toEqual(r3[0]);
    });

    test('chunk=2 results equal first two elements of chunk=3 result', () => {
        const input = randomBuf(32);
        const r2 = crypto.deriveSecrets(input, zeroSalt(), INFO_A, 2);
        const r3 = crypto.deriveSecrets(input, zeroSalt(), INFO_A, 3);
        expect(r2[0]).toEqual(r3[0]);
        expect(r2[1]).toEqual(r3[1]);
    });

    // ── WeakMap / infoArray mutation safety ────────────────────────────────
    // The infoArray is cached per info Buffer instance and mutated in-place
    // during HKDF expansion. These tests verify that concurrent-style calls
    // with the same info Buffer do not corrupt each other.

    test('back-to-back calls with the same info Buffer return consistent results', () => {
        const input = randomBuf(32);
        const N = 50;
        const results = Array.from({ length: N }, () =>
            crypto.deriveSecrets(input, zeroSalt(), INFO_A)
        );
        for (let i = 1; i < N; i++) {
            expect(results[i][0]).toEqual(results[0][0]);
            expect(results[i][1]).toEqual(results[0][1]);
            expect(results[i][2]).toEqual(results[0][2]);
        }
    });

    test('alternating calls with two different info Buffers remain isolated', () => {
        const input = randomBuf(32);
        const refA = crypto.deriveSecrets(input, zeroSalt(), INFO_A);
        const refB = crypto.deriveSecrets(input, zeroSalt(), INFO_B);

        for (let i = 0; i < 20; i++) {
            const rA = crypto.deriveSecrets(input, zeroSalt(), INFO_A);
            const rB = crypto.deriveSecrets(input, zeroSalt(), INFO_B);
            expect(rA[0]).toEqual(refA[0]);
            expect(rB[0]).toEqual(refB[0]);
            expect(rA[0].equals(rB[0])).toBe(false);
        }
    });
});
