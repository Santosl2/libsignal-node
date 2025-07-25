import { SessionRecord } from "./SessionRecord";
import { ChainType } from "./types/ChainType";

export type KeyPair = { publicKey: Uint8Array; privateKey: Uint8Array };

export type SignedKeyPair = {
	keyPair: KeyPair;
	signature: Uint8Array;
	keyId: number;
};

type ProtocolAddress = {
	name: string;
	deviceId: number;
};

export type SignalIdentity = {
	identifier: ProtocolAddress;
	identifierKey: Uint8Array;
};

export interface SignalSessionStorage {
	loadSession(addr: string): Promise<SessionRecord | undefined | null>;
	storeSession(addr: string, record: SessionRecord): Promise<void>;
	getOurIdentity(): Promise<KeyPair>;
	getOurRegistrationId(): Promise<number>;
	isTrustedIdentity(
		identifier: string,
		identityKey: Uint8Array,
		_direction: ChainType,
	): Promise<boolean>;
	removePreKey?(id: number): Promise<void>;
	loadPreKey(keyId: number): Promise<KeyPair | undefined>;
	loadSignedPreKey(keyId: number): Promise<KeyPair | undefined>;
}