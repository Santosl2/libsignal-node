export * from './Mutex'
export {
	bytesToHex,
	bytesToUtf8,
	concatBytes,
	equalBytes,
	utf8ToBytes,
	hexToBytes,
} from "@noble/ciphers/utils";

export const bytesToBase64 = (bytes: Uint8Array): string => {
	return btoa(String.fromCharCode(...bytes));
};