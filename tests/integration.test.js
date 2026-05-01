'use strict';

/**
 * Full end-to-end integration tests for the Signal session protocol.
 *
 * Each test operates on a fresh pair of in-memory stores (Alice / Bob) so
 * there is no shared state between tests.
 */

const { SessionBuilder, SessionCipher, SessionRecord, ProtocolAddress } = require('../index');
const keyhelper = require('./helpers/keyhelper');
const InMemoryStorage = require('./helpers/InMemoryStorage');

// ─── helpers ─────────────────────────────────────────────────────────────────

/**
 * Builds a full prekey bundle for a participant and registers everything in
 * their storage.  Returns the device descriptor that the other side needs to
 * call initOutgoing().
 */
async function setupParticipant(storage) {
    const identityKey      = keyhelper.generateIdentityKeyPair();
    const registrationId   = keyhelper.generateRegistrationId();
    const signedPreKey     = keyhelper.generateSignedPreKey(identityKey, 1);
    const preKey           = keyhelper.generatePreKey(1);

    await storage.saveIdentity(identityKey, registrationId);
    await storage.storeSignedPreKey(signedPreKey.keyId, signedPreKey.keyPair);
    await storage.storePreKey(preKey.keyId, preKey.keyPair);

    /** The bundle the other side uses to initiate a session */
    const bundle = {
        identityKey: identityKey.pubKey,
        registrationId,
        signedPreKey: {
            keyId:     signedPreKey.keyId,
            publicKey: signedPreKey.keyPair.pubKey,
            signature: signedPreKey.signature
        },
        preKey: {
            keyId:     preKey.keyId,
            publicKey: preKey.keyPair.pubKey
        }
    };

    return { storage, identityKey, bundle };
}

// ─── PreKeyWhisperMessage flow ────────────────────────────────────────────────

describe('PreKeyWhisperMessage (session establishment)', () => {
    test('Alice encrypts → Bob decrypts and recovers plaintext', async () => {
        const aliceStore = new InMemoryStorage('alice');
        const bobStore   = new InMemoryStorage('bob');

        const alice = await setupParticipant(aliceStore);
        const bob   = await setupParticipant(bobStore);

        // Alice trusts Bob's identity and initiates
        await aliceStore.saveTrustedIdentity(bob.bundle.identityKey);
        const bobAddr    = new ProtocolAddress('bob', 1);
        const aliceBuilder = new SessionBuilder(aliceStore, bobAddr);
        await aliceBuilder.initOutgoing(bob.bundle);

        const aliceCipher = new SessionCipher(aliceStore, bobAddr);
        const plaintext   = Buffer.from('hello bob');
        const ciphertext  = await aliceCipher.encrypt(plaintext);

        expect(ciphertext.type).toBe(3); // PreKeyWhisperMessage

        // Bob receives and decrypts
        await bobStore.saveTrustedIdentity(alice.bundle.identityKey);
        const aliceAddr  = new ProtocolAddress('alice', 1);
        const bobCipher  = new SessionCipher(bobStore, aliceAddr);
        const decrypted  = await bobCipher.decryptPreKeyWhisperMessage(ciphertext.body);

        expect(decrypted).toEqual(plaintext);
    });

    test('decryption fails when message is tampered', async () => {
        const aliceStore = new InMemoryStorage('alice');
        const bobStore   = new InMemoryStorage('bob');

        const alice = await setupParticipant(aliceStore);
        const bob   = await setupParticipant(bobStore);

        await aliceStore.saveTrustedIdentity(bob.bundle.identityKey);
        const bobAddr = new ProtocolAddress('bob', 1);
        await new SessionBuilder(aliceStore, bobAddr).initOutgoing(bob.bundle);

        const cipher     = new SessionCipher(aliceStore, bobAddr);
        const ciphertext = await cipher.encrypt(Buffer.from('tamper me'));

        // Flip a byte deep in the body
        ciphertext.body[ciphertext.body.length - 10] ^= 0xff;

        await bobStore.saveTrustedIdentity(alice.bundle.identityKey);
        const bobCipher = new SessionCipher(bobStore, new ProtocolAddress('alice', 1));
        await expect(bobCipher.decryptPreKeyWhisperMessage(ciphertext.body))
            .rejects.toThrow();
    });
});

// ─── Established session (WhisperMessage) ────────────────────────────────────

describe('WhisperMessage (after session is established)', () => {
    async function buildEstablishedSession() {
        const aliceStore = new InMemoryStorage('alice');
        const bobStore   = new InMemoryStorage('bob');

        const alice = await setupParticipant(aliceStore);
        const bob   = await setupParticipant(bobStore);

        await aliceStore.saveTrustedIdentity(bob.bundle.identityKey);
        await bobStore.saveTrustedIdentity(alice.bundle.identityKey);

        const bobAddr   = new ProtocolAddress('bob', 1);
        const aliceAddr = new ProtocolAddress('alice', 1);

        await new SessionBuilder(aliceStore, bobAddr).initOutgoing(bob.bundle);

        const aliceCipher = new SessionCipher(aliceStore, bobAddr);
        const bobCipher   = new SessionCipher(bobStore,   aliceAddr);

        // First message establishes the session on Bob's side (type 3)
        const firstMsg  = await aliceCipher.encrypt(Buffer.from('hello'));
        await bobCipher.decryptPreKeyWhisperMessage(firstMsg.body);

        // Bob replies so Alice can clear her pendingPreKey and enter WhisperMessage mode
        const bobReply = await bobCipher.encrypt(Buffer.from('hi alice'));
        await aliceCipher.decryptWhisperMessage(bobReply.body);

        return { aliceCipher, bobCipher, aliceStore, bobStore };
    }

    test('subsequent Alice→Bob messages use type=1 (WhisperMessage)', async () => {
        const { aliceCipher } = await buildEstablishedSession();
        const msg = await aliceCipher.encrypt(Buffer.from('second message'));
        expect(msg.type).toBe(1);
    });

    test('multiple messages encrypt/decrypt correctly in sequence', async () => {
        const { aliceCipher, bobCipher } = await buildEstablishedSession();

        const messages = ['one', 'two', 'three', 'four', 'five'];
        for (const text of messages) {
            const enc = await aliceCipher.encrypt(Buffer.from(text));
            const dec = await bobCipher.decryptWhisperMessage(enc.body);
            expect(dec).toEqual(Buffer.from(text));
        }
    });

    test('bidirectional messaging works after session establishment', async () => {
        const { aliceCipher, bobCipher } = await buildEstablishedSession();

        // Alice → Bob
        const c1 = await aliceCipher.encrypt(Buffer.from('ping'));
        expect(await bobCipher.decryptWhisperMessage(c1.body)).toEqual(Buffer.from('ping'));

        // Bob → Alice
        const c2 = await bobCipher.encrypt(Buffer.from('pong'));
        expect(await aliceCipher.decryptWhisperMessage(c2.body)).toEqual(Buffer.from('pong'));

        // Alice → Bob again (ratchet has stepped)
        const c3 = await aliceCipher.encrypt(Buffer.from('ping2'));
        expect(await bobCipher.decryptWhisperMessage(c3.body)).toEqual(Buffer.from('ping2'));
    });

    test('hasOpenSession returns true after establishment', async () => {
        const { aliceCipher } = await buildEstablishedSession();
        expect(await aliceCipher.hasOpenSession()).toBe(true);
    });

    test('hasOpenSession returns false before any session is created', async () => {
        const store  = new InMemoryStorage('nobody');
        const id     = keyhelper.generateIdentityKeyPair();
        await store.saveIdentity(id, 1);
        const cipher = new SessionCipher(store, new ProtocolAddress('ghost', 1));
        expect(await cipher.hasOpenSession()).toBe(false);
    });

    test('closeOpenSession makes hasOpenSession return false', async () => {
        const { aliceCipher } = await buildEstablishedSession();
        await aliceCipher.closeOpenSession();
        expect(await aliceCipher.hasOpenSession()).toBe(false);
    });
});

// ─── Large message burst (stress / ratchet correctness) ──────────────────────

describe('Ratchet stress', () => {
    test('50 sequential Alice→Bob messages all decrypt correctly', async () => {
        const aliceStore = new InMemoryStorage('alice');
        const bobStore   = new InMemoryStorage('bob');

        const alice = await setupParticipant(aliceStore);
        const bob   = await setupParticipant(bobStore);

        await aliceStore.saveTrustedIdentity(bob.bundle.identityKey);
        await bobStore.saveTrustedIdentity(alice.bundle.identityKey);

        const bobAddr   = new ProtocolAddress('bob', 1);
        const aliceAddr = new ProtocolAddress('alice', 1);

        await new SessionBuilder(aliceStore, bobAddr).initOutgoing(bob.bundle);

        const aliceCipher = new SessionCipher(aliceStore, bobAddr);
        const bobCipher   = new SessionCipher(bobStore, aliceAddr);

        // Establish: Alice sends PreKeyWhisperMessage, Bob decrypts
        const init = await aliceCipher.encrypt(Buffer.from('init'));
        await bobCipher.decryptPreKeyWhisperMessage(init.body);

        // Bob replies so Alice clears pendingPreKey → subsequent encryptions are type 1
        const bobReply = await bobCipher.encrypt(Buffer.from('ack'));
        await aliceCipher.decryptWhisperMessage(bobReply.body);

        // Burst
        for (let i = 0; i < 50; i++) {
            const plain = Buffer.from(`message-${i}`);
            const enc   = await aliceCipher.encrypt(plain);
            const dec   = await bobCipher.decryptWhisperMessage(enc.body);
            expect(dec).toEqual(plain);
        }
    });
});
