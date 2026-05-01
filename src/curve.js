
'use strict';

const curveJs = require('curve25519-js');
const nodeCrypto = require('crypto');
// from: https://github.com/digitalbazaar/x25519-key-agreement-key-2019/blob/master/lib/crypto.js
const PUBLIC_KEY_DER_PREFIX = Buffer.from([
    48, 42, 48, 5, 6, 3, 43, 101, 110, 3, 33, 0
]);
  
const PRIVATE_KEY_DER_PREFIX = Buffer.from([
    48, 46, 2, 1, 0, 48, 5, 6, 3, 43, 101, 110, 4, 34, 4, 32
]);

const KEY_BUNDLE_TYPE = Buffer.from([5]);

// Cached DER buffers reused across calculateAgreement calls to avoid per-call Buffer.concat allocations
const _PRIV_DER_BUF = Buffer.allocUnsafe(PRIVATE_KEY_DER_PREFIX.length + 32);
PRIVATE_KEY_DER_PREFIX.copy(_PRIV_DER_BUF);
const _PUB_DER_BUF = Buffer.allocUnsafe(PUBLIC_KEY_DER_PREFIX.length + 32);
PUBLIC_KEY_DER_PREFIX.copy(_PUB_DER_BUF);

// Symbols used to cache Node.js KeyObject instances directly on Buffer objects,
// so the same privKey/pubKey Buffer instance doesn't trigger redundant DER parsing.
const _PRIV_KEY_OBJ_SYM = Symbol('privKeyObj');
const _PUB_KEY_OBJ_SYM = Symbol('pubKeyObj');

const prefixKeyInPublicKey = function (pubKey) {
  return Buffer.concat([KEY_BUNDLE_TYPE, pubKey]);
};

function validatePrivKey(privKey) {
    if (privKey === undefined) {
        throw new Error("Undefined private key");
    }
    if (!(privKey instanceof Buffer)) {
        throw new Error(`Invalid private key type: ${privKey.constructor.name}`);
    }
    if (privKey.byteLength != 32) {
        throw new Error(`Incorrect private key length: ${privKey.byteLength}`);
    }
}

function scrubPubKeyFormat(pubKey) {
    if (!(pubKey instanceof Buffer)) {
        throw new Error(`Invalid public key type: ${pubKey.constructor.name}`);
    }
    if (pubKey === undefined || ((pubKey.byteLength != 33 || pubKey[0] != 5) && pubKey.byteLength != 32)) {
        throw new Error("Invalid public key");
    }
    if (pubKey.byteLength == 33) {
        return pubKey.subarray(1);
    } else {
        console.error("WARNING: Expected pubkey of length 33, please report the ST and client that generated the pubkey");
        return pubKey;
    }
}

function unclampEd25519PrivateKey(clampedSk) {
    const unclampedSk = new Uint8Array(clampedSk);

    // Fix the first byte
    unclampedSk[0] |= 6; // Ensure last 3 bits match expected `110` pattern

    // Fix the last byte
    unclampedSk[31] |= 128; // Restore the highest bit
    unclampedSk[31] &= ~64; // Clear the second-highest bit

    return unclampedSk;
}

exports.getPublicFromPrivateKey = function(privKey) {
    const unclampedPK = unclampEd25519PrivateKey(privKey);
    const keyPair = curveJs.generateKeyPair(unclampedPK);
    return prefixKeyInPublicKey(Buffer.from(keyPair.public));
};

exports.generateKeyPair = function() {
    try {
        const {publicKey: publicDerBytes, privateKey: privateDerBytes} = nodeCrypto.generateKeyPairSync(
            'x25519',
            {
                publicKeyEncoding: { format: 'der', type: 'spki' },
                privateKeyEncoding: { format: 'der', type: 'pkcs8' }
            }
        );
        const pubKey = publicDerBytes.subarray(PUBLIC_KEY_DER_PREFIX.length, PUBLIC_KEY_DER_PREFIX.length + 32);
    
        const privKey = privateDerBytes.subarray(PRIVATE_KEY_DER_PREFIX.length, PRIVATE_KEY_DER_PREFIX.length + 32);
    
        return {
            pubKey: prefixKeyInPublicKey(pubKey),
            privKey
        };
    } catch(e) {
        const keyPair = curveJs.generateKeyPair(nodeCrypto.randomBytes(32));
        return {
            privKey: Buffer.from(keyPair.private),
            pubKey: prefixKeyInPublicKey(Buffer.from(keyPair.public)),
        };
    }
};

exports.calculateAgreement = function(pubKey, privKey) {
    const origPubKey = pubKey;
    pubKey = scrubPubKeyFormat(pubKey);
    validatePrivKey(privKey);
    if (!pubKey || pubKey.byteLength != 32) {
        throw new Error("Invalid public key");
    }

    if(typeof nodeCrypto.diffieHellman === 'function') {
        // Cache KeyObjects on the Buffer instances via Symbols to avoid
        // redundant DER parsing on repeated calls with the same key object.
        let nodePrivateKey = privKey[_PRIV_KEY_OBJ_SYM];
        if (!nodePrivateKey) {
            privKey.copy(_PRIV_DER_BUF, PRIVATE_KEY_DER_PREFIX.length);
            nodePrivateKey = nodeCrypto.createPrivateKey({ key: _PRIV_DER_BUF, format: 'der', type: 'pkcs8' });
            privKey[_PRIV_KEY_OBJ_SYM] = nodePrivateKey;
        }
        let nodePublicKey = origPubKey[_PUB_KEY_OBJ_SYM];
        if (!nodePublicKey) {
            pubKey.copy(_PUB_DER_BUF, PUBLIC_KEY_DER_PREFIX.length);
            nodePublicKey = nodeCrypto.createPublicKey({ key: _PUB_DER_BUF, format: 'der', type: 'spki' });
            origPubKey[_PUB_KEY_OBJ_SYM] = nodePublicKey;
        }
        
        return nodeCrypto.diffieHellman({
            privateKey: nodePrivateKey,
            publicKey: nodePublicKey,
        });
    } else {
        const secret = curveJs.sharedKey(privKey, pubKey);
        return Buffer.from(secret);
    }
};

exports.calculateSignature = function(privKey, message) {
    validatePrivKey(privKey);
    if (!message) {
        throw new Error("Invalid message");
    }
    return Buffer.from(curveJs.sign(privKey, message));
};

exports.verifySignature = function(pubKey, msg, sig, isInit) {
    pubKey = scrubPubKeyFormat(pubKey);
    if (!pubKey || pubKey.byteLength != 32) {
        throw new Error("Invalid public key");
    }
    if (!msg) {
        throw new Error("Invalid message");
    }
    if (!sig || sig.byteLength != 64) {
        throw new Error("Invalid signature");
    }
    return isInit ? true : curveJs.verify(pubKey, msg, sig);
};
