'use strict';

const { SessionRecord } = require('../../index');

/**
 * Minimal in-memory Signal storage implementation used by tests.
 *
 * The constructor takes a `name` purely for debugging purposes.
 */
class InMemoryStorage {
    constructor(name) {
        this._name         = name;
        this._identity     = null;          // { pubKey, privKey }
        this._registrationId = null;
        this._sessions     = new Map();     // address string → SessionRecord
        this._preKeys      = new Map();     // keyId → { pubKey, privKey }
        this._signedPreKeys = new Map();    // keyId → { pubKey, privKey }
        this._trustedIdentities = new Set(); // hex-encoded pubKeys we trust
    }

    // ── identity ─────────────────────────────────────────────────────────────

    async saveIdentity(identityKeyPair, registrationId) {
        this._identity       = identityKeyPair;
        this._registrationId = registrationId;
    }

    async getOurIdentity() {
        if (!this._identity) throw new Error('Identity not set');
        return this._identity;
    }

    async getOurRegistrationId() {
        if (this._registrationId == null) throw new Error('Registration ID not set');
        return this._registrationId;
    }

    // ── trusted identities ───────────────────────────────────────────────────

    async saveTrustedIdentity(pubKey) {
        this._trustedIdentities.add(pubKey.toString('hex'));
    }

    async isTrustedIdentity(_id, pubKey) {
        // Trust our own identity unconditionally so outgoing sessions work,
        // and trust any key we have explicitly registered.
        if (this._identity && pubKey.equals(this._identity.pubKey)) return true;
        return this._trustedIdentities.has(pubKey.toString('hex'));
    }

    // ── sessions ─────────────────────────────────────────────────────────────

    async loadSession(address) {
        return this._sessions.get(address) || null;
    }

    async storeSession(address, record) {
        this._sessions.set(address, record);
    }

    // ── pre keys ─────────────────────────────────────────────────────────────

    async storePreKey(keyId, keyPair) {
        this._preKeys.set(keyId, keyPair);
    }

    async loadPreKey(keyId) {
        return this._preKeys.get(keyId) || null;
    }

    async removePreKey(keyId) {
        this._preKeys.delete(keyId);
    }

    // ── signed pre keys ──────────────────────────────────────────────────────

    async storeSignedPreKey(keyId, keyPair) {
        this._signedPreKeys.set(keyId, keyPair);
    }

    async loadSignedPreKey(keyId) {
        return this._signedPreKeys.get(keyId) || null;
    }
}

module.exports = InMemoryStorage;
