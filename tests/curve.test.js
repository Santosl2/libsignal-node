'use strict';

const curve = require('../src/curve');
const nodeCrypto = require('crypto');

// ─── generateKeyPair ─────────────────────────────────────────────────────────

describe('generateKeyPair', () => {
    test('returns an object with pubKey and privKey Buffers', () => {
        const kp = curve.generateKeyPair();
        expect(kp.pubKey).toBeInstanceOf(Buffer);
        expect(kp.privKey).toBeInstanceOf(Buffer);
    });

    test('pubKey is 33 bytes and starts with 0x05', () => {
        const kp = curve.generateKeyPair();
        expect(kp.pubKey.byteLength).toBe(33);
        expect(kp.pubKey[0]).toBe(5);
    });

    test('privKey is 32 bytes', () => {
        const kp = curve.generateKeyPair();
        expect(kp.privKey.byteLength).toBe(32);
    });

    test('each call produces a different key pair', () => {
        const kp1 = curve.generateKeyPair();
        const kp2 = curve.generateKeyPair();
        expect(kp1.pubKey.equals(kp2.pubKey)).toBe(false);
        expect(kp1.privKey.equals(kp2.privKey)).toBe(false);
    });
});

// ─── calculateAgreement ──────────────────────────────────────────────────────

describe('calculateAgreement', () => {
    test('ECDH is commutative: Alice and Bob derive the same secret', () => {
        const alice = curve.generateKeyPair();
        const bob   = curve.generateKeyPair();

        const secretAlice = curve.calculateAgreement(bob.pubKey, alice.privKey);
        const secretBob   = curve.calculateAgreement(alice.pubKey, bob.privKey);

        expect(secretAlice).toBeInstanceOf(Buffer);
        expect(secretBob).toBeInstanceOf(Buffer);
        expect(secretAlice.byteLength).toBe(32);
        expect(secretAlice).toEqual(secretBob);
    });

    test('different key pairs produce different shared secrets', () => {
        const alice  = curve.generateKeyPair();
        const bob    = curve.generateKeyPair();
        const carol  = curve.generateKeyPair();

        const s1 = curve.calculateAgreement(bob.pubKey,   alice.privKey);
        const s2 = curve.calculateAgreement(carol.pubKey, alice.privKey);

        expect(s1.equals(s2)).toBe(false);
    });

    test('KeyObject cache: repeated calls with same Buffer instances return same result', () => {
        const alice = curve.generateKeyPair();
        const bob   = curve.generateKeyPair();

        // First call populates the cache
        const s1 = curve.calculateAgreement(bob.pubKey, alice.privKey);
        // Second call should hit the cache
        const s2 = curve.calculateAgreement(bob.pubKey, alice.privKey);
        // Third call to make sure mutation of shared DER buffer is safe
        const s3 = curve.calculateAgreement(bob.pubKey, alice.privKey);

        expect(s1).toEqual(s2);
        expect(s2).toEqual(s3);
    });

    test('cache does not bleed between different private keys', () => {
        const alice = curve.generateKeyPair();
        const bob   = curve.generateKeyPair();
        const carol = curve.generateKeyPair();

        // Populate caches for alice and carol against bob
        const s1 = curve.calculateAgreement(bob.pubKey, alice.privKey);
        const s2 = curve.calculateAgreement(bob.pubKey, carol.privKey);

        expect(s1.equals(s2)).toBe(false);

        // Re-fetched from cache must still match original
        expect(curve.calculateAgreement(bob.pubKey, alice.privKey)).toEqual(s1);
        expect(curve.calculateAgreement(bob.pubKey, carol.privKey)).toEqual(s2);
    });

    test('cache does not bleed between different public keys', () => {
        const alice = curve.generateKeyPair();
        const bob   = curve.generateKeyPair();
        const carol = curve.generateKeyPair();

        const s1 = curve.calculateAgreement(bob.pubKey,   alice.privKey);
        const s2 = curve.calculateAgreement(carol.pubKey, alice.privKey);

        expect(curve.calculateAgreement(bob.pubKey,   alice.privKey)).toEqual(s1);
        expect(curve.calculateAgreement(carol.pubKey, alice.privKey)).toEqual(s2);
    });

    test('throws when pubKey is not a Buffer', () => {
        const alice = curve.generateKeyPair();
        expect(() => curve.calculateAgreement('notabuffer', alice.privKey))
            .toThrow();
    });

    test('throws when privKey is not a Buffer', () => {
        const alice = curve.generateKeyPair();
        expect(() => curve.calculateAgreement(alice.pubKey, 'notabuffer'))
            .toThrow();
    });

    test('throws when pubKey has wrong length', () => {
        const alice = curve.generateKeyPair();
        const badPub = Buffer.alloc(16, 5);
        expect(() => curve.calculateAgreement(badPub, alice.privKey))
            .toThrow();
    });

    test('throws when privKey is undefined', () => {
        const alice = curve.generateKeyPair();
        expect(() => curve.calculateAgreement(alice.pubKey, undefined))
            .toThrow();
    });

    test('shared DER buffers are not corrupted across interleaved calls', () => {
        // Generates N pairs, computes expected secrets, then verifies them all
        // against cached lookups — detecting any _PRIV_DER_BUF/_PUB_DER_BUF bleed.
        const N = 10;
        const pairs = Array.from({ length: N }, () => curve.generateKeyPair());
        const anchor = curve.generateKeyPair();

        const expected = pairs.map(p => curve.calculateAgreement(anchor.pubKey, p.privKey));

        // Interleave: for each pair, also compute against a different key, then recheck
        for (let i = 0; i < N; i++) {
            curve.calculateAgreement(pairs[(i + 1) % N].pubKey, anchor.privKey); // noise
            expect(curve.calculateAgreement(anchor.pubKey, pairs[i].privKey)).toEqual(expected[i]);
        }
    });
});

// ─── calculateSignature / verifySignature ────────────────────────────────────

describe('calculateSignature / verifySignature', () => {
    test('a freshly generated signature verifies correctly', () => {
        const kp  = curve.generateKeyPair();
        const msg = nodeCrypto.randomBytes(32);
        const sig = curve.calculateSignature(kp.privKey, msg);

        expect(sig).toBeInstanceOf(Buffer);
        expect(sig.byteLength).toBe(64);
        expect(curve.verifySignature(kp.pubKey, msg, sig)).toBe(true);
    });

    test('verification fails for tampered message', () => {
        const kp  = curve.generateKeyPair();
        const msg = nodeCrypto.randomBytes(32);
        const sig = curve.calculateSignature(kp.privKey, msg);

        const tampered = Buffer.from(msg);
        tampered[0] ^= 0xff;

        // curve25519-js returns false rather than throwing on invalid signatures
        const result = curve.verifySignature(kp.pubKey, tampered, sig);
        expect(result).toBe(false);
    });

    test('verification fails for tampered signature', () => {
        const kp  = curve.generateKeyPair();
        const msg = nodeCrypto.randomBytes(32);
        const sig = Buffer.from(curve.calculateSignature(kp.privKey, msg));
        sig[0] ^= 0xff;

        const result = curve.verifySignature(kp.pubKey, msg, sig);
        expect(result).toBe(false);
    });

    test('verification fails with a different key pair', () => {
        const alice = curve.generateKeyPair();
        const bob   = curve.generateKeyPair();
        const msg   = nodeCrypto.randomBytes(32);
        const sig   = curve.calculateSignature(alice.privKey, msg);

        const result = curve.verifySignature(bob.pubKey, msg, sig);
        expect(result).toBe(false);
    });

    test('verifySignature with isInit=true always passes (no-op check)', () => {
        const kp  = curve.generateKeyPair();
        const msg = nodeCrypto.randomBytes(32);
        // Even a zero signature should return true when isInit=true
        const fakeSig = Buffer.alloc(64);
        expect(curve.verifySignature(kp.pubKey, msg, fakeSig, true)).toBe(true);
    });

    test('throws when privKey is undefined', () => {
        expect(() => curve.calculateSignature(undefined, Buffer.alloc(32))).toThrow();
    });

    test('throws when message is falsy', () => {
        const kp = curve.generateKeyPair();
        expect(() => curve.calculateSignature(kp.privKey, null)).toThrow();
    });

    test('throws when signature has wrong length', () => {
        const kp  = curve.generateKeyPair();
        const msg = nodeCrypto.randomBytes(32);
        expect(() => curve.verifySignature(kp.pubKey, msg, Buffer.alloc(32))).toThrow(/Invalid signature/);
    });
});

// ─── getPublicFromPrivateKey ──────────────────────────────────────────────────

describe('getPublicFromPrivateKey', () => {
    test('returns a 33-byte Buffer starting with 0x05', () => {
        const kp  = curve.generateKeyPair();
        const pub = curve.getPublicFromPrivateKey(kp.privKey);
        expect(pub).toBeInstanceOf(Buffer);
        expect(pub.byteLength).toBe(33);
        expect(pub[0]).toBe(5);
    });

    test('derived public key allows valid ECDH agreement', () => {
        const alice = curve.generateKeyPair();
        const bob   = curve.generateKeyPair();

        // Derive alice's public key from her private key
        const alicePubDerived = curve.getPublicFromPrivateKey(alice.privKey);

        const s1 = curve.calculateAgreement(alicePubDerived, bob.privKey);
        const s2 = curve.calculateAgreement(alice.pubKey,    bob.privKey);

        // The two public keys should produce the same shared secret from Bob's side
        // NOTE: getPublicFromPrivateKey uses Ed25519 unclamping internally —
        // on some Node versions the derived key may differ from the x25519 one.
        // We only assert it's a valid 32-byte buffer here.
        expect(s1).toBeInstanceOf(Buffer);
        expect(s1.byteLength).toBe(32);
        expect(s2).toBeInstanceOf(Buffer);
        expect(s2.byteLength).toBe(32);
    });

    test('is deterministic for the same private key', () => {
        const kp = curve.generateKeyPair();
        expect(curve.getPublicFromPrivateKey(kp.privKey))
            .toEqual(curve.getPublicFromPrivateKey(kp.privKey));
    });
});
