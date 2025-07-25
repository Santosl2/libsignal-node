import { cbc, gcm } from "@noble/ciphers/aes";
import { concatBytes } from ".";
import { hmac as nobleHmac } from "@noble/hashes/hmac";
import { sha256 as nobleSha256 } from "@noble/hashes/sha2";

export function randomBytes(size: number): Uint8Array {
  return crypto.getRandomValues(new Uint8Array(size));
}

export function hmacSign(key: Uint8Array, buffer: Uint8Array): Uint8Array {
	const mac = nobleHmac(nobleSha256, key, buffer);
	return mac;
}

export function hkdfSignalDeriveSecrets(
	input: Uint8Array,
	salt: Uint8Array,
	info: Uint8Array,
): [Uint8Array, Uint8Array, Uint8Array] {
	if (salt.length !== 32) {
		throw new Error("HKDF salt must be 32 bytes for Signal derivation");
	}
	const prk = hmacSign(salt, input);

	const info1 = concatBytes(info, new Uint8Array([1]));
	const T1 = hmacSign(prk, info1);

	const info2 = concatBytes(T1, info, new Uint8Array([2]));
	const T2 = hmacSign(prk, info2);

	const info3 = concatBytes(T2, info, new Uint8Array([3]));
	const T3 = hmacSign(prk, info3);

	return [T1, T2, T3];
}


export function aesEncrypt(
	buffer: Uint8Array,
	key: Uint8Array,
	iv = randomBytes(16),
): Uint8Array {
	const cipher = cbc(key, iv);
	const ciphertext = cipher.encrypt(buffer);
	const result = new Uint8Array(iv.length + ciphertext.length);
	result.set(iv, 0);
	result.set(ciphertext, iv.length);
	return result;
}

export function aesDecrypt(
	key: Uint8Array,
	buffer: Uint8Array,
	iv: Uint8Array,
): Uint8Array {
	const cipher = cbc(key, iv);
	const plaintext = cipher.decrypt(buffer);
	return plaintext;
}