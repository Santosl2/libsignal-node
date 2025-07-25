import { GenFile, GenMessage, GenEnum } from '@bufbuild/protobuf/codegenv2';
import { Message as Message$1 } from '@bufbuild/protobuf';

/**
 * Describes the file SignalSession.proto.
 */
declare const file_SignalSession: GenFile;
/**
 * Represents KeyPair from utils/src/types.ts
 *
 * @generated from message libsignal.signal.ProtoKeyPair
 */
type ProtoKeyPair = Message$1<"libsignal.signal.ProtoKeyPair"> & {
    /**
     * @generated from field: bytes public_key = 1;
     */
    publicKey: Uint8Array;
    /**
     * @generated from field: bytes private_key = 2;
     */
    privateKey: Uint8Array;
};
/**
 * Describes the message libsignal.signal.ProtoKeyPair.
 * Use `create(ProtoKeyPairSchema)` to create a new message.
 */
declare const ProtoKeyPairSchema: GenMessage<ProtoKeyPair>;
/**
 * Represents CurrentRatchet within SessionEntry
 *
 * @generated from message libsignal.signal.ProtoCurrentRatchet
 */
type ProtoCurrentRatchet = Message$1<"libsignal.signal.ProtoCurrentRatchet"> & {
    /**
     * @generated from field: libsignal.signal.ProtoKeyPair ephemeral_key_pair = 1;
     */
    ephemeralKeyPair?: ProtoKeyPair;
    /**
     * @generated from field: bytes last_remote_ephemeral_key = 2;
     */
    lastRemoteEphemeralKey: Uint8Array;
    /**
     * @generated from field: uint32 previous_counter = 3;
     */
    previousCounter: number;
    /**
     * @generated from field: bytes root_key = 4;
     */
    rootKey: Uint8Array;
};
/**
 * Describes the message libsignal.signal.ProtoCurrentRatchet.
 * Use `create(ProtoCurrentRatchetSchema)` to create a new message.
 */
declare const ProtoCurrentRatchetSchema: GenMessage<ProtoCurrentRatchet>;
/**
 * Represents IndexInfo within SessionEntry
 *
 * @generated from message libsignal.signal.ProtoIndexInfo
 */
type ProtoIndexInfo = Message$1<"libsignal.signal.ProtoIndexInfo"> & {
    /**
     * @generated from field: bytes base_key = 1;
     */
    baseKey: Uint8Array;
    /**
     * @generated from field: libsignal.signal.ProtoBaseKeyType base_key_type = 2;
     */
    baseKeyType: ProtoBaseKeyType;
    /**
     * Using sint64 for potential -1 value and timestamps
     *
     * @generated from field: sint64 closed = 3;
     */
    closed: bigint;
    /**
     * Using sint64 for timestamps
     *
     * @generated from field: sint64 used = 4;
     */
    used: bigint;
    /**
     * Using sint64 for timestamps
     *
     * @generated from field: sint64 created = 5;
     */
    created: bigint;
    /**
     * @generated from field: bytes remote_identity_key = 6;
     */
    remoteIdentityKey: Uint8Array;
};
/**
 * Describes the message libsignal.signal.ProtoIndexInfo.
 * Use `create(ProtoIndexInfoSchema)` to create a new message.
 */
declare const ProtoIndexInfoSchema: GenMessage<ProtoIndexInfo>;
/**
 * Represents PendingPreKey within SessionEntry
 *
 * @generated from message libsignal.signal.ProtoPendingPreKey
 */
type ProtoPendingPreKey = Message$1<"libsignal.signal.ProtoPendingPreKey"> & {
    /**
     * @generated from field: uint32 signed_key_id = 1;
     */
    signedKeyId: number;
    /**
     * @generated from field: bytes base_key = 2;
     */
    baseKey: Uint8Array;
    /**
     * Note: The dynamic [key: string]: unknown part from the original
     *       is omitted as it doesn't map well to Protobuf directly.
     *       If needed, a map<string, google.protobuf.Value> could be used,
     *       but adds complexity. Assumed not essential for core function here.
     *
     * @generated from field: optional uint32 pre_key_id = 3;
     */
    preKeyId?: number;
};
/**
 * Describes the message libsignal.signal.ProtoPendingPreKey.
 * Use `create(ProtoPendingPreKeySchema)` to create a new message.
 */
declare const ProtoPendingPreKeySchema: GenMessage<ProtoPendingPreKey>;
/**
 * Represents ChainKey within Chain
 *
 * @generated from message libsignal.signal.ProtoChainKey
 */
type ProtoChainKey = Message$1<"libsignal.signal.ProtoChainKey"> & {
    /**
     * Can be -1
     *
     * @generated from field: sint32 counter = 1;
     */
    counter: number;
    /**
     * Represents nullable key
     *
     * @generated from field: optional bytes key = 2;
     */
    key?: Uint8Array;
};
/**
 * Describes the message libsignal.signal.ProtoChainKey.
 * Use `create(ProtoChainKeySchema)` to create a new message.
 */
declare const ProtoChainKeySchema: GenMessage<ProtoChainKey>;
/**
 * Represents Chain within SessionEntry._chains map value
 *
 * @generated from message libsignal.signal.ProtoChain
 */
type ProtoChain = Message$1<"libsignal.signal.ProtoChain"> & {
    /**
     * @generated from field: libsignal.signal.ProtoChainKey chain_key = 1;
     */
    chainKey?: ProtoChainKey;
    /**
     * @generated from field: libsignal.signal.ProtoChainType chain_type = 2;
     */
    chainType: ProtoChainType;
    /**
     * Key is message number (counter)
     *
     * @generated from field: map<sint32, bytes> message_keys = 3;
     */
    messageKeys: {
        [key: number]: Uint8Array;
    };
};
/**
 * Describes the message libsignal.signal.ProtoChain.
 * Use `create(ProtoChainSchema)` to create a new message.
 */
declare const ProtoChainSchema: GenMessage<ProtoChain>;
/**
 * Represents SessionEntry class
 *
 * @generated from message libsignal.signal.ProtoSessionEntry
 */
type ProtoSessionEntry = Message$1<"libsignal.signal.ProtoSessionEntry"> & {
    /**
     * @generated from field: optional uint32 registration_id = 1;
     */
    registrationId?: number;
    /**
     * @generated from field: libsignal.signal.ProtoCurrentRatchet current_ratchet = 2;
     */
    currentRatchet?: ProtoCurrentRatchet;
    /**
     * @generated from field: libsignal.signal.ProtoIndexInfo index_info = 3;
     */
    indexInfo?: ProtoIndexInfo;
    /**
     * @generated from field: optional libsignal.signal.ProtoPendingPreKey pending_pre_key = 4;
     */
    pendingPreKey?: ProtoPendingPreKey;
    /**
     * Key is ephemeral public key bytes
     *
     * @generated from field: map<string, libsignal.signal.ProtoChain> chains = 5;
     */
    chains: {
        [key: string]: ProtoChain;
    };
};
/**
 * Describes the message libsignal.signal.ProtoSessionEntry.
 * Use `create(ProtoSessionEntrySchema)` to create a new message.
 */
declare const ProtoSessionEntrySchema: GenMessage<ProtoSessionEntry>;
/**
 * Represents SessionRecord class
 *
 * @generated from message libsignal.signal.ProtoSessionRecord
 */
type ProtoSessionRecord = Message$1<"libsignal.signal.ProtoSessionRecord"> & {
    /**
     * Key is base key bytes
     *
     * @generated from field: map<string, libsignal.signal.ProtoSessionEntry> sessions = 1;
     */
    sessions: {
        [key: string]: ProtoSessionEntry;
    };
    /**
     * Keep for potential future protobuf-level migrations
     *
     * @generated from field: string version = 2;
     */
    version: string;
};
/**
 * Describes the message libsignal.signal.ProtoSessionRecord.
 * Use `create(ProtoSessionRecordSchema)` to create a new message.
 */
declare const ProtoSessionRecordSchema: GenMessage<ProtoSessionRecord>;
/**
 * Corresponds to BaseKeyType enum in base_key_type.ts
 *
 * @generated from enum libsignal.signal.ProtoBaseKeyType
 */
declare enum ProtoBaseKeyType {
    /**
     * @generated from enum value: PROTO_BASE_KEY_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROTO_BASE_KEY_TYPE_OURS = 1;
     */
    OURS = 1,
    /**
     * @generated from enum value: PROTO_BASE_KEY_TYPE_THEIRS = 2;
     */
    THEIRS = 2
}
/**
 * Describes the enum libsignal.signal.ProtoBaseKeyType.
 */
declare const ProtoBaseKeyTypeSchema: GenEnum<ProtoBaseKeyType>;
/**
 * Corresponds to ChainType enum in chain_type.ts
 *
 * @generated from enum libsignal.signal.ProtoChainType
 */
declare enum ProtoChainType {
    /**
     * @generated from enum value: PROTO_CHAIN_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROTO_CHAIN_TYPE_SENDING = 1;
     */
    SENDING = 1,
    /**
     * @generated from enum value: PROTO_CHAIN_TYPE_RECEIVING = 2;
     */
    RECEIVING = 2
}
/**
 * Describes the enum libsignal.signal.ProtoChainType.
 */
declare const ProtoChainTypeSchema: GenEnum<ProtoChainType>;

/**
 * Describes the file Whatsapp.proto.
 */
declare const file_Whatsapp: GenFile;
/**
 * @generated from message ADVDeviceIdentity
 */
type ADVDeviceIdentity = Message$1<"ADVDeviceIdentity"> & {
    /**
     * @generated from field: optional uint32 rawId = 1;
     */
    rawId: number;
    /**
     * @generated from field: optional uint64 timestamp = 2;
     */
    timestamp: bigint;
    /**
     * @generated from field: optional uint32 keyIndex = 3;
     */
    keyIndex: number;
    /**
     * @generated from field: optional ADVEncryptionType accountType = 4;
     */
    accountType: ADVEncryptionType;
    /**
     * @generated from field: optional ADVEncryptionType deviceType = 5;
     */
    deviceType: ADVEncryptionType;
};
/**
 * Describes the message ADVDeviceIdentity.
 * Use `create(ADVDeviceIdentitySchema)` to create a new message.
 */
declare const ADVDeviceIdentitySchema: GenMessage<ADVDeviceIdentity>;
/**
 * @generated from message ADVKeyIndexList
 */
type ADVKeyIndexList = Message$1<"ADVKeyIndexList"> & {
    /**
     * @generated from field: optional uint32 rawId = 1;
     */
    rawId: number;
    /**
     * @generated from field: optional uint64 timestamp = 2;
     */
    timestamp: bigint;
    /**
     * @generated from field: optional uint32 currentIndex = 3;
     */
    currentIndex: number;
    /**
     * @generated from field: repeated uint32 validIndexes = 4 [packed = true];
     */
    validIndexes: number[];
    /**
     * @generated from field: optional ADVEncryptionType accountType = 5;
     */
    accountType: ADVEncryptionType;
};
/**
 * Describes the message ADVKeyIndexList.
 * Use `create(ADVKeyIndexListSchema)` to create a new message.
 */
declare const ADVKeyIndexListSchema: GenMessage<ADVKeyIndexList>;
/**
 * @generated from message ADVSignedDeviceIdentity
 */
type ADVSignedDeviceIdentity = Message$1<"ADVSignedDeviceIdentity"> & {
    /**
     * @generated from field: optional bytes details = 1;
     */
    details: Uint8Array;
    /**
     * @generated from field: optional bytes accountSignatureKey = 2;
     */
    accountSignatureKey: Uint8Array;
    /**
     * @generated from field: optional bytes accountSignature = 3;
     */
    accountSignature: Uint8Array;
    /**
     * @generated from field: optional bytes deviceSignature = 4;
     */
    deviceSignature: Uint8Array;
};
/**
 * Describes the message ADVSignedDeviceIdentity.
 * Use `create(ADVSignedDeviceIdentitySchema)` to create a new message.
 */
declare const ADVSignedDeviceIdentitySchema: GenMessage<ADVSignedDeviceIdentity>;
/**
 * @generated from message ADVSignedDeviceIdentityHMAC
 */
type ADVSignedDeviceIdentityHMAC = Message$1<"ADVSignedDeviceIdentityHMAC"> & {
    /**
     * @generated from field: optional bytes details = 1;
     */
    details: Uint8Array;
    /**
     * @generated from field: optional bytes hmac = 2;
     */
    hmac: Uint8Array;
    /**
     * @generated from field: optional ADVEncryptionType accountType = 3;
     */
    accountType: ADVEncryptionType;
};
/**
 * Describes the message ADVSignedDeviceIdentityHMAC.
 * Use `create(ADVSignedDeviceIdentityHMACSchema)` to create a new message.
 */
declare const ADVSignedDeviceIdentityHMACSchema: GenMessage<ADVSignedDeviceIdentityHMAC>;
/**
 * @generated from message ADVSignedKeyIndexList
 */
type ADVSignedKeyIndexList = Message$1<"ADVSignedKeyIndexList"> & {
    /**
     * @generated from field: optional bytes details = 1;
     */
    details: Uint8Array;
    /**
     * @generated from field: optional bytes accountSignature = 2;
     */
    accountSignature: Uint8Array;
    /**
     * @generated from field: optional bytes accountSignatureKey = 3;
     */
    accountSignatureKey: Uint8Array;
};
/**
 * Describes the message ADVSignedKeyIndexList.
 * Use `create(ADVSignedKeyIndexListSchema)` to create a new message.
 */
declare const ADVSignedKeyIndexListSchema: GenMessage<ADVSignedKeyIndexList>;
/**
 * @generated from message AIQueryFanout
 */
type AIQueryFanout = Message$1<"AIQueryFanout"> & {
    /**
     * @generated from field: optional MessageKey messageKey = 1;
     */
    messageKey?: MessageKey;
    /**
     * @generated from field: optional Message message = 2;
     */
    message?: Message;
    /**
     * @generated from field: optional int64 timestamp = 3;
     */
    timestamp: bigint;
};
/**
 * Describes the message AIQueryFanout.
 * Use `create(AIQueryFanoutSchema)` to create a new message.
 */
declare const AIQueryFanoutSchema: GenMessage<AIQueryFanout>;
/**
 * @generated from message AIRichResponseMessage
 */
type AIRichResponseMessage = Message$1<"AIRichResponseMessage"> & {
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseMessageType messageType = 1;
     */
    messageType: AIRichResponseMessage_AIRichResponseMessageType;
    /**
     * @generated from field: repeated AIRichResponseMessage.AIRichResponseSubMessage submessages = 2;
     */
    submessages: AIRichResponseMessage_AIRichResponseSubMessage[];
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseUnifiedResponse unifiedResponse = 3;
     */
    unifiedResponse?: AIRichResponseMessage_AIRichResponseUnifiedResponse;
    /**
     * @generated from field: optional ContextInfo contextInfo = 4;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message AIRichResponseMessage.
 * Use `create(AIRichResponseMessageSchema)` to create a new message.
 */
declare const AIRichResponseMessageSchema: GenMessage<AIRichResponseMessage>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseCodeMetadata
 */
type AIRichResponseMessage_AIRichResponseCodeMetadata = Message$1<"AIRichResponseMessage.AIRichResponseCodeMetadata"> & {
    /**
     * @generated from field: optional string codeLanguage = 1;
     */
    codeLanguage: string;
    /**
     * @generated from field: repeated AIRichResponseMessage.AIRichResponseCodeMetadata.AIRichResponseCodeBlock codeBlocks = 2;
     */
    codeBlocks: AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeBlock[];
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseCodeMetadata.
 * Use `create(AIRichResponseMessage_AIRichResponseCodeMetadataSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseCodeMetadataSchema: GenMessage<AIRichResponseMessage_AIRichResponseCodeMetadata>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
 */
type AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeBlock = Message$1<"AIRichResponseMessage.AIRichResponseCodeMetadata.AIRichResponseCodeBlock"> & {
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType highlightType = 1;
     */
    highlightType: AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeHighlightType;
    /**
     * @generated from field: optional string codeContent = 2;
     */
    codeContent: string;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.
 * Use `create(AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeBlockSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeBlockSchema: GenMessage<AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeBlock>;
/**
 * @generated from enum AIRichResponseMessage.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType
 */
declare enum AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeHighlightType {
    /**
     * @generated from enum value: AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT = 0;
     */
    AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT = 0,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD = 1;
     */
    AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD = 1,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD = 2;
     */
    AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD = 2,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING = 3;
     */
    AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING = 3,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER = 4;
     */
    AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER = 4,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT = 5;
     */
    AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT = 5
}
/**
 * Describes the enum AIRichResponseMessage.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType.
 */
declare const AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeHighlightTypeSchema: GenEnum<AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeHighlightType>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseContentItemsMetadata
 */
type AIRichResponseMessage_AIRichResponseContentItemsMetadata = Message$1<"AIRichResponseMessage.AIRichResponseContentItemsMetadata"> & {
    /**
     * @generated from field: repeated AIRichResponseMessage.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata itemsMetadata = 1;
     */
    itemsMetadata: AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseContentItemMetadata[];
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseContentItemsMetadata.ContentType contentType = 2;
     */
    contentType: AIRichResponseMessage_AIRichResponseContentItemsMetadata_ContentType;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseContentItemsMetadata.
 * Use `create(AIRichResponseMessage_AIRichResponseContentItemsMetadataSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseContentItemsMetadataSchema: GenMessage<AIRichResponseMessage_AIRichResponseContentItemsMetadata>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
 */
type AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseContentItemMetadata = Message$1<"AIRichResponseMessage.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata"> & {
    /**
     * @generated from oneof AIRichResponseMessage.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.aIRichResponseContentItem
     */
    aIRichResponseContentItem: {
        /**
         * @generated from field: AIRichResponseMessage.AIRichResponseContentItemsMetadata.AIRichResponseReelItem reelItem = 1;
         */
        value: AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseReelItem;
        case: "reelItem";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.
 * Use `create(AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseContentItemMetadataSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseContentItemMetadataSchema: GenMessage<AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseContentItemMetadata>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
 */
type AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseReelItem = Message$1<"AIRichResponseMessage.AIRichResponseContentItemsMetadata.AIRichResponseReelItem"> & {
    /**
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * @generated from field: optional string profileIconUrl = 2;
     */
    profileIconUrl: string;
    /**
     * @generated from field: optional string thumbnailUrl = 3;
     */
    thumbnailUrl: string;
    /**
     * @generated from field: optional string videoUrl = 4;
     */
    videoUrl: string;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.
 * Use `create(AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseReelItemSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseReelItemSchema: GenMessage<AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseReelItem>;
/**
 * @generated from enum AIRichResponseMessage.AIRichResponseContentItemsMetadata.ContentType
 */
declare enum AIRichResponseMessage_AIRichResponseContentItemsMetadata_ContentType {
    /**
     * @generated from enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from enum value: CAROUSEL = 1;
     */
    CAROUSEL = 1
}
/**
 * Describes the enum AIRichResponseMessage.AIRichResponseContentItemsMetadata.ContentType.
 */
declare const AIRichResponseMessage_AIRichResponseContentItemsMetadata_ContentTypeSchema: GenEnum<AIRichResponseMessage_AIRichResponseContentItemsMetadata_ContentType>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseDynamicMetadata
 */
type AIRichResponseMessage_AIRichResponseDynamicMetadata = Message$1<"AIRichResponseMessage.AIRichResponseDynamicMetadata"> & {
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType type = 1;
     */
    type: AIRichResponseMessage_AIRichResponseDynamicMetadata_AIRichResponseDynamicMetadataType;
    /**
     * @generated from field: optional uint64 version = 2;
     */
    version: bigint;
    /**
     * @generated from field: optional string url = 3;
     */
    url: string;
    /**
     * @generated from field: optional uint32 loopCount = 4;
     */
    loopCount: number;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseDynamicMetadata.
 * Use `create(AIRichResponseMessage_AIRichResponseDynamicMetadataSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseDynamicMetadataSchema: GenMessage<AIRichResponseMessage_AIRichResponseDynamicMetadata>;
/**
 * @generated from enum AIRichResponseMessage.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType
 */
declare enum AIRichResponseMessage_AIRichResponseDynamicMetadata_AIRichResponseDynamicMetadataType {
    /**
     * @generated from enum value: AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN = 0;
     */
    AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE = 1;
     */
    AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE = 1,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF = 2;
     */
    AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF = 2
}
/**
 * Describes the enum AIRichResponseMessage.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType.
 */
declare const AIRichResponseMessage_AIRichResponseDynamicMetadata_AIRichResponseDynamicMetadataTypeSchema: GenEnum<AIRichResponseMessage_AIRichResponseDynamicMetadata_AIRichResponseDynamicMetadataType>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseGridImageMetadata
 */
type AIRichResponseMessage_AIRichResponseGridImageMetadata = Message$1<"AIRichResponseMessage.AIRichResponseGridImageMetadata"> & {
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseImageURL gridImageUrl = 1;
     */
    gridImageUrl?: AIRichResponseMessage_AIRichResponseImageURL;
    /**
     * @generated from field: repeated AIRichResponseMessage.AIRichResponseImageURL imageUrls = 2;
     */
    imageUrls: AIRichResponseMessage_AIRichResponseImageURL[];
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseGridImageMetadata.
 * Use `create(AIRichResponseMessage_AIRichResponseGridImageMetadataSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseGridImageMetadataSchema: GenMessage<AIRichResponseMessage_AIRichResponseGridImageMetadata>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseImageURL
 */
type AIRichResponseMessage_AIRichResponseImageURL = Message$1<"AIRichResponseMessage.AIRichResponseImageURL"> & {
    /**
     * @generated from field: optional string imagePreviewUrl = 1;
     */
    imagePreviewUrl: string;
    /**
     * @generated from field: optional string imageHighResUrl = 2;
     */
    imageHighResUrl: string;
    /**
     * @generated from field: optional string sourceUrl = 3;
     */
    sourceUrl: string;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseImageURL.
 * Use `create(AIRichResponseMessage_AIRichResponseImageURLSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseImageURLSchema: GenMessage<AIRichResponseMessage_AIRichResponseImageURL>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseInlineImageMetadata
 */
type AIRichResponseMessage_AIRichResponseInlineImageMetadata = Message$1<"AIRichResponseMessage.AIRichResponseInlineImageMetadata"> & {
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseImageURL imageUrl = 1;
     */
    imageUrl?: AIRichResponseMessage_AIRichResponseImageURL;
    /**
     * @generated from field: optional string imageText = 2;
     */
    imageText: string;
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment alignment = 3;
     */
    alignment: AIRichResponseMessage_AIRichResponseInlineImageMetadata_AIRichResponseImageAlignment;
    /**
     * @generated from field: optional string tapLinkUrl = 4;
     */
    tapLinkUrl: string;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseInlineImageMetadata.
 * Use `create(AIRichResponseMessage_AIRichResponseInlineImageMetadataSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseInlineImageMetadataSchema: GenMessage<AIRichResponseMessage_AIRichResponseInlineImageMetadata>;
/**
 * @generated from enum AIRichResponseMessage.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment
 */
declare enum AIRichResponseMessage_AIRichResponseInlineImageMetadata_AIRichResponseImageAlignment {
    /**
     * @generated from enum value: AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED = 0;
     */
    AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED = 0,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED = 1;
     */
    AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED = 1,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED = 2;
     */
    AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED = 2
}
/**
 * Describes the enum AIRichResponseMessage.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment.
 */
declare const AIRichResponseMessage_AIRichResponseInlineImageMetadata_AIRichResponseImageAlignmentSchema: GenEnum<AIRichResponseMessage_AIRichResponseInlineImageMetadata_AIRichResponseImageAlignment>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseLatexMetadata
 */
type AIRichResponseMessage_AIRichResponseLatexMetadata = Message$1<"AIRichResponseMessage.AIRichResponseLatexMetadata"> & {
    /**
     * @generated from field: optional string text = 1;
     */
    text: string;
    /**
     * @generated from field: repeated AIRichResponseMessage.AIRichResponseLatexMetadata.AIRichResponseLatexExpression expressions = 2;
     */
    expressions: AIRichResponseMessage_AIRichResponseLatexMetadata_AIRichResponseLatexExpression[];
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseLatexMetadata.
 * Use `create(AIRichResponseMessage_AIRichResponseLatexMetadataSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseLatexMetadataSchema: GenMessage<AIRichResponseMessage_AIRichResponseLatexMetadata>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
 */
type AIRichResponseMessage_AIRichResponseLatexMetadata_AIRichResponseLatexExpression = Message$1<"AIRichResponseMessage.AIRichResponseLatexMetadata.AIRichResponseLatexExpression"> & {
    /**
     * @generated from field: optional string latexExpression = 1;
     */
    latexExpression: string;
    /**
     * @generated from field: optional string url = 2;
     */
    url: string;
    /**
     * @generated from field: optional double width = 3;
     */
    width: number;
    /**
     * @generated from field: optional double height = 4;
     */
    height: number;
    /**
     * @generated from field: optional double fontHeight = 5;
     */
    fontHeight: number;
    /**
     * @generated from field: optional double imageTopPadding = 6;
     */
    imageTopPadding: number;
    /**
     * @generated from field: optional double imageLeadingPadding = 7;
     */
    imageLeadingPadding: number;
    /**
     * @generated from field: optional double imageBottomPadding = 8;
     */
    imageBottomPadding: number;
    /**
     * @generated from field: optional double imageTrailingPadding = 9;
     */
    imageTrailingPadding: number;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.
 * Use `create(AIRichResponseMessage_AIRichResponseLatexMetadata_AIRichResponseLatexExpressionSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseLatexMetadata_AIRichResponseLatexExpressionSchema: GenMessage<AIRichResponseMessage_AIRichResponseLatexMetadata_AIRichResponseLatexExpression>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseMapMetadata
 */
type AIRichResponseMessage_AIRichResponseMapMetadata = Message$1<"AIRichResponseMessage.AIRichResponseMapMetadata"> & {
    /**
     * @generated from field: optional double centerLatitude = 1;
     */
    centerLatitude: number;
    /**
     * @generated from field: optional double centerLongitude = 2;
     */
    centerLongitude: number;
    /**
     * @generated from field: optional double latitudeDelta = 3;
     */
    latitudeDelta: number;
    /**
     * @generated from field: optional double longitudeDelta = 4;
     */
    longitudeDelta: number;
    /**
     * @generated from field: repeated AIRichResponseMessage.AIRichResponseMapMetadata.AIRichResponseMapAnnotation annotations = 5;
     */
    annotations: AIRichResponseMessage_AIRichResponseMapMetadata_AIRichResponseMapAnnotation[];
    /**
     * @generated from field: optional bool showInfoList = 6;
     */
    showInfoList: boolean;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseMapMetadata.
 * Use `create(AIRichResponseMessage_AIRichResponseMapMetadataSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseMapMetadataSchema: GenMessage<AIRichResponseMessage_AIRichResponseMapMetadata>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
 */
type AIRichResponseMessage_AIRichResponseMapMetadata_AIRichResponseMapAnnotation = Message$1<"AIRichResponseMessage.AIRichResponseMapMetadata.AIRichResponseMapAnnotation"> & {
    /**
     * @generated from field: optional uint32 annotationNumber = 1;
     */
    annotationNumber: number;
    /**
     * @generated from field: optional double latitude = 2;
     */
    latitude: number;
    /**
     * @generated from field: optional double longitude = 3;
     */
    longitude: number;
    /**
     * @generated from field: optional string title = 4;
     */
    title: string;
    /**
     * @generated from field: optional string body = 5;
     */
    body: string;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.
 * Use `create(AIRichResponseMessage_AIRichResponseMapMetadata_AIRichResponseMapAnnotationSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseMapMetadata_AIRichResponseMapAnnotationSchema: GenMessage<AIRichResponseMessage_AIRichResponseMapMetadata_AIRichResponseMapAnnotation>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseSubMessage
 */
type AIRichResponseMessage_AIRichResponseSubMessage = Message$1<"AIRichResponseMessage.AIRichResponseSubMessage"> & {
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseSubMessageType messageType = 1;
     */
    messageType: AIRichResponseMessage_AIRichResponseSubMessageType;
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseGridImageMetadata gridImageMetadata = 2;
     */
    gridImageMetadata?: AIRichResponseMessage_AIRichResponseGridImageMetadata;
    /**
     * @generated from field: optional string messageText = 3;
     */
    messageText: string;
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseInlineImageMetadata imageMetadata = 4;
     */
    imageMetadata?: AIRichResponseMessage_AIRichResponseInlineImageMetadata;
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseCodeMetadata codeMetadata = 5;
     */
    codeMetadata?: AIRichResponseMessage_AIRichResponseCodeMetadata;
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseTableMetadata tableMetadata = 6;
     */
    tableMetadata?: AIRichResponseMessage_AIRichResponseTableMetadata;
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseDynamicMetadata dynamicMetadata = 7;
     */
    dynamicMetadata?: AIRichResponseMessage_AIRichResponseDynamicMetadata;
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseLatexMetadata latexMetadata = 8;
     */
    latexMetadata?: AIRichResponseMessage_AIRichResponseLatexMetadata;
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseMapMetadata mapMetadata = 9;
     */
    mapMetadata?: AIRichResponseMessage_AIRichResponseMapMetadata;
    /**
     * @generated from field: optional AIRichResponseMessage.AIRichResponseContentItemsMetadata contentItemsMetadata = 10;
     */
    contentItemsMetadata?: AIRichResponseMessage_AIRichResponseContentItemsMetadata;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseSubMessage.
 * Use `create(AIRichResponseMessage_AIRichResponseSubMessageSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseSubMessageSchema: GenMessage<AIRichResponseMessage_AIRichResponseSubMessage>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseTableMetadata
 */
type AIRichResponseMessage_AIRichResponseTableMetadata = Message$1<"AIRichResponseMessage.AIRichResponseTableMetadata"> & {
    /**
     * @generated from field: repeated AIRichResponseMessage.AIRichResponseTableMetadata.AIRichResponseTableRow rows = 1;
     */
    rows: AIRichResponseMessage_AIRichResponseTableMetadata_AIRichResponseTableRow[];
    /**
     * @generated from field: optional string title = 2;
     */
    title: string;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseTableMetadata.
 * Use `create(AIRichResponseMessage_AIRichResponseTableMetadataSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseTableMetadataSchema: GenMessage<AIRichResponseMessage_AIRichResponseTableMetadata>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseTableMetadata.AIRichResponseTableRow
 */
type AIRichResponseMessage_AIRichResponseTableMetadata_AIRichResponseTableRow = Message$1<"AIRichResponseMessage.AIRichResponseTableMetadata.AIRichResponseTableRow"> & {
    /**
     * @generated from field: repeated string items = 1;
     */
    items: string[];
    /**
     * @generated from field: optional bool isHeading = 2;
     */
    isHeading: boolean;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseTableMetadata.AIRichResponseTableRow.
 * Use `create(AIRichResponseMessage_AIRichResponseTableMetadata_AIRichResponseTableRowSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseTableMetadata_AIRichResponseTableRowSchema: GenMessage<AIRichResponseMessage_AIRichResponseTableMetadata_AIRichResponseTableRow>;
/**
 * @generated from message AIRichResponseMessage.AIRichResponseUnifiedResponse
 */
type AIRichResponseMessage_AIRichResponseUnifiedResponse = Message$1<"AIRichResponseMessage.AIRichResponseUnifiedResponse"> & {
    /**
     * @generated from field: optional bytes data = 1;
     */
    data: Uint8Array;
};
/**
 * Describes the message AIRichResponseMessage.AIRichResponseUnifiedResponse.
 * Use `create(AIRichResponseMessage_AIRichResponseUnifiedResponseSchema)` to create a new message.
 */
declare const AIRichResponseMessage_AIRichResponseUnifiedResponseSchema: GenMessage<AIRichResponseMessage_AIRichResponseUnifiedResponse>;
/**
 * @generated from enum AIRichResponseMessage.AIRichResponseMessageType
 */
declare enum AIRichResponseMessage_AIRichResponseMessageType {
    /**
     * @generated from enum value: AI_RICH_RESPONSE_TYPE_UNKNOWN = 0;
     */
    AI_RICH_RESPONSE_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_TYPE_STANDARD = 1;
     */
    AI_RICH_RESPONSE_TYPE_STANDARD = 1
}
/**
 * Describes the enum AIRichResponseMessage.AIRichResponseMessageType.
 */
declare const AIRichResponseMessage_AIRichResponseMessageTypeSchema: GenEnum<AIRichResponseMessage_AIRichResponseMessageType>;
/**
 * @generated from enum AIRichResponseMessage.AIRichResponseSubMessageType
 */
declare enum AIRichResponseMessage_AIRichResponseSubMessageType {
    /**
     * @generated from enum value: AI_RICH_RESPONSE_UNKNOWN = 0;
     */
    AI_RICH_RESPONSE_UNKNOWN = 0,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_GRID_IMAGE = 1;
     */
    AI_RICH_RESPONSE_GRID_IMAGE = 1,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_TEXT = 2;
     */
    AI_RICH_RESPONSE_TEXT = 2,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_INLINE_IMAGE = 3;
     */
    AI_RICH_RESPONSE_INLINE_IMAGE = 3,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_TABLE = 4;
     */
    AI_RICH_RESPONSE_TABLE = 4,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_CODE = 5;
     */
    AI_RICH_RESPONSE_CODE = 5,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_DYNAMIC = 6;
     */
    AI_RICH_RESPONSE_DYNAMIC = 6,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_MAP = 7;
     */
    AI_RICH_RESPONSE_MAP = 7,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_LATEX = 8;
     */
    AI_RICH_RESPONSE_LATEX = 8,
    /**
     * @generated from enum value: AI_RICH_RESPONSE_CONTENT_ITEMS = 9;
     */
    AI_RICH_RESPONSE_CONTENT_ITEMS = 9
}
/**
 * Describes the enum AIRichResponseMessage.AIRichResponseSubMessageType.
 */
declare const AIRichResponseMessage_AIRichResponseSubMessageTypeSchema: GenEnum<AIRichResponseMessage_AIRichResponseSubMessageType>;
/**
 * @generated from message Account
 */
type Account = Message$1<"Account"> & {
    /**
     * @generated from field: optional string lid = 1;
     */
    lid: string;
    /**
     * @generated from field: optional string username = 2;
     */
    username: string;
    /**
     * @generated from field: optional string countryCode = 3;
     */
    countryCode: string;
    /**
     * @generated from field: optional bool isUsernameDeleted = 4;
     */
    isUsernameDeleted: boolean;
};
/**
 * Describes the message Account.
 * Use `create(AccountSchema)` to create a new message.
 */
declare const AccountSchema: GenMessage<Account>;
/**
 * @generated from message ActionLink
 */
type ActionLink = Message$1<"ActionLink"> & {
    /**
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * @generated from field: optional string buttonTitle = 2;
     */
    buttonTitle: string;
};
/**
 * Describes the message ActionLink.
 * Use `create(ActionLinkSchema)` to create a new message.
 */
declare const ActionLinkSchema: GenMessage<ActionLink>;
/**
 * @generated from message AutoDownloadSettings
 */
type AutoDownloadSettings = Message$1<"AutoDownloadSettings"> & {
    /**
     * @generated from field: optional bool downloadImages = 1;
     */
    downloadImages: boolean;
    /**
     * @generated from field: optional bool downloadAudio = 2;
     */
    downloadAudio: boolean;
    /**
     * @generated from field: optional bool downloadVideo = 3;
     */
    downloadVideo: boolean;
    /**
     * @generated from field: optional bool downloadDocuments = 4;
     */
    downloadDocuments: boolean;
};
/**
 * Describes the message AutoDownloadSettings.
 * Use `create(AutoDownloadSettingsSchema)` to create a new message.
 */
declare const AutoDownloadSettingsSchema: GenMessage<AutoDownloadSettings>;
/**
 * @generated from message AvatarUserSettings
 */
type AvatarUserSettings = Message$1<"AvatarUserSettings"> & {
    /**
     * @generated from field: optional string fbid = 1;
     */
    fbid: string;
    /**
     * @generated from field: optional string password = 2;
     */
    password: string;
};
/**
 * Describes the message AvatarUserSettings.
 * Use `create(AvatarUserSettingsSchema)` to create a new message.
 */
declare const AvatarUserSettingsSchema: GenMessage<AvatarUserSettings>;
/**
 * @generated from message BizAccountLinkInfo
 */
type BizAccountLinkInfo = Message$1<"BizAccountLinkInfo"> & {
    /**
     * @generated from field: optional uint64 whatsappBizAcctFbid = 1;
     */
    whatsappBizAcctFbid: bigint;
    /**
     * @generated from field: optional string whatsappAcctNumber = 2;
     */
    whatsappAcctNumber: string;
    /**
     * @generated from field: optional uint64 issueTime = 3;
     */
    issueTime: bigint;
    /**
     * @generated from field: optional BizAccountLinkInfo.HostStorageType hostStorage = 4;
     */
    hostStorage: BizAccountLinkInfo_HostStorageType;
    /**
     * @generated from field: optional BizAccountLinkInfo.AccountType accountType = 5;
     */
    accountType: BizAccountLinkInfo_AccountType;
};
/**
 * Describes the message BizAccountLinkInfo.
 * Use `create(BizAccountLinkInfoSchema)` to create a new message.
 */
declare const BizAccountLinkInfoSchema: GenMessage<BizAccountLinkInfo>;
/**
 * @generated from enum BizAccountLinkInfo.AccountType
 */
declare enum BizAccountLinkInfo_AccountType {
    /**
     * @generated from enum value: ENTERPRISE = 0;
     */
    ENTERPRISE = 0
}
/**
 * Describes the enum BizAccountLinkInfo.AccountType.
 */
declare const BizAccountLinkInfo_AccountTypeSchema: GenEnum<BizAccountLinkInfo_AccountType>;
/**
 * @generated from enum BizAccountLinkInfo.HostStorageType
 */
declare enum BizAccountLinkInfo_HostStorageType {
    /**
     * @generated from enum value: ON_PREMISE = 0;
     */
    ON_PREMISE = 0,
    /**
     * @generated from enum value: FACEBOOK = 1;
     */
    FACEBOOK = 1
}
/**
 * Describes the enum BizAccountLinkInfo.HostStorageType.
 */
declare const BizAccountLinkInfo_HostStorageTypeSchema: GenEnum<BizAccountLinkInfo_HostStorageType>;
/**
 * @generated from message BizAccountPayload
 */
type BizAccountPayload = Message$1<"BizAccountPayload"> & {
    /**
     * @generated from field: optional VerifiedNameCertificate vnameCert = 1;
     */
    vnameCert?: VerifiedNameCertificate;
    /**
     * @generated from field: optional bytes bizAcctLinkInfo = 2;
     */
    bizAcctLinkInfo: Uint8Array;
};
/**
 * Describes the message BizAccountPayload.
 * Use `create(BizAccountPayloadSchema)` to create a new message.
 */
declare const BizAccountPayloadSchema: GenMessage<BizAccountPayload>;
/**
 * @generated from message BizIdentityInfo
 */
type BizIdentityInfo = Message$1<"BizIdentityInfo"> & {
    /**
     * @generated from field: optional BizIdentityInfo.VerifiedLevelValue vlevel = 1;
     */
    vlevel: BizIdentityInfo_VerifiedLevelValue;
    /**
     * @generated from field: optional VerifiedNameCertificate vnameCert = 2;
     */
    vnameCert?: VerifiedNameCertificate;
    /**
     * @generated from field: optional bool signed = 3;
     */
    signed: boolean;
    /**
     * @generated from field: optional bool revoked = 4;
     */
    revoked: boolean;
    /**
     * @generated from field: optional BizIdentityInfo.HostStorageType hostStorage = 5;
     */
    hostStorage: BizIdentityInfo_HostStorageType;
    /**
     * @generated from field: optional BizIdentityInfo.ActualActorsType actualActors = 6;
     */
    actualActors: BizIdentityInfo_ActualActorsType;
    /**
     * @generated from field: optional uint64 privacyModeTs = 7;
     */
    privacyModeTs: bigint;
    /**
     * @generated from field: optional uint64 featureControls = 8;
     */
    featureControls: bigint;
};
/**
 * Describes the message BizIdentityInfo.
 * Use `create(BizIdentityInfoSchema)` to create a new message.
 */
declare const BizIdentityInfoSchema: GenMessage<BizIdentityInfo>;
/**
 * @generated from enum BizIdentityInfo.ActualActorsType
 */
declare enum BizIdentityInfo_ActualActorsType {
    /**
     * @generated from enum value: SELF = 0;
     */
    SELF = 0,
    /**
     * @generated from enum value: BSP = 1;
     */
    BSP = 1
}
/**
 * Describes the enum BizIdentityInfo.ActualActorsType.
 */
declare const BizIdentityInfo_ActualActorsTypeSchema: GenEnum<BizIdentityInfo_ActualActorsType>;
/**
 * @generated from enum BizIdentityInfo.HostStorageType
 */
declare enum BizIdentityInfo_HostStorageType {
    /**
     * @generated from enum value: ON_PREMISE = 0;
     */
    ON_PREMISE = 0,
    /**
     * @generated from enum value: FACEBOOK = 1;
     */
    FACEBOOK = 1
}
/**
 * Describes the enum BizIdentityInfo.HostStorageType.
 */
declare const BizIdentityInfo_HostStorageTypeSchema: GenEnum<BizIdentityInfo_HostStorageType>;
/**
 * @generated from enum BizIdentityInfo.VerifiedLevelValue
 */
declare enum BizIdentityInfo_VerifiedLevelValue {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: LOW = 1;
     */
    LOW = 1,
    /**
     * @generated from enum value: HIGH = 2;
     */
    HIGH = 2
}
/**
 * Describes the enum BizIdentityInfo.VerifiedLevelValue.
 */
declare const BizIdentityInfo_VerifiedLevelValueSchema: GenEnum<BizIdentityInfo_VerifiedLevelValue>;
/**
 * @generated from message BotAgeCollectionMetadata
 */
type BotAgeCollectionMetadata = Message$1<"BotAgeCollectionMetadata"> & {
    /**
     * @generated from field: optional bool ageCollectionEligible = 1;
     */
    ageCollectionEligible: boolean;
    /**
     * @generated from field: optional bool shouldTriggerAgeCollectionOnClient = 2;
     */
    shouldTriggerAgeCollectionOnClient: boolean;
};
/**
 * Describes the message BotAgeCollectionMetadata.
 * Use `create(BotAgeCollectionMetadataSchema)` to create a new message.
 */
declare const BotAgeCollectionMetadataSchema: GenMessage<BotAgeCollectionMetadata>;
/**
 * @generated from message BotAvatarMetadata
 */
type BotAvatarMetadata = Message$1<"BotAvatarMetadata"> & {
    /**
     * @generated from field: optional uint32 sentiment = 1;
     */
    sentiment: number;
    /**
     * @generated from field: optional string behaviorGraph = 2;
     */
    behaviorGraph: string;
    /**
     * @generated from field: optional uint32 action = 3;
     */
    action: number;
    /**
     * @generated from field: optional uint32 intensity = 4;
     */
    intensity: number;
    /**
     * @generated from field: optional uint32 wordCount = 5;
     */
    wordCount: number;
};
/**
 * Describes the message BotAvatarMetadata.
 * Use `create(BotAvatarMetadataSchema)` to create a new message.
 */
declare const BotAvatarMetadataSchema: GenMessage<BotAvatarMetadata>;
/**
 * @generated from message BotCapabilityMetadata
 */
type BotCapabilityMetadata = Message$1<"BotCapabilityMetadata"> & {
    /**
     * @generated from field: repeated BotCapabilityMetadata.BotCapabilityType capabilities = 1;
     */
    capabilities: BotCapabilityMetadata_BotCapabilityType[];
};
/**
 * Describes the message BotCapabilityMetadata.
 * Use `create(BotCapabilityMetadataSchema)` to create a new message.
 */
declare const BotCapabilityMetadataSchema: GenMessage<BotCapabilityMetadata>;
/**
 * @generated from enum BotCapabilityMetadata.BotCapabilityType
 */
declare enum BotCapabilityMetadata_BotCapabilityType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: PROGRESS_INDICATOR = 1;
     */
    PROGRESS_INDICATOR = 1,
    /**
     * @generated from enum value: RICH_RESPONSE_HEADING = 2;
     */
    RICH_RESPONSE_HEADING = 2,
    /**
     * @generated from enum value: RICH_RESPONSE_NESTED_LIST = 3;
     */
    RICH_RESPONSE_NESTED_LIST = 3,
    /**
     * @generated from enum value: AI_MEMORY = 4;
     */
    AI_MEMORY = 4,
    /**
     * @generated from enum value: RICH_RESPONSE_THREAD_SURFING = 5;
     */
    RICH_RESPONSE_THREAD_SURFING = 5,
    /**
     * @generated from enum value: RICH_RESPONSE_TABLE = 6;
     */
    RICH_RESPONSE_TABLE = 6,
    /**
     * @generated from enum value: RICH_RESPONSE_CODE = 7;
     */
    RICH_RESPONSE_CODE = 7,
    /**
     * @generated from enum value: RICH_RESPONSE_STRUCTURED_RESPONSE = 8;
     */
    RICH_RESPONSE_STRUCTURED_RESPONSE = 8,
    /**
     * @generated from enum value: RICH_RESPONSE_INLINE_IMAGE = 9;
     */
    RICH_RESPONSE_INLINE_IMAGE = 9,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_CONTROL = 10;
     */
    WA_IG_1P_PLUGIN_RANKING_CONTROL = 10,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_UPDATE_1 = 11;
     */
    WA_IG_1P_PLUGIN_RANKING_UPDATE_1 = 11,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_UPDATE_2 = 12;
     */
    WA_IG_1P_PLUGIN_RANKING_UPDATE_2 = 12,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_UPDATE_3 = 13;
     */
    WA_IG_1P_PLUGIN_RANKING_UPDATE_3 = 13,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_UPDATE_4 = 14;
     */
    WA_IG_1P_PLUGIN_RANKING_UPDATE_4 = 14,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_UPDATE_5 = 15;
     */
    WA_IG_1P_PLUGIN_RANKING_UPDATE_5 = 15,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_UPDATE_6 = 16;
     */
    WA_IG_1P_PLUGIN_RANKING_UPDATE_6 = 16,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_UPDATE_7 = 17;
     */
    WA_IG_1P_PLUGIN_RANKING_UPDATE_7 = 17,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_UPDATE_8 = 18;
     */
    WA_IG_1P_PLUGIN_RANKING_UPDATE_8 = 18,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_UPDATE_9 = 19;
     */
    WA_IG_1P_PLUGIN_RANKING_UPDATE_9 = 19,
    /**
     * @generated from enum value: WA_IG_1P_PLUGIN_RANKING_UPDATE_10 = 20;
     */
    WA_IG_1P_PLUGIN_RANKING_UPDATE_10 = 20,
    /**
     * @generated from enum value: RICH_RESPONSE_SUB_HEADING = 21;
     */
    RICH_RESPONSE_SUB_HEADING = 21,
    /**
     * @generated from enum value: RICH_RESPONSE_GRID_IMAGE = 22;
     */
    RICH_RESPONSE_GRID_IMAGE = 22,
    /**
     * @generated from enum value: AI_STUDIO_UGC_MEMORY = 23;
     */
    AI_STUDIO_UGC_MEMORY = 23,
    /**
     * @generated from enum value: RICH_RESPONSE_LATEX = 24;
     */
    RICH_RESPONSE_LATEX = 24,
    /**
     * @generated from enum value: RICH_RESPONSE_MAPS = 25;
     */
    RICH_RESPONSE_MAPS = 25,
    /**
     * @generated from enum value: RICH_RESPONSE_INLINE_REELS = 26;
     */
    RICH_RESPONSE_INLINE_REELS = 26,
    /**
     * @generated from enum value: AGENTIC_PLANNING = 27;
     */
    AGENTIC_PLANNING = 27,
    /**
     * @generated from enum value: ACCOUNT_LINKING = 28;
     */
    ACCOUNT_LINKING = 28,
    /**
     * @generated from enum value: STREAMING_DISAGGREGATION = 29;
     */
    STREAMING_DISAGGREGATION = 29,
    /**
     * @generated from enum value: RICH_RESPONSE_GRID_IMAGE_3P = 30;
     */
    RICH_RESPONSE_GRID_IMAGE_3P = 30,
    /**
     * @generated from enum value: RICH_RESPONSE_LATEX_INLINE = 31;
     */
    RICH_RESPONSE_LATEX_INLINE = 31,
    /**
     * @generated from enum value: QUERY_PLAN = 32;
     */
    QUERY_PLAN = 32,
    /**
     * @generated from enum value: PROACTIVE_MESSAGE = 33;
     */
    PROACTIVE_MESSAGE = 33,
    /**
     * @generated from enum value: RICH_RESPONSE_UNIFIED_RESPONSE = 34;
     */
    RICH_RESPONSE_UNIFIED_RESPONSE = 34,
    /**
     * @generated from enum value: PROMOTION_MESSAGE = 35;
     */
    PROMOTION_MESSAGE = 35,
    /**
     * @generated from enum value: SIMPLIFIED_PROFILE_PAGE = 36;
     */
    SIMPLIFIED_PROFILE_PAGE = 36,
    /**
     * @generated from enum value: RICH_RESPONSE_SOURCES_IN_MESSAGE = 37;
     */
    RICH_RESPONSE_SOURCES_IN_MESSAGE = 37
}
/**
 * Describes the enum BotCapabilityMetadata.BotCapabilityType.
 */
declare const BotCapabilityMetadata_BotCapabilityTypeSchema: GenEnum<BotCapabilityMetadata_BotCapabilityType>;
/**
 * @generated from message BotImagineMetadata
 */
type BotImagineMetadata = Message$1<"BotImagineMetadata"> & {
    /**
     * @generated from field: optional BotImagineMetadata.ImagineType imagineType = 1;
     */
    imagineType: BotImagineMetadata_ImagineType;
};
/**
 * Describes the message BotImagineMetadata.
 * Use `create(BotImagineMetadataSchema)` to create a new message.
 */
declare const BotImagineMetadataSchema: GenMessage<BotImagineMetadata>;
/**
 * @generated from enum BotImagineMetadata.ImagineType
 */
declare enum BotImagineMetadata_ImagineType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: IMAGINE = 1;
     */
    IMAGINE = 1,
    /**
     * @generated from enum value: MEMU = 2;
     */
    MEMU = 2,
    /**
     * @generated from enum value: FLASH = 3;
     */
    FLASH = 3,
    /**
     * @generated from enum value: EDIT = 4;
     */
    EDIT = 4
}
/**
 * Describes the enum BotImagineMetadata.ImagineType.
 */
declare const BotImagineMetadata_ImagineTypeSchema: GenEnum<BotImagineMetadata_ImagineType>;
/**
 * @generated from message BotLinkedAccount
 */
type BotLinkedAccount = Message$1<"BotLinkedAccount"> & {
    /**
     * @generated from field: optional BotLinkedAccount.BotLinkedAccountType type = 1;
     */
    type: BotLinkedAccount_BotLinkedAccountType;
};
/**
 * Describes the message BotLinkedAccount.
 * Use `create(BotLinkedAccountSchema)` to create a new message.
 */
declare const BotLinkedAccountSchema: GenMessage<BotLinkedAccount>;
/**
 * @generated from enum BotLinkedAccount.BotLinkedAccountType
 */
declare enum BotLinkedAccount_BotLinkedAccountType {
    /**
     * @generated from enum value: BOT_LINKED_ACCOUNT_TYPE_1P = 0;
     */
    BOT_LINKED_ACCOUNT_TYPE_1P = 0
}
/**
 * Describes the enum BotLinkedAccount.BotLinkedAccountType.
 */
declare const BotLinkedAccount_BotLinkedAccountTypeSchema: GenEnum<BotLinkedAccount_BotLinkedAccountType>;
/**
 * @generated from message BotLinkedAccountsMetadata
 */
type BotLinkedAccountsMetadata = Message$1<"BotLinkedAccountsMetadata"> & {
    /**
     * @generated from field: repeated BotLinkedAccount accounts = 1;
     */
    accounts: BotLinkedAccount[];
    /**
     * @generated from field: optional bytes acAuthTokens = 2;
     */
    acAuthTokens: Uint8Array;
    /**
     * @generated from field: optional int32 acErrorCode = 3;
     */
    acErrorCode: number;
};
/**
 * Describes the message BotLinkedAccountsMetadata.
 * Use `create(BotLinkedAccountsMetadataSchema)` to create a new message.
 */
declare const BotLinkedAccountsMetadataSchema: GenMessage<BotLinkedAccountsMetadata>;
/**
 * @generated from message BotMediaMetadata
 */
type BotMediaMetadata = Message$1<"BotMediaMetadata"> & {
    /**
     * @generated from field: optional string fileSha256 = 1;
     */
    fileSha256: string;
    /**
     * @generated from field: optional string mediaKey = 2;
     */
    mediaKey: string;
    /**
     * @generated from field: optional string fileEncSha256 = 3;
     */
    fileEncSha256: string;
    /**
     * @generated from field: optional string directPath = 4;
     */
    directPath: string;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 5;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional string mimetype = 6;
     */
    mimetype: string;
    /**
     * @generated from field: optional BotMediaMetadata.OrientationType orientationType = 7;
     */
    orientationType: BotMediaMetadata_OrientationType;
};
/**
 * Describes the message BotMediaMetadata.
 * Use `create(BotMediaMetadataSchema)` to create a new message.
 */
declare const BotMediaMetadataSchema: GenMessage<BotMediaMetadata>;
/**
 * @generated from enum BotMediaMetadata.OrientationType
 */
declare enum BotMediaMetadata_OrientationType {
    /**
     * @generated from enum value: CENTER = 1;
     */
    CENTER = 1,
    /**
     * @generated from enum value: LEFT = 2;
     */
    LEFT = 2,
    /**
     * @generated from enum value: RIGHT = 3;
     */
    RIGHT = 3
}
/**
 * Describes the enum BotMediaMetadata.OrientationType.
 */
declare const BotMediaMetadata_OrientationTypeSchema: GenEnum<BotMediaMetadata_OrientationType>;
/**
 * @generated from message BotMemoryFact
 */
type BotMemoryFact = Message$1<"BotMemoryFact"> & {
    /**
     * @generated from field: optional string fact = 1;
     */
    fact: string;
    /**
     * @generated from field: optional string factId = 2;
     */
    factId: string;
};
/**
 * Describes the message BotMemoryFact.
 * Use `create(BotMemoryFactSchema)` to create a new message.
 */
declare const BotMemoryFactSchema: GenMessage<BotMemoryFact>;
/**
 * @generated from message BotMemoryMetadata
 */
type BotMemoryMetadata = Message$1<"BotMemoryMetadata"> & {
    /**
     * @generated from field: repeated BotMemoryFact addedFacts = 1;
     */
    addedFacts: BotMemoryFact[];
    /**
     * @generated from field: repeated BotMemoryFact removedFacts = 2;
     */
    removedFacts: BotMemoryFact[];
    /**
     * @generated from field: optional string disclaimer = 3;
     */
    disclaimer: string;
};
/**
 * Describes the message BotMemoryMetadata.
 * Use `create(BotMemoryMetadataSchema)` to create a new message.
 */
declare const BotMemoryMetadataSchema: GenMessage<BotMemoryMetadata>;
/**
 * @generated from message BotMemuMetadata
 */
type BotMemuMetadata = Message$1<"BotMemuMetadata"> & {
    /**
     * @generated from field: repeated BotMediaMetadata faceImages = 1;
     */
    faceImages: BotMediaMetadata[];
};
/**
 * Describes the message BotMemuMetadata.
 * Use `create(BotMemuMetadataSchema)` to create a new message.
 */
declare const BotMemuMetadataSchema: GenMessage<BotMemuMetadata>;
/**
 * @generated from message BotMetadata
 */
type BotMetadata = Message$1<"BotMetadata"> & {
    /**
     * @generated from field: optional BotAvatarMetadata avatarMetadata = 1;
     */
    avatarMetadata?: BotAvatarMetadata;
    /**
     * @generated from field: optional string personaId = 2;
     */
    personaId: string;
    /**
     * @generated from field: optional BotPluginMetadata pluginMetadata = 3;
     */
    pluginMetadata?: BotPluginMetadata;
    /**
     * @generated from field: optional BotSuggestedPromptMetadata suggestedPromptMetadata = 4;
     */
    suggestedPromptMetadata?: BotSuggestedPromptMetadata;
    /**
     * @generated from field: optional string invokerJid = 5;
     */
    invokerJid: string;
    /**
     * @generated from field: optional BotSessionMetadata sessionMetadata = 6;
     */
    sessionMetadata?: BotSessionMetadata;
    /**
     * @generated from field: optional BotMemuMetadata memuMetadata = 7;
     */
    memuMetadata?: BotMemuMetadata;
    /**
     * @generated from field: optional string timezone = 8;
     */
    timezone: string;
    /**
     * @generated from field: optional BotReminderMetadata reminderMetadata = 9;
     */
    reminderMetadata?: BotReminderMetadata;
    /**
     * @generated from field: optional BotModelMetadata modelMetadata = 10;
     */
    modelMetadata?: BotModelMetadata;
    /**
     * @generated from field: optional string messageDisclaimerText = 11;
     */
    messageDisclaimerText: string;
    /**
     * @generated from field: optional BotProgressIndicatorMetadata progressIndicatorMetadata = 12;
     */
    progressIndicatorMetadata?: BotProgressIndicatorMetadata;
    /**
     * @generated from field: optional BotCapabilityMetadata capabilityMetadata = 13;
     */
    capabilityMetadata?: BotCapabilityMetadata;
    /**
     * @generated from field: optional BotImagineMetadata imagineMetadata = 14;
     */
    imagineMetadata?: BotImagineMetadata;
    /**
     * @generated from field: optional BotMemoryMetadata memoryMetadata = 15;
     */
    memoryMetadata?: BotMemoryMetadata;
    /**
     * @generated from field: optional BotRenderingMetadata renderingMetadata = 16;
     */
    renderingMetadata?: BotRenderingMetadata;
    /**
     * @generated from field: optional BotMetricsMetadata botMetricsMetadata = 17;
     */
    botMetricsMetadata?: BotMetricsMetadata;
    /**
     * @generated from field: optional BotLinkedAccountsMetadata botLinkedAccountsMetadata = 18;
     */
    botLinkedAccountsMetadata?: BotLinkedAccountsMetadata;
    /**
     * @generated from field: optional BotSourcesMetadata richResponseSourcesMetadata = 19;
     */
    richResponseSourcesMetadata?: BotSourcesMetadata;
    /**
     * @generated from field: optional bytes aiConversationContext = 20;
     */
    aiConversationContext: Uint8Array;
    /**
     * @generated from field: optional BotPromotionMessageMetadata botPromotionMessageMetadata = 21;
     */
    botPromotionMessageMetadata?: BotPromotionMessageMetadata;
    /**
     * @generated from field: optional BotModeSelectionMetadata botModeSelectionMetadata = 22;
     */
    botModeSelectionMetadata?: BotModeSelectionMetadata;
    /**
     * @generated from field: optional BotQuotaMetadata botQuotaMetadata = 23;
     */
    botQuotaMetadata?: BotQuotaMetadata;
    /**
     * @generated from field: optional BotAgeCollectionMetadata botAgeCollectionMetadata = 24;
     */
    botAgeCollectionMetadata?: BotAgeCollectionMetadata;
    /**
     * @generated from field: optional string conversationStarterPromptId = 25;
     */
    conversationStarterPromptId: string;
    /**
     * @generated from field: optional string botResponseId = 26;
     */
    botResponseId: string;
    /**
     * @generated from field: optional BotSignatureVerificationMetadata verificationMetadata = 27;
     */
    verificationMetadata?: BotSignatureVerificationMetadata;
};
/**
 * Describes the message BotMetadata.
 * Use `create(BotMetadataSchema)` to create a new message.
 */
declare const BotMetadataSchema: GenMessage<BotMetadata>;
/**
 * @generated from message BotMetricsMetadata
 */
type BotMetricsMetadata = Message$1<"BotMetricsMetadata"> & {
    /**
     * @generated from field: optional string destinationId = 1;
     */
    destinationId: string;
    /**
     * @generated from field: optional BotMetricsEntryPoint destinationEntryPoint = 2;
     */
    destinationEntryPoint: BotMetricsEntryPoint;
    /**
     * @generated from field: optional BotMetricsThreadEntryPoint threadOrigin = 3;
     */
    threadOrigin: BotMetricsThreadEntryPoint;
};
/**
 * Describes the message BotMetricsMetadata.
 * Use `create(BotMetricsMetadataSchema)` to create a new message.
 */
declare const BotMetricsMetadataSchema: GenMessage<BotMetricsMetadata>;
/**
 * @generated from message BotModeSelectionMetadata
 */
type BotModeSelectionMetadata = Message$1<"BotModeSelectionMetadata"> & {
    /**
     * @generated from field: repeated BotModeSelectionMetadata.BotUserSelectionMode mode = 1;
     */
    mode: BotModeSelectionMetadata_BotUserSelectionMode[];
};
/**
 * Describes the message BotModeSelectionMetadata.
 * Use `create(BotModeSelectionMetadataSchema)` to create a new message.
 */
declare const BotModeSelectionMetadataSchema: GenMessage<BotModeSelectionMetadata>;
/**
 * @generated from enum BotModeSelectionMetadata.BotUserSelectionMode
 */
declare enum BotModeSelectionMetadata_BotUserSelectionMode {
    /**
     * @generated from enum value: UNKNOWN_MODE = 0;
     */
    UNKNOWN_MODE = 0,
    /**
     * @generated from enum value: REASONING_MODE = 1;
     */
    REASONING_MODE = 1
}
/**
 * Describes the enum BotModeSelectionMetadata.BotUserSelectionMode.
 */
declare const BotModeSelectionMetadata_BotUserSelectionModeSchema: GenEnum<BotModeSelectionMetadata_BotUserSelectionMode>;
/**
 * @generated from message BotModelMetadata
 */
type BotModelMetadata = Message$1<"BotModelMetadata"> & {
    /**
     * @generated from field: optional BotModelMetadata.ModelType modelType = 1;
     */
    modelType: BotModelMetadata_ModelType;
    /**
     * @generated from field: optional BotModelMetadata.PremiumModelStatus premiumModelStatus = 2;
     */
    premiumModelStatus: BotModelMetadata_PremiumModelStatus;
};
/**
 * Describes the message BotModelMetadata.
 * Use `create(BotModelMetadataSchema)` to create a new message.
 */
declare const BotModelMetadataSchema: GenMessage<BotModelMetadata>;
/**
 * @generated from enum BotModelMetadata.ModelType
 */
declare enum BotModelMetadata_ModelType {
    /**
     * @generated from enum value: UNKNOWN_TYPE = 0;
     */
    UNKNOWN_TYPE = 0,
    /**
     * @generated from enum value: LLAMA_PROD = 1;
     */
    LLAMA_PROD = 1,
    /**
     * @generated from enum value: LLAMA_PROD_PREMIUM = 2;
     */
    LLAMA_PROD_PREMIUM = 2
}
/**
 * Describes the enum BotModelMetadata.ModelType.
 */
declare const BotModelMetadata_ModelTypeSchema: GenEnum<BotModelMetadata_ModelType>;
/**
 * @generated from enum BotModelMetadata.PremiumModelStatus
 */
declare enum BotModelMetadata_PremiumModelStatus {
    /**
     * @generated from enum value: UNKNOWN_STATUS = 0;
     */
    UNKNOWN_STATUS = 0,
    /**
     * @generated from enum value: AVAILABLE = 1;
     */
    AVAILABLE = 1,
    /**
     * @generated from enum value: QUOTA_EXCEED_LIMIT = 2;
     */
    QUOTA_EXCEED_LIMIT = 2
}
/**
 * Describes the enum BotModelMetadata.PremiumModelStatus.
 */
declare const BotModelMetadata_PremiumModelStatusSchema: GenEnum<BotModelMetadata_PremiumModelStatus>;
/**
 * @generated from message BotPluginMetadata
 */
type BotPluginMetadata = Message$1<"BotPluginMetadata"> & {
    /**
     * @generated from field: optional BotPluginMetadata.SearchProvider provider = 1;
     */
    provider: BotPluginMetadata_SearchProvider;
    /**
     * @generated from field: optional BotPluginMetadata.PluginType pluginType = 2;
     */
    pluginType: BotPluginMetadata_PluginType;
    /**
     * @generated from field: optional string thumbnailCdnUrl = 3;
     */
    thumbnailCdnUrl: string;
    /**
     * @generated from field: optional string profilePhotoCdnUrl = 4;
     */
    profilePhotoCdnUrl: string;
    /**
     * @generated from field: optional string searchProviderUrl = 5;
     */
    searchProviderUrl: string;
    /**
     * @generated from field: optional uint32 referenceIndex = 6;
     */
    referenceIndex: number;
    /**
     * @generated from field: optional uint32 expectedLinksCount = 7;
     */
    expectedLinksCount: number;
    /**
     * @generated from field: optional string searchQuery = 9;
     */
    searchQuery: string;
    /**
     * @generated from field: optional MessageKey parentPluginMessageKey = 10;
     */
    parentPluginMessageKey?: MessageKey;
    /**
     * @generated from field: optional BotPluginMetadata.PluginType deprecatedField = 11;
     */
    deprecatedField: BotPluginMetadata_PluginType;
    /**
     * @generated from field: optional BotPluginMetadata.PluginType parentPluginType = 12;
     */
    parentPluginType: BotPluginMetadata_PluginType;
    /**
     * @generated from field: optional string faviconCdnUrl = 13;
     */
    faviconCdnUrl: string;
};
/**
 * Describes the message BotPluginMetadata.
 * Use `create(BotPluginMetadataSchema)` to create a new message.
 */
declare const BotPluginMetadataSchema: GenMessage<BotPluginMetadata>;
/**
 * @generated from enum BotPluginMetadata.PluginType
 */
declare enum BotPluginMetadata_PluginType {
    /**
     * @generated from enum value: UNKNOWN_PLUGIN = 0;
     */
    UNKNOWN_PLUGIN = 0,
    /**
     * @generated from enum value: REELS = 1;
     */
    REELS = 1,
    /**
     * @generated from enum value: SEARCH = 2;
     */
    SEARCH = 2
}
/**
 * Describes the enum BotPluginMetadata.PluginType.
 */
declare const BotPluginMetadata_PluginTypeSchema: GenEnum<BotPluginMetadata_PluginType>;
/**
 * @generated from enum BotPluginMetadata.SearchProvider
 */
declare enum BotPluginMetadata_SearchProvider {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: BING = 1;
     */
    BING = 1,
    /**
     * @generated from enum value: GOOGLE = 2;
     */
    GOOGLE = 2,
    /**
     * @generated from enum value: SUPPORT = 3;
     */
    SUPPORT = 3
}
/**
 * Describes the enum BotPluginMetadata.SearchProvider.
 */
declare const BotPluginMetadata_SearchProviderSchema: GenEnum<BotPluginMetadata_SearchProvider>;
/**
 * @generated from message BotProgressIndicatorMetadata
 */
type BotProgressIndicatorMetadata = Message$1<"BotProgressIndicatorMetadata"> & {
    /**
     * @generated from field: optional string progressDescription = 1;
     */
    progressDescription: string;
    /**
     * @generated from field: repeated BotProgressIndicatorMetadata.BotPlanningStepMetadata stepsMetadata = 2;
     */
    stepsMetadata: BotProgressIndicatorMetadata_BotPlanningStepMetadata[];
};
/**
 * Describes the message BotProgressIndicatorMetadata.
 * Use `create(BotProgressIndicatorMetadataSchema)` to create a new message.
 */
declare const BotProgressIndicatorMetadataSchema: GenMessage<BotProgressIndicatorMetadata>;
/**
 * @generated from message BotProgressIndicatorMetadata.BotPlanningStepMetadata
 */
type BotProgressIndicatorMetadata_BotPlanningStepMetadata = Message$1<"BotProgressIndicatorMetadata.BotPlanningStepMetadata"> & {
    /**
     * @generated from field: optional string statusTitle = 1;
     */
    statusTitle: string;
    /**
     * @generated from field: optional string statusBody = 2;
     */
    statusBody: string;
    /**
     * @generated from field: repeated BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata sourcesMetadata = 3;
     */
    sourcesMetadata: BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadata[];
    /**
     * @generated from field: optional BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus status = 4;
     */
    status: BotProgressIndicatorMetadata_BotPlanningStepMetadata_PlanningStepStatus;
    /**
     * @generated from field: optional bool isReasoning = 5;
     */
    isReasoning: boolean;
    /**
     * @generated from field: optional bool isEnhancedSearch = 6;
     */
    isEnhancedSearch: boolean;
    /**
     * @generated from field: repeated BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata sections = 7;
     */
    sections: BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningStepSectionMetadata[];
};
/**
 * Describes the message BotProgressIndicatorMetadata.BotPlanningStepMetadata.
 * Use `create(BotProgressIndicatorMetadata_BotPlanningStepMetadataSchema)` to create a new message.
 */
declare const BotProgressIndicatorMetadata_BotPlanningStepMetadataSchema: GenMessage<BotProgressIndicatorMetadata_BotPlanningStepMetadata>;
/**
 * @generated from message BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata
 */
type BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourceMetadata = Message$1<"BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata"> & {
    /**
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * @generated from field: optional BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider provider = 2;
     */
    provider: BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotSearchSourceProvider;
    /**
     * @generated from field: optional string sourceUrl = 3;
     */
    sourceUrl: string;
    /**
     * @generated from field: optional string favIconUrl = 4;
     */
    favIconUrl: string;
};
/**
 * Describes the message BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.
 * Use `create(BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourceMetadataSchema)` to create a new message.
 */
declare const BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourceMetadataSchema: GenMessage<BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourceMetadata>;
/**
 * @generated from message BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata
 */
type BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadata = Message$1<"BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata"> & {
    /**
     * @generated from field: optional string sourceTitle = 1;
     */
    sourceTitle: string;
    /**
     * @generated from field: optional BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider provider = 2;
     */
    provider: BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadata_BotPlanningSearchSourceProvider;
    /**
     * @generated from field: optional string sourceUrl = 3;
     */
    sourceUrl: string;
};
/**
 * Describes the message BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.
 * Use `create(BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadataSchema)` to create a new message.
 */
declare const BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadataSchema: GenMessage<BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadata>;
/**
 * @generated from enum BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider
 */
declare enum BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadata_BotPlanningSearchSourceProvider {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: OTHER = 1;
     */
    OTHER = 1,
    /**
     * @generated from enum value: GOOGLE = 2;
     */
    GOOGLE = 2,
    /**
     * @generated from enum value: BING = 3;
     */
    BING = 3
}
/**
 * Describes the enum BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider.
 */
declare const BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadata_BotPlanningSearchSourceProviderSchema: GenEnum<BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadata_BotPlanningSearchSourceProvider>;
/**
 * @generated from message BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata
 */
type BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningStepSectionMetadata = Message$1<"BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata"> & {
    /**
     * @generated from field: optional string sectionTitle = 1;
     */
    sectionTitle: string;
    /**
     * @generated from field: optional string sectionBody = 2;
     */
    sectionBody: string;
    /**
     * @generated from field: repeated BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata sourcesMetadata = 3;
     */
    sourcesMetadata: BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourceMetadata[];
};
/**
 * Describes the message BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.
 * Use `create(BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningStepSectionMetadataSchema)` to create a new message.
 */
declare const BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningStepSectionMetadataSchema: GenMessage<BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningStepSectionMetadata>;
/**
 * @generated from enum BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider
 */
declare enum BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotSearchSourceProvider {
    /**
     * @generated from enum value: UNKNOWN_PROVIDER = 0;
     */
    UNKNOWN_PROVIDER = 0,
    /**
     * @generated from enum value: OTHER = 1;
     */
    OTHER = 1,
    /**
     * @generated from enum value: GOOGLE = 2;
     */
    GOOGLE = 2,
    /**
     * @generated from enum value: BING = 3;
     */
    BING = 3
}
/**
 * Describes the enum BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider.
 */
declare const BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotSearchSourceProviderSchema: GenEnum<BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotSearchSourceProvider>;
/**
 * @generated from enum BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus
 */
declare enum BotProgressIndicatorMetadata_BotPlanningStepMetadata_PlanningStepStatus {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: PLANNED = 1;
     */
    PLANNED = 1,
    /**
     * @generated from enum value: EXECUTING = 2;
     */
    EXECUTING = 2,
    /**
     * @generated from enum value: FINISHED = 3;
     */
    FINISHED = 3
}
/**
 * Describes the enum BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus.
 */
declare const BotProgressIndicatorMetadata_BotPlanningStepMetadata_PlanningStepStatusSchema: GenEnum<BotProgressIndicatorMetadata_BotPlanningStepMetadata_PlanningStepStatus>;
/**
 * @generated from message BotPromotionMessageMetadata
 */
type BotPromotionMessageMetadata = Message$1<"BotPromotionMessageMetadata"> & {
    /**
     * @generated from field: optional BotPromotionMessageMetadata.BotPromotionType promotionType = 1;
     */
    promotionType: BotPromotionMessageMetadata_BotPromotionType;
    /**
     * @generated from field: optional string buttonTitle = 2;
     */
    buttonTitle: string;
};
/**
 * Describes the message BotPromotionMessageMetadata.
 * Use `create(BotPromotionMessageMetadataSchema)` to create a new message.
 */
declare const BotPromotionMessageMetadataSchema: GenMessage<BotPromotionMessageMetadata>;
/**
 * @generated from enum BotPromotionMessageMetadata.BotPromotionType
 */
declare enum BotPromotionMessageMetadata_BotPromotionType {
    /**
     * @generated from enum value: UNKNOWN_TYPE = 0;
     */
    UNKNOWN_TYPE = 0,
    /**
     * @generated from enum value: C50 = 1;
     */
    C50 = 1
}
/**
 * Describes the enum BotPromotionMessageMetadata.BotPromotionType.
 */
declare const BotPromotionMessageMetadata_BotPromotionTypeSchema: GenEnum<BotPromotionMessageMetadata_BotPromotionType>;
/**
 * @generated from message BotPromptSuggestion
 */
type BotPromptSuggestion = Message$1<"BotPromptSuggestion"> & {
    /**
     * @generated from field: optional string prompt = 1;
     */
    prompt: string;
    /**
     * @generated from field: optional string promptId = 2;
     */
    promptId: string;
};
/**
 * Describes the message BotPromptSuggestion.
 * Use `create(BotPromptSuggestionSchema)` to create a new message.
 */
declare const BotPromptSuggestionSchema: GenMessage<BotPromptSuggestion>;
/**
 * @generated from message BotPromptSuggestions
 */
type BotPromptSuggestions = Message$1<"BotPromptSuggestions"> & {
    /**
     * @generated from field: repeated BotPromptSuggestion suggestions = 1;
     */
    suggestions: BotPromptSuggestion[];
};
/**
 * Describes the message BotPromptSuggestions.
 * Use `create(BotPromptSuggestionsSchema)` to create a new message.
 */
declare const BotPromptSuggestionsSchema: GenMessage<BotPromptSuggestions>;
/**
 * @generated from message BotQuotaMetadata
 */
type BotQuotaMetadata = Message$1<"BotQuotaMetadata"> & {
    /**
     * @generated from field: repeated BotQuotaMetadata.BotFeatureQuotaMetadata botFeatureQuotaMetadata = 1;
     */
    botFeatureQuotaMetadata: BotQuotaMetadata_BotFeatureQuotaMetadata[];
};
/**
 * Describes the message BotQuotaMetadata.
 * Use `create(BotQuotaMetadataSchema)` to create a new message.
 */
declare const BotQuotaMetadataSchema: GenMessage<BotQuotaMetadata>;
/**
 * @generated from message BotQuotaMetadata.BotFeatureQuotaMetadata
 */
type BotQuotaMetadata_BotFeatureQuotaMetadata = Message$1<"BotQuotaMetadata.BotFeatureQuotaMetadata"> & {
    /**
     * @generated from field: optional BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType featureType = 1;
     */
    featureType: BotQuotaMetadata_BotFeatureQuotaMetadata_BotFeatureType;
    /**
     * @generated from field: optional uint32 remainingQuota = 2;
     */
    remainingQuota: number;
    /**
     * @generated from field: optional uint64 expirationTimestamp = 3;
     */
    expirationTimestamp: bigint;
};
/**
 * Describes the message BotQuotaMetadata.BotFeatureQuotaMetadata.
 * Use `create(BotQuotaMetadata_BotFeatureQuotaMetadataSchema)` to create a new message.
 */
declare const BotQuotaMetadata_BotFeatureQuotaMetadataSchema: GenMessage<BotQuotaMetadata_BotFeatureQuotaMetadata>;
/**
 * @generated from enum BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType
 */
declare enum BotQuotaMetadata_BotFeatureQuotaMetadata_BotFeatureType {
    /**
     * @generated from enum value: UNKNOWN_FEATURE = 0;
     */
    UNKNOWN_FEATURE = 0,
    /**
     * @generated from enum value: REASONING_FEATURE = 1;
     */
    REASONING_FEATURE = 1
}
/**
 * Describes the enum BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType.
 */
declare const BotQuotaMetadata_BotFeatureQuotaMetadata_BotFeatureTypeSchema: GenEnum<BotQuotaMetadata_BotFeatureQuotaMetadata_BotFeatureType>;
/**
 * @generated from message BotReminderMetadata
 */
type BotReminderMetadata = Message$1<"BotReminderMetadata"> & {
    /**
     * @generated from field: optional MessageKey requestMessageKey = 1;
     */
    requestMessageKey?: MessageKey;
    /**
     * @generated from field: optional BotReminderMetadata.ReminderAction action = 2;
     */
    action: BotReminderMetadata_ReminderAction;
    /**
     * @generated from field: optional string name = 3;
     */
    name: string;
    /**
     * @generated from field: optional uint64 nextTriggerTimestamp = 4;
     */
    nextTriggerTimestamp: bigint;
    /**
     * @generated from field: optional BotReminderMetadata.ReminderFrequency frequency = 5;
     */
    frequency: BotReminderMetadata_ReminderFrequency;
};
/**
 * Describes the message BotReminderMetadata.
 * Use `create(BotReminderMetadataSchema)` to create a new message.
 */
declare const BotReminderMetadataSchema: GenMessage<BotReminderMetadata>;
/**
 * @generated from enum BotReminderMetadata.ReminderAction
 */
declare enum BotReminderMetadata_ReminderAction {
    /**
     * @generated from enum value: NOTIFY = 1;
     */
    NOTIFY = 1,
    /**
     * @generated from enum value: CREATE = 2;
     */
    CREATE = 2,
    /**
     * @generated from enum value: DELETE = 3;
     */
    DELETE = 3,
    /**
     * @generated from enum value: UPDATE = 4;
     */
    UPDATE = 4
}
/**
 * Describes the enum BotReminderMetadata.ReminderAction.
 */
declare const BotReminderMetadata_ReminderActionSchema: GenEnum<BotReminderMetadata_ReminderAction>;
/**
 * @generated from enum BotReminderMetadata.ReminderFrequency
 */
declare enum BotReminderMetadata_ReminderFrequency {
    /**
     * @generated from enum value: ONCE = 1;
     */
    ONCE = 1,
    /**
     * @generated from enum value: DAILY = 2;
     */
    DAILY = 2,
    /**
     * @generated from enum value: WEEKLY = 3;
     */
    WEEKLY = 3,
    /**
     * @generated from enum value: BIWEEKLY = 4;
     */
    BIWEEKLY = 4,
    /**
     * @generated from enum value: MONTHLY = 5;
     */
    MONTHLY = 5
}
/**
 * Describes the enum BotReminderMetadata.ReminderFrequency.
 */
declare const BotReminderMetadata_ReminderFrequencySchema: GenEnum<BotReminderMetadata_ReminderFrequency>;
/**
 * @generated from message BotRenderingMetadata
 */
type BotRenderingMetadata = Message$1<"BotRenderingMetadata"> & {
    /**
     * @generated from field: repeated BotRenderingMetadata.Keyword keywords = 1;
     */
    keywords: BotRenderingMetadata_Keyword[];
};
/**
 * Describes the message BotRenderingMetadata.
 * Use `create(BotRenderingMetadataSchema)` to create a new message.
 */
declare const BotRenderingMetadataSchema: GenMessage<BotRenderingMetadata>;
/**
 * @generated from message BotRenderingMetadata.Keyword
 */
type BotRenderingMetadata_Keyword = Message$1<"BotRenderingMetadata.Keyword"> & {
    /**
     * @generated from field: optional string value = 1;
     */
    value: string;
    /**
     * @generated from field: repeated string associatedPrompts = 2;
     */
    associatedPrompts: string[];
};
/**
 * Describes the message BotRenderingMetadata.Keyword.
 * Use `create(BotRenderingMetadata_KeywordSchema)` to create a new message.
 */
declare const BotRenderingMetadata_KeywordSchema: GenMessage<BotRenderingMetadata_Keyword>;
/**
 * @generated from message BotSessionMetadata
 */
type BotSessionMetadata = Message$1<"BotSessionMetadata"> & {
    /**
     * @generated from field: optional string sessionId = 1;
     */
    sessionId: string;
    /**
     * @generated from field: optional BotSessionSource sessionSource = 2;
     */
    sessionSource: BotSessionSource;
};
/**
 * Describes the message BotSessionMetadata.
 * Use `create(BotSessionMetadataSchema)` to create a new message.
 */
declare const BotSessionMetadataSchema: GenMessage<BotSessionMetadata>;
/**
 * @generated from message BotSignatureVerificationMetadata
 */
type BotSignatureVerificationMetadata = Message$1<"BotSignatureVerificationMetadata"> & {
    /**
     * @generated from field: repeated BotSignatureVerificationUseCaseProof proofs = 1;
     */
    proofs: BotSignatureVerificationUseCaseProof[];
};
/**
 * Describes the message BotSignatureVerificationMetadata.
 * Use `create(BotSignatureVerificationMetadataSchema)` to create a new message.
 */
declare const BotSignatureVerificationMetadataSchema: GenMessage<BotSignatureVerificationMetadata>;
/**
 * @generated from message BotSignatureVerificationUseCaseProof
 */
type BotSignatureVerificationUseCaseProof = Message$1<"BotSignatureVerificationUseCaseProof"> & {
    /**
     * @generated from field: optional int32 version = 1;
     */
    version: number;
    /**
     * @generated from field: optional BotSignatureVerificationUseCaseProof.BotSignatureUseCase useCase = 2;
     */
    useCase: BotSignatureVerificationUseCaseProof_BotSignatureUseCase;
    /**
     * @generated from field: optional bytes signature = 3;
     */
    signature: Uint8Array;
    /**
     * @generated from field: optional bytes certificateChain = 4;
     */
    certificateChain: Uint8Array;
};
/**
 * Describes the message BotSignatureVerificationUseCaseProof.
 * Use `create(BotSignatureVerificationUseCaseProofSchema)` to create a new message.
 */
declare const BotSignatureVerificationUseCaseProofSchema: GenMessage<BotSignatureVerificationUseCaseProof>;
/**
 * @generated from enum BotSignatureVerificationUseCaseProof.BotSignatureUseCase
 */
declare enum BotSignatureVerificationUseCaseProof_BotSignatureUseCase {
    /**
     * @generated from enum value: WA_BOT_MSG = 0;
     */
    WA_BOT_MSG = 0
}
/**
 * Describes the enum BotSignatureVerificationUseCaseProof.BotSignatureUseCase.
 */
declare const BotSignatureVerificationUseCaseProof_BotSignatureUseCaseSchema: GenEnum<BotSignatureVerificationUseCaseProof_BotSignatureUseCase>;
/**
 * @generated from message BotSourcesMetadata
 */
type BotSourcesMetadata = Message$1<"BotSourcesMetadata"> & {
    /**
     * @generated from field: repeated BotSourcesMetadata.BotSourceItem sources = 1;
     */
    sources: BotSourcesMetadata_BotSourceItem[];
};
/**
 * Describes the message BotSourcesMetadata.
 * Use `create(BotSourcesMetadataSchema)` to create a new message.
 */
declare const BotSourcesMetadataSchema: GenMessage<BotSourcesMetadata>;
/**
 * @generated from message BotSourcesMetadata.BotSourceItem
 */
type BotSourcesMetadata_BotSourceItem = Message$1<"BotSourcesMetadata.BotSourceItem"> & {
    /**
     * @generated from field: optional BotSourcesMetadata.BotSourceItem.SourceProvider provider = 1;
     */
    provider: BotSourcesMetadata_BotSourceItem_SourceProvider;
    /**
     * @generated from field: optional string thumbnailCdnUrl = 2;
     */
    thumbnailCdnUrl: string;
    /**
     * @generated from field: optional string sourceProviderUrl = 3;
     */
    sourceProviderUrl: string;
    /**
     * @generated from field: optional string sourceQuery = 4;
     */
    sourceQuery: string;
    /**
     * @generated from field: optional string faviconCdnUrl = 5;
     */
    faviconCdnUrl: string;
    /**
     * @generated from field: optional uint32 citationNumber = 6;
     */
    citationNumber: number;
    /**
     * @generated from field: optional string sourceTitle = 7;
     */
    sourceTitle: string;
};
/**
 * Describes the message BotSourcesMetadata.BotSourceItem.
 * Use `create(BotSourcesMetadata_BotSourceItemSchema)` to create a new message.
 */
declare const BotSourcesMetadata_BotSourceItemSchema: GenMessage<BotSourcesMetadata_BotSourceItem>;
/**
 * @generated from enum BotSourcesMetadata.BotSourceItem.SourceProvider
 */
declare enum BotSourcesMetadata_BotSourceItem_SourceProvider {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: BING = 1;
     */
    BING = 1,
    /**
     * @generated from enum value: GOOGLE = 2;
     */
    GOOGLE = 2,
    /**
     * @generated from enum value: SUPPORT = 3;
     */
    SUPPORT = 3
}
/**
 * Describes the enum BotSourcesMetadata.BotSourceItem.SourceProvider.
 */
declare const BotSourcesMetadata_BotSourceItem_SourceProviderSchema: GenEnum<BotSourcesMetadata_BotSourceItem_SourceProvider>;
/**
 * @generated from message BotSuggestedPromptMetadata
 */
type BotSuggestedPromptMetadata = Message$1<"BotSuggestedPromptMetadata"> & {
    /**
     * @generated from field: repeated string suggestedPrompts = 1;
     */
    suggestedPrompts: string[];
    /**
     * @generated from field: optional uint32 selectedPromptIndex = 2;
     */
    selectedPromptIndex: number;
    /**
     * @generated from field: optional BotPromptSuggestions promptSuggestions = 3;
     */
    promptSuggestions?: BotPromptSuggestions;
    /**
     * @generated from field: optional string selectedPromptId = 4;
     */
    selectedPromptId: string;
};
/**
 * Describes the message BotSuggestedPromptMetadata.
 * Use `create(BotSuggestedPromptMetadataSchema)` to create a new message.
 */
declare const BotSuggestedPromptMetadataSchema: GenMessage<BotSuggestedPromptMetadata>;
/**
 * @generated from message CallLogRecord
 */
type CallLogRecord = Message$1<"CallLogRecord"> & {
    /**
     * @generated from field: optional CallLogRecord.CallResult callResult = 1;
     */
    callResult: CallLogRecord_CallResult;
    /**
     * @generated from field: optional bool isDndMode = 2;
     */
    isDndMode: boolean;
    /**
     * @generated from field: optional CallLogRecord.SilenceReason silenceReason = 3;
     */
    silenceReason: CallLogRecord_SilenceReason;
    /**
     * @generated from field: optional int64 duration = 4;
     */
    duration: bigint;
    /**
     * @generated from field: optional int64 startTime = 5;
     */
    startTime: bigint;
    /**
     * @generated from field: optional bool isIncoming = 6;
     */
    isIncoming: boolean;
    /**
     * @generated from field: optional bool isVideo = 7;
     */
    isVideo: boolean;
    /**
     * @generated from field: optional bool isCallLink = 8;
     */
    isCallLink: boolean;
    /**
     * @generated from field: optional string callLinkToken = 9;
     */
    callLinkToken: string;
    /**
     * @generated from field: optional string scheduledCallId = 10;
     */
    scheduledCallId: string;
    /**
     * @generated from field: optional string callId = 11;
     */
    callId: string;
    /**
     * @generated from field: optional string callCreatorJid = 12;
     */
    callCreatorJid: string;
    /**
     * @generated from field: optional string groupJid = 13;
     */
    groupJid: string;
    /**
     * @generated from field: repeated CallLogRecord.ParticipantInfo participants = 14;
     */
    participants: CallLogRecord_ParticipantInfo[];
    /**
     * @generated from field: optional CallLogRecord.CallType callType = 15;
     */
    callType: CallLogRecord_CallType;
};
/**
 * Describes the message CallLogRecord.
 * Use `create(CallLogRecordSchema)` to create a new message.
 */
declare const CallLogRecordSchema: GenMessage<CallLogRecord>;
/**
 * @generated from message CallLogRecord.ParticipantInfo
 */
type CallLogRecord_ParticipantInfo = Message$1<"CallLogRecord.ParticipantInfo"> & {
    /**
     * @generated from field: optional string userJid = 1;
     */
    userJid: string;
    /**
     * @generated from field: optional CallLogRecord.CallResult callResult = 2;
     */
    callResult: CallLogRecord_CallResult;
};
/**
 * Describes the message CallLogRecord.ParticipantInfo.
 * Use `create(CallLogRecord_ParticipantInfoSchema)` to create a new message.
 */
declare const CallLogRecord_ParticipantInfoSchema: GenMessage<CallLogRecord_ParticipantInfo>;
/**
 * @generated from enum CallLogRecord.CallResult
 */
declare enum CallLogRecord_CallResult {
    /**
     * @generated from enum value: CONNECTED = 0;
     */
    CONNECTED = 0,
    /**
     * @generated from enum value: REJECTED = 1;
     */
    REJECTED = 1,
    /**
     * @generated from enum value: CANCELLED = 2;
     */
    CANCELLED = 2,
    /**
     * @generated from enum value: ACCEPTEDELSEWHERE = 3;
     */
    ACCEPTEDELSEWHERE = 3,
    /**
     * @generated from enum value: MISSED = 4;
     */
    MISSED = 4,
    /**
     * @generated from enum value: INVALID = 5;
     */
    INVALID = 5,
    /**
     * @generated from enum value: UNAVAILABLE = 6;
     */
    UNAVAILABLE = 6,
    /**
     * @generated from enum value: UPCOMING = 7;
     */
    UPCOMING = 7,
    /**
     * @generated from enum value: FAILED = 8;
     */
    FAILED = 8,
    /**
     * @generated from enum value: ABANDONED = 9;
     */
    ABANDONED = 9,
    /**
     * @generated from enum value: ONGOING = 10;
     */
    ONGOING = 10
}
/**
 * Describes the enum CallLogRecord.CallResult.
 */
declare const CallLogRecord_CallResultSchema: GenEnum<CallLogRecord_CallResult>;
/**
 * @generated from enum CallLogRecord.CallType
 */
declare enum CallLogRecord_CallType {
    /**
     * @generated from enum value: REGULAR = 0;
     */
    REGULAR = 0,
    /**
     * @generated from enum value: SCHEDULED_CALL = 1;
     */
    SCHEDULED_CALL = 1,
    /**
     * @generated from enum value: VOICE_CHAT = 2;
     */
    VOICE_CHAT = 2
}
/**
 * Describes the enum CallLogRecord.CallType.
 */
declare const CallLogRecord_CallTypeSchema: GenEnum<CallLogRecord_CallType>;
/**
 * @generated from enum CallLogRecord.SilenceReason
 */
declare enum CallLogRecord_SilenceReason {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: SCHEDULED = 1;
     */
    SCHEDULED = 1,
    /**
     * @generated from enum value: PRIVACY = 2;
     */
    PRIVACY = 2,
    /**
     * @generated from enum value: LIGHTWEIGHT = 3;
     */
    LIGHTWEIGHT = 3
}
/**
 * Describes the enum CallLogRecord.SilenceReason.
 */
declare const CallLogRecord_SilenceReasonSchema: GenEnum<CallLogRecord_SilenceReason>;
/**
 * @generated from message CertChain
 */
type CertChain = Message$1<"CertChain"> & {
    /**
     * @generated from field: optional CertChain.NoiseCertificate leaf = 1;
     */
    leaf?: CertChain_NoiseCertificate;
    /**
     * @generated from field: optional CertChain.NoiseCertificate intermediate = 2;
     */
    intermediate?: CertChain_NoiseCertificate;
};
/**
 * Describes the message CertChain.
 * Use `create(CertChainSchema)` to create a new message.
 */
declare const CertChainSchema: GenMessage<CertChain>;
/**
 * @generated from message CertChain.NoiseCertificate
 */
type CertChain_NoiseCertificate = Message$1<"CertChain.NoiseCertificate"> & {
    /**
     * @generated from field: optional bytes details = 1;
     */
    details: Uint8Array;
    /**
     * @generated from field: optional bytes signature = 2;
     */
    signature: Uint8Array;
};
/**
 * Describes the message CertChain.NoiseCertificate.
 * Use `create(CertChain_NoiseCertificateSchema)` to create a new message.
 */
declare const CertChain_NoiseCertificateSchema: GenMessage<CertChain_NoiseCertificate>;
/**
 * @generated from message CertChain.NoiseCertificate.Details
 */
type CertChain_NoiseCertificate_Details = Message$1<"CertChain.NoiseCertificate.Details"> & {
    /**
     * @generated from field: optional uint32 serial = 1;
     */
    serial: number;
    /**
     * @generated from field: optional uint32 issuerSerial = 2;
     */
    issuerSerial: number;
    /**
     * @generated from field: optional bytes key = 3;
     */
    key: Uint8Array;
    /**
     * @generated from field: optional uint64 notBefore = 4;
     */
    notBefore: bigint;
    /**
     * @generated from field: optional uint64 notAfter = 5;
     */
    notAfter: bigint;
};
/**
 * Describes the message CertChain.NoiseCertificate.Details.
 * Use `create(CertChain_NoiseCertificate_DetailsSchema)` to create a new message.
 */
declare const CertChain_NoiseCertificate_DetailsSchema: GenMessage<CertChain_NoiseCertificate_Details>;
/**
 * @generated from message ChatLockSettings
 */
type ChatLockSettings = Message$1<"ChatLockSettings"> & {
    /**
     * @generated from field: optional bool hideLockedChats = 1;
     */
    hideLockedChats: boolean;
    /**
     * @generated from field: optional UserPassword secretCode = 2;
     */
    secretCode?: UserPassword;
};
/**
 * Describes the message ChatLockSettings.
 * Use `create(ChatLockSettingsSchema)` to create a new message.
 */
declare const ChatLockSettingsSchema: GenMessage<ChatLockSettings>;
/**
 * @generated from message ChatRowOpaqueData
 */
type ChatRowOpaqueData = Message$1<"ChatRowOpaqueData"> & {
    /**
     * @generated from field: optional ChatRowOpaqueData.DraftMessage draftMessage = 1;
     */
    draftMessage?: ChatRowOpaqueData_DraftMessage;
};
/**
 * Describes the message ChatRowOpaqueData.
 * Use `create(ChatRowOpaqueDataSchema)` to create a new message.
 */
declare const ChatRowOpaqueDataSchema: GenMessage<ChatRowOpaqueData>;
/**
 * @generated from message ChatRowOpaqueData.DraftMessage
 */
type ChatRowOpaqueData_DraftMessage = Message$1<"ChatRowOpaqueData.DraftMessage"> & {
    /**
     * @generated from field: optional string text = 1;
     */
    text: string;
    /**
     * @generated from field: optional string omittedUrl = 2;
     */
    omittedUrl: string;
    /**
     * @generated from field: optional ChatRowOpaqueData.DraftMessage.CtwaContextLinkData ctwaContextLinkData = 3;
     */
    ctwaContextLinkData?: ChatRowOpaqueData_DraftMessage_CtwaContextLinkData;
    /**
     * @generated from field: optional ChatRowOpaqueData.DraftMessage.CtwaContextData ctwaContext = 4;
     */
    ctwaContext?: ChatRowOpaqueData_DraftMessage_CtwaContextData;
    /**
     * @generated from field: optional int64 timestamp = 5;
     */
    timestamp: bigint;
};
/**
 * Describes the message ChatRowOpaqueData.DraftMessage.
 * Use `create(ChatRowOpaqueData_DraftMessageSchema)` to create a new message.
 */
declare const ChatRowOpaqueData_DraftMessageSchema: GenMessage<ChatRowOpaqueData_DraftMessage>;
/**
 * @generated from message ChatRowOpaqueData.DraftMessage.CtwaContextData
 */
type ChatRowOpaqueData_DraftMessage_CtwaContextData = Message$1<"ChatRowOpaqueData.DraftMessage.CtwaContextData"> & {
    /**
     * @generated from field: optional string conversionSource = 1;
     */
    conversionSource: string;
    /**
     * @generated from field: optional bytes conversionData = 2;
     */
    conversionData: Uint8Array;
    /**
     * @generated from field: optional string sourceUrl = 3;
     */
    sourceUrl: string;
    /**
     * @generated from field: optional string sourceId = 4;
     */
    sourceId: string;
    /**
     * @generated from field: optional string sourceType = 5;
     */
    sourceType: string;
    /**
     * @generated from field: optional string title = 6;
     */
    title: string;
    /**
     * @generated from field: optional string description = 7;
     */
    description: string;
    /**
     * @generated from field: optional string thumbnail = 8;
     */
    thumbnail: string;
    /**
     * @generated from field: optional string thumbnailUrl = 9;
     */
    thumbnailUrl: string;
    /**
     * @generated from field: optional ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType mediaType = 10;
     */
    mediaType: ChatRowOpaqueData_DraftMessage_CtwaContextData_ContextInfoExternalAdReplyInfoMediaType;
    /**
     * @generated from field: optional string mediaUrl = 11;
     */
    mediaUrl: string;
    /**
     * @generated from field: optional bool isSuspiciousLink = 12;
     */
    isSuspiciousLink: boolean;
};
/**
 * Describes the message ChatRowOpaqueData.DraftMessage.CtwaContextData.
 * Use `create(ChatRowOpaqueData_DraftMessage_CtwaContextDataSchema)` to create a new message.
 */
declare const ChatRowOpaqueData_DraftMessage_CtwaContextDataSchema: GenMessage<ChatRowOpaqueData_DraftMessage_CtwaContextData>;
/**
 * @generated from enum ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType
 */
declare enum ChatRowOpaqueData_DraftMessage_CtwaContextData_ContextInfoExternalAdReplyInfoMediaType {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: IMAGE = 1;
     */
    IMAGE = 1,
    /**
     * @generated from enum value: VIDEO = 2;
     */
    VIDEO = 2
}
/**
 * Describes the enum ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType.
 */
declare const ChatRowOpaqueData_DraftMessage_CtwaContextData_ContextInfoExternalAdReplyInfoMediaTypeSchema: GenEnum<ChatRowOpaqueData_DraftMessage_CtwaContextData_ContextInfoExternalAdReplyInfoMediaType>;
/**
 * @generated from message ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
 */
type ChatRowOpaqueData_DraftMessage_CtwaContextLinkData = Message$1<"ChatRowOpaqueData.DraftMessage.CtwaContextLinkData"> & {
    /**
     * @generated from field: optional string context = 1;
     */
    context: string;
    /**
     * @generated from field: optional string sourceUrl = 2;
     */
    sourceUrl: string;
    /**
     * @generated from field: optional string icebreaker = 3;
     */
    icebreaker: string;
    /**
     * @generated from field: optional string phone = 4;
     */
    phone: string;
};
/**
 * Describes the message ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.
 * Use `create(ChatRowOpaqueData_DraftMessage_CtwaContextLinkDataSchema)` to create a new message.
 */
declare const ChatRowOpaqueData_DraftMessage_CtwaContextLinkDataSchema: GenMessage<ChatRowOpaqueData_DraftMessage_CtwaContextLinkData>;
/**
 * @generated from message Citation
 */
type Citation = Message$1<"Citation"> & {
    /**
     * @generated from field: required string title = 1;
     */
    title: string;
    /**
     * @generated from field: required string subtitle = 2;
     */
    subtitle: string;
    /**
     * @generated from field: required string cmsId = 3;
     */
    cmsId: string;
    /**
     * @generated from field: required string imageUrl = 4;
     */
    imageUrl: string;
};
/**
 * Describes the message Citation.
 * Use `create(CitationSchema)` to create a new message.
 */
declare const CitationSchema: GenMessage<Citation>;
/**
 * @generated from message ClientPairingProps
 */
type ClientPairingProps = Message$1<"ClientPairingProps"> & {
    /**
     * @generated from field: optional bool isChatDbLidMigrated = 1;
     */
    isChatDbLidMigrated: boolean;
    /**
     * @generated from field: optional bool isSyncdPureLidSession = 2;
     */
    isSyncdPureLidSession: boolean;
    /**
     * @generated from field: optional bool isSyncdSnapshotRecoveryEnabled = 3;
     */
    isSyncdSnapshotRecoveryEnabled: boolean;
};
/**
 * Describes the message ClientPairingProps.
 * Use `create(ClientPairingPropsSchema)` to create a new message.
 */
declare const ClientPairingPropsSchema: GenMessage<ClientPairingProps>;
/**
 * @generated from message ClientPayload
 */
type ClientPayload = Message$1<"ClientPayload"> & {
    /**
     * @generated from field: optional uint64 username = 1;
     */
    username: bigint;
    /**
     * @generated from field: optional bool passive = 3;
     */
    passive: boolean;
    /**
     * @generated from field: optional ClientPayload.UserAgent userAgent = 5;
     */
    userAgent?: ClientPayload_UserAgent;
    /**
     * @generated from field: optional ClientPayload.WebInfo webInfo = 6;
     */
    webInfo?: ClientPayload_WebInfo;
    /**
     * @generated from field: optional string pushName = 7;
     */
    pushName: string;
    /**
     * @generated from field: optional sfixed32 sessionId = 9;
     */
    sessionId: number;
    /**
     * @generated from field: optional bool shortConnect = 10;
     */
    shortConnect: boolean;
    /**
     * @generated from field: optional ClientPayload.ConnectType connectType = 12;
     */
    connectType: ClientPayload_ConnectType;
    /**
     * @generated from field: optional ClientPayload.ConnectReason connectReason = 13;
     */
    connectReason: ClientPayload_ConnectReason;
    /**
     * @generated from field: repeated int32 shards = 14;
     */
    shards: number[];
    /**
     * @generated from field: optional ClientPayload.DNSSource dnsSource = 15;
     */
    dnsSource?: ClientPayload_DNSSource;
    /**
     * @generated from field: optional uint32 connectAttemptCount = 16;
     */
    connectAttemptCount: number;
    /**
     * @generated from field: optional uint32 device = 18;
     */
    device: number;
    /**
     * @generated from field: optional ClientPayload.DevicePairingRegistrationData devicePairingData = 19;
     */
    devicePairingData?: ClientPayload_DevicePairingRegistrationData;
    /**
     * @generated from field: optional ClientPayload.Product product = 20;
     */
    product: ClientPayload_Product;
    /**
     * @generated from field: optional bytes fbCat = 21;
     */
    fbCat: Uint8Array;
    /**
     * @generated from field: optional bytes fbUserAgent = 22;
     */
    fbUserAgent: Uint8Array;
    /**
     * @generated from field: optional bool oc = 23;
     */
    oc: boolean;
    /**
     * @generated from field: optional int32 lc = 24;
     */
    lc: number;
    /**
     * @generated from field: optional ClientPayload.IOSAppExtension iosAppExtension = 30;
     */
    iosAppExtension: ClientPayload_IOSAppExtension;
    /**
     * @generated from field: optional uint64 fbAppId = 31;
     */
    fbAppId: bigint;
    /**
     * @generated from field: optional bytes fbDeviceId = 32;
     */
    fbDeviceId: Uint8Array;
    /**
     * @generated from field: optional bool pull = 33;
     */
    pull: boolean;
    /**
     * @generated from field: optional bytes paddingBytes = 34;
     */
    paddingBytes: Uint8Array;
    /**
     * @generated from field: optional int32 yearClass = 36;
     */
    yearClass: number;
    /**
     * @generated from field: optional int32 memClass = 37;
     */
    memClass: number;
    /**
     * @generated from field: optional ClientPayload.InteropData interopData = 38;
     */
    interopData?: ClientPayload_InteropData;
    /**
     * @generated from field: optional ClientPayload.TrafficAnonymization trafficAnonymization = 40;
     */
    trafficAnonymization: ClientPayload_TrafficAnonymization;
    /**
     * @generated from field: optional bool lidDbMigrated = 41;
     */
    lidDbMigrated: boolean;
    /**
     * @generated from field: optional ClientPayload.AccountType accountType = 42;
     */
    accountType: ClientPayload_AccountType;
};
/**
 * Describes the message ClientPayload.
 * Use `create(ClientPayloadSchema)` to create a new message.
 */
declare const ClientPayloadSchema: GenMessage<ClientPayload>;
/**
 * @generated from message ClientPayload.DNSSource
 */
type ClientPayload_DNSSource = Message$1<"ClientPayload.DNSSource"> & {
    /**
     * @generated from field: optional ClientPayload.DNSSource.DNSResolutionMethod dnsMethod = 15;
     */
    dnsMethod: ClientPayload_DNSSource_DNSResolutionMethod;
    /**
     * @generated from field: optional bool appCached = 16;
     */
    appCached: boolean;
};
/**
 * Describes the message ClientPayload.DNSSource.
 * Use `create(ClientPayload_DNSSourceSchema)` to create a new message.
 */
declare const ClientPayload_DNSSourceSchema: GenMessage<ClientPayload_DNSSource>;
/**
 * @generated from enum ClientPayload.DNSSource.DNSResolutionMethod
 */
declare enum ClientPayload_DNSSource_DNSResolutionMethod {
    /**
     * @generated from enum value: SYSTEM = 0;
     */
    SYSTEM = 0,
    /**
     * @generated from enum value: GOOGLE = 1;
     */
    GOOGLE = 1,
    /**
     * @generated from enum value: HARDCODED = 2;
     */
    HARDCODED = 2,
    /**
     * @generated from enum value: OVERRIDE = 3;
     */
    OVERRIDE = 3,
    /**
     * @generated from enum value: FALLBACK = 4;
     */
    FALLBACK = 4,
    /**
     * @generated from enum value: MNS = 5;
     */
    MNS = 5
}
/**
 * Describes the enum ClientPayload.DNSSource.DNSResolutionMethod.
 */
declare const ClientPayload_DNSSource_DNSResolutionMethodSchema: GenEnum<ClientPayload_DNSSource_DNSResolutionMethod>;
/**
 * @generated from message ClientPayload.DevicePairingRegistrationData
 */
type ClientPayload_DevicePairingRegistrationData = Message$1<"ClientPayload.DevicePairingRegistrationData"> & {
    /**
     * @generated from field: optional bytes eRegid = 1;
     */
    eRegid: Uint8Array;
    /**
     * @generated from field: optional bytes eKeytype = 2;
     */
    eKeytype: Uint8Array;
    /**
     * @generated from field: optional bytes eIdent = 3;
     */
    eIdent: Uint8Array;
    /**
     * @generated from field: optional bytes eSkeyId = 4;
     */
    eSkeyId: Uint8Array;
    /**
     * @generated from field: optional bytes eSkeyVal = 5;
     */
    eSkeyVal: Uint8Array;
    /**
     * @generated from field: optional bytes eSkeySig = 6;
     */
    eSkeySig: Uint8Array;
    /**
     * @generated from field: optional bytes buildHash = 7;
     */
    buildHash: Uint8Array;
    /**
     * @generated from field: optional bytes deviceProps = 8;
     */
    deviceProps: Uint8Array;
};
/**
 * Describes the message ClientPayload.DevicePairingRegistrationData.
 * Use `create(ClientPayload_DevicePairingRegistrationDataSchema)` to create a new message.
 */
declare const ClientPayload_DevicePairingRegistrationDataSchema: GenMessage<ClientPayload_DevicePairingRegistrationData>;
/**
 * @generated from message ClientPayload.InteropData
 */
type ClientPayload_InteropData = Message$1<"ClientPayload.InteropData"> & {
    /**
     * @generated from field: optional uint64 accountId = 1;
     */
    accountId: bigint;
    /**
     * @generated from field: optional bytes token = 2;
     */
    token: Uint8Array;
    /**
     * @generated from field: optional bool enableReadReceipts = 3;
     */
    enableReadReceipts: boolean;
};
/**
 * Describes the message ClientPayload.InteropData.
 * Use `create(ClientPayload_InteropDataSchema)` to create a new message.
 */
declare const ClientPayload_InteropDataSchema: GenMessage<ClientPayload_InteropData>;
/**
 * @generated from message ClientPayload.UserAgent
 */
type ClientPayload_UserAgent = Message$1<"ClientPayload.UserAgent"> & {
    /**
     * @generated from field: optional ClientPayload.UserAgent.Platform platform = 1;
     */
    platform: ClientPayload_UserAgent_Platform;
    /**
     * @generated from field: optional ClientPayload.UserAgent.AppVersion appVersion = 2;
     */
    appVersion?: ClientPayload_UserAgent_AppVersion;
    /**
     * @generated from field: optional string mcc = 3;
     */
    mcc: string;
    /**
     * @generated from field: optional string mnc = 4;
     */
    mnc: string;
    /**
     * @generated from field: optional string osVersion = 5;
     */
    osVersion: string;
    /**
     * @generated from field: optional string manufacturer = 6;
     */
    manufacturer: string;
    /**
     * @generated from field: optional string device = 7;
     */
    device: string;
    /**
     * @generated from field: optional string osBuildNumber = 8;
     */
    osBuildNumber: string;
    /**
     * @generated from field: optional string phoneId = 9;
     */
    phoneId: string;
    /**
     * @generated from field: optional ClientPayload.UserAgent.ReleaseChannel releaseChannel = 10;
     */
    releaseChannel: ClientPayload_UserAgent_ReleaseChannel;
    /**
     * @generated from field: optional string localeLanguageIso6391 = 11;
     */
    localeLanguageIso6391: string;
    /**
     * @generated from field: optional string localeCountryIso31661Alpha2 = 12;
     */
    localeCountryIso31661Alpha2: string;
    /**
     * @generated from field: optional string deviceBoard = 13;
     */
    deviceBoard: string;
    /**
     * @generated from field: optional string deviceExpId = 14;
     */
    deviceExpId: string;
    /**
     * @generated from field: optional ClientPayload.UserAgent.DeviceType deviceType = 15;
     */
    deviceType: ClientPayload_UserAgent_DeviceType;
    /**
     * @generated from field: optional string deviceModelType = 16;
     */
    deviceModelType: string;
};
/**
 * Describes the message ClientPayload.UserAgent.
 * Use `create(ClientPayload_UserAgentSchema)` to create a new message.
 */
declare const ClientPayload_UserAgentSchema: GenMessage<ClientPayload_UserAgent>;
/**
 * @generated from message ClientPayload.UserAgent.AppVersion
 */
type ClientPayload_UserAgent_AppVersion = Message$1<"ClientPayload.UserAgent.AppVersion"> & {
    /**
     * @generated from field: optional uint32 primary = 1;
     */
    primary: number;
    /**
     * @generated from field: optional uint32 secondary = 2;
     */
    secondary: number;
    /**
     * @generated from field: optional uint32 tertiary = 3;
     */
    tertiary: number;
    /**
     * @generated from field: optional uint32 quaternary = 4;
     */
    quaternary: number;
    /**
     * @generated from field: optional uint32 quinary = 5;
     */
    quinary: number;
};
/**
 * Describes the message ClientPayload.UserAgent.AppVersion.
 * Use `create(ClientPayload_UserAgent_AppVersionSchema)` to create a new message.
 */
declare const ClientPayload_UserAgent_AppVersionSchema: GenMessage<ClientPayload_UserAgent_AppVersion>;
/**
 * @generated from enum ClientPayload.UserAgent.DeviceType
 */
declare enum ClientPayload_UserAgent_DeviceType {
    /**
     * @generated from enum value: PHONE = 0;
     */
    PHONE = 0,
    /**
     * @generated from enum value: TABLET = 1;
     */
    TABLET = 1,
    /**
     * @generated from enum value: DESKTOP = 2;
     */
    DESKTOP = 2,
    /**
     * @generated from enum value: WEARABLE = 3;
     */
    WEARABLE = 3,
    /**
     * @generated from enum value: VR = 4;
     */
    VR = 4
}
/**
 * Describes the enum ClientPayload.UserAgent.DeviceType.
 */
declare const ClientPayload_UserAgent_DeviceTypeSchema: GenEnum<ClientPayload_UserAgent_DeviceType>;
/**
 * @generated from enum ClientPayload.UserAgent.Platform
 */
declare enum ClientPayload_UserAgent_Platform {
    /**
     * @generated from enum value: ANDROID = 0;
     */
    ANDROID = 0,
    /**
     * @generated from enum value: IOS = 1;
     */
    IOS = 1,
    /**
     * @generated from enum value: WINDOWS_PHONE = 2;
     */
    WINDOWS_PHONE = 2,
    /**
     * @generated from enum value: BLACKBERRY = 3;
     */
    BLACKBERRY = 3,
    /**
     * @generated from enum value: BLACKBERRYX = 4;
     */
    BLACKBERRYX = 4,
    /**
     * @generated from enum value: S40 = 5;
     */
    S40 = 5,
    /**
     * @generated from enum value: S60 = 6;
     */
    S60 = 6,
    /**
     * @generated from enum value: PYTHON_CLIENT = 7;
     */
    PYTHON_CLIENT = 7,
    /**
     * @generated from enum value: TIZEN = 8;
     */
    TIZEN = 8,
    /**
     * @generated from enum value: ENTERPRISE = 9;
     */
    ENTERPRISE = 9,
    /**
     * @generated from enum value: SMB_ANDROID = 10;
     */
    SMB_ANDROID = 10,
    /**
     * @generated from enum value: KAIOS = 11;
     */
    KAIOS = 11,
    /**
     * @generated from enum value: SMB_IOS = 12;
     */
    SMB_IOS = 12,
    /**
     * @generated from enum value: WINDOWS = 13;
     */
    WINDOWS = 13,
    /**
     * @generated from enum value: WEB = 14;
     */
    WEB = 14,
    /**
     * @generated from enum value: PORTAL = 15;
     */
    PORTAL = 15,
    /**
     * @generated from enum value: GREEN_ANDROID = 16;
     */
    GREEN_ANDROID = 16,
    /**
     * @generated from enum value: GREEN_IPHONE = 17;
     */
    GREEN_IPHONE = 17,
    /**
     * @generated from enum value: BLUE_ANDROID = 18;
     */
    BLUE_ANDROID = 18,
    /**
     * @generated from enum value: BLUE_IPHONE = 19;
     */
    BLUE_IPHONE = 19,
    /**
     * @generated from enum value: FBLITE_ANDROID = 20;
     */
    FBLITE_ANDROID = 20,
    /**
     * @generated from enum value: MLITE_ANDROID = 21;
     */
    MLITE_ANDROID = 21,
    /**
     * @generated from enum value: IGLITE_ANDROID = 22;
     */
    IGLITE_ANDROID = 22,
    /**
     * @generated from enum value: PAGE = 23;
     */
    PAGE = 23,
    /**
     * @generated from enum value: MACOS = 24;
     */
    MACOS = 24,
    /**
     * @generated from enum value: OCULUS_MSG = 25;
     */
    OCULUS_MSG = 25,
    /**
     * @generated from enum value: OCULUS_CALL = 26;
     */
    OCULUS_CALL = 26,
    /**
     * @generated from enum value: MILAN = 27;
     */
    MILAN = 27,
    /**
     * @generated from enum value: CAPI = 28;
     */
    CAPI = 28,
    /**
     * @generated from enum value: WEAROS = 29;
     */
    WEAROS = 29,
    /**
     * @generated from enum value: ARDEVICE = 30;
     */
    ARDEVICE = 30,
    /**
     * @generated from enum value: VRDEVICE = 31;
     */
    VRDEVICE = 31,
    /**
     * @generated from enum value: BLUE_WEB = 32;
     */
    BLUE_WEB = 32,
    /**
     * @generated from enum value: IPAD = 33;
     */
    IPAD = 33,
    /**
     * @generated from enum value: TEST = 34;
     */
    TEST = 34,
    /**
     * @generated from enum value: SMART_GLASSES = 35;
     */
    SMART_GLASSES = 35
}
/**
 * Describes the enum ClientPayload.UserAgent.Platform.
 */
declare const ClientPayload_UserAgent_PlatformSchema: GenEnum<ClientPayload_UserAgent_Platform>;
/**
 * @generated from enum ClientPayload.UserAgent.ReleaseChannel
 */
declare enum ClientPayload_UserAgent_ReleaseChannel {
    /**
     * @generated from enum value: RELEASE = 0;
     */
    RELEASE = 0,
    /**
     * @generated from enum value: BETA = 1;
     */
    BETA = 1,
    /**
     * @generated from enum value: ALPHA = 2;
     */
    ALPHA = 2,
    /**
     * @generated from enum value: DEBUG = 3;
     */
    DEBUG = 3
}
/**
 * Describes the enum ClientPayload.UserAgent.ReleaseChannel.
 */
declare const ClientPayload_UserAgent_ReleaseChannelSchema: GenEnum<ClientPayload_UserAgent_ReleaseChannel>;
/**
 * @generated from message ClientPayload.WebInfo
 */
type ClientPayload_WebInfo = Message$1<"ClientPayload.WebInfo"> & {
    /**
     * @generated from field: optional string refToken = 1;
     */
    refToken: string;
    /**
     * @generated from field: optional string version = 2;
     */
    version: string;
    /**
     * @generated from field: optional ClientPayload.WebInfo.WebdPayload webdPayload = 3;
     */
    webdPayload?: ClientPayload_WebInfo_WebdPayload;
    /**
     * @generated from field: optional ClientPayload.WebInfo.WebSubPlatform webSubPlatform = 4;
     */
    webSubPlatform: ClientPayload_WebInfo_WebSubPlatform;
};
/**
 * Describes the message ClientPayload.WebInfo.
 * Use `create(ClientPayload_WebInfoSchema)` to create a new message.
 */
declare const ClientPayload_WebInfoSchema: GenMessage<ClientPayload_WebInfo>;
/**
 * @generated from message ClientPayload.WebInfo.WebdPayload
 */
type ClientPayload_WebInfo_WebdPayload = Message$1<"ClientPayload.WebInfo.WebdPayload"> & {
    /**
     * @generated from field: optional bool usesParticipantInKey = 1;
     */
    usesParticipantInKey: boolean;
    /**
     * @generated from field: optional bool supportsStarredMessages = 2;
     */
    supportsStarredMessages: boolean;
    /**
     * @generated from field: optional bool supportsDocumentMessages = 3;
     */
    supportsDocumentMessages: boolean;
    /**
     * @generated from field: optional bool supportsUrlMessages = 4;
     */
    supportsUrlMessages: boolean;
    /**
     * @generated from field: optional bool supportsMediaRetry = 5;
     */
    supportsMediaRetry: boolean;
    /**
     * @generated from field: optional bool supportsE2EImage = 6;
     */
    supportsE2EImage: boolean;
    /**
     * @generated from field: optional bool supportsE2EVideo = 7;
     */
    supportsE2EVideo: boolean;
    /**
     * @generated from field: optional bool supportsE2EAudio = 8;
     */
    supportsE2EAudio: boolean;
    /**
     * @generated from field: optional bool supportsE2EDocument = 9;
     */
    supportsE2EDocument: boolean;
    /**
     * @generated from field: optional string documentTypes = 10;
     */
    documentTypes: string;
    /**
     * @generated from field: optional bytes features = 11;
     */
    features: Uint8Array;
};
/**
 * Describes the message ClientPayload.WebInfo.WebdPayload.
 * Use `create(ClientPayload_WebInfo_WebdPayloadSchema)` to create a new message.
 */
declare const ClientPayload_WebInfo_WebdPayloadSchema: GenMessage<ClientPayload_WebInfo_WebdPayload>;
/**
 * @generated from enum ClientPayload.WebInfo.WebSubPlatform
 */
declare enum ClientPayload_WebInfo_WebSubPlatform {
    /**
     * @generated from enum value: WEB_BROWSER = 0;
     */
    WEB_BROWSER = 0,
    /**
     * @generated from enum value: APP_STORE = 1;
     */
    APP_STORE = 1,
    /**
     * @generated from enum value: WIN_STORE = 2;
     */
    WIN_STORE = 2,
    /**
     * @generated from enum value: DARWIN = 3;
     */
    DARWIN = 3,
    /**
     * @generated from enum value: WIN32 = 4;
     */
    WIN32 = 4,
    /**
     * @generated from enum value: WIN_HYBRID = 5;
     */
    WIN_HYBRID = 5
}
/**
 * Describes the enum ClientPayload.WebInfo.WebSubPlatform.
 */
declare const ClientPayload_WebInfo_WebSubPlatformSchema: GenEnum<ClientPayload_WebInfo_WebSubPlatform>;
/**
 * @generated from enum ClientPayload.AccountType
 */
declare enum ClientPayload_AccountType {
    /**
     * @generated from enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from enum value: GUEST = 1;
     */
    GUEST = 1
}
/**
 * Describes the enum ClientPayload.AccountType.
 */
declare const ClientPayload_AccountTypeSchema: GenEnum<ClientPayload_AccountType>;
/**
 * @generated from enum ClientPayload.ConnectReason
 */
declare enum ClientPayload_ConnectReason {
    /**
     * @generated from enum value: PUSH = 0;
     */
    PUSH = 0,
    /**
     * @generated from enum value: USER_ACTIVATED = 1;
     */
    USER_ACTIVATED = 1,
    /**
     * @generated from enum value: SCHEDULED = 2;
     */
    SCHEDULED = 2,
    /**
     * @generated from enum value: ERROR_RECONNECT = 3;
     */
    ERROR_RECONNECT = 3,
    /**
     * @generated from enum value: NETWORK_SWITCH = 4;
     */
    NETWORK_SWITCH = 4,
    /**
     * @generated from enum value: PING_RECONNECT = 5;
     */
    PING_RECONNECT = 5,
    /**
     * @generated from enum value: UNKNOWN = 6;
     */
    UNKNOWN = 6
}
/**
 * Describes the enum ClientPayload.ConnectReason.
 */
declare const ClientPayload_ConnectReasonSchema: GenEnum<ClientPayload_ConnectReason>;
/**
 * @generated from enum ClientPayload.ConnectType
 */
declare enum ClientPayload_ConnectType {
    /**
     * @generated from enum value: CELLULAR_UNKNOWN = 0;
     */
    CELLULAR_UNKNOWN = 0,
    /**
     * @generated from enum value: WIFI_UNKNOWN = 1;
     */
    WIFI_UNKNOWN = 1,
    /**
     * @generated from enum value: CELLULAR_EDGE = 100;
     */
    CELLULAR_EDGE = 100,
    /**
     * @generated from enum value: CELLULAR_IDEN = 101;
     */
    CELLULAR_IDEN = 101,
    /**
     * @generated from enum value: CELLULAR_UMTS = 102;
     */
    CELLULAR_UMTS = 102,
    /**
     * @generated from enum value: CELLULAR_EVDO = 103;
     */
    CELLULAR_EVDO = 103,
    /**
     * @generated from enum value: CELLULAR_GPRS = 104;
     */
    CELLULAR_GPRS = 104,
    /**
     * @generated from enum value: CELLULAR_HSDPA = 105;
     */
    CELLULAR_HSDPA = 105,
    /**
     * @generated from enum value: CELLULAR_HSUPA = 106;
     */
    CELLULAR_HSUPA = 106,
    /**
     * @generated from enum value: CELLULAR_HSPA = 107;
     */
    CELLULAR_HSPA = 107,
    /**
     * @generated from enum value: CELLULAR_CDMA = 108;
     */
    CELLULAR_CDMA = 108,
    /**
     * @generated from enum value: CELLULAR_1XRTT = 109;
     */
    CELLULAR_1XRTT = 109,
    /**
     * @generated from enum value: CELLULAR_EHRPD = 110;
     */
    CELLULAR_EHRPD = 110,
    /**
     * @generated from enum value: CELLULAR_LTE = 111;
     */
    CELLULAR_LTE = 111,
    /**
     * @generated from enum value: CELLULAR_HSPAP = 112;
     */
    CELLULAR_HSPAP = 112
}
/**
 * Describes the enum ClientPayload.ConnectType.
 */
declare const ClientPayload_ConnectTypeSchema: GenEnum<ClientPayload_ConnectType>;
/**
 * @generated from enum ClientPayload.IOSAppExtension
 */
declare enum ClientPayload_IOSAppExtension {
    /**
     * @generated from enum value: SHARE_EXTENSION = 0;
     */
    SHARE_EXTENSION = 0,
    /**
     * @generated from enum value: SERVICE_EXTENSION = 1;
     */
    SERVICE_EXTENSION = 1,
    /**
     * @generated from enum value: INTENTS_EXTENSION = 2;
     */
    INTENTS_EXTENSION = 2
}
/**
 * Describes the enum ClientPayload.IOSAppExtension.
 */
declare const ClientPayload_IOSAppExtensionSchema: GenEnum<ClientPayload_IOSAppExtension>;
/**
 * @generated from enum ClientPayload.Product
 */
declare enum ClientPayload_Product {
    /**
     * @generated from enum value: WHATSAPP = 0;
     */
    WHATSAPP = 0,
    /**
     * @generated from enum value: MESSENGER = 1;
     */
    MESSENGER = 1,
    /**
     * @generated from enum value: INTEROP = 2;
     */
    INTEROP = 2,
    /**
     * @generated from enum value: INTEROP_MSGR = 3;
     */
    INTEROP_MSGR = 3,
    /**
     * @generated from enum value: WHATSAPP_LID = 4;
     */
    WHATSAPP_LID = 4
}
/**
 * Describes the enum ClientPayload.Product.
 */
declare const ClientPayload_ProductSchema: GenEnum<ClientPayload_Product>;
/**
 * @generated from enum ClientPayload.TrafficAnonymization
 */
declare enum ClientPayload_TrafficAnonymization {
    /**
     * @generated from enum value: OFF = 0;
     */
    OFF = 0,
    /**
     * @generated from enum value: STANDARD = 1;
     */
    STANDARD = 1
}
/**
 * Describes the enum ClientPayload.TrafficAnonymization.
 */
declare const ClientPayload_TrafficAnonymizationSchema: GenEnum<ClientPayload_TrafficAnonymization>;
/**
 * @generated from message CommentMetadata
 */
type CommentMetadata = Message$1<"CommentMetadata"> & {
    /**
     * @generated from field: optional MessageKey commentParentKey = 1;
     */
    commentParentKey?: MessageKey;
    /**
     * @generated from field: optional uint32 replyCount = 2;
     */
    replyCount: number;
};
/**
 * Describes the message CommentMetadata.
 * Use `create(CommentMetadataSchema)` to create a new message.
 */
declare const CommentMetadataSchema: GenMessage<CommentMetadata>;
/**
 * @generated from message CompanionCommitment
 */
type CompanionCommitment = Message$1<"CompanionCommitment"> & {
    /**
     * @generated from field: optional bytes hash = 1;
     */
    hash: Uint8Array;
};
/**
 * Describes the message CompanionCommitment.
 * Use `create(CompanionCommitmentSchema)` to create a new message.
 */
declare const CompanionCommitmentSchema: GenMessage<CompanionCommitment>;
/**
 * @generated from message CompanionEphemeralIdentity
 */
type CompanionEphemeralIdentity = Message$1<"CompanionEphemeralIdentity"> & {
    /**
     * @generated from field: optional bytes publicKey = 1;
     */
    publicKey: Uint8Array;
    /**
     * @generated from field: optional DeviceProps.PlatformType deviceType = 2;
     */
    deviceType: DeviceProps_PlatformType;
    /**
     * @generated from field: optional string ref = 3;
     */
    ref: string;
};
/**
 * Describes the message CompanionEphemeralIdentity.
 * Use `create(CompanionEphemeralIdentitySchema)` to create a new message.
 */
declare const CompanionEphemeralIdentitySchema: GenMessage<CompanionEphemeralIdentity>;
/**
 * @generated from message Config
 */
type Config = Message$1<"Config"> & {
    /**
     * @generated from field: map<uint32, Field> field = 1;
     */
    field: {
        [key: number]: Field;
    };
    /**
     * @generated from field: optional uint32 version = 2;
     */
    version: number;
};
/**
 * Describes the message Config.
 * Use `create(ConfigSchema)` to create a new message.
 */
declare const ConfigSchema: GenMessage<Config>;
/**
 * @generated from message ContextInfo
 */
type ContextInfo = Message$1<"ContextInfo"> & {
    /**
     * @generated from field: optional string stanzaId = 1;
     */
    stanzaId: string;
    /**
     * @generated from field: optional string participant = 2;
     */
    participant: string;
    /**
     * @generated from field: optional Message quotedMessage = 3;
     */
    quotedMessage?: Message;
    /**
     * @generated from field: optional string remoteJid = 4;
     */
    remoteJid: string;
    /**
     * @generated from field: repeated string mentionedJid = 15;
     */
    mentionedJid: string[];
    /**
     * @generated from field: optional string conversionSource = 18;
     */
    conversionSource: string;
    /**
     * @generated from field: optional bytes conversionData = 19;
     */
    conversionData: Uint8Array;
    /**
     * @generated from field: optional uint32 conversionDelaySeconds = 20;
     */
    conversionDelaySeconds: number;
    /**
     * @generated from field: optional uint32 forwardingScore = 21;
     */
    forwardingScore: number;
    /**
     * @generated from field: optional bool isForwarded = 22;
     */
    isForwarded: boolean;
    /**
     * @generated from field: optional ContextInfo.AdReplyInfo quotedAd = 23;
     */
    quotedAd?: ContextInfo_AdReplyInfo;
    /**
     * @generated from field: optional MessageKey placeholderKey = 24;
     */
    placeholderKey?: MessageKey;
    /**
     * @generated from field: optional uint32 expiration = 25;
     */
    expiration: number;
    /**
     * @generated from field: optional int64 ephemeralSettingTimestamp = 26;
     */
    ephemeralSettingTimestamp: bigint;
    /**
     * @generated from field: optional bytes ephemeralSharedSecret = 27;
     */
    ephemeralSharedSecret: Uint8Array;
    /**
     * @generated from field: optional ContextInfo.ExternalAdReplyInfo externalAdReply = 28;
     */
    externalAdReply?: ContextInfo_ExternalAdReplyInfo;
    /**
     * @generated from field: optional string entryPointConversionSource = 29;
     */
    entryPointConversionSource: string;
    /**
     * @generated from field: optional string entryPointConversionApp = 30;
     */
    entryPointConversionApp: string;
    /**
     * @generated from field: optional uint32 entryPointConversionDelaySeconds = 31;
     */
    entryPointConversionDelaySeconds: number;
    /**
     * @generated from field: optional DisappearingMode disappearingMode = 32;
     */
    disappearingMode?: DisappearingMode;
    /**
     * @generated from field: optional ActionLink actionLink = 33;
     */
    actionLink?: ActionLink;
    /**
     * @generated from field: optional string groupSubject = 34;
     */
    groupSubject: string;
    /**
     * @generated from field: optional string parentGroupJid = 35;
     */
    parentGroupJid: string;
    /**
     * @generated from field: optional string trustBannerType = 37;
     */
    trustBannerType: string;
    /**
     * @generated from field: optional uint32 trustBannerAction = 38;
     */
    trustBannerAction: number;
    /**
     * @generated from field: optional bool isSampled = 39;
     */
    isSampled: boolean;
    /**
     * @generated from field: repeated GroupMention groupMentions = 40;
     */
    groupMentions: GroupMention[];
    /**
     * @generated from field: optional ContextInfo.UTMInfo utm = 41;
     */
    utm?: ContextInfo_UTMInfo;
    /**
     * @generated from field: optional ContextInfo.ForwardedNewsletterMessageInfo forwardedNewsletterMessageInfo = 43;
     */
    forwardedNewsletterMessageInfo?: ContextInfo_ForwardedNewsletterMessageInfo;
    /**
     * @generated from field: optional ContextInfo.BusinessMessageForwardInfo businessMessageForwardInfo = 44;
     */
    businessMessageForwardInfo?: ContextInfo_BusinessMessageForwardInfo;
    /**
     * @generated from field: optional string smbClientCampaignId = 45;
     */
    smbClientCampaignId: string;
    /**
     * @generated from field: optional string smbServerCampaignId = 46;
     */
    smbServerCampaignId: string;
    /**
     * @generated from field: optional ContextInfo.DataSharingContext dataSharingContext = 47;
     */
    dataSharingContext?: ContextInfo_DataSharingContext;
    /**
     * @generated from field: optional bool alwaysShowAdAttribution = 48;
     */
    alwaysShowAdAttribution: boolean;
    /**
     * @generated from field: optional ContextInfo.FeatureEligibilities featureEligibilities = 49;
     */
    featureEligibilities?: ContextInfo_FeatureEligibilities;
    /**
     * @generated from field: optional string entryPointConversionExternalSource = 50;
     */
    entryPointConversionExternalSource: string;
    /**
     * @generated from field: optional string entryPointConversionExternalMedium = 51;
     */
    entryPointConversionExternalMedium: string;
    /**
     * @generated from field: optional string ctwaSignals = 54;
     */
    ctwaSignals: string;
    /**
     * @generated from field: optional bytes ctwaPayload = 55;
     */
    ctwaPayload: Uint8Array;
    /**
     * @generated from field: optional ContextInfo.ForwardedAIBotMessageInfo forwardedAiBotMessageInfo = 56;
     */
    forwardedAiBotMessageInfo?: ContextInfo_ForwardedAIBotMessageInfo;
    /**
     * @generated from field: optional ContextInfo.StatusAttributionType statusAttributionType = 57;
     */
    statusAttributionType: ContextInfo_StatusAttributionType;
    /**
     * @generated from field: optional UrlTrackingMap urlTrackingMap = 58;
     */
    urlTrackingMap?: UrlTrackingMap;
    /**
     * @generated from field: optional ContextInfo.PairedMediaType pairedMediaType = 59;
     */
    pairedMediaType: ContextInfo_PairedMediaType;
    /**
     * @generated from field: optional uint32 rankingVersion = 60;
     */
    rankingVersion: number;
    /**
     * @generated from field: optional MemberLabel memberLabel = 62;
     */
    memberLabel?: MemberLabel;
    /**
     * @generated from field: optional bool isQuestion = 63;
     */
    isQuestion: boolean;
    /**
     * @generated from field: optional ContextInfo.StatusSourceType statusSourceType = 64;
     */
    statusSourceType: ContextInfo_StatusSourceType;
    /**
     * @generated from field: repeated StatusAttribution statusAttributions = 65;
     */
    statusAttributions: StatusAttribution[];
};
/**
 * Describes the message ContextInfo.
 * Use `create(ContextInfoSchema)` to create a new message.
 */
declare const ContextInfoSchema: GenMessage<ContextInfo>;
/**
 * @generated from message ContextInfo.AdReplyInfo
 */
type ContextInfo_AdReplyInfo = Message$1<"ContextInfo.AdReplyInfo"> & {
    /**
     * @generated from field: optional string advertiserName = 1;
     */
    advertiserName: string;
    /**
     * @generated from field: optional ContextInfo.AdReplyInfo.MediaType mediaType = 2;
     */
    mediaType: ContextInfo_AdReplyInfo_MediaType;
    /**
     * @generated from field: optional bytes jpegThumbnail = 16;
     */
    jpegThumbnail: Uint8Array;
    /**
     * @generated from field: optional string caption = 17;
     */
    caption: string;
};
/**
 * Describes the message ContextInfo.AdReplyInfo.
 * Use `create(ContextInfo_AdReplyInfoSchema)` to create a new message.
 */
declare const ContextInfo_AdReplyInfoSchema: GenMessage<ContextInfo_AdReplyInfo>;
/**
 * @generated from enum ContextInfo.AdReplyInfo.MediaType
 */
declare enum ContextInfo_AdReplyInfo_MediaType {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: IMAGE = 1;
     */
    IMAGE = 1,
    /**
     * @generated from enum value: VIDEO = 2;
     */
    VIDEO = 2
}
/**
 * Describes the enum ContextInfo.AdReplyInfo.MediaType.
 */
declare const ContextInfo_AdReplyInfo_MediaTypeSchema: GenEnum<ContextInfo_AdReplyInfo_MediaType>;
/**
 * @generated from message ContextInfo.BusinessMessageForwardInfo
 */
type ContextInfo_BusinessMessageForwardInfo = Message$1<"ContextInfo.BusinessMessageForwardInfo"> & {
    /**
     * @generated from field: optional string businessOwnerJid = 1;
     */
    businessOwnerJid: string;
};
/**
 * Describes the message ContextInfo.BusinessMessageForwardInfo.
 * Use `create(ContextInfo_BusinessMessageForwardInfoSchema)` to create a new message.
 */
declare const ContextInfo_BusinessMessageForwardInfoSchema: GenMessage<ContextInfo_BusinessMessageForwardInfo>;
/**
 * @generated from message ContextInfo.DataSharingContext
 */
type ContextInfo_DataSharingContext = Message$1<"ContextInfo.DataSharingContext"> & {
    /**
     * @generated from field: optional bool showMmDisclosure = 1;
     */
    showMmDisclosure: boolean;
    /**
     * @generated from field: optional string encryptedSignalTokenConsented = 2;
     */
    encryptedSignalTokenConsented: string;
    /**
     * @generated from field: repeated ContextInfo.DataSharingContext.Parameters parameters = 3;
     */
    parameters: ContextInfo_DataSharingContext_Parameters[];
};
/**
 * Describes the message ContextInfo.DataSharingContext.
 * Use `create(ContextInfo_DataSharingContextSchema)` to create a new message.
 */
declare const ContextInfo_DataSharingContextSchema: GenMessage<ContextInfo_DataSharingContext>;
/**
 * @generated from message ContextInfo.DataSharingContext.Parameters
 */
type ContextInfo_DataSharingContext_Parameters = Message$1<"ContextInfo.DataSharingContext.Parameters"> & {
    /**
     * @generated from field: optional string key = 1;
     */
    key: string;
    /**
     * @generated from field: optional string stringData = 2;
     */
    stringData: string;
    /**
     * @generated from field: optional int64 intData = 3;
     */
    intData: bigint;
    /**
     * @generated from field: optional float floatData = 4;
     */
    floatData: number;
    /**
     * @generated from field: optional ContextInfo.DataSharingContext.Parameters contents = 5;
     */
    contents?: ContextInfo_DataSharingContext_Parameters;
};
/**
 * Describes the message ContextInfo.DataSharingContext.Parameters.
 * Use `create(ContextInfo_DataSharingContext_ParametersSchema)` to create a new message.
 */
declare const ContextInfo_DataSharingContext_ParametersSchema: GenMessage<ContextInfo_DataSharingContext_Parameters>;
/**
 * @generated from message ContextInfo.ExternalAdReplyInfo
 */
type ContextInfo_ExternalAdReplyInfo = Message$1<"ContextInfo.ExternalAdReplyInfo"> & {
    /**
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * @generated from field: optional string body = 2;
     */
    body: string;
    /**
     * @generated from field: optional ContextInfo.ExternalAdReplyInfo.MediaType mediaType = 3;
     */
    mediaType: ContextInfo_ExternalAdReplyInfo_MediaType;
    /**
     * @generated from field: optional string thumbnailUrl = 4;
     */
    thumbnailUrl: string;
    /**
     * @generated from field: optional string mediaUrl = 5;
     */
    mediaUrl: string;
    /**
     * @generated from field: optional bytes thumbnail = 6;
     */
    thumbnail: Uint8Array;
    /**
     * @generated from field: optional string sourceType = 7;
     */
    sourceType: string;
    /**
     * @generated from field: optional string sourceId = 8;
     */
    sourceId: string;
    /**
     * @generated from field: optional string sourceUrl = 9;
     */
    sourceUrl: string;
    /**
     * @generated from field: optional bool containsAutoReply = 10;
     */
    containsAutoReply: boolean;
    /**
     * @generated from field: optional bool renderLargerThumbnail = 11;
     */
    renderLargerThumbnail: boolean;
    /**
     * @generated from field: optional bool showAdAttribution = 12;
     */
    showAdAttribution: boolean;
    /**
     * @generated from field: optional string ctwaClid = 13;
     */
    ctwaClid: string;
    /**
     * @generated from field: optional string ref = 14;
     */
    ref: string;
    /**
     * @generated from field: optional bool clickToWhatsappCall = 15;
     */
    clickToWhatsappCall: boolean;
    /**
     * @generated from field: optional bool adContextPreviewDismissed = 16;
     */
    adContextPreviewDismissed: boolean;
    /**
     * @generated from field: optional string sourceApp = 17;
     */
    sourceApp: string;
    /**
     * @generated from field: optional bool automatedGreetingMessageShown = 18;
     */
    automatedGreetingMessageShown: boolean;
    /**
     * @generated from field: optional string greetingMessageBody = 19;
     */
    greetingMessageBody: string;
    /**
     * @generated from field: optional string ctaPayload = 20;
     */
    ctaPayload: string;
    /**
     * @generated from field: optional bool disableNudge = 21;
     */
    disableNudge: boolean;
    /**
     * @generated from field: optional string originalImageUrl = 22;
     */
    originalImageUrl: string;
    /**
     * @generated from field: optional string automatedGreetingMessageCtaType = 23;
     */
    automatedGreetingMessageCtaType: string;
    /**
     * @generated from field: optional bool wtwaAdFormat = 24;
     */
    wtwaAdFormat: boolean;
    /**
     * @generated from field: optional ContextInfo.ExternalAdReplyInfo.AdType adType = 25;
     */
    adType: ContextInfo_ExternalAdReplyInfo_AdType;
};
/**
 * Describes the message ContextInfo.ExternalAdReplyInfo.
 * Use `create(ContextInfo_ExternalAdReplyInfoSchema)` to create a new message.
 */
declare const ContextInfo_ExternalAdReplyInfoSchema: GenMessage<ContextInfo_ExternalAdReplyInfo>;
/**
 * @generated from enum ContextInfo.ExternalAdReplyInfo.AdType
 */
declare enum ContextInfo_ExternalAdReplyInfo_AdType {
    /**
     * @generated from enum value: CTWA = 0;
     */
    CTWA = 0,
    /**
     * @generated from enum value: CAWC = 1;
     */
    CAWC = 1
}
/**
 * Describes the enum ContextInfo.ExternalAdReplyInfo.AdType.
 */
declare const ContextInfo_ExternalAdReplyInfo_AdTypeSchema: GenEnum<ContextInfo_ExternalAdReplyInfo_AdType>;
/**
 * @generated from enum ContextInfo.ExternalAdReplyInfo.MediaType
 */
declare enum ContextInfo_ExternalAdReplyInfo_MediaType {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: IMAGE = 1;
     */
    IMAGE = 1,
    /**
     * @generated from enum value: VIDEO = 2;
     */
    VIDEO = 2
}
/**
 * Describes the enum ContextInfo.ExternalAdReplyInfo.MediaType.
 */
declare const ContextInfo_ExternalAdReplyInfo_MediaTypeSchema: GenEnum<ContextInfo_ExternalAdReplyInfo_MediaType>;
/**
 * @generated from message ContextInfo.FeatureEligibilities
 */
type ContextInfo_FeatureEligibilities = Message$1<"ContextInfo.FeatureEligibilities"> & {
    /**
     * @generated from field: optional bool cannotBeReactedTo = 1;
     */
    cannotBeReactedTo: boolean;
    /**
     * @generated from field: optional bool cannotBeRanked = 2;
     */
    cannotBeRanked: boolean;
    /**
     * @generated from field: optional bool canRequestFeedback = 3;
     */
    canRequestFeedback: boolean;
    /**
     * @generated from field: optional bool canBeReshared = 4;
     */
    canBeReshared: boolean;
};
/**
 * Describes the message ContextInfo.FeatureEligibilities.
 * Use `create(ContextInfo_FeatureEligibilitiesSchema)` to create a new message.
 */
declare const ContextInfo_FeatureEligibilitiesSchema: GenMessage<ContextInfo_FeatureEligibilities>;
/**
 * @generated from message ContextInfo.ForwardedAIBotMessageInfo
 */
type ContextInfo_ForwardedAIBotMessageInfo = Message$1<"ContextInfo.ForwardedAIBotMessageInfo"> & {
    /**
     * @generated from field: optional string botName = 1;
     */
    botName: string;
    /**
     * @generated from field: optional string botJid = 2;
     */
    botJid: string;
    /**
     * @generated from field: optional string creatorName = 3;
     */
    creatorName: string;
};
/**
 * Describes the message ContextInfo.ForwardedAIBotMessageInfo.
 * Use `create(ContextInfo_ForwardedAIBotMessageInfoSchema)` to create a new message.
 */
declare const ContextInfo_ForwardedAIBotMessageInfoSchema: GenMessage<ContextInfo_ForwardedAIBotMessageInfo>;
/**
 * @generated from message ContextInfo.ForwardedNewsletterMessageInfo
 */
type ContextInfo_ForwardedNewsletterMessageInfo = Message$1<"ContextInfo.ForwardedNewsletterMessageInfo"> & {
    /**
     * @generated from field: optional string newsletterJid = 1;
     */
    newsletterJid: string;
    /**
     * @generated from field: optional int32 serverMessageId = 2;
     */
    serverMessageId: number;
    /**
     * @generated from field: optional string newsletterName = 3;
     */
    newsletterName: string;
    /**
     * @generated from field: optional ContextInfo.ForwardedNewsletterMessageInfo.ContentType contentType = 4;
     */
    contentType: ContextInfo_ForwardedNewsletterMessageInfo_ContentType;
    /**
     * @generated from field: optional string accessibilityText = 5;
     */
    accessibilityText: string;
};
/**
 * Describes the message ContextInfo.ForwardedNewsletterMessageInfo.
 * Use `create(ContextInfo_ForwardedNewsletterMessageInfoSchema)` to create a new message.
 */
declare const ContextInfo_ForwardedNewsletterMessageInfoSchema: GenMessage<ContextInfo_ForwardedNewsletterMessageInfo>;
/**
 * @generated from enum ContextInfo.ForwardedNewsletterMessageInfo.ContentType
 */
declare enum ContextInfo_ForwardedNewsletterMessageInfo_ContentType {
    /**
     * @generated from enum value: UPDATE = 1;
     */
    UPDATE = 1,
    /**
     * @generated from enum value: UPDATE_CARD = 2;
     */
    UPDATE_CARD = 2,
    /**
     * @generated from enum value: LINK_CARD = 3;
     */
    LINK_CARD = 3
}
/**
 * Describes the enum ContextInfo.ForwardedNewsletterMessageInfo.ContentType.
 */
declare const ContextInfo_ForwardedNewsletterMessageInfo_ContentTypeSchema: GenEnum<ContextInfo_ForwardedNewsletterMessageInfo_ContentType>;
/**
 * @generated from message ContextInfo.UTMInfo
 */
type ContextInfo_UTMInfo = Message$1<"ContextInfo.UTMInfo"> & {
    /**
     * @generated from field: optional string utmSource = 1;
     */
    utmSource: string;
    /**
     * @generated from field: optional string utmCampaign = 2;
     */
    utmCampaign: string;
};
/**
 * Describes the message ContextInfo.UTMInfo.
 * Use `create(ContextInfo_UTMInfoSchema)` to create a new message.
 */
declare const ContextInfo_UTMInfoSchema: GenMessage<ContextInfo_UTMInfo>;
/**
 * @generated from enum ContextInfo.PairedMediaType
 */
declare enum ContextInfo_PairedMediaType {
    /**
     * @generated from enum value: NOT_PAIRED_MEDIA = 0;
     */
    NOT_PAIRED_MEDIA = 0,
    /**
     * @generated from enum value: SD_VIDEO_PARENT = 1;
     */
    SD_VIDEO_PARENT = 1,
    /**
     * @generated from enum value: HD_VIDEO_CHILD = 2;
     */
    HD_VIDEO_CHILD = 2,
    /**
     * @generated from enum value: SD_IMAGE_PARENT = 3;
     */
    SD_IMAGE_PARENT = 3,
    /**
     * @generated from enum value: HD_IMAGE_CHILD = 4;
     */
    HD_IMAGE_CHILD = 4,
    /**
     * @generated from enum value: MOTION_PHOTO_PARENT = 5;
     */
    MOTION_PHOTO_PARENT = 5,
    /**
     * @generated from enum value: MOTION_PHOTO_CHILD = 6;
     */
    MOTION_PHOTO_CHILD = 6
}
/**
 * Describes the enum ContextInfo.PairedMediaType.
 */
declare const ContextInfo_PairedMediaTypeSchema: GenEnum<ContextInfo_PairedMediaType>;
/**
 * @generated from enum ContextInfo.StatusAttributionType
 */
declare enum ContextInfo_StatusAttributionType {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: RESHARED_FROM_MENTION = 1;
     */
    RESHARED_FROM_MENTION = 1,
    /**
     * @generated from enum value: RESHARED_FROM_POST = 2;
     */
    RESHARED_FROM_POST = 2
}
/**
 * Describes the enum ContextInfo.StatusAttributionType.
 */
declare const ContextInfo_StatusAttributionTypeSchema: GenEnum<ContextInfo_StatusAttributionType>;
/**
 * @generated from enum ContextInfo.StatusSourceType
 */
declare enum ContextInfo_StatusSourceType {
    /**
     * @generated from enum value: IMAGE = 0;
     */
    IMAGE = 0,
    /**
     * @generated from enum value: VIDEO = 1;
     */
    VIDEO = 1,
    /**
     * @generated from enum value: GIF = 2;
     */
    GIF = 2,
    /**
     * @generated from enum value: AUDIO = 3;
     */
    AUDIO = 3,
    /**
     * @generated from enum value: TEXT = 4;
     */
    TEXT = 4,
    /**
     * @generated from enum value: MUSIC_STANDALONE = 5;
     */
    MUSIC_STANDALONE = 5
}
/**
 * Describes the enum ContextInfo.StatusSourceType.
 */
declare const ContextInfo_StatusSourceTypeSchema: GenEnum<ContextInfo_StatusSourceType>;
/**
 * @generated from message Conversation
 */
type Conversation = Message$1<"Conversation"> & {
    /**
     * @generated from field: required string id = 1;
     */
    id: string;
    /**
     * @generated from field: repeated HistorySyncMsg messages = 2;
     */
    messages: HistorySyncMsg[];
    /**
     * @generated from field: optional string newJid = 3;
     */
    newJid: string;
    /**
     * @generated from field: optional string oldJid = 4;
     */
    oldJid: string;
    /**
     * @generated from field: optional uint64 lastMsgTimestamp = 5;
     */
    lastMsgTimestamp: bigint;
    /**
     * @generated from field: optional uint32 unreadCount = 6;
     */
    unreadCount: number;
    /**
     * @generated from field: optional bool readOnly = 7;
     */
    readOnly: boolean;
    /**
     * @generated from field: optional bool endOfHistoryTransfer = 8;
     */
    endOfHistoryTransfer: boolean;
    /**
     * @generated from field: optional uint32 ephemeralExpiration = 9;
     */
    ephemeralExpiration: number;
    /**
     * @generated from field: optional int64 ephemeralSettingTimestamp = 10;
     */
    ephemeralSettingTimestamp: bigint;
    /**
     * @generated from field: optional Conversation.EndOfHistoryTransferType endOfHistoryTransferType = 11;
     */
    endOfHistoryTransferType: Conversation_EndOfHistoryTransferType;
    /**
     * @generated from field: optional uint64 conversationTimestamp = 12;
     */
    conversationTimestamp: bigint;
    /**
     * @generated from field: optional string name = 13;
     */
    name: string;
    /**
     * @generated from field: optional string pHash = 14;
     */
    pHash: string;
    /**
     * @generated from field: optional bool notSpam = 15;
     */
    notSpam: boolean;
    /**
     * @generated from field: optional bool archived = 16;
     */
    archived: boolean;
    /**
     * @generated from field: optional DisappearingMode disappearingMode = 17;
     */
    disappearingMode?: DisappearingMode;
    /**
     * @generated from field: optional uint32 unreadMentionCount = 18;
     */
    unreadMentionCount: number;
    /**
     * @generated from field: optional bool markedAsUnread = 19;
     */
    markedAsUnread: boolean;
    /**
     * @generated from field: repeated GroupParticipant participant = 20;
     */
    participant: GroupParticipant[];
    /**
     * @generated from field: optional bytes tcToken = 21;
     */
    tcToken: Uint8Array;
    /**
     * @generated from field: optional uint64 tcTokenTimestamp = 22;
     */
    tcTokenTimestamp: bigint;
    /**
     * @generated from field: optional bytes contactPrimaryIdentityKey = 23;
     */
    contactPrimaryIdentityKey: Uint8Array;
    /**
     * @generated from field: optional uint32 pinned = 24;
     */
    pinned: number;
    /**
     * @generated from field: optional uint64 muteEndTime = 25;
     */
    muteEndTime: bigint;
    /**
     * @generated from field: optional WallpaperSettings wallpaper = 26;
     */
    wallpaper?: WallpaperSettings;
    /**
     * @generated from field: optional MediaVisibility mediaVisibility = 27;
     */
    mediaVisibility: MediaVisibility;
    /**
     * @generated from field: optional uint64 tcTokenSenderTimestamp = 28;
     */
    tcTokenSenderTimestamp: bigint;
    /**
     * @generated from field: optional bool suspended = 29;
     */
    suspended: boolean;
    /**
     * @generated from field: optional bool terminated = 30;
     */
    terminated: boolean;
    /**
     * @generated from field: optional uint64 createdAt = 31;
     */
    createdAt: bigint;
    /**
     * @generated from field: optional string createdBy = 32;
     */
    createdBy: string;
    /**
     * @generated from field: optional string description = 33;
     */
    description: string;
    /**
     * @generated from field: optional bool support = 34;
     */
    support: boolean;
    /**
     * @generated from field: optional bool isParentGroup = 35;
     */
    isParentGroup: boolean;
    /**
     * @generated from field: optional string parentGroupId = 37;
     */
    parentGroupId: string;
    /**
     * @generated from field: optional bool isDefaultSubgroup = 36;
     */
    isDefaultSubgroup: boolean;
    /**
     * @generated from field: optional string displayName = 38;
     */
    displayName: string;
    /**
     * @generated from field: optional string pnJid = 39;
     */
    pnJid: string;
    /**
     * @generated from field: optional bool shareOwnPn = 40;
     */
    shareOwnPn: boolean;
    /**
     * @generated from field: optional bool pnhDuplicateLidThread = 41;
     */
    pnhDuplicateLidThread: boolean;
    /**
     * @generated from field: optional string lidJid = 42;
     */
    lidJid: string;
    /**
     * @generated from field: optional string username = 43;
     */
    username: string;
    /**
     * @generated from field: optional string lidOriginType = 44;
     */
    lidOriginType: string;
    /**
     * @generated from field: optional uint32 commentsCount = 45;
     */
    commentsCount: number;
    /**
     * @generated from field: optional bool locked = 46;
     */
    locked: boolean;
    /**
     * @generated from field: optional PrivacySystemMessage systemMessageToInsert = 47;
     */
    systemMessageToInsert: PrivacySystemMessage;
    /**
     * @generated from field: optional bool capiCreatedGroup = 48;
     */
    capiCreatedGroup: boolean;
    /**
     * @generated from field: optional string accountLid = 49;
     */
    accountLid: string;
    /**
     * @generated from field: optional bool limitSharing = 50;
     */
    limitSharing: boolean;
    /**
     * @generated from field: optional int64 limitSharingSettingTimestamp = 51;
     */
    limitSharingSettingTimestamp: bigint;
    /**
     * @generated from field: optional LimitSharing.Trigger limitSharingTrigger = 52;
     */
    limitSharingTrigger: LimitSharing_Trigger;
    /**
     * @generated from field: optional bool limitSharingInitiatedByMe = 53;
     */
    limitSharingInitiatedByMe: boolean;
};
/**
 * Describes the message Conversation.
 * Use `create(ConversationSchema)` to create a new message.
 */
declare const ConversationSchema: GenMessage<Conversation>;
/**
 * @generated from enum Conversation.EndOfHistoryTransferType
 */
declare enum Conversation_EndOfHistoryTransferType {
    /**
     * @generated from enum value: COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY = 0;
     */
    COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY = 0,
    /**
     * @generated from enum value: COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY = 1;
     */
    COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY = 1,
    /**
     * @generated from enum value: COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY = 2;
     */
    COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY = 2
}
/**
 * Describes the enum Conversation.EndOfHistoryTransferType.
 */
declare const Conversation_EndOfHistoryTransferTypeSchema: GenEnum<Conversation_EndOfHistoryTransferType>;
/**
 * @generated from message DeviceCapabilities
 */
type DeviceCapabilities = Message$1<"DeviceCapabilities"> & {
    /**
     * @generated from field: optional DeviceCapabilities.ChatLockSupportLevel chatLockSupportLevel = 1;
     */
    chatLockSupportLevel: DeviceCapabilities_ChatLockSupportLevel;
    /**
     * @generated from field: optional DeviceCapabilities.LIDMigration lidMigration = 2;
     */
    lidMigration?: DeviceCapabilities_LIDMigration;
};
/**
 * Describes the message DeviceCapabilities.
 * Use `create(DeviceCapabilitiesSchema)` to create a new message.
 */
declare const DeviceCapabilitiesSchema: GenMessage<DeviceCapabilities>;
/**
 * @generated from message DeviceCapabilities.LIDMigration
 */
type DeviceCapabilities_LIDMigration = Message$1<"DeviceCapabilities.LIDMigration"> & {
    /**
     * @generated from field: optional uint64 chatDbMigrationTimestamp = 1;
     */
    chatDbMigrationTimestamp: bigint;
};
/**
 * Describes the message DeviceCapabilities.LIDMigration.
 * Use `create(DeviceCapabilities_LIDMigrationSchema)` to create a new message.
 */
declare const DeviceCapabilities_LIDMigrationSchema: GenMessage<DeviceCapabilities_LIDMigration>;
/**
 * @generated from enum DeviceCapabilities.ChatLockSupportLevel
 */
declare enum DeviceCapabilities_ChatLockSupportLevel {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: MINIMAL = 1;
     */
    MINIMAL = 1,
    /**
     * @generated from enum value: FULL = 2;
     */
    FULL = 2
}
/**
 * Describes the enum DeviceCapabilities.ChatLockSupportLevel.
 */
declare const DeviceCapabilities_ChatLockSupportLevelSchema: GenEnum<DeviceCapabilities_ChatLockSupportLevel>;
/**
 * @generated from message DeviceConsistencyCodeMessage
 */
type DeviceConsistencyCodeMessage = Message$1<"DeviceConsistencyCodeMessage"> & {
    /**
     * @generated from field: optional uint32 generation = 1;
     */
    generation: number;
    /**
     * @generated from field: optional bytes signature = 2;
     */
    signature: Uint8Array;
};
/**
 * Describes the message DeviceConsistencyCodeMessage.
 * Use `create(DeviceConsistencyCodeMessageSchema)` to create a new message.
 */
declare const DeviceConsistencyCodeMessageSchema: GenMessage<DeviceConsistencyCodeMessage>;
/**
 * @generated from message DeviceListMetadata
 */
type DeviceListMetadata = Message$1<"DeviceListMetadata"> & {
    /**
     * @generated from field: optional bytes senderKeyHash = 1;
     */
    senderKeyHash: Uint8Array;
    /**
     * @generated from field: optional uint64 senderTimestamp = 2;
     */
    senderTimestamp: bigint;
    /**
     * @generated from field: repeated uint32 senderKeyIndexes = 3 [packed = true];
     */
    senderKeyIndexes: number[];
    /**
     * @generated from field: optional ADVEncryptionType senderAccountType = 4;
     */
    senderAccountType: ADVEncryptionType;
    /**
     * @generated from field: optional ADVEncryptionType receiverAccountType = 5;
     */
    receiverAccountType: ADVEncryptionType;
    /**
     * @generated from field: optional bytes recipientKeyHash = 8;
     */
    recipientKeyHash: Uint8Array;
    /**
     * @generated from field: optional uint64 recipientTimestamp = 9;
     */
    recipientTimestamp: bigint;
    /**
     * @generated from field: repeated uint32 recipientKeyIndexes = 10 [packed = true];
     */
    recipientKeyIndexes: number[];
};
/**
 * Describes the message DeviceListMetadata.
 * Use `create(DeviceListMetadataSchema)` to create a new message.
 */
declare const DeviceListMetadataSchema: GenMessage<DeviceListMetadata>;
/**
 * @generated from message DeviceProps
 */
type DeviceProps = Message$1<"DeviceProps"> & {
    /**
     * @generated from field: optional string os = 1;
     */
    os: string;
    /**
     * @generated from field: optional DeviceProps.AppVersion version = 2;
     */
    version?: DeviceProps_AppVersion;
    /**
     * @generated from field: optional DeviceProps.PlatformType platformType = 3;
     */
    platformType: DeviceProps_PlatformType;
    /**
     * @generated from field: optional bool requireFullSync = 4;
     */
    requireFullSync: boolean;
    /**
     * @generated from field: optional DeviceProps.HistorySyncConfig historySyncConfig = 5;
     */
    historySyncConfig?: DeviceProps_HistorySyncConfig;
};
/**
 * Describes the message DeviceProps.
 * Use `create(DevicePropsSchema)` to create a new message.
 */
declare const DevicePropsSchema: GenMessage<DeviceProps>;
/**
 * @generated from message DeviceProps.AppVersion
 */
type DeviceProps_AppVersion = Message$1<"DeviceProps.AppVersion"> & {
    /**
     * @generated from field: optional uint32 primary = 1;
     */
    primary: number;
    /**
     * @generated from field: optional uint32 secondary = 2;
     */
    secondary: number;
    /**
     * @generated from field: optional uint32 tertiary = 3;
     */
    tertiary: number;
    /**
     * @generated from field: optional uint32 quaternary = 4;
     */
    quaternary: number;
    /**
     * @generated from field: optional uint32 quinary = 5;
     */
    quinary: number;
};
/**
 * Describes the message DeviceProps.AppVersion.
 * Use `create(DeviceProps_AppVersionSchema)` to create a new message.
 */
declare const DeviceProps_AppVersionSchema: GenMessage<DeviceProps_AppVersion>;
/**
 * @generated from message DeviceProps.HistorySyncConfig
 */
type DeviceProps_HistorySyncConfig = Message$1<"DeviceProps.HistorySyncConfig"> & {
    /**
     * @generated from field: optional uint32 fullSyncDaysLimit = 1;
     */
    fullSyncDaysLimit: number;
    /**
     * @generated from field: optional uint32 fullSyncSizeMbLimit = 2;
     */
    fullSyncSizeMbLimit: number;
    /**
     * @generated from field: optional uint32 storageQuotaMb = 3;
     */
    storageQuotaMb: number;
    /**
     * @generated from field: optional bool inlineInitialPayloadInE2EeMsg = 4;
     */
    inlineInitialPayloadInE2EeMsg: boolean;
    /**
     * @generated from field: optional uint32 recentSyncDaysLimit = 5;
     */
    recentSyncDaysLimit: number;
    /**
     * @generated from field: optional bool supportCallLogHistory = 6;
     */
    supportCallLogHistory: boolean;
    /**
     * @generated from field: optional bool supportBotUserAgentChatHistory = 7;
     */
    supportBotUserAgentChatHistory: boolean;
    /**
     * @generated from field: optional bool supportCagReactionsAndPolls = 8;
     */
    supportCagReactionsAndPolls: boolean;
    /**
     * @generated from field: optional bool supportBizHostedMsg = 9;
     */
    supportBizHostedMsg: boolean;
    /**
     * @generated from field: optional bool supportRecentSyncChunkMessageCountTuning = 10;
     */
    supportRecentSyncChunkMessageCountTuning: boolean;
    /**
     * @generated from field: optional bool supportHostedGroupMsg = 11;
     */
    supportHostedGroupMsg: boolean;
    /**
     * @generated from field: optional bool supportFbidBotChatHistory = 12;
     */
    supportFbidBotChatHistory: boolean;
    /**
     * @generated from field: optional bool supportAddOnHistorySyncMigration = 13;
     */
    supportAddOnHistorySyncMigration: boolean;
    /**
     * @generated from field: optional bool supportMessageAssociation = 14;
     */
    supportMessageAssociation: boolean;
};
/**
 * Describes the message DeviceProps.HistorySyncConfig.
 * Use `create(DeviceProps_HistorySyncConfigSchema)` to create a new message.
 */
declare const DeviceProps_HistorySyncConfigSchema: GenMessage<DeviceProps_HistorySyncConfig>;
/**
 * @generated from enum DeviceProps.PlatformType
 */
declare enum DeviceProps_PlatformType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: CHROME = 1;
     */
    CHROME = 1,
    /**
     * @generated from enum value: FIREFOX = 2;
     */
    FIREFOX = 2,
    /**
     * @generated from enum value: IE = 3;
     */
    IE = 3,
    /**
     * @generated from enum value: OPERA = 4;
     */
    OPERA = 4,
    /**
     * @generated from enum value: SAFARI = 5;
     */
    SAFARI = 5,
    /**
     * @generated from enum value: EDGE = 6;
     */
    EDGE = 6,
    /**
     * @generated from enum value: DESKTOP = 7;
     */
    DESKTOP = 7,
    /**
     * @generated from enum value: IPAD = 8;
     */
    IPAD = 8,
    /**
     * @generated from enum value: ANDROID_TABLET = 9;
     */
    ANDROID_TABLET = 9,
    /**
     * @generated from enum value: OHANA = 10;
     */
    OHANA = 10,
    /**
     * @generated from enum value: ALOHA = 11;
     */
    ALOHA = 11,
    /**
     * @generated from enum value: CATALINA = 12;
     */
    CATALINA = 12,
    /**
     * @generated from enum value: TCL_TV = 13;
     */
    TCL_TV = 13,
    /**
     * @generated from enum value: IOS_PHONE = 14;
     */
    IOS_PHONE = 14,
    /**
     * @generated from enum value: IOS_CATALYST = 15;
     */
    IOS_CATALYST = 15,
    /**
     * @generated from enum value: ANDROID_PHONE = 16;
     */
    ANDROID_PHONE = 16,
    /**
     * @generated from enum value: ANDROID_AMBIGUOUS = 17;
     */
    ANDROID_AMBIGUOUS = 17,
    /**
     * @generated from enum value: WEAR_OS = 18;
     */
    WEAR_OS = 18,
    /**
     * @generated from enum value: AR_WRIST = 19;
     */
    AR_WRIST = 19,
    /**
     * @generated from enum value: AR_DEVICE = 20;
     */
    AR_DEVICE = 20,
    /**
     * @generated from enum value: UWP = 21;
     */
    UWP = 21,
    /**
     * @generated from enum value: VR = 22;
     */
    VR = 22,
    /**
     * @generated from enum value: CLOUD_API = 23;
     */
    CLOUD_API = 23,
    /**
     * @generated from enum value: SMARTGLASSES = 24;
     */
    SMARTGLASSES = 24
}
/**
 * Describes the enum DeviceProps.PlatformType.
 */
declare const DeviceProps_PlatformTypeSchema: GenEnum<DeviceProps_PlatformType>;
/**
 * @generated from message DisappearingMode
 */
type DisappearingMode = Message$1<"DisappearingMode"> & {
    /**
     * @generated from field: optional DisappearingMode.Initiator initiator = 1;
     */
    initiator: DisappearingMode_Initiator;
    /**
     * @generated from field: optional DisappearingMode.Trigger trigger = 2;
     */
    trigger: DisappearingMode_Trigger;
    /**
     * @generated from field: optional string initiatorDeviceJid = 3;
     */
    initiatorDeviceJid: string;
    /**
     * @generated from field: optional bool initiatedByMe = 4;
     */
    initiatedByMe: boolean;
};
/**
 * Describes the message DisappearingMode.
 * Use `create(DisappearingModeSchema)` to create a new message.
 */
declare const DisappearingModeSchema: GenMessage<DisappearingMode>;
/**
 * @generated from enum DisappearingMode.Initiator
 */
declare enum DisappearingMode_Initiator {
    /**
     * @generated from enum value: CHANGED_IN_CHAT = 0;
     */
    CHANGED_IN_CHAT = 0,
    /**
     * @generated from enum value: INITIATED_BY_ME = 1;
     */
    INITIATED_BY_ME = 1,
    /**
     * @generated from enum value: INITIATED_BY_OTHER = 2;
     */
    INITIATED_BY_OTHER = 2,
    /**
     * @generated from enum value: BIZ_UPGRADE_FB_HOSTING = 3;
     */
    BIZ_UPGRADE_FB_HOSTING = 3
}
/**
 * Describes the enum DisappearingMode.Initiator.
 */
declare const DisappearingMode_InitiatorSchema: GenEnum<DisappearingMode_Initiator>;
/**
 * @generated from enum DisappearingMode.Trigger
 */
declare enum DisappearingMode_Trigger {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: CHAT_SETTING = 1;
     */
    CHAT_SETTING = 1,
    /**
     * @generated from enum value: ACCOUNT_SETTING = 2;
     */
    ACCOUNT_SETTING = 2,
    /**
     * @generated from enum value: BULK_CHANGE = 3;
     */
    BULK_CHANGE = 3,
    /**
     * @generated from enum value: BIZ_SUPPORTS_FB_HOSTING = 4;
     */
    BIZ_SUPPORTS_FB_HOSTING = 4,
    /**
     * @generated from enum value: UNKNOWN_GROUPS = 5;
     */
    UNKNOWN_GROUPS = 5
}
/**
 * Describes the enum DisappearingMode.Trigger.
 */
declare const DisappearingMode_TriggerSchema: GenEnum<DisappearingMode_Trigger>;
/**
 * @generated from message EmbeddedContent
 */
type EmbeddedContent = Message$1<"EmbeddedContent"> & {
    /**
     * @generated from oneof EmbeddedContent.content
     */
    content: {
        /**
         * @generated from field: EmbeddedMessage embeddedMessage = 1;
         */
        value: EmbeddedMessage;
        case: "embeddedMessage";
    } | {
        /**
         * @generated from field: EmbeddedMusic embeddedMusic = 2;
         */
        value: EmbeddedMusic;
        case: "embeddedMusic";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message EmbeddedContent.
 * Use `create(EmbeddedContentSchema)` to create a new message.
 */
declare const EmbeddedContentSchema: GenMessage<EmbeddedContent>;
/**
 * @generated from message EmbeddedMessage
 */
type EmbeddedMessage = Message$1<"EmbeddedMessage"> & {
    /**
     * @generated from field: optional string stanzaId = 1;
     */
    stanzaId: string;
    /**
     * @generated from field: optional Message message = 2;
     */
    message?: Message;
};
/**
 * Describes the message EmbeddedMessage.
 * Use `create(EmbeddedMessageSchema)` to create a new message.
 */
declare const EmbeddedMessageSchema: GenMessage<EmbeddedMessage>;
/**
 * @generated from message EmbeddedMusic
 */
type EmbeddedMusic = Message$1<"EmbeddedMusic"> & {
    /**
     * @generated from field: optional string musicContentMediaId = 1;
     */
    musicContentMediaId: string;
    /**
     * @generated from field: optional string songId = 2;
     */
    songId: string;
    /**
     * @generated from field: optional string author = 3;
     */
    author: string;
    /**
     * @generated from field: optional string title = 4;
     */
    title: string;
    /**
     * @generated from field: optional string artworkDirectPath = 5;
     */
    artworkDirectPath: string;
    /**
     * @generated from field: optional bytes artworkSha256 = 6;
     */
    artworkSha256: Uint8Array;
    /**
     * @generated from field: optional bytes artworkEncSha256 = 7;
     */
    artworkEncSha256: Uint8Array;
    /**
     * @generated from field: optional bytes artworkMediaKey = 11;
     */
    artworkMediaKey: Uint8Array;
    /**
     * @generated from field: optional string artistAttribution = 8;
     */
    artistAttribution: string;
    /**
     * @generated from field: optional bytes countryBlocklist = 9;
     */
    countryBlocklist: Uint8Array;
    /**
     * @generated from field: optional bool isExplicit = 10;
     */
    isExplicit: boolean;
};
/**
 * Describes the message EmbeddedMusic.
 * Use `create(EmbeddedMusicSchema)` to create a new message.
 */
declare const EmbeddedMusicSchema: GenMessage<EmbeddedMusic>;
/**
 * @generated from message EncryptedPairingRequest
 */
type EncryptedPairingRequest = Message$1<"EncryptedPairingRequest"> & {
    /**
     * @generated from field: optional bytes encryptedPayload = 1;
     */
    encryptedPayload: Uint8Array;
    /**
     * @generated from field: optional bytes iv = 2;
     */
    iv: Uint8Array;
};
/**
 * Describes the message EncryptedPairingRequest.
 * Use `create(EncryptedPairingRequestSchema)` to create a new message.
 */
declare const EncryptedPairingRequestSchema: GenMessage<EncryptedPairingRequest>;
/**
 * @generated from message EphemeralSetting
 */
type EphemeralSetting = Message$1<"EphemeralSetting"> & {
    /**
     * @generated from field: optional sfixed32 duration = 1;
     */
    duration: number;
    /**
     * @generated from field: optional sfixed64 timestamp = 2;
     */
    timestamp: bigint;
};
/**
 * Describes the message EphemeralSetting.
 * Use `create(EphemeralSettingSchema)` to create a new message.
 */
declare const EphemeralSettingSchema: GenMessage<EphemeralSetting>;
/**
 * @generated from message EventAdditionalMetadata
 */
type EventAdditionalMetadata = Message$1<"EventAdditionalMetadata"> & {
    /**
     * @generated from field: optional bool isStale = 1;
     */
    isStale: boolean;
};
/**
 * Describes the message EventAdditionalMetadata.
 * Use `create(EventAdditionalMetadataSchema)` to create a new message.
 */
declare const EventAdditionalMetadataSchema: GenMessage<EventAdditionalMetadata>;
/**
 * @generated from message EventResponse
 */
type EventResponse = Message$1<"EventResponse"> & {
    /**
     * @generated from field: optional MessageKey eventResponseMessageKey = 1;
     */
    eventResponseMessageKey?: MessageKey;
    /**
     * @generated from field: optional int64 timestampMs = 2;
     */
    timestampMs: bigint;
    /**
     * @generated from field: optional Message.EventResponseMessage eventResponseMessage = 3;
     */
    eventResponseMessage?: Message_EventResponseMessage;
    /**
     * @generated from field: optional bool unread = 4;
     */
    unread: boolean;
};
/**
 * Describes the message EventResponse.
 * Use `create(EventResponseSchema)` to create a new message.
 */
declare const EventResponseSchema: GenMessage<EventResponse>;
/**
 * @generated from message ExitCode
 */
type ExitCode = Message$1<"ExitCode"> & {
    /**
     * @generated from field: optional uint64 code = 1;
     */
    code: bigint;
    /**
     * @generated from field: optional string text = 2;
     */
    text: string;
};
/**
 * Describes the message ExitCode.
 * Use `create(ExitCodeSchema)` to create a new message.
 */
declare const ExitCodeSchema: GenMessage<ExitCode>;
/**
 * @generated from message ExternalBlobReference
 */
type ExternalBlobReference = Message$1<"ExternalBlobReference"> & {
    /**
     * @generated from field: optional bytes mediaKey = 1;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional string directPath = 2;
     */
    directPath: string;
    /**
     * @generated from field: optional string handle = 3;
     */
    handle: string;
    /**
     * @generated from field: optional uint64 fileSizeBytes = 4;
     */
    fileSizeBytes: bigint;
    /**
     * @generated from field: optional bytes fileSha256 = 5;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional bytes fileEncSha256 = 6;
     */
    fileEncSha256: Uint8Array;
};
/**
 * Describes the message ExternalBlobReference.
 * Use `create(ExternalBlobReferenceSchema)` to create a new message.
 */
declare const ExternalBlobReferenceSchema: GenMessage<ExternalBlobReference>;
/**
 * @generated from message Field
 */
type Field = Message$1<"Field"> & {
    /**
     * @generated from field: optional uint32 minVersion = 1;
     */
    minVersion: number;
    /**
     * @generated from field: optional uint32 maxVersion = 2;
     */
    maxVersion: number;
    /**
     * @generated from field: optional uint32 notReportableMinVersion = 3;
     */
    notReportableMinVersion: number;
    /**
     * @generated from field: optional bool isMessage = 4;
     */
    isMessage: boolean;
    /**
     * @generated from field: map<uint32, Field> subfield = 5;
     */
    subfield: {
        [key: number]: Field;
    };
};
/**
 * Describes the message Field.
 * Use `create(FieldSchema)` to create a new message.
 */
declare const FieldSchema: GenMessage<Field>;
/**
 * @generated from message GlobalSettings
 */
type GlobalSettings = Message$1<"GlobalSettings"> & {
    /**
     * @generated from field: optional WallpaperSettings lightThemeWallpaper = 1;
     */
    lightThemeWallpaper?: WallpaperSettings;
    /**
     * @generated from field: optional MediaVisibility mediaVisibility = 2;
     */
    mediaVisibility: MediaVisibility;
    /**
     * @generated from field: optional WallpaperSettings darkThemeWallpaper = 3;
     */
    darkThemeWallpaper?: WallpaperSettings;
    /**
     * @generated from field: optional AutoDownloadSettings autoDownloadWiFi = 4;
     */
    autoDownloadWiFi?: AutoDownloadSettings;
    /**
     * @generated from field: optional AutoDownloadSettings autoDownloadCellular = 5;
     */
    autoDownloadCellular?: AutoDownloadSettings;
    /**
     * @generated from field: optional AutoDownloadSettings autoDownloadRoaming = 6;
     */
    autoDownloadRoaming?: AutoDownloadSettings;
    /**
     * @generated from field: optional bool showIndividualNotificationsPreview = 7;
     */
    showIndividualNotificationsPreview: boolean;
    /**
     * @generated from field: optional bool showGroupNotificationsPreview = 8;
     */
    showGroupNotificationsPreview: boolean;
    /**
     * @generated from field: optional int32 disappearingModeDuration = 9;
     */
    disappearingModeDuration: number;
    /**
     * @generated from field: optional int64 disappearingModeTimestamp = 10;
     */
    disappearingModeTimestamp: bigint;
    /**
     * @generated from field: optional AvatarUserSettings avatarUserSettings = 11;
     */
    avatarUserSettings?: AvatarUserSettings;
    /**
     * @generated from field: optional int32 fontSize = 12;
     */
    fontSize: number;
    /**
     * @generated from field: optional bool securityNotifications = 13;
     */
    securityNotifications: boolean;
    /**
     * @generated from field: optional bool autoUnarchiveChats = 14;
     */
    autoUnarchiveChats: boolean;
    /**
     * @generated from field: optional int32 videoQualityMode = 15;
     */
    videoQualityMode: number;
    /**
     * @generated from field: optional int32 photoQualityMode = 16;
     */
    photoQualityMode: number;
    /**
     * @generated from field: optional NotificationSettings individualNotificationSettings = 17;
     */
    individualNotificationSettings?: NotificationSettings;
    /**
     * @generated from field: optional NotificationSettings groupNotificationSettings = 18;
     */
    groupNotificationSettings?: NotificationSettings;
    /**
     * @generated from field: optional ChatLockSettings chatLockSettings = 19;
     */
    chatLockSettings?: ChatLockSettings;
    /**
     * @generated from field: optional int64 chatDbLidMigrationTimestamp = 20;
     */
    chatDbLidMigrationTimestamp: bigint;
};
/**
 * Describes the message GlobalSettings.
 * Use `create(GlobalSettingsSchema)` to create a new message.
 */
declare const GlobalSettingsSchema: GenMessage<GlobalSettings>;
/**
 * @generated from message GroupMention
 */
type GroupMention = Message$1<"GroupMention"> & {
    /**
     * @generated from field: optional string groupJid = 1;
     */
    groupJid: string;
    /**
     * @generated from field: optional string groupSubject = 2;
     */
    groupSubject: string;
};
/**
 * Describes the message GroupMention.
 * Use `create(GroupMentionSchema)` to create a new message.
 */
declare const GroupMentionSchema: GenMessage<GroupMention>;
/**
 * @generated from message GroupParticipant
 */
type GroupParticipant = Message$1<"GroupParticipant"> & {
    /**
     * @generated from field: required string userJid = 1;
     */
    userJid: string;
    /**
     * @generated from field: optional GroupParticipant.Rank rank = 2;
     */
    rank: GroupParticipant_Rank;
};
/**
 * Describes the message GroupParticipant.
 * Use `create(GroupParticipantSchema)` to create a new message.
 */
declare const GroupParticipantSchema: GenMessage<GroupParticipant>;
/**
 * @generated from enum GroupParticipant.Rank
 */
declare enum GroupParticipant_Rank {
    /**
     * @generated from enum value: REGULAR = 0;
     */
    REGULAR = 0,
    /**
     * @generated from enum value: ADMIN = 1;
     */
    ADMIN = 1,
    /**
     * @generated from enum value: SUPERADMIN = 2;
     */
    SUPERADMIN = 2
}
/**
 * Describes the enum GroupParticipant.Rank.
 */
declare const GroupParticipant_RankSchema: GenEnum<GroupParticipant_Rank>;
/**
 * @generated from message HandshakeMessage
 */
type HandshakeMessage = Message$1<"HandshakeMessage"> & {
    /**
     * @generated from field: optional HandshakeMessage.ClientHello clientHello = 2;
     */
    clientHello?: HandshakeMessage_ClientHello;
    /**
     * @generated from field: optional HandshakeMessage.ServerHello serverHello = 3;
     */
    serverHello?: HandshakeMessage_ServerHello;
    /**
     * @generated from field: optional HandshakeMessage.ClientFinish clientFinish = 4;
     */
    clientFinish?: HandshakeMessage_ClientFinish;
};
/**
 * Describes the message HandshakeMessage.
 * Use `create(HandshakeMessageSchema)` to create a new message.
 */
declare const HandshakeMessageSchema: GenMessage<HandshakeMessage>;
/**
 * @generated from message HandshakeMessage.ClientFinish
 */
type HandshakeMessage_ClientFinish = Message$1<"HandshakeMessage.ClientFinish"> & {
    /**
     * @generated from field: optional bytes static = 1;
     */
    static: Uint8Array;
    /**
     * @generated from field: optional bytes payload = 2;
     */
    payload: Uint8Array;
};
/**
 * Describes the message HandshakeMessage.ClientFinish.
 * Use `create(HandshakeMessage_ClientFinishSchema)` to create a new message.
 */
declare const HandshakeMessage_ClientFinishSchema: GenMessage<HandshakeMessage_ClientFinish>;
/**
 * @generated from message HandshakeMessage.ClientHello
 */
type HandshakeMessage_ClientHello = Message$1<"HandshakeMessage.ClientHello"> & {
    /**
     * @generated from field: optional bytes ephemeral = 1;
     */
    ephemeral: Uint8Array;
    /**
     * @generated from field: optional bytes static = 2;
     */
    static: Uint8Array;
    /**
     * @generated from field: optional bytes payload = 3;
     */
    payload: Uint8Array;
};
/**
 * Describes the message HandshakeMessage.ClientHello.
 * Use `create(HandshakeMessage_ClientHelloSchema)` to create a new message.
 */
declare const HandshakeMessage_ClientHelloSchema: GenMessage<HandshakeMessage_ClientHello>;
/**
 * @generated from message HandshakeMessage.ServerHello
 */
type HandshakeMessage_ServerHello = Message$1<"HandshakeMessage.ServerHello"> & {
    /**
     * @generated from field: optional bytes ephemeral = 1;
     */
    ephemeral: Uint8Array;
    /**
     * @generated from field: optional bytes static = 2;
     */
    static: Uint8Array;
    /**
     * @generated from field: optional bytes payload = 3;
     */
    payload: Uint8Array;
};
/**
 * Describes the message HandshakeMessage.ServerHello.
 * Use `create(HandshakeMessage_ServerHelloSchema)` to create a new message.
 */
declare const HandshakeMessage_ServerHelloSchema: GenMessage<HandshakeMessage_ServerHello>;
/**
 * @generated from message HistorySync
 */
type HistorySync = Message$1<"HistorySync"> & {
    /**
     * @generated from field: required HistorySync.HistorySyncType syncType = 1;
     */
    syncType: HistorySync_HistorySyncType;
    /**
     * @generated from field: repeated Conversation conversations = 2;
     */
    conversations: Conversation[];
    /**
     * @generated from field: repeated WebMessageInfo statusV3Messages = 3;
     */
    statusV3Messages: WebMessageInfo[];
    /**
     * @generated from field: optional uint32 chunkOrder = 5;
     */
    chunkOrder: number;
    /**
     * @generated from field: optional uint32 progress = 6;
     */
    progress: number;
    /**
     * @generated from field: repeated Pushname pushnames = 7;
     */
    pushnames: Pushname[];
    /**
     * @generated from field: optional GlobalSettings globalSettings = 8;
     */
    globalSettings?: GlobalSettings;
    /**
     * @generated from field: optional bytes threadIdUserSecret = 9;
     */
    threadIdUserSecret: Uint8Array;
    /**
     * @generated from field: optional uint32 threadDsTimeframeOffset = 10;
     */
    threadDsTimeframeOffset: number;
    /**
     * @generated from field: repeated StickerMetadata recentStickers = 11;
     */
    recentStickers: StickerMetadata[];
    /**
     * @generated from field: repeated PastParticipants pastParticipants = 12;
     */
    pastParticipants: PastParticipants[];
    /**
     * @generated from field: repeated CallLogRecord callLogRecords = 13;
     */
    callLogRecords: CallLogRecord[];
    /**
     * @generated from field: optional HistorySync.BotAIWaitListState aiWaitListState = 14;
     */
    aiWaitListState: HistorySync_BotAIWaitListState;
    /**
     * @generated from field: repeated PhoneNumberToLIDMapping phoneNumberToLidMappings = 15;
     */
    phoneNumberToLidMappings: PhoneNumberToLIDMapping[];
    /**
     * @generated from field: optional string companionMetaNonce = 16;
     */
    companionMetaNonce: string;
    /**
     * @generated from field: optional bytes shareableChatIdentifierEncryptionKey = 17;
     */
    shareableChatIdentifierEncryptionKey: Uint8Array;
    /**
     * @generated from field: repeated Account accounts = 18;
     */
    accounts: Account[];
};
/**
 * Describes the message HistorySync.
 * Use `create(HistorySyncSchema)` to create a new message.
 */
declare const HistorySyncSchema: GenMessage<HistorySync>;
/**
 * @generated from enum HistorySync.BotAIWaitListState
 */
declare enum HistorySync_BotAIWaitListState {
    /**
     * @generated from enum value: IN_WAITLIST = 0;
     */
    IN_WAITLIST = 0,
    /**
     * @generated from enum value: AI_AVAILABLE = 1;
     */
    AI_AVAILABLE = 1
}
/**
 * Describes the enum HistorySync.BotAIWaitListState.
 */
declare const HistorySync_BotAIWaitListStateSchema: GenEnum<HistorySync_BotAIWaitListState>;
/**
 * @generated from enum HistorySync.HistorySyncType
 */
declare enum HistorySync_HistorySyncType {
    /**
     * @generated from enum value: INITIAL_BOOTSTRAP = 0;
     */
    INITIAL_BOOTSTRAP = 0,
    /**
     * @generated from enum value: INITIAL_STATUS_V3 = 1;
     */
    INITIAL_STATUS_V3 = 1,
    /**
     * @generated from enum value: FULL = 2;
     */
    FULL = 2,
    /**
     * @generated from enum value: RECENT = 3;
     */
    RECENT = 3,
    /**
     * @generated from enum value: PUSH_NAME = 4;
     */
    PUSH_NAME = 4,
    /**
     * @generated from enum value: NON_BLOCKING_DATA = 5;
     */
    NON_BLOCKING_DATA = 5,
    /**
     * @generated from enum value: ON_DEMAND = 6;
     */
    ON_DEMAND = 6
}
/**
 * Describes the enum HistorySync.HistorySyncType.
 */
declare const HistorySync_HistorySyncTypeSchema: GenEnum<HistorySync_HistorySyncType>;
/**
 * @generated from message HistorySyncMsg
 */
type HistorySyncMsg = Message$1<"HistorySyncMsg"> & {
    /**
     * @generated from field: optional WebMessageInfo message = 1;
     */
    message?: WebMessageInfo;
    /**
     * @generated from field: optional uint64 msgOrderId = 2;
     */
    msgOrderId: bigint;
};
/**
 * Describes the message HistorySyncMsg.
 * Use `create(HistorySyncMsgSchema)` to create a new message.
 */
declare const HistorySyncMsgSchema: GenMessage<HistorySyncMsg>;
/**
 * @generated from message HydratedTemplateButton
 */
type HydratedTemplateButton = Message$1<"HydratedTemplateButton"> & {
    /**
     * @generated from field: optional uint32 index = 4;
     */
    index: number;
    /**
     * @generated from oneof HydratedTemplateButton.hydratedButton
     */
    hydratedButton: {
        /**
         * @generated from field: HydratedTemplateButton.HydratedQuickReplyButton quickReplyButton = 1;
         */
        value: HydratedTemplateButton_HydratedQuickReplyButton;
        case: "quickReplyButton";
    } | {
        /**
         * @generated from field: HydratedTemplateButton.HydratedURLButton urlButton = 2;
         */
        value: HydratedTemplateButton_HydratedURLButton;
        case: "urlButton";
    } | {
        /**
         * @generated from field: HydratedTemplateButton.HydratedCallButton callButton = 3;
         */
        value: HydratedTemplateButton_HydratedCallButton;
        case: "callButton";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message HydratedTemplateButton.
 * Use `create(HydratedTemplateButtonSchema)` to create a new message.
 */
declare const HydratedTemplateButtonSchema: GenMessage<HydratedTemplateButton>;
/**
 * @generated from message HydratedTemplateButton.HydratedCallButton
 */
type HydratedTemplateButton_HydratedCallButton = Message$1<"HydratedTemplateButton.HydratedCallButton"> & {
    /**
     * @generated from field: optional string displayText = 1;
     */
    displayText: string;
    /**
     * @generated from field: optional string phoneNumber = 2;
     */
    phoneNumber: string;
};
/**
 * Describes the message HydratedTemplateButton.HydratedCallButton.
 * Use `create(HydratedTemplateButton_HydratedCallButtonSchema)` to create a new message.
 */
declare const HydratedTemplateButton_HydratedCallButtonSchema: GenMessage<HydratedTemplateButton_HydratedCallButton>;
/**
 * @generated from message HydratedTemplateButton.HydratedQuickReplyButton
 */
type HydratedTemplateButton_HydratedQuickReplyButton = Message$1<"HydratedTemplateButton.HydratedQuickReplyButton"> & {
    /**
     * @generated from field: optional string displayText = 1;
     */
    displayText: string;
    /**
     * @generated from field: optional string id = 2;
     */
    id: string;
};
/**
 * Describes the message HydratedTemplateButton.HydratedQuickReplyButton.
 * Use `create(HydratedTemplateButton_HydratedQuickReplyButtonSchema)` to create a new message.
 */
declare const HydratedTemplateButton_HydratedQuickReplyButtonSchema: GenMessage<HydratedTemplateButton_HydratedQuickReplyButton>;
/**
 * @generated from message HydratedTemplateButton.HydratedURLButton
 */
type HydratedTemplateButton_HydratedURLButton = Message$1<"HydratedTemplateButton.HydratedURLButton"> & {
    /**
     * @generated from field: optional string displayText = 1;
     */
    displayText: string;
    /**
     * @generated from field: optional string url = 2;
     */
    url: string;
    /**
     * @generated from field: optional string consentedUsersUrl = 3;
     */
    consentedUsersUrl: string;
    /**
     * @generated from field: optional HydratedTemplateButton.HydratedURLButton.WebviewPresentationType webviewPresentation = 4;
     */
    webviewPresentation: HydratedTemplateButton_HydratedURLButton_WebviewPresentationType;
};
/**
 * Describes the message HydratedTemplateButton.HydratedURLButton.
 * Use `create(HydratedTemplateButton_HydratedURLButtonSchema)` to create a new message.
 */
declare const HydratedTemplateButton_HydratedURLButtonSchema: GenMessage<HydratedTemplateButton_HydratedURLButton>;
/**
 * @generated from enum HydratedTemplateButton.HydratedURLButton.WebviewPresentationType
 */
declare enum HydratedTemplateButton_HydratedURLButton_WebviewPresentationType {
    /**
     * @generated from enum value: FULL = 1;
     */
    FULL = 1,
    /**
     * @generated from enum value: TALL = 2;
     */
    TALL = 2,
    /**
     * @generated from enum value: COMPACT = 3;
     */
    COMPACT = 3
}
/**
 * Describes the enum HydratedTemplateButton.HydratedURLButton.WebviewPresentationType.
 */
declare const HydratedTemplateButton_HydratedURLButton_WebviewPresentationTypeSchema: GenEnum<HydratedTemplateButton_HydratedURLButton_WebviewPresentationType>;
/**
 * @generated from message IdentityKeyPairStructure
 */
type IdentityKeyPairStructure = Message$1<"IdentityKeyPairStructure"> & {
    /**
     * @generated from field: optional bytes publicKey = 1;
     */
    publicKey: Uint8Array;
    /**
     * @generated from field: optional bytes privateKey = 2;
     */
    privateKey: Uint8Array;
};
/**
 * Describes the message IdentityKeyPairStructure.
 * Use `create(IdentityKeyPairStructureSchema)` to create a new message.
 */
declare const IdentityKeyPairStructureSchema: GenMessage<IdentityKeyPairStructure>;
/**
 * @generated from message InteractiveAnnotation
 */
type InteractiveAnnotation = Message$1<"InteractiveAnnotation"> & {
    /**
     * @generated from field: repeated Point polygonVertices = 1;
     */
    polygonVertices: Point[];
    /**
     * @generated from field: optional bool shouldSkipConfirmation = 4;
     */
    shouldSkipConfirmation: boolean;
    /**
     * @generated from field: optional EmbeddedContent embeddedContent = 5;
     */
    embeddedContent?: EmbeddedContent;
    /**
     * @generated from field: optional InteractiveAnnotation.StatusLinkType statusLinkType = 8;
     */
    statusLinkType: InteractiveAnnotation_StatusLinkType;
    /**
     * @generated from oneof InteractiveAnnotation.action
     */
    action: {
        /**
         * @generated from field: Location location = 2;
         */
        value: Location;
        case: "location";
    } | {
        /**
         * @generated from field: ContextInfo.ForwardedNewsletterMessageInfo newsletter = 3;
         */
        value: ContextInfo_ForwardedNewsletterMessageInfo;
        case: "newsletter";
    } | {
        /**
         * @generated from field: bool embeddedAction = 6;
         */
        value: boolean;
        case: "embeddedAction";
    } | {
        /**
         * @generated from field: TapLinkAction tapAction = 7;
         */
        value: TapLinkAction;
        case: "tapAction";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message InteractiveAnnotation.
 * Use `create(InteractiveAnnotationSchema)` to create a new message.
 */
declare const InteractiveAnnotationSchema: GenMessage<InteractiveAnnotation>;
/**
 * @generated from enum InteractiveAnnotation.StatusLinkType
 */
declare enum InteractiveAnnotation_StatusLinkType {
    /**
     * @generated from enum value: RASTERIZED_LINK_PREVIEW = 1;
     */
    RASTERIZED_LINK_PREVIEW = 1,
    /**
     * @generated from enum value: RASTERIZED_LINK_TRUNCATED = 2;
     */
    RASTERIZED_LINK_TRUNCATED = 2,
    /**
     * @generated from enum value: RASTERIZED_LINK_FULL_URL = 3;
     */
    RASTERIZED_LINK_FULL_URL = 3
}
/**
 * Describes the enum InteractiveAnnotation.StatusLinkType.
 */
declare const InteractiveAnnotation_StatusLinkTypeSchema: GenEnum<InteractiveAnnotation_StatusLinkType>;
/**
 * @generated from message KeepInChat
 */
type KeepInChat = Message$1<"KeepInChat"> & {
    /**
     * @generated from field: optional KeepType keepType = 1;
     */
    keepType: KeepType;
    /**
     * @generated from field: optional int64 serverTimestamp = 2;
     */
    serverTimestamp: bigint;
    /**
     * @generated from field: optional MessageKey key = 3;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional string deviceJid = 4;
     */
    deviceJid: string;
    /**
     * @generated from field: optional int64 clientTimestampMs = 5;
     */
    clientTimestampMs: bigint;
    /**
     * @generated from field: optional int64 serverTimestampMs = 6;
     */
    serverTimestampMs: bigint;
};
/**
 * Describes the message KeepInChat.
 * Use `create(KeepInChatSchema)` to create a new message.
 */
declare const KeepInChatSchema: GenMessage<KeepInChat>;
/**
 * @generated from message KeyExchangeMessage
 */
type KeyExchangeMessage = Message$1<"KeyExchangeMessage"> & {
    /**
     * @generated from field: optional uint32 id = 1;
     */
    id: number;
    /**
     * @generated from field: optional bytes baseKey = 2;
     */
    baseKey: Uint8Array;
    /**
     * @generated from field: optional bytes ratchetKey = 3;
     */
    ratchetKey: Uint8Array;
    /**
     * @generated from field: optional bytes identityKey = 4;
     */
    identityKey: Uint8Array;
    /**
     * @generated from field: optional bytes baseKeySignature = 5;
     */
    baseKeySignature: Uint8Array;
};
/**
 * Describes the message KeyExchangeMessage.
 * Use `create(KeyExchangeMessageSchema)` to create a new message.
 */
declare const KeyExchangeMessageSchema: GenMessage<KeyExchangeMessage>;
/**
 * @generated from message KeyId
 */
type KeyId = Message$1<"KeyId"> & {
    /**
     * @generated from field: optional bytes id = 1;
     */
    id: Uint8Array;
};
/**
 * Describes the message KeyId.
 * Use `create(KeyIdSchema)` to create a new message.
 */
declare const KeyIdSchema: GenMessage<KeyId>;
/**
 * @generated from message LIDMigrationMapping
 */
type LIDMigrationMapping = Message$1<"LIDMigrationMapping"> & {
    /**
     * @generated from field: required uint64 pn = 1;
     */
    pn: bigint;
    /**
     * @generated from field: required uint64 assignedLid = 2;
     */
    assignedLid: bigint;
    /**
     * @generated from field: optional uint64 latestLid = 3;
     */
    latestLid: bigint;
};
/**
 * Describes the message LIDMigrationMapping.
 * Use `create(LIDMigrationMappingSchema)` to create a new message.
 */
declare const LIDMigrationMappingSchema: GenMessage<LIDMigrationMapping>;
/**
 * @generated from message LIDMigrationMappingSyncMessage
 */
type LIDMigrationMappingSyncMessage = Message$1<"LIDMigrationMappingSyncMessage"> & {
    /**
     * @generated from field: optional bytes encodedMappingPayload = 1;
     */
    encodedMappingPayload: Uint8Array;
};
/**
 * Describes the message LIDMigrationMappingSyncMessage.
 * Use `create(LIDMigrationMappingSyncMessageSchema)` to create a new message.
 */
declare const LIDMigrationMappingSyncMessageSchema: GenMessage<LIDMigrationMappingSyncMessage>;
/**
 * @generated from message LIDMigrationMappingSyncPayload
 */
type LIDMigrationMappingSyncPayload = Message$1<"LIDMigrationMappingSyncPayload"> & {
    /**
     * @generated from field: repeated LIDMigrationMapping pnToLidMappings = 1;
     */
    pnToLidMappings: LIDMigrationMapping[];
    /**
     * @generated from field: optional uint64 chatDbMigrationTimestamp = 2;
     */
    chatDbMigrationTimestamp: bigint;
};
/**
 * Describes the message LIDMigrationMappingSyncPayload.
 * Use `create(LIDMigrationMappingSyncPayloadSchema)` to create a new message.
 */
declare const LIDMigrationMappingSyncPayloadSchema: GenMessage<LIDMigrationMappingSyncPayload>;
/**
 * @generated from message LegacyMessage
 */
type LegacyMessage = Message$1<"LegacyMessage"> & {
    /**
     * @generated from field: optional Message.EventResponseMessage eventResponseMessage = 1;
     */
    eventResponseMessage?: Message_EventResponseMessage;
    /**
     * @generated from field: optional Message.PollVoteMessage pollVote = 2;
     */
    pollVote?: Message_PollVoteMessage;
};
/**
 * Describes the message LegacyMessage.
 * Use `create(LegacyMessageSchema)` to create a new message.
 */
declare const LegacyMessageSchema: GenMessage<LegacyMessage>;
/**
 * @generated from message LimitSharing
 */
type LimitSharing = Message$1<"LimitSharing"> & {
    /**
     * @generated from field: optional bool sharingLimited = 1;
     */
    sharingLimited: boolean;
    /**
     * @generated from field: optional LimitSharing.Trigger trigger = 2;
     */
    trigger: LimitSharing_Trigger;
    /**
     * @generated from field: optional int64 limitSharingSettingTimestamp = 3;
     */
    limitSharingSettingTimestamp: bigint;
    /**
     * @generated from field: optional bool initiatedByMe = 4;
     */
    initiatedByMe: boolean;
};
/**
 * Describes the message LimitSharing.
 * Use `create(LimitSharingSchema)` to create a new message.
 */
declare const LimitSharingSchema: GenMessage<LimitSharing>;
/**
 * @generated from enum LimitSharing.Trigger
 */
declare enum LimitSharing_Trigger {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: CHAT_SETTING = 1;
     */
    CHAT_SETTING = 1,
    /**
     * @generated from enum value: BIZ_SUPPORTS_FB_HOSTING = 2;
     */
    BIZ_SUPPORTS_FB_HOSTING = 2,
    /**
     * @generated from enum value: UNKNOWN_GROUP = 3;
     */
    UNKNOWN_GROUP = 3
}
/**
 * Describes the enum LimitSharing.Trigger.
 */
declare const LimitSharing_TriggerSchema: GenEnum<LimitSharing_Trigger>;
/**
 * @generated from message LocalizedName
 */
type LocalizedName = Message$1<"LocalizedName"> & {
    /**
     * @generated from field: optional string lg = 1;
     */
    lg: string;
    /**
     * @generated from field: optional string lc = 2;
     */
    lc: string;
    /**
     * @generated from field: optional string verifiedName = 3;
     */
    verifiedName: string;
};
/**
 * Describes the message LocalizedName.
 * Use `create(LocalizedNameSchema)` to create a new message.
 */
declare const LocalizedNameSchema: GenMessage<LocalizedName>;
/**
 * @generated from message Location
 */
type Location = Message$1<"Location"> & {
    /**
     * @generated from field: optional double degreesLatitude = 1;
     */
    degreesLatitude: number;
    /**
     * @generated from field: optional double degreesLongitude = 2;
     */
    degreesLongitude: number;
    /**
     * @generated from field: optional string name = 3;
     */
    name: string;
};
/**
 * Describes the message Location.
 * Use `create(LocationSchema)` to create a new message.
 */
declare const LocationSchema: GenMessage<Location>;
/**
 * @generated from message MediaData
 */
type MediaData = Message$1<"MediaData"> & {
    /**
     * @generated from field: optional string localPath = 1;
     */
    localPath: string;
};
/**
 * Describes the message MediaData.
 * Use `create(MediaDataSchema)` to create a new message.
 */
declare const MediaDataSchema: GenMessage<MediaData>;
/**
 * @generated from message MediaNotifyMessage
 */
type MediaNotifyMessage = Message$1<"MediaNotifyMessage"> & {
    /**
     * @generated from field: optional string expressPathUrl = 1;
     */
    expressPathUrl: string;
    /**
     * @generated from field: optional bytes fileEncSha256 = 2;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: optional uint64 fileLength = 3;
     */
    fileLength: bigint;
};
/**
 * Describes the message MediaNotifyMessage.
 * Use `create(MediaNotifyMessageSchema)` to create a new message.
 */
declare const MediaNotifyMessageSchema: GenMessage<MediaNotifyMessage>;
/**
 * @generated from message MediaRetryNotification
 */
type MediaRetryNotification = Message$1<"MediaRetryNotification"> & {
    /**
     * @generated from field: optional string stanzaId = 1;
     */
    stanzaId: string;
    /**
     * @generated from field: optional string directPath = 2;
     */
    directPath: string;
    /**
     * @generated from field: optional MediaRetryNotification.ResultType result = 3;
     */
    result: MediaRetryNotification_ResultType;
    /**
     * @generated from field: optional bytes messageSecret = 4;
     */
    messageSecret: Uint8Array;
};
/**
 * Describes the message MediaRetryNotification.
 * Use `create(MediaRetryNotificationSchema)` to create a new message.
 */
declare const MediaRetryNotificationSchema: GenMessage<MediaRetryNotification>;
/**
 * @generated from enum MediaRetryNotification.ResultType
 */
declare enum MediaRetryNotification_ResultType {
    /**
     * @generated from enum value: GENERAL_ERROR = 0;
     */
    GENERAL_ERROR = 0,
    /**
     * @generated from enum value: SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * @generated from enum value: NOT_FOUND = 2;
     */
    NOT_FOUND = 2,
    /**
     * @generated from enum value: DECRYPTION_ERROR = 3;
     */
    DECRYPTION_ERROR = 3
}
/**
 * Describes the enum MediaRetryNotification.ResultType.
 */
declare const MediaRetryNotification_ResultTypeSchema: GenEnum<MediaRetryNotification_ResultType>;
/**
 * @generated from message MemberLabel
 */
type MemberLabel = Message$1<"MemberLabel"> & {
    /**
     * @generated from field: optional string label = 1;
     */
    label: string;
    /**
     * @generated from field: optional int64 labelTimestamp = 2;
     */
    labelTimestamp: bigint;
};
/**
 * Describes the message MemberLabel.
 * Use `create(MemberLabelSchema)` to create a new message.
 */
declare const MemberLabelSchema: GenMessage<MemberLabel>;
/**
 * @generated from message Message
 */
type Message = Message$1<"Message"> & {
    /**
     * @generated from field: optional string conversation = 1;
     */
    conversation: string;
    /**
     * @generated from field: optional Message.SenderKeyDistributionMessage senderKeyDistributionMessage = 2;
     */
    senderKeyDistributionMessage?: Message_SenderKeyDistributionMessage;
    /**
     * @generated from field: optional Message.ImageMessage imageMessage = 3;
     */
    imageMessage?: Message_ImageMessage;
    /**
     * @generated from field: optional Message.ContactMessage contactMessage = 4;
     */
    contactMessage?: Message_ContactMessage;
    /**
     * @generated from field: optional Message.LocationMessage locationMessage = 5;
     */
    locationMessage?: Message_LocationMessage;
    /**
     * @generated from field: optional Message.ExtendedTextMessage extendedTextMessage = 6;
     */
    extendedTextMessage?: Message_ExtendedTextMessage;
    /**
     * @generated from field: optional Message.DocumentMessage documentMessage = 7;
     */
    documentMessage?: Message_DocumentMessage;
    /**
     * @generated from field: optional Message.AudioMessage audioMessage = 8;
     */
    audioMessage?: Message_AudioMessage;
    /**
     * @generated from field: optional Message.VideoMessage videoMessage = 9;
     */
    videoMessage?: Message_VideoMessage;
    /**
     * @generated from field: optional Message.Call call = 10;
     */
    call?: Message_Call;
    /**
     * @generated from field: optional Message.Chat chat = 11;
     */
    chat?: Message_Chat;
    /**
     * @generated from field: optional Message.ProtocolMessage protocolMessage = 12;
     */
    protocolMessage?: Message_ProtocolMessage;
    /**
     * @generated from field: optional Message.ContactsArrayMessage contactsArrayMessage = 13;
     */
    contactsArrayMessage?: Message_ContactsArrayMessage;
    /**
     * @generated from field: optional Message.HighlyStructuredMessage highlyStructuredMessage = 14;
     */
    highlyStructuredMessage?: Message_HighlyStructuredMessage;
    /**
     * @generated from field: optional Message.SenderKeyDistributionMessage fastRatchetKeySenderKeyDistributionMessage = 15;
     */
    fastRatchetKeySenderKeyDistributionMessage?: Message_SenderKeyDistributionMessage;
    /**
     * @generated from field: optional Message.SendPaymentMessage sendPaymentMessage = 16;
     */
    sendPaymentMessage?: Message_SendPaymentMessage;
    /**
     * @generated from field: optional Message.LiveLocationMessage liveLocationMessage = 18;
     */
    liveLocationMessage?: Message_LiveLocationMessage;
    /**
     * @generated from field: optional Message.RequestPaymentMessage requestPaymentMessage = 22;
     */
    requestPaymentMessage?: Message_RequestPaymentMessage;
    /**
     * @generated from field: optional Message.DeclinePaymentRequestMessage declinePaymentRequestMessage = 23;
     */
    declinePaymentRequestMessage?: Message_DeclinePaymentRequestMessage;
    /**
     * @generated from field: optional Message.CancelPaymentRequestMessage cancelPaymentRequestMessage = 24;
     */
    cancelPaymentRequestMessage?: Message_CancelPaymentRequestMessage;
    /**
     * @generated from field: optional Message.TemplateMessage templateMessage = 25;
     */
    templateMessage?: Message_TemplateMessage;
    /**
     * @generated from field: optional Message.StickerMessage stickerMessage = 26;
     */
    stickerMessage?: Message_StickerMessage;
    /**
     * @generated from field: optional Message.GroupInviteMessage groupInviteMessage = 28;
     */
    groupInviteMessage?: Message_GroupInviteMessage;
    /**
     * @generated from field: optional Message.TemplateButtonReplyMessage templateButtonReplyMessage = 29;
     */
    templateButtonReplyMessage?: Message_TemplateButtonReplyMessage;
    /**
     * @generated from field: optional Message.ProductMessage productMessage = 30;
     */
    productMessage?: Message_ProductMessage;
    /**
     * @generated from field: optional Message.DeviceSentMessage deviceSentMessage = 31;
     */
    deviceSentMessage?: Message_DeviceSentMessage;
    /**
     * @generated from field: optional MessageContextInfo messageContextInfo = 35;
     */
    messageContextInfo?: MessageContextInfo;
    /**
     * @generated from field: optional Message.ListMessage listMessage = 36;
     */
    listMessage?: Message_ListMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage viewOnceMessage = 37;
     */
    viewOnceMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.OrderMessage orderMessage = 38;
     */
    orderMessage?: Message_OrderMessage;
    /**
     * @generated from field: optional Message.ListResponseMessage listResponseMessage = 39;
     */
    listResponseMessage?: Message_ListResponseMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage ephemeralMessage = 40;
     */
    ephemeralMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.InvoiceMessage invoiceMessage = 41;
     */
    invoiceMessage?: Message_InvoiceMessage;
    /**
     * @generated from field: optional Message.ButtonsMessage buttonsMessage = 42;
     */
    buttonsMessage?: Message_ButtonsMessage;
    /**
     * @generated from field: optional Message.ButtonsResponseMessage buttonsResponseMessage = 43;
     */
    buttonsResponseMessage?: Message_ButtonsResponseMessage;
    /**
     * @generated from field: optional Message.PaymentInviteMessage paymentInviteMessage = 44;
     */
    paymentInviteMessage?: Message_PaymentInviteMessage;
    /**
     * @generated from field: optional Message.InteractiveMessage interactiveMessage = 45;
     */
    interactiveMessage?: Message_InteractiveMessage;
    /**
     * @generated from field: optional Message.ReactionMessage reactionMessage = 46;
     */
    reactionMessage?: Message_ReactionMessage;
    /**
     * @generated from field: optional Message.StickerSyncRMRMessage stickerSyncRmrMessage = 47;
     */
    stickerSyncRmrMessage?: Message_StickerSyncRMRMessage;
    /**
     * @generated from field: optional Message.InteractiveResponseMessage interactiveResponseMessage = 48;
     */
    interactiveResponseMessage?: Message_InteractiveResponseMessage;
    /**
     * @generated from field: optional Message.PollCreationMessage pollCreationMessage = 49;
     */
    pollCreationMessage?: Message_PollCreationMessage;
    /**
     * @generated from field: optional Message.PollUpdateMessage pollUpdateMessage = 50;
     */
    pollUpdateMessage?: Message_PollUpdateMessage;
    /**
     * @generated from field: optional Message.KeepInChatMessage keepInChatMessage = 51;
     */
    keepInChatMessage?: Message_KeepInChatMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage documentWithCaptionMessage = 53;
     */
    documentWithCaptionMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.RequestPhoneNumberMessage requestPhoneNumberMessage = 54;
     */
    requestPhoneNumberMessage?: Message_RequestPhoneNumberMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage viewOnceMessageV2 = 55;
     */
    viewOnceMessageV2?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.EncReactionMessage encReactionMessage = 56;
     */
    encReactionMessage?: Message_EncReactionMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage editedMessage = 58;
     */
    editedMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage viewOnceMessageV2Extension = 59;
     */
    viewOnceMessageV2Extension?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.PollCreationMessage pollCreationMessageV2 = 60;
     */
    pollCreationMessageV2?: Message_PollCreationMessage;
    /**
     * @generated from field: optional Message.ScheduledCallCreationMessage scheduledCallCreationMessage = 61;
     */
    scheduledCallCreationMessage?: Message_ScheduledCallCreationMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage groupMentionedMessage = 62;
     */
    groupMentionedMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.PinInChatMessage pinInChatMessage = 63;
     */
    pinInChatMessage?: Message_PinInChatMessage;
    /**
     * @generated from field: optional Message.PollCreationMessage pollCreationMessageV3 = 64;
     */
    pollCreationMessageV3?: Message_PollCreationMessage;
    /**
     * @generated from field: optional Message.ScheduledCallEditMessage scheduledCallEditMessage = 65;
     */
    scheduledCallEditMessage?: Message_ScheduledCallEditMessage;
    /**
     * @generated from field: optional Message.VideoMessage ptvMessage = 66;
     */
    ptvMessage?: Message_VideoMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage botInvokeMessage = 67;
     */
    botInvokeMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.CallLogMessage callLogMesssage = 69;
     */
    callLogMesssage?: Message_CallLogMessage;
    /**
     * @generated from field: optional Message.MessageHistoryBundle messageHistoryBundle = 70;
     */
    messageHistoryBundle?: Message_MessageHistoryBundle;
    /**
     * @generated from field: optional Message.EncCommentMessage encCommentMessage = 71;
     */
    encCommentMessage?: Message_EncCommentMessage;
    /**
     * @generated from field: optional Message.BCallMessage bcallMessage = 72;
     */
    bcallMessage?: Message_BCallMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage lottieStickerMessage = 74;
     */
    lottieStickerMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.EventMessage eventMessage = 75;
     */
    eventMessage?: Message_EventMessage;
    /**
     * @generated from field: optional Message.EncEventResponseMessage encEventResponseMessage = 76;
     */
    encEventResponseMessage?: Message_EncEventResponseMessage;
    /**
     * @generated from field: optional Message.CommentMessage commentMessage = 77;
     */
    commentMessage?: Message_CommentMessage;
    /**
     * @generated from field: optional Message.NewsletterAdminInviteMessage newsletterAdminInviteMessage = 78;
     */
    newsletterAdminInviteMessage?: Message_NewsletterAdminInviteMessage;
    /**
     * @generated from field: optional Message.PlaceholderMessage placeholderMessage = 80;
     */
    placeholderMessage?: Message_PlaceholderMessage;
    /**
     * @generated from field: optional Message.SecretEncryptedMessage secretEncryptedMessage = 82;
     */
    secretEncryptedMessage?: Message_SecretEncryptedMessage;
    /**
     * @generated from field: optional Message.AlbumMessage albumMessage = 83;
     */
    albumMessage?: Message_AlbumMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage eventCoverImage = 85;
     */
    eventCoverImage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.StickerPackMessage stickerPackMessage = 86;
     */
    stickerPackMessage?: Message_StickerPackMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage statusMentionMessage = 87;
     */
    statusMentionMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.PollResultSnapshotMessage pollResultSnapshotMessage = 88;
     */
    pollResultSnapshotMessage?: Message_PollResultSnapshotMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage pollCreationOptionImageMessage = 90;
     */
    pollCreationOptionImageMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage associatedChildMessage = 91;
     */
    associatedChildMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage groupStatusMentionMessage = 92;
     */
    groupStatusMentionMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage pollCreationMessageV4 = 93;
     */
    pollCreationMessageV4?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage pollCreationMessageV5 = 94;
     */
    pollCreationMessageV5?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage statusAddYours = 95;
     */
    statusAddYours?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage groupStatusMessage = 96;
     */
    groupStatusMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional AIRichResponseMessage richResponseMessage = 97;
     */
    richResponseMessage?: AIRichResponseMessage;
    /**
     * @generated from field: optional Message.StatusNotificationMessage statusNotificationMessage = 98;
     */
    statusNotificationMessage?: Message_StatusNotificationMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage limitSharingMessage = 99;
     */
    limitSharingMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage botTaskMessage = 100;
     */
    botTaskMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage questionMessage = 101;
     */
    questionMessage?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.MessageHistoryNotice messageHistoryNotice = 102;
     */
    messageHistoryNotice?: Message_MessageHistoryNotice;
    /**
     * @generated from field: optional Message.FutureProofMessage groupStatusMessageV2 = 103;
     */
    groupStatusMessageV2?: Message_FutureProofMessage;
    /**
     * @generated from field: optional Message.FutureProofMessage botForwardedMessage = 104;
     */
    botForwardedMessage?: Message_FutureProofMessage;
};
/**
 * Describes the message Message.
 * Use `create(MessageSchema)` to create a new message.
 */
declare const MessageSchema: GenMessage<Message>;
/**
 * @generated from message Message.AlbumMessage
 */
type Message_AlbumMessage = Message$1<"Message.AlbumMessage"> & {
    /**
     * @generated from field: optional uint32 expectedImageCount = 2;
     */
    expectedImageCount: number;
    /**
     * @generated from field: optional uint32 expectedVideoCount = 3;
     */
    expectedVideoCount: number;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message Message.AlbumMessage.
 * Use `create(Message_AlbumMessageSchema)` to create a new message.
 */
declare const Message_AlbumMessageSchema: GenMessage<Message_AlbumMessage>;
/**
 * @generated from message Message.AppStateFatalExceptionNotification
 */
type Message_AppStateFatalExceptionNotification = Message$1<"Message.AppStateFatalExceptionNotification"> & {
    /**
     * @generated from field: repeated string collectionNames = 1;
     */
    collectionNames: string[];
    /**
     * @generated from field: optional int64 timestamp = 2;
     */
    timestamp: bigint;
};
/**
 * Describes the message Message.AppStateFatalExceptionNotification.
 * Use `create(Message_AppStateFatalExceptionNotificationSchema)` to create a new message.
 */
declare const Message_AppStateFatalExceptionNotificationSchema: GenMessage<Message_AppStateFatalExceptionNotification>;
/**
 * @generated from message Message.AppStateSyncKey
 */
type Message_AppStateSyncKey = Message$1<"Message.AppStateSyncKey"> & {
    /**
     * @generated from field: optional Message.AppStateSyncKeyId keyId = 1;
     */
    keyId?: Message_AppStateSyncKeyId;
    /**
     * @generated from field: optional Message.AppStateSyncKeyData keyData = 2;
     */
    keyData?: Message_AppStateSyncKeyData;
};
/**
 * Describes the message Message.AppStateSyncKey.
 * Use `create(Message_AppStateSyncKeySchema)` to create a new message.
 */
declare const Message_AppStateSyncKeySchema: GenMessage<Message_AppStateSyncKey>;
/**
 * @generated from message Message.AppStateSyncKeyData
 */
type Message_AppStateSyncKeyData = Message$1<"Message.AppStateSyncKeyData"> & {
    /**
     * @generated from field: optional bytes keyData = 1;
     */
    keyData: Uint8Array;
    /**
     * @generated from field: optional Message.AppStateSyncKeyFingerprint fingerprint = 2;
     */
    fingerprint?: Message_AppStateSyncKeyFingerprint;
    /**
     * @generated from field: optional int64 timestamp = 3;
     */
    timestamp: bigint;
};
/**
 * Describes the message Message.AppStateSyncKeyData.
 * Use `create(Message_AppStateSyncKeyDataSchema)` to create a new message.
 */
declare const Message_AppStateSyncKeyDataSchema: GenMessage<Message_AppStateSyncKeyData>;
/**
 * @generated from message Message.AppStateSyncKeyFingerprint
 */
type Message_AppStateSyncKeyFingerprint = Message$1<"Message.AppStateSyncKeyFingerprint"> & {
    /**
     * @generated from field: optional uint32 rawId = 1;
     */
    rawId: number;
    /**
     * @generated from field: optional uint32 currentIndex = 2;
     */
    currentIndex: number;
    /**
     * @generated from field: repeated uint32 deviceIndexes = 3 [packed = true];
     */
    deviceIndexes: number[];
};
/**
 * Describes the message Message.AppStateSyncKeyFingerprint.
 * Use `create(Message_AppStateSyncKeyFingerprintSchema)` to create a new message.
 */
declare const Message_AppStateSyncKeyFingerprintSchema: GenMessage<Message_AppStateSyncKeyFingerprint>;
/**
 * @generated from message Message.AppStateSyncKeyId
 */
type Message_AppStateSyncKeyId = Message$1<"Message.AppStateSyncKeyId"> & {
    /**
     * @generated from field: optional bytes keyId = 1;
     */
    keyId: Uint8Array;
};
/**
 * Describes the message Message.AppStateSyncKeyId.
 * Use `create(Message_AppStateSyncKeyIdSchema)` to create a new message.
 */
declare const Message_AppStateSyncKeyIdSchema: GenMessage<Message_AppStateSyncKeyId>;
/**
 * @generated from message Message.AppStateSyncKeyRequest
 */
type Message_AppStateSyncKeyRequest = Message$1<"Message.AppStateSyncKeyRequest"> & {
    /**
     * @generated from field: repeated Message.AppStateSyncKeyId keyIds = 1;
     */
    keyIds: Message_AppStateSyncKeyId[];
};
/**
 * Describes the message Message.AppStateSyncKeyRequest.
 * Use `create(Message_AppStateSyncKeyRequestSchema)` to create a new message.
 */
declare const Message_AppStateSyncKeyRequestSchema: GenMessage<Message_AppStateSyncKeyRequest>;
/**
 * @generated from message Message.AppStateSyncKeyShare
 */
type Message_AppStateSyncKeyShare = Message$1<"Message.AppStateSyncKeyShare"> & {
    /**
     * @generated from field: repeated Message.AppStateSyncKey keys = 1;
     */
    keys: Message_AppStateSyncKey[];
};
/**
 * Describes the message Message.AppStateSyncKeyShare.
 * Use `create(Message_AppStateSyncKeyShareSchema)` to create a new message.
 */
declare const Message_AppStateSyncKeyShareSchema: GenMessage<Message_AppStateSyncKeyShare>;
/**
 * @generated from message Message.AudioMessage
 */
type Message_AudioMessage = Message$1<"Message.AudioMessage"> & {
    /**
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * @generated from field: optional string mimetype = 2;
     */
    mimetype: string;
    /**
     * @generated from field: optional bytes fileSha256 = 3;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional uint64 fileLength = 4;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional uint32 seconds = 5;
     */
    seconds: number;
    /**
     * @generated from field: optional bool ptt = 6;
     */
    ptt: boolean;
    /**
     * @generated from field: optional bytes mediaKey = 7;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional bytes fileEncSha256 = 8;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: optional string directPath = 9;
     */
    directPath: string;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 10;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional bytes streamingSidecar = 18;
     */
    streamingSidecar: Uint8Array;
    /**
     * @generated from field: optional bytes waveform = 19;
     */
    waveform: Uint8Array;
    /**
     * @generated from field: optional fixed32 backgroundArgb = 20;
     */
    backgroundArgb: number;
    /**
     * @generated from field: optional bool viewOnce = 21;
     */
    viewOnce: boolean;
    /**
     * @generated from field: optional string accessibilityLabel = 22;
     */
    accessibilityLabel: string;
};
/**
 * Describes the message Message.AudioMessage.
 * Use `create(Message_AudioMessageSchema)` to create a new message.
 */
declare const Message_AudioMessageSchema: GenMessage<Message_AudioMessage>;
/**
 * @generated from message Message.BCallMessage
 */
type Message_BCallMessage = Message$1<"Message.BCallMessage"> & {
    /**
     * @generated from field: optional string sessionId = 1;
     */
    sessionId: string;
    /**
     * @generated from field: optional Message.BCallMessage.MediaType mediaType = 2;
     */
    mediaType: Message_BCallMessage_MediaType;
    /**
     * @generated from field: optional bytes masterKey = 3;
     */
    masterKey: Uint8Array;
    /**
     * @generated from field: optional string caption = 4;
     */
    caption: string;
};
/**
 * Describes the message Message.BCallMessage.
 * Use `create(Message_BCallMessageSchema)` to create a new message.
 */
declare const Message_BCallMessageSchema: GenMessage<Message_BCallMessage>;
/**
 * @generated from enum Message.BCallMessage.MediaType
 */
declare enum Message_BCallMessage_MediaType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: AUDIO = 1;
     */
    AUDIO = 1,
    /**
     * @generated from enum value: VIDEO = 2;
     */
    VIDEO = 2
}
/**
 * Describes the enum Message.BCallMessage.MediaType.
 */
declare const Message_BCallMessage_MediaTypeSchema: GenEnum<Message_BCallMessage_MediaType>;
/**
 * @generated from message Message.BotFeedbackMessage
 */
type Message_BotFeedbackMessage = Message$1<"Message.BotFeedbackMessage"> & {
    /**
     * @generated from field: optional MessageKey messageKey = 1;
     */
    messageKey?: MessageKey;
    /**
     * @generated from field: optional Message.BotFeedbackMessage.BotFeedbackKind kind = 2;
     */
    kind: Message_BotFeedbackMessage_BotFeedbackKind;
    /**
     * @generated from field: optional string text = 3;
     */
    text: string;
    /**
     * @generated from field: optional uint64 kindNegative = 4;
     */
    kindNegative: bigint;
    /**
     * @generated from field: optional uint64 kindPositive = 5;
     */
    kindPositive: bigint;
    /**
     * @generated from field: optional Message.BotFeedbackMessage.ReportKind kindReport = 6;
     */
    kindReport: Message_BotFeedbackMessage_ReportKind;
};
/**
 * Describes the message Message.BotFeedbackMessage.
 * Use `create(Message_BotFeedbackMessageSchema)` to create a new message.
 */
declare const Message_BotFeedbackMessageSchema: GenMessage<Message_BotFeedbackMessage>;
/**
 * @generated from enum Message.BotFeedbackMessage.BotFeedbackKind
 */
declare enum Message_BotFeedbackMessage_BotFeedbackKind {
    /**
     * @generated from enum value: BOT_FEEDBACK_POSITIVE = 0;
     */
    BOT_FEEDBACK_POSITIVE = 0,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_GENERIC = 1;
     */
    BOT_FEEDBACK_NEGATIVE_GENERIC = 1,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_HELPFUL = 2;
     */
    BOT_FEEDBACK_NEGATIVE_HELPFUL = 2,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_INTERESTING = 3;
     */
    BOT_FEEDBACK_NEGATIVE_INTERESTING = 3,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_ACCURATE = 4;
     */
    BOT_FEEDBACK_NEGATIVE_ACCURATE = 4,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_SAFE = 5;
     */
    BOT_FEEDBACK_NEGATIVE_SAFE = 5,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_OTHER = 6;
     */
    BOT_FEEDBACK_NEGATIVE_OTHER = 6,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_REFUSED = 7;
     */
    BOT_FEEDBACK_NEGATIVE_REFUSED = 7,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING = 8;
     */
    BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING = 8,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT = 9;
     */
    BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT = 9,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_PERSONALIZED = 10;
     */
    BOT_FEEDBACK_NEGATIVE_PERSONALIZED = 10,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_CLARITY = 11;
     */
    BOT_FEEDBACK_NEGATIVE_CLARITY = 11,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON = 12;
     */
    BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON = 12,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY = 13;
     */
    BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY = 13,
    /**
     * @generated from enum value: BOT_FEEDBACK_NEGATIVE = 14;
     */
    BOT_FEEDBACK_NEGATIVE = 14
}
/**
 * Describes the enum Message.BotFeedbackMessage.BotFeedbackKind.
 */
declare const Message_BotFeedbackMessage_BotFeedbackKindSchema: GenEnum<Message_BotFeedbackMessage_BotFeedbackKind>;
/**
 * @generated from enum Message.BotFeedbackMessage.BotFeedbackKindMultipleNegative
 */
declare enum Message_BotFeedbackMessage_BotFeedbackKindMultipleNegative {
    /**
     * @generated from enum value: BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC = 1;
     */
    BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC = 1,
    /**
     * @generated from enum value: BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL = 2;
     */
    BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL = 2,
    /**
     * @generated from enum value: BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING = 4;
     */
    BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING = 4,
    /**
     * @generated from enum value: BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE = 8;
     */
    BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE = 8,
    /**
     * @generated from enum value: BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE = 16;
     */
    BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE = 16,
    /**
     * @generated from enum value: BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER = 32;
     */
    BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER = 32,
    /**
     * @generated from enum value: BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED = 64;
     */
    BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED = 64,
    /**
     * @generated from enum value: BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING = 128;
     */
    BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING = 128,
    /**
     * @generated from enum value: BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT = 256;
     */
    BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT = 256
}
/**
 * Describes the enum Message.BotFeedbackMessage.BotFeedbackKindMultipleNegative.
 */
declare const Message_BotFeedbackMessage_BotFeedbackKindMultipleNegativeSchema: GenEnum<Message_BotFeedbackMessage_BotFeedbackKindMultipleNegative>;
/**
 * @generated from enum Message.BotFeedbackMessage.BotFeedbackKindMultiplePositive
 */
declare enum Message_BotFeedbackMessage_BotFeedbackKindMultiplePositive {
    /**
     * @generated from enum value: BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC = 1;
     */
    BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC = 1
}
/**
 * Describes the enum Message.BotFeedbackMessage.BotFeedbackKindMultiplePositive.
 */
declare const Message_BotFeedbackMessage_BotFeedbackKindMultiplePositiveSchema: GenEnum<Message_BotFeedbackMessage_BotFeedbackKindMultiplePositive>;
/**
 * @generated from enum Message.BotFeedbackMessage.ReportKind
 */
declare enum Message_BotFeedbackMessage_ReportKind {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: GENERIC = 1;
     */
    GENERIC = 1
}
/**
 * Describes the enum Message.BotFeedbackMessage.ReportKind.
 */
declare const Message_BotFeedbackMessage_ReportKindSchema: GenEnum<Message_BotFeedbackMessage_ReportKind>;
/**
 * @generated from message Message.ButtonsMessage
 */
type Message_ButtonsMessage = Message$1<"Message.ButtonsMessage"> & {
    /**
     * @generated from field: optional string contentText = 6;
     */
    contentText: string;
    /**
     * @generated from field: optional string footerText = 7;
     */
    footerText: string;
    /**
     * @generated from field: optional ContextInfo contextInfo = 8;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: repeated Message.ButtonsMessage.Button buttons = 9;
     */
    buttons: Message_ButtonsMessage_Button[];
    /**
     * @generated from field: optional Message.ButtonsMessage.HeaderType headerType = 10;
     */
    headerType: Message_ButtonsMessage_HeaderType;
    /**
     * @generated from oneof Message.ButtonsMessage.header
     */
    header: {
        /**
         * @generated from field: string text = 1;
         */
        value: string;
        case: "text";
    } | {
        /**
         * @generated from field: Message.DocumentMessage documentMessage = 2;
         */
        value: Message_DocumentMessage;
        case: "documentMessage";
    } | {
        /**
         * @generated from field: Message.ImageMessage imageMessage = 3;
         */
        value: Message_ImageMessage;
        case: "imageMessage";
    } | {
        /**
         * @generated from field: Message.VideoMessage videoMessage = 4;
         */
        value: Message_VideoMessage;
        case: "videoMessage";
    } | {
        /**
         * @generated from field: Message.LocationMessage locationMessage = 5;
         */
        value: Message_LocationMessage;
        case: "locationMessage";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message Message.ButtonsMessage.
 * Use `create(Message_ButtonsMessageSchema)` to create a new message.
 */
declare const Message_ButtonsMessageSchema: GenMessage<Message_ButtonsMessage>;
/**
 * @generated from message Message.ButtonsMessage.Button
 */
type Message_ButtonsMessage_Button = Message$1<"Message.ButtonsMessage.Button"> & {
    /**
     * @generated from field: optional string buttonId = 1;
     */
    buttonId: string;
    /**
     * @generated from field: optional Message.ButtonsMessage.Button.ButtonText buttonText = 2;
     */
    buttonText?: Message_ButtonsMessage_Button_ButtonText;
    /**
     * @generated from field: optional Message.ButtonsMessage.Button.Type type = 3;
     */
    type: Message_ButtonsMessage_Button_Type;
    /**
     * @generated from field: optional Message.ButtonsMessage.Button.NativeFlowInfo nativeFlowInfo = 4;
     */
    nativeFlowInfo?: Message_ButtonsMessage_Button_NativeFlowInfo;
};
/**
 * Describes the message Message.ButtonsMessage.Button.
 * Use `create(Message_ButtonsMessage_ButtonSchema)` to create a new message.
 */
declare const Message_ButtonsMessage_ButtonSchema: GenMessage<Message_ButtonsMessage_Button>;
/**
 * @generated from message Message.ButtonsMessage.Button.ButtonText
 */
type Message_ButtonsMessage_Button_ButtonText = Message$1<"Message.ButtonsMessage.Button.ButtonText"> & {
    /**
     * @generated from field: optional string displayText = 1;
     */
    displayText: string;
};
/**
 * Describes the message Message.ButtonsMessage.Button.ButtonText.
 * Use `create(Message_ButtonsMessage_Button_ButtonTextSchema)` to create a new message.
 */
declare const Message_ButtonsMessage_Button_ButtonTextSchema: GenMessage<Message_ButtonsMessage_Button_ButtonText>;
/**
 * @generated from message Message.ButtonsMessage.Button.NativeFlowInfo
 */
type Message_ButtonsMessage_Button_NativeFlowInfo = Message$1<"Message.ButtonsMessage.Button.NativeFlowInfo"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional string paramsJson = 2;
     */
    paramsJson: string;
};
/**
 * Describes the message Message.ButtonsMessage.Button.NativeFlowInfo.
 * Use `create(Message_ButtonsMessage_Button_NativeFlowInfoSchema)` to create a new message.
 */
declare const Message_ButtonsMessage_Button_NativeFlowInfoSchema: GenMessage<Message_ButtonsMessage_Button_NativeFlowInfo>;
/**
 * @generated from enum Message.ButtonsMessage.Button.Type
 */
declare enum Message_ButtonsMessage_Button_Type {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: RESPONSE = 1;
     */
    RESPONSE = 1,
    /**
     * @generated from enum value: NATIVE_FLOW = 2;
     */
    NATIVE_FLOW = 2
}
/**
 * Describes the enum Message.ButtonsMessage.Button.Type.
 */
declare const Message_ButtonsMessage_Button_TypeSchema: GenEnum<Message_ButtonsMessage_Button_Type>;
/**
 * @generated from enum Message.ButtonsMessage.HeaderType
 */
declare enum Message_ButtonsMessage_HeaderType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: EMPTY = 1;
     */
    EMPTY = 1,
    /**
     * @generated from enum value: TEXT = 2;
     */
    TEXT = 2,
    /**
     * @generated from enum value: DOCUMENT = 3;
     */
    DOCUMENT = 3,
    /**
     * @generated from enum value: IMAGE = 4;
     */
    IMAGE = 4,
    /**
     * @generated from enum value: VIDEO = 5;
     */
    VIDEO = 5,
    /**
     * @generated from enum value: LOCATION = 6;
     */
    LOCATION = 6
}
/**
 * Describes the enum Message.ButtonsMessage.HeaderType.
 */
declare const Message_ButtonsMessage_HeaderTypeSchema: GenEnum<Message_ButtonsMessage_HeaderType>;
/**
 * @generated from message Message.ButtonsResponseMessage
 */
type Message_ButtonsResponseMessage = Message$1<"Message.ButtonsResponseMessage"> & {
    /**
     * @generated from field: optional string selectedButtonId = 1;
     */
    selectedButtonId: string;
    /**
     * @generated from field: optional ContextInfo contextInfo = 3;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional Message.ButtonsResponseMessage.Type type = 4;
     */
    type: Message_ButtonsResponseMessage_Type;
    /**
     * @generated from oneof Message.ButtonsResponseMessage.response
     */
    response: {
        /**
         * @generated from field: string selectedDisplayText = 2;
         */
        value: string;
        case: "selectedDisplayText";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message Message.ButtonsResponseMessage.
 * Use `create(Message_ButtonsResponseMessageSchema)` to create a new message.
 */
declare const Message_ButtonsResponseMessageSchema: GenMessage<Message_ButtonsResponseMessage>;
/**
 * @generated from enum Message.ButtonsResponseMessage.Type
 */
declare enum Message_ButtonsResponseMessage_Type {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: DISPLAY_TEXT = 1;
     */
    DISPLAY_TEXT = 1
}
/**
 * Describes the enum Message.ButtonsResponseMessage.Type.
 */
declare const Message_ButtonsResponseMessage_TypeSchema: GenEnum<Message_ButtonsResponseMessage_Type>;
/**
 * @generated from message Message.Call
 */
type Message_Call = Message$1<"Message.Call"> & {
    /**
     * @generated from field: optional bytes callKey = 1;
     */
    callKey: Uint8Array;
    /**
     * @generated from field: optional string conversionSource = 2;
     */
    conversionSource: string;
    /**
     * @generated from field: optional bytes conversionData = 3;
     */
    conversionData: Uint8Array;
    /**
     * @generated from field: optional uint32 conversionDelaySeconds = 4;
     */
    conversionDelaySeconds: number;
    /**
     * @generated from field: optional string ctwaSignals = 5;
     */
    ctwaSignals: string;
    /**
     * @generated from field: optional bytes ctwaPayload = 6;
     */
    ctwaPayload: Uint8Array;
    /**
     * @generated from field: optional ContextInfo contextInfo = 7;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional string nativeFlowCallButtonPayload = 8;
     */
    nativeFlowCallButtonPayload: string;
};
/**
 * Describes the message Message.Call.
 * Use `create(Message_CallSchema)` to create a new message.
 */
declare const Message_CallSchema: GenMessage<Message_Call>;
/**
 * @generated from message Message.CallLogMessage
 */
type Message_CallLogMessage = Message$1<"Message.CallLogMessage"> & {
    /**
     * @generated from field: optional bool isVideo = 1;
     */
    isVideo: boolean;
    /**
     * @generated from field: optional Message.CallLogMessage.CallOutcome callOutcome = 2;
     */
    callOutcome: Message_CallLogMessage_CallOutcome;
    /**
     * @generated from field: optional int64 durationSecs = 3;
     */
    durationSecs: bigint;
    /**
     * @generated from field: optional Message.CallLogMessage.CallType callType = 4;
     */
    callType: Message_CallLogMessage_CallType;
    /**
     * @generated from field: repeated Message.CallLogMessage.CallParticipant participants = 5;
     */
    participants: Message_CallLogMessage_CallParticipant[];
};
/**
 * Describes the message Message.CallLogMessage.
 * Use `create(Message_CallLogMessageSchema)` to create a new message.
 */
declare const Message_CallLogMessageSchema: GenMessage<Message_CallLogMessage>;
/**
 * @generated from message Message.CallLogMessage.CallParticipant
 */
type Message_CallLogMessage_CallParticipant = Message$1<"Message.CallLogMessage.CallParticipant"> & {
    /**
     * @generated from field: optional string jid = 1;
     */
    jid: string;
    /**
     * @generated from field: optional Message.CallLogMessage.CallOutcome callOutcome = 2;
     */
    callOutcome: Message_CallLogMessage_CallOutcome;
};
/**
 * Describes the message Message.CallLogMessage.CallParticipant.
 * Use `create(Message_CallLogMessage_CallParticipantSchema)` to create a new message.
 */
declare const Message_CallLogMessage_CallParticipantSchema: GenMessage<Message_CallLogMessage_CallParticipant>;
/**
 * @generated from enum Message.CallLogMessage.CallOutcome
 */
declare enum Message_CallLogMessage_CallOutcome {
    /**
     * @generated from enum value: CONNECTED = 0;
     */
    CONNECTED = 0,
    /**
     * @generated from enum value: MISSED = 1;
     */
    MISSED = 1,
    /**
     * @generated from enum value: FAILED = 2;
     */
    FAILED = 2,
    /**
     * @generated from enum value: REJECTED = 3;
     */
    REJECTED = 3,
    /**
     * @generated from enum value: ACCEPTED_ELSEWHERE = 4;
     */
    ACCEPTED_ELSEWHERE = 4,
    /**
     * @generated from enum value: ONGOING = 5;
     */
    ONGOING = 5,
    /**
     * @generated from enum value: SILENCED_BY_DND = 6;
     */
    SILENCED_BY_DND = 6,
    /**
     * @generated from enum value: SILENCED_UNKNOWN_CALLER = 7;
     */
    SILENCED_UNKNOWN_CALLER = 7
}
/**
 * Describes the enum Message.CallLogMessage.CallOutcome.
 */
declare const Message_CallLogMessage_CallOutcomeSchema: GenEnum<Message_CallLogMessage_CallOutcome>;
/**
 * @generated from enum Message.CallLogMessage.CallType
 */
declare enum Message_CallLogMessage_CallType {
    /**
     * @generated from enum value: REGULAR = 0;
     */
    REGULAR = 0,
    /**
     * @generated from enum value: SCHEDULED_CALL = 1;
     */
    SCHEDULED_CALL = 1,
    /**
     * @generated from enum value: VOICE_CHAT = 2;
     */
    VOICE_CHAT = 2
}
/**
 * Describes the enum Message.CallLogMessage.CallType.
 */
declare const Message_CallLogMessage_CallTypeSchema: GenEnum<Message_CallLogMessage_CallType>;
/**
 * @generated from message Message.CancelPaymentRequestMessage
 */
type Message_CancelPaymentRequestMessage = Message$1<"Message.CancelPaymentRequestMessage"> & {
    /**
     * @generated from field: optional MessageKey key = 1;
     */
    key?: MessageKey;
};
/**
 * Describes the message Message.CancelPaymentRequestMessage.
 * Use `create(Message_CancelPaymentRequestMessageSchema)` to create a new message.
 */
declare const Message_CancelPaymentRequestMessageSchema: GenMessage<Message_CancelPaymentRequestMessage>;
/**
 * @generated from message Message.Chat
 */
type Message_Chat = Message$1<"Message.Chat"> & {
    /**
     * @generated from field: optional string displayName = 1;
     */
    displayName: string;
    /**
     * @generated from field: optional string id = 2;
     */
    id: string;
};
/**
 * Describes the message Message.Chat.
 * Use `create(Message_ChatSchema)` to create a new message.
 */
declare const Message_ChatSchema: GenMessage<Message_Chat>;
/**
 * @generated from message Message.CloudAPIThreadControlNotification
 */
type Message_CloudAPIThreadControlNotification = Message$1<"Message.CloudAPIThreadControlNotification"> & {
    /**
     * @generated from field: optional Message.CloudAPIThreadControlNotification.CloudAPIThreadControl status = 1;
     */
    status: Message_CloudAPIThreadControlNotification_CloudAPIThreadControl;
    /**
     * @generated from field: optional int64 senderNotificationTimestampMs = 2;
     */
    senderNotificationTimestampMs: bigint;
    /**
     * @generated from field: optional string consumerLid = 3;
     */
    consumerLid: string;
    /**
     * @generated from field: optional string consumerPhoneNumber = 4;
     */
    consumerPhoneNumber: string;
    /**
     * @generated from field: optional Message.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent notificationContent = 5;
     */
    notificationContent?: Message_CloudAPIThreadControlNotification_CloudAPIThreadControlNotificationContent;
};
/**
 * Describes the message Message.CloudAPIThreadControlNotification.
 * Use `create(Message_CloudAPIThreadControlNotificationSchema)` to create a new message.
 */
declare const Message_CloudAPIThreadControlNotificationSchema: GenMessage<Message_CloudAPIThreadControlNotification>;
/**
 * @generated from message Message.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent
 */
type Message_CloudAPIThreadControlNotification_CloudAPIThreadControlNotificationContent = Message$1<"Message.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent"> & {
    /**
     * @generated from field: optional string handoffNotificationText = 1;
     */
    handoffNotificationText: string;
    /**
     * @generated from field: optional string extraJson = 2;
     */
    extraJson: string;
};
/**
 * Describes the message Message.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent.
 * Use `create(Message_CloudAPIThreadControlNotification_CloudAPIThreadControlNotificationContentSchema)` to create a new message.
 */
declare const Message_CloudAPIThreadControlNotification_CloudAPIThreadControlNotificationContentSchema: GenMessage<Message_CloudAPIThreadControlNotification_CloudAPIThreadControlNotificationContent>;
/**
 * @generated from enum Message.CloudAPIThreadControlNotification.CloudAPIThreadControl
 */
declare enum Message_CloudAPIThreadControlNotification_CloudAPIThreadControl {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: CONTROL_PASSED = 1;
     */
    CONTROL_PASSED = 1,
    /**
     * @generated from enum value: CONTROL_TAKEN = 2;
     */
    CONTROL_TAKEN = 2
}
/**
 * Describes the enum Message.CloudAPIThreadControlNotification.CloudAPIThreadControl.
 */
declare const Message_CloudAPIThreadControlNotification_CloudAPIThreadControlSchema: GenEnum<Message_CloudAPIThreadControlNotification_CloudAPIThreadControl>;
/**
 * @generated from message Message.CommentMessage
 */
type Message_CommentMessage = Message$1<"Message.CommentMessage"> & {
    /**
     * @generated from field: optional Message message = 1;
     */
    message?: Message;
    /**
     * @generated from field: optional MessageKey targetMessageKey = 2;
     */
    targetMessageKey?: MessageKey;
};
/**
 * Describes the message Message.CommentMessage.
 * Use `create(Message_CommentMessageSchema)` to create a new message.
 */
declare const Message_CommentMessageSchema: GenMessage<Message_CommentMessage>;
/**
 * @generated from message Message.ContactMessage
 */
type Message_ContactMessage = Message$1<"Message.ContactMessage"> & {
    /**
     * @generated from field: optional string displayName = 1;
     */
    displayName: string;
    /**
     * @generated from field: optional string vcard = 16;
     */
    vcard: string;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message Message.ContactMessage.
 * Use `create(Message_ContactMessageSchema)` to create a new message.
 */
declare const Message_ContactMessageSchema: GenMessage<Message_ContactMessage>;
/**
 * @generated from message Message.ContactsArrayMessage
 */
type Message_ContactsArrayMessage = Message$1<"Message.ContactsArrayMessage"> & {
    /**
     * @generated from field: optional string displayName = 1;
     */
    displayName: string;
    /**
     * @generated from field: repeated Message.ContactMessage contacts = 2;
     */
    contacts: Message_ContactMessage[];
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message Message.ContactsArrayMessage.
 * Use `create(Message_ContactsArrayMessageSchema)` to create a new message.
 */
declare const Message_ContactsArrayMessageSchema: GenMessage<Message_ContactsArrayMessage>;
/**
 * @generated from message Message.DeclinePaymentRequestMessage
 */
type Message_DeclinePaymentRequestMessage = Message$1<"Message.DeclinePaymentRequestMessage"> & {
    /**
     * @generated from field: optional MessageKey key = 1;
     */
    key?: MessageKey;
};
/**
 * Describes the message Message.DeclinePaymentRequestMessage.
 * Use `create(Message_DeclinePaymentRequestMessageSchema)` to create a new message.
 */
declare const Message_DeclinePaymentRequestMessageSchema: GenMessage<Message_DeclinePaymentRequestMessage>;
/**
 * @generated from message Message.DeviceSentMessage
 */
type Message_DeviceSentMessage = Message$1<"Message.DeviceSentMessage"> & {
    /**
     * @generated from field: optional string destinationJid = 1;
     */
    destinationJid: string;
    /**
     * @generated from field: optional Message message = 2;
     */
    message?: Message;
    /**
     * @generated from field: optional string phash = 3;
     */
    phash: string;
};
/**
 * Describes the message Message.DeviceSentMessage.
 * Use `create(Message_DeviceSentMessageSchema)` to create a new message.
 */
declare const Message_DeviceSentMessageSchema: GenMessage<Message_DeviceSentMessage>;
/**
 * @generated from message Message.DocumentMessage
 */
type Message_DocumentMessage = Message$1<"Message.DocumentMessage"> & {
    /**
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * @generated from field: optional string mimetype = 2;
     */
    mimetype: string;
    /**
     * @generated from field: optional string title = 3;
     */
    title: string;
    /**
     * @generated from field: optional bytes fileSha256 = 4;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional uint64 fileLength = 5;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional uint32 pageCount = 6;
     */
    pageCount: number;
    /**
     * @generated from field: optional bytes mediaKey = 7;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional string fileName = 8;
     */
    fileName: string;
    /**
     * @generated from field: optional bytes fileEncSha256 = 9;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: optional string directPath = 10;
     */
    directPath: string;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 11;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional bool contactVcard = 12;
     */
    contactVcard: boolean;
    /**
     * @generated from field: optional string thumbnailDirectPath = 13;
     */
    thumbnailDirectPath: string;
    /**
     * @generated from field: optional bytes thumbnailSha256 = 14;
     */
    thumbnailSha256: Uint8Array;
    /**
     * @generated from field: optional bytes thumbnailEncSha256 = 15;
     */
    thumbnailEncSha256: Uint8Array;
    /**
     * @generated from field: optional bytes jpegThumbnail = 16;
     */
    jpegThumbnail: Uint8Array;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional uint32 thumbnailHeight = 18;
     */
    thumbnailHeight: number;
    /**
     * @generated from field: optional uint32 thumbnailWidth = 19;
     */
    thumbnailWidth: number;
    /**
     * @generated from field: optional string caption = 20;
     */
    caption: string;
    /**
     * @generated from field: optional string accessibilityLabel = 21;
     */
    accessibilityLabel: string;
};
/**
 * Describes the message Message.DocumentMessage.
 * Use `create(Message_DocumentMessageSchema)` to create a new message.
 */
declare const Message_DocumentMessageSchema: GenMessage<Message_DocumentMessage>;
/**
 * @generated from message Message.EncCommentMessage
 */
type Message_EncCommentMessage = Message$1<"Message.EncCommentMessage"> & {
    /**
     * @generated from field: optional MessageKey targetMessageKey = 1;
     */
    targetMessageKey?: MessageKey;
    /**
     * @generated from field: optional bytes encPayload = 2;
     */
    encPayload: Uint8Array;
    /**
     * @generated from field: optional bytes encIv = 3;
     */
    encIv: Uint8Array;
};
/**
 * Describes the message Message.EncCommentMessage.
 * Use `create(Message_EncCommentMessageSchema)` to create a new message.
 */
declare const Message_EncCommentMessageSchema: GenMessage<Message_EncCommentMessage>;
/**
 * @generated from message Message.EncEventResponseMessage
 */
type Message_EncEventResponseMessage = Message$1<"Message.EncEventResponseMessage"> & {
    /**
     * @generated from field: optional MessageKey eventCreationMessageKey = 1;
     */
    eventCreationMessageKey?: MessageKey;
    /**
     * @generated from field: optional bytes encPayload = 2;
     */
    encPayload: Uint8Array;
    /**
     * @generated from field: optional bytes encIv = 3;
     */
    encIv: Uint8Array;
};
/**
 * Describes the message Message.EncEventResponseMessage.
 * Use `create(Message_EncEventResponseMessageSchema)` to create a new message.
 */
declare const Message_EncEventResponseMessageSchema: GenMessage<Message_EncEventResponseMessage>;
/**
 * @generated from message Message.EncReactionMessage
 */
type Message_EncReactionMessage = Message$1<"Message.EncReactionMessage"> & {
    /**
     * @generated from field: optional MessageKey targetMessageKey = 1;
     */
    targetMessageKey?: MessageKey;
    /**
     * @generated from field: optional bytes encPayload = 2;
     */
    encPayload: Uint8Array;
    /**
     * @generated from field: optional bytes encIv = 3;
     */
    encIv: Uint8Array;
};
/**
 * Describes the message Message.EncReactionMessage.
 * Use `create(Message_EncReactionMessageSchema)` to create a new message.
 */
declare const Message_EncReactionMessageSchema: GenMessage<Message_EncReactionMessage>;
/**
 * @generated from message Message.EventMessage
 */
type Message_EventMessage = Message$1<"Message.EventMessage"> & {
    /**
     * @generated from field: optional ContextInfo contextInfo = 1;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional bool isCanceled = 2;
     */
    isCanceled: boolean;
    /**
     * @generated from field: optional string name = 3;
     */
    name: string;
    /**
     * @generated from field: optional string description = 4;
     */
    description: string;
    /**
     * @generated from field: optional Message.LocationMessage location = 5;
     */
    location?: Message_LocationMessage;
    /**
     * @generated from field: optional string joinLink = 6;
     */
    joinLink: string;
    /**
     * @generated from field: optional int64 startTime = 7;
     */
    startTime: bigint;
    /**
     * @generated from field: optional int64 endTime = 8;
     */
    endTime: bigint;
    /**
     * @generated from field: optional bool extraGuestsAllowed = 9;
     */
    extraGuestsAllowed: boolean;
    /**
     * @generated from field: optional bool isScheduleCall = 10;
     */
    isScheduleCall: boolean;
};
/**
 * Describes the message Message.EventMessage.
 * Use `create(Message_EventMessageSchema)` to create a new message.
 */
declare const Message_EventMessageSchema: GenMessage<Message_EventMessage>;
/**
 * @generated from message Message.EventResponseMessage
 */
type Message_EventResponseMessage = Message$1<"Message.EventResponseMessage"> & {
    /**
     * @generated from field: optional Message.EventResponseMessage.EventResponseType response = 1;
     */
    response: Message_EventResponseMessage_EventResponseType;
    /**
     * @generated from field: optional int64 timestampMs = 2;
     */
    timestampMs: bigint;
    /**
     * @generated from field: optional int32 extraGuestCount = 3;
     */
    extraGuestCount: number;
};
/**
 * Describes the message Message.EventResponseMessage.
 * Use `create(Message_EventResponseMessageSchema)` to create a new message.
 */
declare const Message_EventResponseMessageSchema: GenMessage<Message_EventResponseMessage>;
/**
 * @generated from enum Message.EventResponseMessage.EventResponseType
 */
declare enum Message_EventResponseMessage_EventResponseType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: GOING = 1;
     */
    GOING = 1,
    /**
     * @generated from enum value: NOT_GOING = 2;
     */
    NOT_GOING = 2,
    /**
     * @generated from enum value: MAYBE = 3;
     */
    MAYBE = 3
}
/**
 * Describes the enum Message.EventResponseMessage.EventResponseType.
 */
declare const Message_EventResponseMessage_EventResponseTypeSchema: GenEnum<Message_EventResponseMessage_EventResponseType>;
/**
 * @generated from message Message.ExtendedTextMessage
 */
type Message_ExtendedTextMessage = Message$1<"Message.ExtendedTextMessage"> & {
    /**
     * @generated from field: optional string text = 1;
     */
    text: string;
    /**
     * @generated from field: optional string matchedText = 2;
     */
    matchedText: string;
    /**
     * @generated from field: optional string description = 5;
     */
    description: string;
    /**
     * @generated from field: optional string title = 6;
     */
    title: string;
    /**
     * @generated from field: optional fixed32 textArgb = 7;
     */
    textArgb: number;
    /**
     * @generated from field: optional fixed32 backgroundArgb = 8;
     */
    backgroundArgb: number;
    /**
     * @generated from field: optional Message.ExtendedTextMessage.FontType font = 9;
     */
    font: Message_ExtendedTextMessage_FontType;
    /**
     * @generated from field: optional Message.ExtendedTextMessage.PreviewType previewType = 10;
     */
    previewType: Message_ExtendedTextMessage_PreviewType;
    /**
     * @generated from field: optional bytes jpegThumbnail = 16;
     */
    jpegThumbnail: Uint8Array;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional bool doNotPlayInline = 18;
     */
    doNotPlayInline: boolean;
    /**
     * @generated from field: optional string thumbnailDirectPath = 19;
     */
    thumbnailDirectPath: string;
    /**
     * @generated from field: optional bytes thumbnailSha256 = 20;
     */
    thumbnailSha256: Uint8Array;
    /**
     * @generated from field: optional bytes thumbnailEncSha256 = 21;
     */
    thumbnailEncSha256: Uint8Array;
    /**
     * @generated from field: optional bytes mediaKey = 22;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 23;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional uint32 thumbnailHeight = 24;
     */
    thumbnailHeight: number;
    /**
     * @generated from field: optional uint32 thumbnailWidth = 25;
     */
    thumbnailWidth: number;
    /**
     * @generated from field: optional Message.ExtendedTextMessage.InviteLinkGroupType inviteLinkGroupType = 26;
     */
    inviteLinkGroupType: Message_ExtendedTextMessage_InviteLinkGroupType;
    /**
     * @generated from field: optional string inviteLinkParentGroupSubjectV2 = 27;
     */
    inviteLinkParentGroupSubjectV2: string;
    /**
     * @generated from field: optional bytes inviteLinkParentGroupThumbnailV2 = 28;
     */
    inviteLinkParentGroupThumbnailV2: Uint8Array;
    /**
     * @generated from field: optional Message.ExtendedTextMessage.InviteLinkGroupType inviteLinkGroupTypeV2 = 29;
     */
    inviteLinkGroupTypeV2: Message_ExtendedTextMessage_InviteLinkGroupType;
    /**
     * @generated from field: optional bool viewOnce = 30;
     */
    viewOnce: boolean;
    /**
     * @generated from field: optional uint32 videoHeight = 31;
     */
    videoHeight: number;
    /**
     * @generated from field: optional uint32 videoWidth = 32;
     */
    videoWidth: number;
    /**
     * @generated from field: optional Message.MMSThumbnailMetadata faviconMMSMetadata = 33;
     */
    faviconMMSMetadata?: Message_MMSThumbnailMetadata;
    /**
     * @generated from field: optional Message.LinkPreviewMetadata linkPreviewMetadata = 34;
     */
    linkPreviewMetadata?: Message_LinkPreviewMetadata;
    /**
     * @generated from field: optional Message.PaymentLinkMetadata paymentLinkMetadata = 35;
     */
    paymentLinkMetadata?: Message_PaymentLinkMetadata;
};
/**
 * Describes the message Message.ExtendedTextMessage.
 * Use `create(Message_ExtendedTextMessageSchema)` to create a new message.
 */
declare const Message_ExtendedTextMessageSchema: GenMessage<Message_ExtendedTextMessage>;
/**
 * @generated from enum Message.ExtendedTextMessage.FontType
 */
declare enum Message_ExtendedTextMessage_FontType {
    /**
     * @generated from enum value: SYSTEM = 0;
     */
    SYSTEM = 0,
    /**
     * @generated from enum value: SYSTEM_TEXT = 1;
     */
    SYSTEM_TEXT = 1,
    /**
     * @generated from enum value: FB_SCRIPT = 2;
     */
    FB_SCRIPT = 2,
    /**
     * @generated from enum value: SYSTEM_BOLD = 6;
     */
    SYSTEM_BOLD = 6,
    /**
     * @generated from enum value: MORNINGBREEZE_REGULAR = 7;
     */
    MORNINGBREEZE_REGULAR = 7,
    /**
     * @generated from enum value: CALISTOGA_REGULAR = 8;
     */
    CALISTOGA_REGULAR = 8,
    /**
     * @generated from enum value: EXO2_EXTRABOLD = 9;
     */
    EXO2_EXTRABOLD = 9,
    /**
     * @generated from enum value: COURIERPRIME_BOLD = 10;
     */
    COURIERPRIME_BOLD = 10
}
/**
 * Describes the enum Message.ExtendedTextMessage.FontType.
 */
declare const Message_ExtendedTextMessage_FontTypeSchema: GenEnum<Message_ExtendedTextMessage_FontType>;
/**
 * @generated from enum Message.ExtendedTextMessage.InviteLinkGroupType
 */
declare enum Message_ExtendedTextMessage_InviteLinkGroupType {
    /**
     * @generated from enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from enum value: PARENT = 1;
     */
    PARENT = 1,
    /**
     * @generated from enum value: SUB = 2;
     */
    SUB = 2,
    /**
     * @generated from enum value: DEFAULT_SUB = 3;
     */
    DEFAULT_SUB = 3
}
/**
 * Describes the enum Message.ExtendedTextMessage.InviteLinkGroupType.
 */
declare const Message_ExtendedTextMessage_InviteLinkGroupTypeSchema: GenEnum<Message_ExtendedTextMessage_InviteLinkGroupType>;
/**
 * @generated from enum Message.ExtendedTextMessage.PreviewType
 */
declare enum Message_ExtendedTextMessage_PreviewType {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: VIDEO = 1;
     */
    VIDEO = 1,
    /**
     * @generated from enum value: PLACEHOLDER = 4;
     */
    PLACEHOLDER = 4,
    /**
     * @generated from enum value: IMAGE = 5;
     */
    IMAGE = 5,
    /**
     * @generated from enum value: PAYMENT_LINKS = 6;
     */
    PAYMENT_LINKS = 6,
    /**
     * @generated from enum value: PROFILE = 7;
     */
    PROFILE = 7
}
/**
 * Describes the enum Message.ExtendedTextMessage.PreviewType.
 */
declare const Message_ExtendedTextMessage_PreviewTypeSchema: GenEnum<Message_ExtendedTextMessage_PreviewType>;
/**
 * @generated from message Message.FullHistorySyncOnDemandRequestMetadata
 */
type Message_FullHistorySyncOnDemandRequestMetadata = Message$1<"Message.FullHistorySyncOnDemandRequestMetadata"> & {
    /**
     * @generated from field: optional string requestId = 1;
     */
    requestId: string;
};
/**
 * Describes the message Message.FullHistorySyncOnDemandRequestMetadata.
 * Use `create(Message_FullHistorySyncOnDemandRequestMetadataSchema)` to create a new message.
 */
declare const Message_FullHistorySyncOnDemandRequestMetadataSchema: GenMessage<Message_FullHistorySyncOnDemandRequestMetadata>;
/**
 * @generated from message Message.FutureProofMessage
 */
type Message_FutureProofMessage = Message$1<"Message.FutureProofMessage"> & {
    /**
     * @generated from field: optional Message message = 1;
     */
    message?: Message;
};
/**
 * Describes the message Message.FutureProofMessage.
 * Use `create(Message_FutureProofMessageSchema)` to create a new message.
 */
declare const Message_FutureProofMessageSchema: GenMessage<Message_FutureProofMessage>;
/**
 * @generated from message Message.GroupInviteMessage
 */
type Message_GroupInviteMessage = Message$1<"Message.GroupInviteMessage"> & {
    /**
     * @generated from field: optional string groupJid = 1;
     */
    groupJid: string;
    /**
     * @generated from field: optional string inviteCode = 2;
     */
    inviteCode: string;
    /**
     * @generated from field: optional int64 inviteExpiration = 3;
     */
    inviteExpiration: bigint;
    /**
     * @generated from field: optional string groupName = 4;
     */
    groupName: string;
    /**
     * @generated from field: optional bytes jpegThumbnail = 5;
     */
    jpegThumbnail: Uint8Array;
    /**
     * @generated from field: optional string caption = 6;
     */
    caption: string;
    /**
     * @generated from field: optional ContextInfo contextInfo = 7;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional Message.GroupInviteMessage.GroupType groupType = 8;
     */
    groupType: Message_GroupInviteMessage_GroupType;
};
/**
 * Describes the message Message.GroupInviteMessage.
 * Use `create(Message_GroupInviteMessageSchema)` to create a new message.
 */
declare const Message_GroupInviteMessageSchema: GenMessage<Message_GroupInviteMessage>;
/**
 * @generated from enum Message.GroupInviteMessage.GroupType
 */
declare enum Message_GroupInviteMessage_GroupType {
    /**
     * @generated from enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from enum value: PARENT = 1;
     */
    PARENT = 1
}
/**
 * Describes the enum Message.GroupInviteMessage.GroupType.
 */
declare const Message_GroupInviteMessage_GroupTypeSchema: GenEnum<Message_GroupInviteMessage_GroupType>;
/**
 * @generated from message Message.HighlyStructuredMessage
 */
type Message_HighlyStructuredMessage = Message$1<"Message.HighlyStructuredMessage"> & {
    /**
     * @generated from field: optional string namespace = 1;
     */
    namespace: string;
    /**
     * @generated from field: optional string elementName = 2;
     */
    elementName: string;
    /**
     * @generated from field: repeated string params = 3;
     */
    params: string[];
    /**
     * @generated from field: optional string fallbackLg = 4;
     */
    fallbackLg: string;
    /**
     * @generated from field: optional string fallbackLc = 5;
     */
    fallbackLc: string;
    /**
     * @generated from field: repeated Message.HighlyStructuredMessage.HSMLocalizableParameter localizableParams = 6;
     */
    localizableParams: Message_HighlyStructuredMessage_HSMLocalizableParameter[];
    /**
     * @generated from field: optional string deterministicLg = 7;
     */
    deterministicLg: string;
    /**
     * @generated from field: optional string deterministicLc = 8;
     */
    deterministicLc: string;
    /**
     * @generated from field: optional Message.TemplateMessage hydratedHsm = 9;
     */
    hydratedHsm?: Message_TemplateMessage;
};
/**
 * Describes the message Message.HighlyStructuredMessage.
 * Use `create(Message_HighlyStructuredMessageSchema)` to create a new message.
 */
declare const Message_HighlyStructuredMessageSchema: GenMessage<Message_HighlyStructuredMessage>;
/**
 * @generated from message Message.HighlyStructuredMessage.HSMLocalizableParameter
 */
type Message_HighlyStructuredMessage_HSMLocalizableParameter = Message$1<"Message.HighlyStructuredMessage.HSMLocalizableParameter"> & {
    /**
     * @generated from field: optional string default = 1;
     */
    default: string;
    /**
     * @generated from oneof Message.HighlyStructuredMessage.HSMLocalizableParameter.paramOneof
     */
    paramOneof: {
        /**
         * @generated from field: Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency currency = 2;
         */
        value: Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMCurrency;
        case: "currency";
    } | {
        /**
         * @generated from field: Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime dateTime = 3;
         */
        value: Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime;
        case: "dateTime";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message Message.HighlyStructuredMessage.HSMLocalizableParameter.
 * Use `create(Message_HighlyStructuredMessage_HSMLocalizableParameterSchema)` to create a new message.
 */
declare const Message_HighlyStructuredMessage_HSMLocalizableParameterSchema: GenMessage<Message_HighlyStructuredMessage_HSMLocalizableParameter>;
/**
 * @generated from message Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency
 */
type Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMCurrency = Message$1<"Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency"> & {
    /**
     * @generated from field: optional string currencyCode = 1;
     */
    currencyCode: string;
    /**
     * @generated from field: optional int64 amount1000 = 2;
     */
    amount1000: bigint;
};
/**
 * Describes the message Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency.
 * Use `create(Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMCurrencySchema)` to create a new message.
 */
declare const Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMCurrencySchema: GenMessage<Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMCurrency>;
/**
 * @generated from message Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime
 */
type Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime = Message$1<"Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime"> & {
    /**
     * @generated from oneof Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.datetimeOneof
     */
    datetimeOneof: {
        /**
         * @generated from field: Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent component = 1;
         */
        value: Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent;
        case: "component";
    } | {
        /**
         * @generated from field: Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch unixEpoch = 2;
         */
        value: Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeUnixEpoch;
        case: "unixEpoch";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.
 * Use `create(Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTimeSchema)` to create a new message.
 */
declare const Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTimeSchema: GenMessage<Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime>;
/**
 * @generated from message Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent
 */
type Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent = Message$1<"Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent"> & {
    /**
     * @generated from field: optional Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.DayOfWeekType dayOfWeek = 1;
     */
    dayOfWeek: Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_DayOfWeekType;
    /**
     * @generated from field: optional uint32 year = 2;
     */
    year: number;
    /**
     * @generated from field: optional uint32 month = 3;
     */
    month: number;
    /**
     * @generated from field: optional uint32 dayOfMonth = 4;
     */
    dayOfMonth: number;
    /**
     * @generated from field: optional uint32 hour = 5;
     */
    hour: number;
    /**
     * @generated from field: optional uint32 minute = 6;
     */
    minute: number;
    /**
     * @generated from field: optional Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.CalendarType calendar = 7;
     */
    calendar: Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_CalendarType;
};
/**
 * Describes the message Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.
 * Use `create(Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponentSchema)` to create a new message.
 */
declare const Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponentSchema: GenMessage<Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent>;
/**
 * @generated from enum Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.CalendarType
 */
declare enum Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_CalendarType {
    /**
     * @generated from enum value: GREGORIAN = 1;
     */
    GREGORIAN = 1,
    /**
     * @generated from enum value: SOLAR_HIJRI = 2;
     */
    SOLAR_HIJRI = 2
}
/**
 * Describes the enum Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.CalendarType.
 */
declare const Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_CalendarTypeSchema: GenEnum<Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_CalendarType>;
/**
 * @generated from enum Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.DayOfWeekType
 */
declare enum Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_DayOfWeekType {
    /**
     * @generated from enum value: MONDAY = 1;
     */
    MONDAY = 1,
    /**
     * @generated from enum value: TUESDAY = 2;
     */
    TUESDAY = 2,
    /**
     * @generated from enum value: WEDNESDAY = 3;
     */
    WEDNESDAY = 3,
    /**
     * @generated from enum value: THURSDAY = 4;
     */
    THURSDAY = 4,
    /**
     * @generated from enum value: FRIDAY = 5;
     */
    FRIDAY = 5,
    /**
     * @generated from enum value: SATURDAY = 6;
     */
    SATURDAY = 6,
    /**
     * @generated from enum value: SUNDAY = 7;
     */
    SUNDAY = 7
}
/**
 * Describes the enum Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.DayOfWeekType.
 */
declare const Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_DayOfWeekTypeSchema: GenEnum<Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_DayOfWeekType>;
/**
 * @generated from message Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch
 */
type Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeUnixEpoch = Message$1<"Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch"> & {
    /**
     * @generated from field: optional int64 timestamp = 1;
     */
    timestamp: bigint;
};
/**
 * Describes the message Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch.
 * Use `create(Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeUnixEpochSchema)` to create a new message.
 */
declare const Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeUnixEpochSchema: GenMessage<Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeUnixEpoch>;
/**
 * @generated from message Message.HistorySyncNotification
 */
type Message_HistorySyncNotification = Message$1<"Message.HistorySyncNotification"> & {
    /**
     * @generated from field: optional bytes fileSha256 = 1;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional uint64 fileLength = 2;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional bytes mediaKey = 3;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional bytes fileEncSha256 = 4;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: optional string directPath = 5;
     */
    directPath: string;
    /**
     * @generated from field: optional Message.HistorySyncNotification.HistorySyncType syncType = 6;
     */
    syncType: Message_HistorySyncNotification_HistorySyncType;
    /**
     * @generated from field: optional uint32 chunkOrder = 7;
     */
    chunkOrder: number;
    /**
     * @generated from field: optional string originalMessageId = 8;
     */
    originalMessageId: string;
    /**
     * @generated from field: optional uint32 progress = 9;
     */
    progress: number;
    /**
     * @generated from field: optional int64 oldestMsgInChunkTimestampSec = 10;
     */
    oldestMsgInChunkTimestampSec: bigint;
    /**
     * @generated from field: optional bytes initialHistBootstrapInlinePayload = 11;
     */
    initialHistBootstrapInlinePayload: Uint8Array;
    /**
     * @generated from field: optional string peerDataRequestSessionId = 12;
     */
    peerDataRequestSessionId: string;
    /**
     * @generated from field: optional Message.FullHistorySyncOnDemandRequestMetadata fullHistorySyncOnDemandRequestMetadata = 13;
     */
    fullHistorySyncOnDemandRequestMetadata?: Message_FullHistorySyncOnDemandRequestMetadata;
    /**
     * @generated from field: optional string encHandle = 14;
     */
    encHandle: string;
};
/**
 * Describes the message Message.HistorySyncNotification.
 * Use `create(Message_HistorySyncNotificationSchema)` to create a new message.
 */
declare const Message_HistorySyncNotificationSchema: GenMessage<Message_HistorySyncNotification>;
/**
 * @generated from enum Message.HistorySyncNotification.HistorySyncType
 */
declare enum Message_HistorySyncNotification_HistorySyncType {
    /**
     * @generated from enum value: INITIAL_BOOTSTRAP = 0;
     */
    INITIAL_BOOTSTRAP = 0,
    /**
     * @generated from enum value: INITIAL_STATUS_V3 = 1;
     */
    INITIAL_STATUS_V3 = 1,
    /**
     * @generated from enum value: FULL = 2;
     */
    FULL = 2,
    /**
     * @generated from enum value: RECENT = 3;
     */
    RECENT = 3,
    /**
     * @generated from enum value: PUSH_NAME = 4;
     */
    PUSH_NAME = 4,
    /**
     * @generated from enum value: NON_BLOCKING_DATA = 5;
     */
    NON_BLOCKING_DATA = 5,
    /**
     * @generated from enum value: ON_DEMAND = 6;
     */
    ON_DEMAND = 6,
    /**
     * @generated from enum value: NO_HISTORY = 7;
     */
    NO_HISTORY = 7
}
/**
 * Describes the enum Message.HistorySyncNotification.HistorySyncType.
 */
declare const Message_HistorySyncNotification_HistorySyncTypeSchema: GenEnum<Message_HistorySyncNotification_HistorySyncType>;
/**
 * @generated from message Message.ImageMessage
 */
type Message_ImageMessage = Message$1<"Message.ImageMessage"> & {
    /**
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * @generated from field: optional string mimetype = 2;
     */
    mimetype: string;
    /**
     * @generated from field: optional string caption = 3;
     */
    caption: string;
    /**
     * @generated from field: optional bytes fileSha256 = 4;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional uint64 fileLength = 5;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional uint32 height = 6;
     */
    height: number;
    /**
     * @generated from field: optional uint32 width = 7;
     */
    width: number;
    /**
     * @generated from field: optional bytes mediaKey = 8;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional bytes fileEncSha256 = 9;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: repeated InteractiveAnnotation interactiveAnnotations = 10;
     */
    interactiveAnnotations: InteractiveAnnotation[];
    /**
     * @generated from field: optional string directPath = 11;
     */
    directPath: string;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 12;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional bytes jpegThumbnail = 16;
     */
    jpegThumbnail: Uint8Array;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional bytes firstScanSidecar = 18;
     */
    firstScanSidecar: Uint8Array;
    /**
     * @generated from field: optional uint32 firstScanLength = 19;
     */
    firstScanLength: number;
    /**
     * @generated from field: optional uint32 experimentGroupId = 20;
     */
    experimentGroupId: number;
    /**
     * @generated from field: optional bytes scansSidecar = 21;
     */
    scansSidecar: Uint8Array;
    /**
     * @generated from field: repeated uint32 scanLengths = 22;
     */
    scanLengths: number[];
    /**
     * @generated from field: optional bytes midQualityFileSha256 = 23;
     */
    midQualityFileSha256: Uint8Array;
    /**
     * @generated from field: optional bytes midQualityFileEncSha256 = 24;
     */
    midQualityFileEncSha256: Uint8Array;
    /**
     * @generated from field: optional bool viewOnce = 25;
     */
    viewOnce: boolean;
    /**
     * @generated from field: optional string thumbnailDirectPath = 26;
     */
    thumbnailDirectPath: string;
    /**
     * @generated from field: optional bytes thumbnailSha256 = 27;
     */
    thumbnailSha256: Uint8Array;
    /**
     * @generated from field: optional bytes thumbnailEncSha256 = 28;
     */
    thumbnailEncSha256: Uint8Array;
    /**
     * @generated from field: optional string staticUrl = 29;
     */
    staticUrl: string;
    /**
     * @generated from field: repeated InteractiveAnnotation annotations = 30;
     */
    annotations: InteractiveAnnotation[];
    /**
     * @generated from field: optional Message.ImageMessage.ImageSourceType imageSourceType = 31;
     */
    imageSourceType: Message_ImageMessage_ImageSourceType;
    /**
     * @generated from field: optional string accessibilityLabel = 32;
     */
    accessibilityLabel: string;
};
/**
 * Describes the message Message.ImageMessage.
 * Use `create(Message_ImageMessageSchema)` to create a new message.
 */
declare const Message_ImageMessageSchema: GenMessage<Message_ImageMessage>;
/**
 * @generated from enum Message.ImageMessage.ImageSourceType
 */
declare enum Message_ImageMessage_ImageSourceType {
    /**
     * @generated from enum value: USER_IMAGE = 0;
     */
    USER_IMAGE = 0,
    /**
     * @generated from enum value: AI_GENERATED = 1;
     */
    AI_GENERATED = 1,
    /**
     * @generated from enum value: AI_MODIFIED = 2;
     */
    AI_MODIFIED = 2,
    /**
     * @generated from enum value: RASTERIZED_TEXT_STATUS = 3;
     */
    RASTERIZED_TEXT_STATUS = 3
}
/**
 * Describes the enum Message.ImageMessage.ImageSourceType.
 */
declare const Message_ImageMessage_ImageSourceTypeSchema: GenEnum<Message_ImageMessage_ImageSourceType>;
/**
 * @generated from message Message.InitialSecurityNotificationSettingSync
 */
type Message_InitialSecurityNotificationSettingSync = Message$1<"Message.InitialSecurityNotificationSettingSync"> & {
    /**
     * @generated from field: optional bool securityNotificationEnabled = 1;
     */
    securityNotificationEnabled: boolean;
};
/**
 * Describes the message Message.InitialSecurityNotificationSettingSync.
 * Use `create(Message_InitialSecurityNotificationSettingSyncSchema)` to create a new message.
 */
declare const Message_InitialSecurityNotificationSettingSyncSchema: GenMessage<Message_InitialSecurityNotificationSettingSync>;
/**
 * @generated from message Message.InteractiveMessage
 */
type Message_InteractiveMessage = Message$1<"Message.InteractiveMessage"> & {
    /**
     * @generated from field: optional Message.InteractiveMessage.Header header = 1;
     */
    header?: Message_InteractiveMessage_Header;
    /**
     * @generated from field: optional Message.InteractiveMessage.Body body = 2;
     */
    body?: Message_InteractiveMessage_Body;
    /**
     * @generated from field: optional Message.InteractiveMessage.Footer footer = 3;
     */
    footer?: Message_InteractiveMessage_Footer;
    /**
     * @generated from field: optional ContextInfo contextInfo = 15;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional UrlTrackingMap urlTrackingMap = 16;
     */
    urlTrackingMap?: UrlTrackingMap;
    /**
     * @generated from oneof Message.InteractiveMessage.interactiveMessage
     */
    interactiveMessage: {
        /**
         * @generated from field: Message.InteractiveMessage.ShopMessage shopStorefrontMessage = 4;
         */
        value: Message_InteractiveMessage_ShopMessage;
        case: "shopStorefrontMessage";
    } | {
        /**
         * @generated from field: Message.InteractiveMessage.CollectionMessage collectionMessage = 5;
         */
        value: Message_InteractiveMessage_CollectionMessage;
        case: "collectionMessage";
    } | {
        /**
         * @generated from field: Message.InteractiveMessage.NativeFlowMessage nativeFlowMessage = 6;
         */
        value: Message_InteractiveMessage_NativeFlowMessage;
        case: "nativeFlowMessage";
    } | {
        /**
         * @generated from field: Message.InteractiveMessage.CarouselMessage carouselMessage = 7;
         */
        value: Message_InteractiveMessage_CarouselMessage;
        case: "carouselMessage";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message Message.InteractiveMessage.
 * Use `create(Message_InteractiveMessageSchema)` to create a new message.
 */
declare const Message_InteractiveMessageSchema: GenMessage<Message_InteractiveMessage>;
/**
 * @generated from message Message.InteractiveMessage.Body
 */
type Message_InteractiveMessage_Body = Message$1<"Message.InteractiveMessage.Body"> & {
    /**
     * @generated from field: optional string text = 1;
     */
    text: string;
};
/**
 * Describes the message Message.InteractiveMessage.Body.
 * Use `create(Message_InteractiveMessage_BodySchema)` to create a new message.
 */
declare const Message_InteractiveMessage_BodySchema: GenMessage<Message_InteractiveMessage_Body>;
/**
 * @generated from message Message.InteractiveMessage.CarouselMessage
 */
type Message_InteractiveMessage_CarouselMessage = Message$1<"Message.InteractiveMessage.CarouselMessage"> & {
    /**
     * @generated from field: repeated Message.InteractiveMessage cards = 1;
     */
    cards: Message_InteractiveMessage[];
    /**
     * @generated from field: optional int32 messageVersion = 2;
     */
    messageVersion: number;
};
/**
 * Describes the message Message.InteractiveMessage.CarouselMessage.
 * Use `create(Message_InteractiveMessage_CarouselMessageSchema)` to create a new message.
 */
declare const Message_InteractiveMessage_CarouselMessageSchema: GenMessage<Message_InteractiveMessage_CarouselMessage>;
/**
 * @generated from message Message.InteractiveMessage.CollectionMessage
 */
type Message_InteractiveMessage_CollectionMessage = Message$1<"Message.InteractiveMessage.CollectionMessage"> & {
    /**
     * @generated from field: optional string bizJid = 1;
     */
    bizJid: string;
    /**
     * @generated from field: optional string id = 2;
     */
    id: string;
    /**
     * @generated from field: optional int32 messageVersion = 3;
     */
    messageVersion: number;
};
/**
 * Describes the message Message.InteractiveMessage.CollectionMessage.
 * Use `create(Message_InteractiveMessage_CollectionMessageSchema)` to create a new message.
 */
declare const Message_InteractiveMessage_CollectionMessageSchema: GenMessage<Message_InteractiveMessage_CollectionMessage>;
/**
 * @generated from message Message.InteractiveMessage.Footer
 */
type Message_InteractiveMessage_Footer = Message$1<"Message.InteractiveMessage.Footer"> & {
    /**
     * @generated from field: optional string text = 1;
     */
    text: string;
};
/**
 * Describes the message Message.InteractiveMessage.Footer.
 * Use `create(Message_InteractiveMessage_FooterSchema)` to create a new message.
 */
declare const Message_InteractiveMessage_FooterSchema: GenMessage<Message_InteractiveMessage_Footer>;
/**
 * @generated from message Message.InteractiveMessage.Header
 */
type Message_InteractiveMessage_Header = Message$1<"Message.InteractiveMessage.Header"> & {
    /**
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * @generated from field: optional string subtitle = 2;
     */
    subtitle: string;
    /**
     * @generated from field: optional bool hasMediaAttachment = 5;
     */
    hasMediaAttachment: boolean;
    /**
     * @generated from oneof Message.InteractiveMessage.Header.media
     */
    media: {
        /**
         * @generated from field: Message.DocumentMessage documentMessage = 3;
         */
        value: Message_DocumentMessage;
        case: "documentMessage";
    } | {
        /**
         * @generated from field: Message.ImageMessage imageMessage = 4;
         */
        value: Message_ImageMessage;
        case: "imageMessage";
    } | {
        /**
         * @generated from field: bytes jpegThumbnail = 6;
         */
        value: Uint8Array;
        case: "jpegThumbnail";
    } | {
        /**
         * @generated from field: Message.VideoMessage videoMessage = 7;
         */
        value: Message_VideoMessage;
        case: "videoMessage";
    } | {
        /**
         * @generated from field: Message.LocationMessage locationMessage = 8;
         */
        value: Message_LocationMessage;
        case: "locationMessage";
    } | {
        /**
         * @generated from field: Message.ProductMessage productMessage = 9;
         */
        value: Message_ProductMessage;
        case: "productMessage";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message Message.InteractiveMessage.Header.
 * Use `create(Message_InteractiveMessage_HeaderSchema)` to create a new message.
 */
declare const Message_InteractiveMessage_HeaderSchema: GenMessage<Message_InteractiveMessage_Header>;
/**
 * @generated from message Message.InteractiveMessage.NativeFlowMessage
 */
type Message_InteractiveMessage_NativeFlowMessage = Message$1<"Message.InteractiveMessage.NativeFlowMessage"> & {
    /**
     * @generated from field: repeated Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton buttons = 1;
     */
    buttons: Message_InteractiveMessage_NativeFlowMessage_NativeFlowButton[];
    /**
     * @generated from field: optional string messageParamsJson = 2;
     */
    messageParamsJson: string;
    /**
     * @generated from field: optional int32 messageVersion = 3;
     */
    messageVersion: number;
};
/**
 * Describes the message Message.InteractiveMessage.NativeFlowMessage.
 * Use `create(Message_InteractiveMessage_NativeFlowMessageSchema)` to create a new message.
 */
declare const Message_InteractiveMessage_NativeFlowMessageSchema: GenMessage<Message_InteractiveMessage_NativeFlowMessage>;
/**
 * @generated from message Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton
 */
type Message_InteractiveMessage_NativeFlowMessage_NativeFlowButton = Message$1<"Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional string buttonParamsJson = 2;
     */
    buttonParamsJson: string;
};
/**
 * Describes the message Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton.
 * Use `create(Message_InteractiveMessage_NativeFlowMessage_NativeFlowButtonSchema)` to create a new message.
 */
declare const Message_InteractiveMessage_NativeFlowMessage_NativeFlowButtonSchema: GenMessage<Message_InteractiveMessage_NativeFlowMessage_NativeFlowButton>;
/**
 * @generated from message Message.InteractiveMessage.ShopMessage
 */
type Message_InteractiveMessage_ShopMessage = Message$1<"Message.InteractiveMessage.ShopMessage"> & {
    /**
     * @generated from field: optional string id = 1;
     */
    id: string;
    /**
     * @generated from field: optional Message.InteractiveMessage.ShopMessage.Surface surface = 2;
     */
    surface: Message_InteractiveMessage_ShopMessage_Surface;
    /**
     * @generated from field: optional int32 messageVersion = 3;
     */
    messageVersion: number;
};
/**
 * Describes the message Message.InteractiveMessage.ShopMessage.
 * Use `create(Message_InteractiveMessage_ShopMessageSchema)` to create a new message.
 */
declare const Message_InteractiveMessage_ShopMessageSchema: GenMessage<Message_InteractiveMessage_ShopMessage>;
/**
 * @generated from enum Message.InteractiveMessage.ShopMessage.Surface
 */
declare enum Message_InteractiveMessage_ShopMessage_Surface {
    /**
     * @generated from enum value: UNKNOWN_SURFACE = 0;
     */
    UNKNOWN_SURFACE = 0,
    /**
     * @generated from enum value: FB = 1;
     */
    FB = 1,
    /**
     * @generated from enum value: IG = 2;
     */
    IG = 2,
    /**
     * @generated from enum value: WA = 3;
     */
    WA = 3
}
/**
 * Describes the enum Message.InteractiveMessage.ShopMessage.Surface.
 */
declare const Message_InteractiveMessage_ShopMessage_SurfaceSchema: GenEnum<Message_InteractiveMessage_ShopMessage_Surface>;
/**
 * @generated from message Message.InteractiveResponseMessage
 */
type Message_InteractiveResponseMessage = Message$1<"Message.InteractiveResponseMessage"> & {
    /**
     * @generated from field: optional Message.InteractiveResponseMessage.Body body = 1;
     */
    body?: Message_InteractiveResponseMessage_Body;
    /**
     * @generated from field: optional ContextInfo contextInfo = 15;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from oneof Message.InteractiveResponseMessage.interactiveResponseMessage
     */
    interactiveResponseMessage: {
        /**
         * @generated from field: Message.InteractiveResponseMessage.NativeFlowResponseMessage nativeFlowResponseMessage = 2;
         */
        value: Message_InteractiveResponseMessage_NativeFlowResponseMessage;
        case: "nativeFlowResponseMessage";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message Message.InteractiveResponseMessage.
 * Use `create(Message_InteractiveResponseMessageSchema)` to create a new message.
 */
declare const Message_InteractiveResponseMessageSchema: GenMessage<Message_InteractiveResponseMessage>;
/**
 * @generated from message Message.InteractiveResponseMessage.Body
 */
type Message_InteractiveResponseMessage_Body = Message$1<"Message.InteractiveResponseMessage.Body"> & {
    /**
     * @generated from field: optional string text = 1;
     */
    text: string;
    /**
     * @generated from field: optional Message.InteractiveResponseMessage.Body.Format format = 2;
     */
    format: Message_InteractiveResponseMessage_Body_Format;
};
/**
 * Describes the message Message.InteractiveResponseMessage.Body.
 * Use `create(Message_InteractiveResponseMessage_BodySchema)` to create a new message.
 */
declare const Message_InteractiveResponseMessage_BodySchema: GenMessage<Message_InteractiveResponseMessage_Body>;
/**
 * @generated from enum Message.InteractiveResponseMessage.Body.Format
 */
declare enum Message_InteractiveResponseMessage_Body_Format {
    /**
     * @generated from enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from enum value: EXTENSIONS_1 = 1;
     */
    EXTENSIONS_1 = 1
}
/**
 * Describes the enum Message.InteractiveResponseMessage.Body.Format.
 */
declare const Message_InteractiveResponseMessage_Body_FormatSchema: GenEnum<Message_InteractiveResponseMessage_Body_Format>;
/**
 * @generated from message Message.InteractiveResponseMessage.NativeFlowResponseMessage
 */
type Message_InteractiveResponseMessage_NativeFlowResponseMessage = Message$1<"Message.InteractiveResponseMessage.NativeFlowResponseMessage"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional string paramsJson = 2;
     */
    paramsJson: string;
    /**
     * @generated from field: optional int32 version = 3;
     */
    version: number;
};
/**
 * Describes the message Message.InteractiveResponseMessage.NativeFlowResponseMessage.
 * Use `create(Message_InteractiveResponseMessage_NativeFlowResponseMessageSchema)` to create a new message.
 */
declare const Message_InteractiveResponseMessage_NativeFlowResponseMessageSchema: GenMessage<Message_InteractiveResponseMessage_NativeFlowResponseMessage>;
/**
 * @generated from message Message.InvoiceMessage
 */
type Message_InvoiceMessage = Message$1<"Message.InvoiceMessage"> & {
    /**
     * @generated from field: optional string note = 1;
     */
    note: string;
    /**
     * @generated from field: optional string token = 2;
     */
    token: string;
    /**
     * @generated from field: optional Message.InvoiceMessage.AttachmentType attachmentType = 3;
     */
    attachmentType: Message_InvoiceMessage_AttachmentType;
    /**
     * @generated from field: optional string attachmentMimetype = 4;
     */
    attachmentMimetype: string;
    /**
     * @generated from field: optional bytes attachmentMediaKey = 5;
     */
    attachmentMediaKey: Uint8Array;
    /**
     * @generated from field: optional int64 attachmentMediaKeyTimestamp = 6;
     */
    attachmentMediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional bytes attachmentFileSha256 = 7;
     */
    attachmentFileSha256: Uint8Array;
    /**
     * @generated from field: optional bytes attachmentFileEncSha256 = 8;
     */
    attachmentFileEncSha256: Uint8Array;
    /**
     * @generated from field: optional string attachmentDirectPath = 9;
     */
    attachmentDirectPath: string;
    /**
     * @generated from field: optional bytes attachmentJpegThumbnail = 10;
     */
    attachmentJpegThumbnail: Uint8Array;
};
/**
 * Describes the message Message.InvoiceMessage.
 * Use `create(Message_InvoiceMessageSchema)` to create a new message.
 */
declare const Message_InvoiceMessageSchema: GenMessage<Message_InvoiceMessage>;
/**
 * @generated from enum Message.InvoiceMessage.AttachmentType
 */
declare enum Message_InvoiceMessage_AttachmentType {
    /**
     * @generated from enum value: IMAGE = 0;
     */
    IMAGE = 0,
    /**
     * @generated from enum value: PDF = 1;
     */
    PDF = 1
}
/**
 * Describes the enum Message.InvoiceMessage.AttachmentType.
 */
declare const Message_InvoiceMessage_AttachmentTypeSchema: GenEnum<Message_InvoiceMessage_AttachmentType>;
/**
 * @generated from message Message.KeepInChatMessage
 */
type Message_KeepInChatMessage = Message$1<"Message.KeepInChatMessage"> & {
    /**
     * @generated from field: optional MessageKey key = 1;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional KeepType keepType = 2;
     */
    keepType: KeepType;
    /**
     * @generated from field: optional int64 timestampMs = 3;
     */
    timestampMs: bigint;
};
/**
 * Describes the message Message.KeepInChatMessage.
 * Use `create(Message_KeepInChatMessageSchema)` to create a new message.
 */
declare const Message_KeepInChatMessageSchema: GenMessage<Message_KeepInChatMessage>;
/**
 * @generated from message Message.LinkPreviewMetadata
 */
type Message_LinkPreviewMetadata = Message$1<"Message.LinkPreviewMetadata"> & {
    /**
     * @generated from field: optional Message.PaymentLinkMetadata paymentLinkMetadata = 1;
     */
    paymentLinkMetadata?: Message_PaymentLinkMetadata;
    /**
     * @generated from field: optional Message.URLMetadata urlMetadata = 2;
     */
    urlMetadata?: Message_URLMetadata;
    /**
     * @generated from field: optional uint32 fbExperimentId = 3;
     */
    fbExperimentId: number;
    /**
     * @generated from field: optional uint32 linkMediaDuration = 4;
     */
    linkMediaDuration: number;
    /**
     * @generated from field: optional Message.LinkPreviewMetadata.SocialMediaPostType socialMediaPostType = 5;
     */
    socialMediaPostType: Message_LinkPreviewMetadata_SocialMediaPostType;
};
/**
 * Describes the message Message.LinkPreviewMetadata.
 * Use `create(Message_LinkPreviewMetadataSchema)` to create a new message.
 */
declare const Message_LinkPreviewMetadataSchema: GenMessage<Message_LinkPreviewMetadata>;
/**
 * @generated from enum Message.LinkPreviewMetadata.SocialMediaPostType
 */
declare enum Message_LinkPreviewMetadata_SocialMediaPostType {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: REEL = 1;
     */
    REEL = 1,
    /**
     * @generated from enum value: LIVE_VIDEO = 2;
     */
    LIVE_VIDEO = 2,
    /**
     * @generated from enum value: LONG_VIDEO = 3;
     */
    LONG_VIDEO = 3,
    /**
     * @generated from enum value: SINGLE_IMAGE = 4;
     */
    SINGLE_IMAGE = 4,
    /**
     * @generated from enum value: CAROUSEL = 5;
     */
    CAROUSEL = 5
}
/**
 * Describes the enum Message.LinkPreviewMetadata.SocialMediaPostType.
 */
declare const Message_LinkPreviewMetadata_SocialMediaPostTypeSchema: GenEnum<Message_LinkPreviewMetadata_SocialMediaPostType>;
/**
 * @generated from message Message.ListMessage
 */
type Message_ListMessage = Message$1<"Message.ListMessage"> & {
    /**
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * @generated from field: optional string description = 2;
     */
    description: string;
    /**
     * @generated from field: optional string buttonText = 3;
     */
    buttonText: string;
    /**
     * @generated from field: optional Message.ListMessage.ListType listType = 4;
     */
    listType: Message_ListMessage_ListType;
    /**
     * @generated from field: repeated Message.ListMessage.Section sections = 5;
     */
    sections: Message_ListMessage_Section[];
    /**
     * @generated from field: optional Message.ListMessage.ProductListInfo productListInfo = 6;
     */
    productListInfo?: Message_ListMessage_ProductListInfo;
    /**
     * @generated from field: optional string footerText = 7;
     */
    footerText: string;
    /**
     * @generated from field: optional ContextInfo contextInfo = 8;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message Message.ListMessage.
 * Use `create(Message_ListMessageSchema)` to create a new message.
 */
declare const Message_ListMessageSchema: GenMessage<Message_ListMessage>;
/**
 * @generated from message Message.ListMessage.Product
 */
type Message_ListMessage_Product = Message$1<"Message.ListMessage.Product"> & {
    /**
     * @generated from field: optional string productId = 1;
     */
    productId: string;
};
/**
 * Describes the message Message.ListMessage.Product.
 * Use `create(Message_ListMessage_ProductSchema)` to create a new message.
 */
declare const Message_ListMessage_ProductSchema: GenMessage<Message_ListMessage_Product>;
/**
 * @generated from message Message.ListMessage.ProductListHeaderImage
 */
type Message_ListMessage_ProductListHeaderImage = Message$1<"Message.ListMessage.ProductListHeaderImage"> & {
    /**
     * @generated from field: optional string productId = 1;
     */
    productId: string;
    /**
     * @generated from field: optional bytes jpegThumbnail = 2;
     */
    jpegThumbnail: Uint8Array;
};
/**
 * Describes the message Message.ListMessage.ProductListHeaderImage.
 * Use `create(Message_ListMessage_ProductListHeaderImageSchema)` to create a new message.
 */
declare const Message_ListMessage_ProductListHeaderImageSchema: GenMessage<Message_ListMessage_ProductListHeaderImage>;
/**
 * @generated from message Message.ListMessage.ProductListInfo
 */
type Message_ListMessage_ProductListInfo = Message$1<"Message.ListMessage.ProductListInfo"> & {
    /**
     * @generated from field: repeated Message.ListMessage.ProductSection productSections = 1;
     */
    productSections: Message_ListMessage_ProductSection[];
    /**
     * @generated from field: optional Message.ListMessage.ProductListHeaderImage headerImage = 2;
     */
    headerImage?: Message_ListMessage_ProductListHeaderImage;
    /**
     * @generated from field: optional string businessOwnerJid = 3;
     */
    businessOwnerJid: string;
};
/**
 * Describes the message Message.ListMessage.ProductListInfo.
 * Use `create(Message_ListMessage_ProductListInfoSchema)` to create a new message.
 */
declare const Message_ListMessage_ProductListInfoSchema: GenMessage<Message_ListMessage_ProductListInfo>;
/**
 * @generated from message Message.ListMessage.ProductSection
 */
type Message_ListMessage_ProductSection = Message$1<"Message.ListMessage.ProductSection"> & {
    /**
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * @generated from field: repeated Message.ListMessage.Product products = 2;
     */
    products: Message_ListMessage_Product[];
};
/**
 * Describes the message Message.ListMessage.ProductSection.
 * Use `create(Message_ListMessage_ProductSectionSchema)` to create a new message.
 */
declare const Message_ListMessage_ProductSectionSchema: GenMessage<Message_ListMessage_ProductSection>;
/**
 * @generated from message Message.ListMessage.Row
 */
type Message_ListMessage_Row = Message$1<"Message.ListMessage.Row"> & {
    /**
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * @generated from field: optional string description = 2;
     */
    description: string;
    /**
     * @generated from field: optional string rowId = 3;
     */
    rowId: string;
};
/**
 * Describes the message Message.ListMessage.Row.
 * Use `create(Message_ListMessage_RowSchema)` to create a new message.
 */
declare const Message_ListMessage_RowSchema: GenMessage<Message_ListMessage_Row>;
/**
 * @generated from message Message.ListMessage.Section
 */
type Message_ListMessage_Section = Message$1<"Message.ListMessage.Section"> & {
    /**
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * @generated from field: repeated Message.ListMessage.Row rows = 2;
     */
    rows: Message_ListMessage_Row[];
};
/**
 * Describes the message Message.ListMessage.Section.
 * Use `create(Message_ListMessage_SectionSchema)` to create a new message.
 */
declare const Message_ListMessage_SectionSchema: GenMessage<Message_ListMessage_Section>;
/**
 * @generated from enum Message.ListMessage.ListType
 */
declare enum Message_ListMessage_ListType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: SINGLE_SELECT = 1;
     */
    SINGLE_SELECT = 1,
    /**
     * @generated from enum value: PRODUCT_LIST = 2;
     */
    PRODUCT_LIST = 2
}
/**
 * Describes the enum Message.ListMessage.ListType.
 */
declare const Message_ListMessage_ListTypeSchema: GenEnum<Message_ListMessage_ListType>;
/**
 * @generated from message Message.ListResponseMessage
 */
type Message_ListResponseMessage = Message$1<"Message.ListResponseMessage"> & {
    /**
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * @generated from field: optional Message.ListResponseMessage.ListType listType = 2;
     */
    listType: Message_ListResponseMessage_ListType;
    /**
     * @generated from field: optional Message.ListResponseMessage.SingleSelectReply singleSelectReply = 3;
     */
    singleSelectReply?: Message_ListResponseMessage_SingleSelectReply;
    /**
     * @generated from field: optional ContextInfo contextInfo = 4;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional string description = 5;
     */
    description: string;
};
/**
 * Describes the message Message.ListResponseMessage.
 * Use `create(Message_ListResponseMessageSchema)` to create a new message.
 */
declare const Message_ListResponseMessageSchema: GenMessage<Message_ListResponseMessage>;
/**
 * @generated from message Message.ListResponseMessage.SingleSelectReply
 */
type Message_ListResponseMessage_SingleSelectReply = Message$1<"Message.ListResponseMessage.SingleSelectReply"> & {
    /**
     * @generated from field: optional string selectedRowId = 1;
     */
    selectedRowId: string;
};
/**
 * Describes the message Message.ListResponseMessage.SingleSelectReply.
 * Use `create(Message_ListResponseMessage_SingleSelectReplySchema)` to create a new message.
 */
declare const Message_ListResponseMessage_SingleSelectReplySchema: GenMessage<Message_ListResponseMessage_SingleSelectReply>;
/**
 * @generated from enum Message.ListResponseMessage.ListType
 */
declare enum Message_ListResponseMessage_ListType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: SINGLE_SELECT = 1;
     */
    SINGLE_SELECT = 1
}
/**
 * Describes the enum Message.ListResponseMessage.ListType.
 */
declare const Message_ListResponseMessage_ListTypeSchema: GenEnum<Message_ListResponseMessage_ListType>;
/**
 * @generated from message Message.LiveLocationMessage
 */
type Message_LiveLocationMessage = Message$1<"Message.LiveLocationMessage"> & {
    /**
     * @generated from field: optional double degreesLatitude = 1;
     */
    degreesLatitude: number;
    /**
     * @generated from field: optional double degreesLongitude = 2;
     */
    degreesLongitude: number;
    /**
     * @generated from field: optional uint32 accuracyInMeters = 3;
     */
    accuracyInMeters: number;
    /**
     * @generated from field: optional float speedInMps = 4;
     */
    speedInMps: number;
    /**
     * @generated from field: optional uint32 degreesClockwiseFromMagneticNorth = 5;
     */
    degreesClockwiseFromMagneticNorth: number;
    /**
     * @generated from field: optional string caption = 6;
     */
    caption: string;
    /**
     * @generated from field: optional int64 sequenceNumber = 7;
     */
    sequenceNumber: bigint;
    /**
     * @generated from field: optional uint32 timeOffset = 8;
     */
    timeOffset: number;
    /**
     * @generated from field: optional bytes jpegThumbnail = 16;
     */
    jpegThumbnail: Uint8Array;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message Message.LiveLocationMessage.
 * Use `create(Message_LiveLocationMessageSchema)` to create a new message.
 */
declare const Message_LiveLocationMessageSchema: GenMessage<Message_LiveLocationMessage>;
/**
 * @generated from message Message.LocationMessage
 */
type Message_LocationMessage = Message$1<"Message.LocationMessage"> & {
    /**
     * @generated from field: optional double degreesLatitude = 1;
     */
    degreesLatitude: number;
    /**
     * @generated from field: optional double degreesLongitude = 2;
     */
    degreesLongitude: number;
    /**
     * @generated from field: optional string name = 3;
     */
    name: string;
    /**
     * @generated from field: optional string address = 4;
     */
    address: string;
    /**
     * @generated from field: optional string url = 5;
     */
    url: string;
    /**
     * @generated from field: optional bool isLive = 6;
     */
    isLive: boolean;
    /**
     * @generated from field: optional uint32 accuracyInMeters = 7;
     */
    accuracyInMeters: number;
    /**
     * @generated from field: optional float speedInMps = 8;
     */
    speedInMps: number;
    /**
     * @generated from field: optional uint32 degreesClockwiseFromMagneticNorth = 9;
     */
    degreesClockwiseFromMagneticNorth: number;
    /**
     * @generated from field: optional string comment = 11;
     */
    comment: string;
    /**
     * @generated from field: optional bytes jpegThumbnail = 16;
     */
    jpegThumbnail: Uint8Array;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message Message.LocationMessage.
 * Use `create(Message_LocationMessageSchema)` to create a new message.
 */
declare const Message_LocationMessageSchema: GenMessage<Message_LocationMessage>;
/**
 * @generated from message Message.MMSThumbnailMetadata
 */
type Message_MMSThumbnailMetadata = Message$1<"Message.MMSThumbnailMetadata"> & {
    /**
     * @generated from field: optional string thumbnailDirectPath = 1;
     */
    thumbnailDirectPath: string;
    /**
     * @generated from field: optional bytes thumbnailSha256 = 2;
     */
    thumbnailSha256: Uint8Array;
    /**
     * @generated from field: optional bytes thumbnailEncSha256 = 3;
     */
    thumbnailEncSha256: Uint8Array;
    /**
     * @generated from field: optional bytes mediaKey = 4;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 5;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional uint32 thumbnailHeight = 6;
     */
    thumbnailHeight: number;
    /**
     * @generated from field: optional uint32 thumbnailWidth = 7;
     */
    thumbnailWidth: number;
};
/**
 * Describes the message Message.MMSThumbnailMetadata.
 * Use `create(Message_MMSThumbnailMetadataSchema)` to create a new message.
 */
declare const Message_MMSThumbnailMetadataSchema: GenMessage<Message_MMSThumbnailMetadata>;
/**
 * @generated from message Message.MessageHistoryBundle
 */
type Message_MessageHistoryBundle = Message$1<"Message.MessageHistoryBundle"> & {
    /**
     * @generated from field: optional string mimetype = 1;
     */
    mimetype: string;
    /**
     * @generated from field: optional bytes fileSha256 = 2;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional bytes mediaKey = 3;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional bytes fileEncSha256 = 4;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: optional string directPath = 5;
     */
    directPath: string;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 6;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional ContextInfo contextInfo = 7;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional Message.MessageHistoryMetadata messageHistoryMetadata = 8;
     */
    messageHistoryMetadata?: Message_MessageHistoryMetadata;
};
/**
 * Describes the message Message.MessageHistoryBundle.
 * Use `create(Message_MessageHistoryBundleSchema)` to create a new message.
 */
declare const Message_MessageHistoryBundleSchema: GenMessage<Message_MessageHistoryBundle>;
/**
 * @generated from message Message.MessageHistoryMetadata
 */
type Message_MessageHistoryMetadata = Message$1<"Message.MessageHistoryMetadata"> & {
    /**
     * @generated from field: repeated string historyReceivers = 1;
     */
    historyReceivers: string[];
    /**
     * @generated from field: optional int64 firstMessageTimestamp = 2;
     */
    firstMessageTimestamp: bigint;
    /**
     * @generated from field: optional int64 messageCount = 3;
     */
    messageCount: bigint;
};
/**
 * Describes the message Message.MessageHistoryMetadata.
 * Use `create(Message_MessageHistoryMetadataSchema)` to create a new message.
 */
declare const Message_MessageHistoryMetadataSchema: GenMessage<Message_MessageHistoryMetadata>;
/**
 * @generated from message Message.MessageHistoryNotice
 */
type Message_MessageHistoryNotice = Message$1<"Message.MessageHistoryNotice"> & {
    /**
     * @generated from field: optional ContextInfo contextInfo = 1;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional Message.MessageHistoryMetadata messageHistoryMetadata = 2;
     */
    messageHistoryMetadata?: Message_MessageHistoryMetadata;
};
/**
 * Describes the message Message.MessageHistoryNotice.
 * Use `create(Message_MessageHistoryNoticeSchema)` to create a new message.
 */
declare const Message_MessageHistoryNoticeSchema: GenMessage<Message_MessageHistoryNotice>;
/**
 * @generated from message Message.NewsletterAdminInviteMessage
 */
type Message_NewsletterAdminInviteMessage = Message$1<"Message.NewsletterAdminInviteMessage"> & {
    /**
     * @generated from field: optional string newsletterJid = 1;
     */
    newsletterJid: string;
    /**
     * @generated from field: optional string newsletterName = 2;
     */
    newsletterName: string;
    /**
     * @generated from field: optional bytes jpegThumbnail = 3;
     */
    jpegThumbnail: Uint8Array;
    /**
     * @generated from field: optional string caption = 4;
     */
    caption: string;
    /**
     * @generated from field: optional int64 inviteExpiration = 5;
     */
    inviteExpiration: bigint;
    /**
     * @generated from field: optional ContextInfo contextInfo = 6;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message Message.NewsletterAdminInviteMessage.
 * Use `create(Message_NewsletterAdminInviteMessageSchema)` to create a new message.
 */
declare const Message_NewsletterAdminInviteMessageSchema: GenMessage<Message_NewsletterAdminInviteMessage>;
/**
 * @generated from message Message.OrderMessage
 */
type Message_OrderMessage = Message$1<"Message.OrderMessage"> & {
    /**
     * @generated from field: optional string orderId = 1;
     */
    orderId: string;
    /**
     * @generated from field: optional bytes thumbnail = 2;
     */
    thumbnail: Uint8Array;
    /**
     * @generated from field: optional int32 itemCount = 3;
     */
    itemCount: number;
    /**
     * @generated from field: optional Message.OrderMessage.OrderStatus status = 4;
     */
    status: Message_OrderMessage_OrderStatus;
    /**
     * @generated from field: optional Message.OrderMessage.OrderSurface surface = 5;
     */
    surface: Message_OrderMessage_OrderSurface;
    /**
     * @generated from field: optional string message = 6;
     */
    message: string;
    /**
     * @generated from field: optional string orderTitle = 7;
     */
    orderTitle: string;
    /**
     * @generated from field: optional string sellerJid = 8;
     */
    sellerJid: string;
    /**
     * @generated from field: optional string token = 9;
     */
    token: string;
    /**
     * @generated from field: optional int64 totalAmount1000 = 10;
     */
    totalAmount1000: bigint;
    /**
     * @generated from field: optional string totalCurrencyCode = 11;
     */
    totalCurrencyCode: string;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional int32 messageVersion = 12;
     */
    messageVersion: number;
    /**
     * @generated from field: optional MessageKey orderRequestMessageId = 13;
     */
    orderRequestMessageId?: MessageKey;
    /**
     * @generated from field: optional string catalogType = 15;
     */
    catalogType: string;
};
/**
 * Describes the message Message.OrderMessage.
 * Use `create(Message_OrderMessageSchema)` to create a new message.
 */
declare const Message_OrderMessageSchema: GenMessage<Message_OrderMessage>;
/**
 * @generated from enum Message.OrderMessage.OrderStatus
 */
declare enum Message_OrderMessage_OrderStatus {
    /**
     * @generated from enum value: INQUIRY = 1;
     */
    INQUIRY = 1,
    /**
     * @generated from enum value: ACCEPTED = 2;
     */
    ACCEPTED = 2,
    /**
     * @generated from enum value: DECLINED = 3;
     */
    DECLINED = 3
}
/**
 * Describes the enum Message.OrderMessage.OrderStatus.
 */
declare const Message_OrderMessage_OrderStatusSchema: GenEnum<Message_OrderMessage_OrderStatus>;
/**
 * @generated from enum Message.OrderMessage.OrderSurface
 */
declare enum Message_OrderMessage_OrderSurface {
    /**
     * @generated from enum value: CATALOG = 1;
     */
    CATALOG = 1
}
/**
 * Describes the enum Message.OrderMessage.OrderSurface.
 */
declare const Message_OrderMessage_OrderSurfaceSchema: GenEnum<Message_OrderMessage_OrderSurface>;
/**
 * @generated from message Message.PaymentInviteMessage
 */
type Message_PaymentInviteMessage = Message$1<"Message.PaymentInviteMessage"> & {
    /**
     * @generated from field: optional Message.PaymentInviteMessage.ServiceType serviceType = 1;
     */
    serviceType: Message_PaymentInviteMessage_ServiceType;
    /**
     * @generated from field: optional int64 expiryTimestamp = 2;
     */
    expiryTimestamp: bigint;
};
/**
 * Describes the message Message.PaymentInviteMessage.
 * Use `create(Message_PaymentInviteMessageSchema)` to create a new message.
 */
declare const Message_PaymentInviteMessageSchema: GenMessage<Message_PaymentInviteMessage>;
/**
 * @generated from enum Message.PaymentInviteMessage.ServiceType
 */
declare enum Message_PaymentInviteMessage_ServiceType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: FBPAY = 1;
     */
    FBPAY = 1,
    /**
     * @generated from enum value: NOVI = 2;
     */
    NOVI = 2,
    /**
     * @generated from enum value: UPI = 3;
     */
    UPI = 3
}
/**
 * Describes the enum Message.PaymentInviteMessage.ServiceType.
 */
declare const Message_PaymentInviteMessage_ServiceTypeSchema: GenEnum<Message_PaymentInviteMessage_ServiceType>;
/**
 * @generated from message Message.PaymentLinkMetadata
 */
type Message_PaymentLinkMetadata = Message$1<"Message.PaymentLinkMetadata"> & {
    /**
     * @generated from field: optional Message.PaymentLinkMetadata.PaymentLinkButton button = 1;
     */
    button?: Message_PaymentLinkMetadata_PaymentLinkButton;
    /**
     * @generated from field: optional Message.PaymentLinkMetadata.PaymentLinkHeader header = 2;
     */
    header?: Message_PaymentLinkMetadata_PaymentLinkHeader;
    /**
     * @generated from field: optional Message.PaymentLinkMetadata.PaymentLinkProvider provider = 3;
     */
    provider?: Message_PaymentLinkMetadata_PaymentLinkProvider;
};
/**
 * Describes the message Message.PaymentLinkMetadata.
 * Use `create(Message_PaymentLinkMetadataSchema)` to create a new message.
 */
declare const Message_PaymentLinkMetadataSchema: GenMessage<Message_PaymentLinkMetadata>;
/**
 * @generated from message Message.PaymentLinkMetadata.PaymentLinkButton
 */
type Message_PaymentLinkMetadata_PaymentLinkButton = Message$1<"Message.PaymentLinkMetadata.PaymentLinkButton"> & {
    /**
     * @generated from field: optional string displayText = 1;
     */
    displayText: string;
};
/**
 * Describes the message Message.PaymentLinkMetadata.PaymentLinkButton.
 * Use `create(Message_PaymentLinkMetadata_PaymentLinkButtonSchema)` to create a new message.
 */
declare const Message_PaymentLinkMetadata_PaymentLinkButtonSchema: GenMessage<Message_PaymentLinkMetadata_PaymentLinkButton>;
/**
 * @generated from message Message.PaymentLinkMetadata.PaymentLinkHeader
 */
type Message_PaymentLinkMetadata_PaymentLinkHeader = Message$1<"Message.PaymentLinkMetadata.PaymentLinkHeader"> & {
    /**
     * @generated from field: optional Message.PaymentLinkMetadata.PaymentLinkHeader.PaymentLinkHeaderType headerType = 1;
     */
    headerType: Message_PaymentLinkMetadata_PaymentLinkHeader_PaymentLinkHeaderType;
};
/**
 * Describes the message Message.PaymentLinkMetadata.PaymentLinkHeader.
 * Use `create(Message_PaymentLinkMetadata_PaymentLinkHeaderSchema)` to create a new message.
 */
declare const Message_PaymentLinkMetadata_PaymentLinkHeaderSchema: GenMessage<Message_PaymentLinkMetadata_PaymentLinkHeader>;
/**
 * @generated from enum Message.PaymentLinkMetadata.PaymentLinkHeader.PaymentLinkHeaderType
 */
declare enum Message_PaymentLinkMetadata_PaymentLinkHeader_PaymentLinkHeaderType {
    /**
     * @generated from enum value: LINK_PREVIEW = 0;
     */
    LINK_PREVIEW = 0,
    /**
     * @generated from enum value: ORDER = 1;
     */
    ORDER = 1
}
/**
 * Describes the enum Message.PaymentLinkMetadata.PaymentLinkHeader.PaymentLinkHeaderType.
 */
declare const Message_PaymentLinkMetadata_PaymentLinkHeader_PaymentLinkHeaderTypeSchema: GenEnum<Message_PaymentLinkMetadata_PaymentLinkHeader_PaymentLinkHeaderType>;
/**
 * @generated from message Message.PaymentLinkMetadata.PaymentLinkProvider
 */
type Message_PaymentLinkMetadata_PaymentLinkProvider = Message$1<"Message.PaymentLinkMetadata.PaymentLinkProvider"> & {
    /**
     * @generated from field: optional string paramsJson = 1;
     */
    paramsJson: string;
};
/**
 * Describes the message Message.PaymentLinkMetadata.PaymentLinkProvider.
 * Use `create(Message_PaymentLinkMetadata_PaymentLinkProviderSchema)` to create a new message.
 */
declare const Message_PaymentLinkMetadata_PaymentLinkProviderSchema: GenMessage<Message_PaymentLinkMetadata_PaymentLinkProvider>;
/**
 * @generated from message Message.PeerDataOperationRequestMessage
 */
type Message_PeerDataOperationRequestMessage = Message$1<"Message.PeerDataOperationRequestMessage"> & {
    /**
     * @generated from field: optional Message.PeerDataOperationRequestType peerDataOperationRequestType = 1;
     */
    peerDataOperationRequestType: Message_PeerDataOperationRequestType;
    /**
     * @generated from field: repeated Message.PeerDataOperationRequestMessage.RequestStickerReupload requestStickerReupload = 2;
     */
    requestStickerReupload: Message_PeerDataOperationRequestMessage_RequestStickerReupload[];
    /**
     * @generated from field: repeated Message.PeerDataOperationRequestMessage.RequestUrlPreview requestUrlPreview = 3;
     */
    requestUrlPreview: Message_PeerDataOperationRequestMessage_RequestUrlPreview[];
    /**
     * @generated from field: optional Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest historySyncOnDemandRequest = 4;
     */
    historySyncOnDemandRequest?: Message_PeerDataOperationRequestMessage_HistorySyncOnDemandRequest;
    /**
     * @generated from field: repeated Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest placeholderMessageResendRequest = 5;
     */
    placeholderMessageResendRequest: Message_PeerDataOperationRequestMessage_PlaceholderMessageResendRequest[];
    /**
     * @generated from field: optional Message.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest fullHistorySyncOnDemandRequest = 6;
     */
    fullHistorySyncOnDemandRequest?: Message_PeerDataOperationRequestMessage_FullHistorySyncOnDemandRequest;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest syncdCollectionFatalRecoveryRequest = 7;
     */
    syncdCollectionFatalRecoveryRequest?: Message_PeerDataOperationRequestMessage_SyncDCollectionFatalRecoveryRequest;
};
/**
 * Describes the message Message.PeerDataOperationRequestMessage.
 * Use `create(Message_PeerDataOperationRequestMessageSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestMessageSchema: GenMessage<Message_PeerDataOperationRequestMessage>;
/**
 * @generated from message Message.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest
 */
type Message_PeerDataOperationRequestMessage_FullHistorySyncOnDemandRequest = Message$1<"Message.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest"> & {
    /**
     * @generated from field: optional Message.FullHistorySyncOnDemandRequestMetadata requestMetadata = 1;
     */
    requestMetadata?: Message_FullHistorySyncOnDemandRequestMetadata;
    /**
     * @generated from field: optional DeviceProps.HistorySyncConfig historySyncConfig = 2;
     */
    historySyncConfig?: DeviceProps_HistorySyncConfig;
};
/**
 * Describes the message Message.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest.
 * Use `create(Message_PeerDataOperationRequestMessage_FullHistorySyncOnDemandRequestSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestMessage_FullHistorySyncOnDemandRequestSchema: GenMessage<Message_PeerDataOperationRequestMessage_FullHistorySyncOnDemandRequest>;
/**
 * @generated from message Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest
 */
type Message_PeerDataOperationRequestMessage_HistorySyncOnDemandRequest = Message$1<"Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest"> & {
    /**
     * @generated from field: optional string chatJid = 1;
     */
    chatJid: string;
    /**
     * @generated from field: optional string oldestMsgId = 2;
     */
    oldestMsgId: string;
    /**
     * @generated from field: optional bool oldestMsgFromMe = 3;
     */
    oldestMsgFromMe: boolean;
    /**
     * @generated from field: optional int32 onDemandMsgCount = 4;
     */
    onDemandMsgCount: number;
    /**
     * @generated from field: optional int64 oldestMsgTimestampMs = 5;
     */
    oldestMsgTimestampMs: bigint;
    /**
     * @generated from field: optional string accountLid = 6;
     */
    accountLid: string;
};
/**
 * Describes the message Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest.
 * Use `create(Message_PeerDataOperationRequestMessage_HistorySyncOnDemandRequestSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestMessage_HistorySyncOnDemandRequestSchema: GenMessage<Message_PeerDataOperationRequestMessage_HistorySyncOnDemandRequest>;
/**
 * @generated from message Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest
 */
type Message_PeerDataOperationRequestMessage_PlaceholderMessageResendRequest = Message$1<"Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest"> & {
    /**
     * @generated from field: optional MessageKey messageKey = 1;
     */
    messageKey?: MessageKey;
};
/**
 * Describes the message Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest.
 * Use `create(Message_PeerDataOperationRequestMessage_PlaceholderMessageResendRequestSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestMessage_PlaceholderMessageResendRequestSchema: GenMessage<Message_PeerDataOperationRequestMessage_PlaceholderMessageResendRequest>;
/**
 * @generated from message Message.PeerDataOperationRequestMessage.RequestStickerReupload
 */
type Message_PeerDataOperationRequestMessage_RequestStickerReupload = Message$1<"Message.PeerDataOperationRequestMessage.RequestStickerReupload"> & {
    /**
     * @generated from field: optional string fileSha256 = 1;
     */
    fileSha256: string;
};
/**
 * Describes the message Message.PeerDataOperationRequestMessage.RequestStickerReupload.
 * Use `create(Message_PeerDataOperationRequestMessage_RequestStickerReuploadSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestMessage_RequestStickerReuploadSchema: GenMessage<Message_PeerDataOperationRequestMessage_RequestStickerReupload>;
/**
 * @generated from message Message.PeerDataOperationRequestMessage.RequestUrlPreview
 */
type Message_PeerDataOperationRequestMessage_RequestUrlPreview = Message$1<"Message.PeerDataOperationRequestMessage.RequestUrlPreview"> & {
    /**
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * @generated from field: optional bool includeHqThumbnail = 2;
     */
    includeHqThumbnail: boolean;
};
/**
 * Describes the message Message.PeerDataOperationRequestMessage.RequestUrlPreview.
 * Use `create(Message_PeerDataOperationRequestMessage_RequestUrlPreviewSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestMessage_RequestUrlPreviewSchema: GenMessage<Message_PeerDataOperationRequestMessage_RequestUrlPreview>;
/**
 * @generated from message Message.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest
 */
type Message_PeerDataOperationRequestMessage_SyncDCollectionFatalRecoveryRequest = Message$1<"Message.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest"> & {
    /**
     * @generated from field: optional string collectionName = 1;
     */
    collectionName: string;
    /**
     * @generated from field: optional int64 timestamp = 2;
     */
    timestamp: bigint;
};
/**
 * Describes the message Message.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest.
 * Use `create(Message_PeerDataOperationRequestMessage_SyncDCollectionFatalRecoveryRequestSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestMessage_SyncDCollectionFatalRecoveryRequestSchema: GenMessage<Message_PeerDataOperationRequestMessage_SyncDCollectionFatalRecoveryRequest>;
/**
 * @generated from message Message.PeerDataOperationRequestResponseMessage
 */
type Message_PeerDataOperationRequestResponseMessage = Message$1<"Message.PeerDataOperationRequestResponseMessage"> & {
    /**
     * @generated from field: optional Message.PeerDataOperationRequestType peerDataOperationRequestType = 1;
     */
    peerDataOperationRequestType: Message_PeerDataOperationRequestType;
    /**
     * @generated from field: optional string stanzaId = 2;
     */
    stanzaId: string;
    /**
     * @generated from field: repeated Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult peerDataOperationResult = 3;
     */
    peerDataOperationResult: Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult[];
};
/**
 * Describes the message Message.PeerDataOperationRequestResponseMessage.
 * Use `create(Message_PeerDataOperationRequestResponseMessageSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestResponseMessageSchema: GenMessage<Message_PeerDataOperationRequestResponseMessage>;
/**
 * @generated from message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult
 */
type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult = Message$1<"Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult"> & {
    /**
     * @generated from field: optional MediaRetryNotification.ResultType mediaUploadResult = 1;
     */
    mediaUploadResult: MediaRetryNotification_ResultType;
    /**
     * @generated from field: optional Message.StickerMessage stickerMessage = 2;
     */
    stickerMessage?: Message_StickerMessage;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse linkPreviewResponse = 3;
     */
    linkPreviewResponse?: Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse placeholderMessageResendResponse = 4;
     */
    placeholderMessageResendResponse?: Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_PlaceholderMessageResendResponse;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse waffleNonceFetchRequestResponse = 5;
     */
    waffleNonceFetchRequestResponse?: Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_WaffleNonceFetchResponse;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse fullHistorySyncOnDemandRequestResponse = 6;
     */
    fullHistorySyncOnDemandRequestResponse?: Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandRequestResponse;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse companionMetaNonceFetchRequestResponse = 7;
     */
    companionMetaNonceFetchRequestResponse?: Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionMetaNonceFetchResponse;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse syncdSnapshotFatalRecoveryResponse = 8;
     */
    syncdSnapshotFatalRecoveryResponse?: Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_SyncDSnapshotFatalRecoveryResponse;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse companionCanonicalUserNonceFetchRequestResponse = 9;
     */
    companionCanonicalUserNonceFetchRequestResponse?: Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionCanonicalUserNonceFetchResponse;
};
/**
 * Describes the message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.
 * Use `create(Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResultSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResultSchema: GenMessage<Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult>;
/**
 * @generated from message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse
 */
type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionCanonicalUserNonceFetchResponse = Message$1<"Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse"> & {
    /**
     * @generated from field: optional string nonce = 1;
     */
    nonce: string;
};
/**
 * Describes the message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse.
 * Use `create(Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionCanonicalUserNonceFetchResponseSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionCanonicalUserNonceFetchResponseSchema: GenMessage<Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionCanonicalUserNonceFetchResponse>;
/**
 * @generated from message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse
 */
type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionMetaNonceFetchResponse = Message$1<"Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse"> & {
    /**
     * @generated from field: optional string nonce = 1;
     */
    nonce: string;
};
/**
 * Describes the message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse.
 * Use `create(Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionMetaNonceFetchResponseSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionMetaNonceFetchResponseSchema: GenMessage<Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionMetaNonceFetchResponse>;
/**
 * @generated from message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse
 */
type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandRequestResponse = Message$1<"Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse"> & {
    /**
     * @generated from field: optional Message.FullHistorySyncOnDemandRequestMetadata requestMetadata = 1;
     */
    requestMetadata?: Message_FullHistorySyncOnDemandRequestMetadata;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandResponseCode responseCode = 2;
     */
    responseCode: Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandResponseCode;
};
/**
 * Describes the message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse.
 * Use `create(Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandRequestResponseSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandRequestResponseSchema: GenMessage<Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandRequestResponse>;
/**
 * @generated from message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse
 */
type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse = Message$1<"Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse"> & {
    /**
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * @generated from field: optional string title = 2;
     */
    title: string;
    /**
     * @generated from field: optional string description = 3;
     */
    description: string;
    /**
     * @generated from field: optional bytes thumbData = 4;
     */
    thumbData: Uint8Array;
    /**
     * @generated from field: optional string matchText = 6;
     */
    matchText: string;
    /**
     * @generated from field: optional string previewType = 7;
     */
    previewType: string;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail hqThumbnail = 8;
     */
    hqThumbnail?: Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse_LinkPreviewHighQualityThumbnail;
};
/**
 * Describes the message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.
 * Use `create(Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponseSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponseSchema: GenMessage<Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse>;
/**
 * @generated from message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail
 */
type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse_LinkPreviewHighQualityThumbnail = Message$1<"Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail"> & {
    /**
     * @generated from field: optional string directPath = 1;
     */
    directPath: string;
    /**
     * @generated from field: optional string thumbHash = 2;
     */
    thumbHash: string;
    /**
     * @generated from field: optional string encThumbHash = 3;
     */
    encThumbHash: string;
    /**
     * @generated from field: optional bytes mediaKey = 4;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional int64 mediaKeyTimestampMs = 5;
     */
    mediaKeyTimestampMs: bigint;
    /**
     * @generated from field: optional int32 thumbWidth = 6;
     */
    thumbWidth: number;
    /**
     * @generated from field: optional int32 thumbHeight = 7;
     */
    thumbHeight: number;
};
/**
 * Describes the message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail.
 * Use `create(Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse_LinkPreviewHighQualityThumbnailSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse_LinkPreviewHighQualityThumbnailSchema: GenMessage<Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse_LinkPreviewHighQualityThumbnail>;
/**
 * @generated from message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse
 */
type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_PlaceholderMessageResendResponse = Message$1<"Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse"> & {
    /**
     * @generated from field: optional bytes webMessageInfoBytes = 1;
     */
    webMessageInfoBytes: Uint8Array;
};
/**
 * Describes the message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse.
 * Use `create(Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_PlaceholderMessageResendResponseSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_PlaceholderMessageResendResponseSchema: GenMessage<Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_PlaceholderMessageResendResponse>;
/**
 * @generated from message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse
 */
type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_SyncDSnapshotFatalRecoveryResponse = Message$1<"Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse"> & {
    /**
     * @generated from field: optional bytes collectionSnapshot = 1;
     */
    collectionSnapshot: Uint8Array;
    /**
     * @generated from field: optional bool isCompressed = 2;
     */
    isCompressed: boolean;
};
/**
 * Describes the message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse.
 * Use `create(Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_SyncDSnapshotFatalRecoveryResponseSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_SyncDSnapshotFatalRecoveryResponseSchema: GenMessage<Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_SyncDSnapshotFatalRecoveryResponse>;
/**
 * @generated from message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse
 */
type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_WaffleNonceFetchResponse = Message$1<"Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse"> & {
    /**
     * @generated from field: optional string nonce = 1;
     */
    nonce: string;
    /**
     * @generated from field: optional string waEntFbid = 2;
     */
    waEntFbid: string;
};
/**
 * Describes the message Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse.
 * Use `create(Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_WaffleNonceFetchResponseSchema)` to create a new message.
 */
declare const Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_WaffleNonceFetchResponseSchema: GenMessage<Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_WaffleNonceFetchResponse>;
/**
 * @generated from enum Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandResponseCode
 */
declare enum Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandResponseCode {
    /**
     * @generated from enum value: REQUEST_SUCCESS = 0;
     */
    REQUEST_SUCCESS = 0,
    /**
     * @generated from enum value: REQUEST_TIME_EXPIRED = 1;
     */
    REQUEST_TIME_EXPIRED = 1,
    /**
     * @generated from enum value: DECLINED_SHARING_HISTORY = 2;
     */
    DECLINED_SHARING_HISTORY = 2,
    /**
     * @generated from enum value: GENERIC_ERROR = 3;
     */
    GENERIC_ERROR = 3,
    /**
     * @generated from enum value: ERROR_REQUEST_ON_NON_SMB_PRIMARY = 4;
     */
    ERROR_REQUEST_ON_NON_SMB_PRIMARY = 4,
    /**
     * @generated from enum value: ERROR_HOSTED_DEVICE_NOT_CONNECTED = 5;
     */
    ERROR_HOSTED_DEVICE_NOT_CONNECTED = 5,
    /**
     * @generated from enum value: ERROR_HOSTED_DEVICE_LOGIN_TIME_NOT_SET = 6;
     */
    ERROR_HOSTED_DEVICE_LOGIN_TIME_NOT_SET = 6
}
/**
 * Describes the enum Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandResponseCode.
 */
declare const Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandResponseCodeSchema: GenEnum<Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandResponseCode>;
/**
 * @generated from message Message.PinInChatMessage
 */
type Message_PinInChatMessage = Message$1<"Message.PinInChatMessage"> & {
    /**
     * @generated from field: optional MessageKey key = 1;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional Message.PinInChatMessage.Type type = 2;
     */
    type: Message_PinInChatMessage_Type;
    /**
     * @generated from field: optional int64 senderTimestampMs = 3;
     */
    senderTimestampMs: bigint;
};
/**
 * Describes the message Message.PinInChatMessage.
 * Use `create(Message_PinInChatMessageSchema)` to create a new message.
 */
declare const Message_PinInChatMessageSchema: GenMessage<Message_PinInChatMessage>;
/**
 * @generated from enum Message.PinInChatMessage.Type
 */
declare enum Message_PinInChatMessage_Type {
    /**
     * @generated from enum value: UNKNOWN_TYPE = 0;
     */
    UNKNOWN_TYPE = 0,
    /**
     * @generated from enum value: PIN_FOR_ALL = 1;
     */
    PIN_FOR_ALL = 1,
    /**
     * @generated from enum value: UNPIN_FOR_ALL = 2;
     */
    UNPIN_FOR_ALL = 2
}
/**
 * Describes the enum Message.PinInChatMessage.Type.
 */
declare const Message_PinInChatMessage_TypeSchema: GenEnum<Message_PinInChatMessage_Type>;
/**
 * @generated from message Message.PlaceholderMessage
 */
type Message_PlaceholderMessage = Message$1<"Message.PlaceholderMessage"> & {
    /**
     * @generated from field: optional Message.PlaceholderMessage.PlaceholderType type = 1;
     */
    type: Message_PlaceholderMessage_PlaceholderType;
};
/**
 * Describes the message Message.PlaceholderMessage.
 * Use `create(Message_PlaceholderMessageSchema)` to create a new message.
 */
declare const Message_PlaceholderMessageSchema: GenMessage<Message_PlaceholderMessage>;
/**
 * @generated from enum Message.PlaceholderMessage.PlaceholderType
 */
declare enum Message_PlaceholderMessage_PlaceholderType {
    /**
     * @generated from enum value: MASK_LINKED_DEVICES = 0;
     */
    MASK_LINKED_DEVICES = 0
}
/**
 * Describes the enum Message.PlaceholderMessage.PlaceholderType.
 */
declare const Message_PlaceholderMessage_PlaceholderTypeSchema: GenEnum<Message_PlaceholderMessage_PlaceholderType>;
/**
 * @generated from message Message.PollCreationMessage
 */
type Message_PollCreationMessage = Message$1<"Message.PollCreationMessage"> & {
    /**
     * @generated from field: optional bytes encKey = 1;
     */
    encKey: Uint8Array;
    /**
     * @generated from field: optional string name = 2;
     */
    name: string;
    /**
     * @generated from field: repeated Message.PollCreationMessage.Option options = 3;
     */
    options: Message_PollCreationMessage_Option[];
    /**
     * @generated from field: optional uint32 selectableOptionsCount = 4;
     */
    selectableOptionsCount: number;
    /**
     * @generated from field: optional ContextInfo contextInfo = 5;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional Message.PollContentType pollContentType = 6;
     */
    pollContentType: Message_PollContentType;
    /**
     * @generated from field: optional Message.PollCreationMessage.PollType pollType = 7;
     */
    pollType: Message_PollCreationMessage_PollType;
    /**
     * @generated from field: optional Message.PollCreationMessage.Option correctAnswer = 8;
     */
    correctAnswer?: Message_PollCreationMessage_Option;
};
/**
 * Describes the message Message.PollCreationMessage.
 * Use `create(Message_PollCreationMessageSchema)` to create a new message.
 */
declare const Message_PollCreationMessageSchema: GenMessage<Message_PollCreationMessage>;
/**
 * @generated from message Message.PollCreationMessage.Option
 */
type Message_PollCreationMessage_Option = Message$1<"Message.PollCreationMessage.Option"> & {
    /**
     * @generated from field: optional string optionName = 1;
     */
    optionName: string;
    /**
     * @generated from field: optional string optionHash = 2;
     */
    optionHash: string;
};
/**
 * Describes the message Message.PollCreationMessage.Option.
 * Use `create(Message_PollCreationMessage_OptionSchema)` to create a new message.
 */
declare const Message_PollCreationMessage_OptionSchema: GenMessage<Message_PollCreationMessage_Option>;
/**
 * @generated from enum Message.PollCreationMessage.PollType
 */
declare enum Message_PollCreationMessage_PollType {
    /**
     * @generated from enum value: POLL = 0;
     */
    POLL = 0,
    /**
     * @generated from enum value: QUIZ = 1;
     */
    QUIZ = 1
}
/**
 * Describes the enum Message.PollCreationMessage.PollType.
 */
declare const Message_PollCreationMessage_PollTypeSchema: GenEnum<Message_PollCreationMessage_PollType>;
/**
 * @generated from message Message.PollEncValue
 */
type Message_PollEncValue = Message$1<"Message.PollEncValue"> & {
    /**
     * @generated from field: optional bytes encPayload = 1;
     */
    encPayload: Uint8Array;
    /**
     * @generated from field: optional bytes encIv = 2;
     */
    encIv: Uint8Array;
};
/**
 * Describes the message Message.PollEncValue.
 * Use `create(Message_PollEncValueSchema)` to create a new message.
 */
declare const Message_PollEncValueSchema: GenMessage<Message_PollEncValue>;
/**
 * @generated from message Message.PollResultSnapshotMessage
 */
type Message_PollResultSnapshotMessage = Message$1<"Message.PollResultSnapshotMessage"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name: string;
    /**
     * @generated from field: repeated Message.PollResultSnapshotMessage.PollVote pollVotes = 2;
     */
    pollVotes: Message_PollResultSnapshotMessage_PollVote[];
    /**
     * @generated from field: optional ContextInfo contextInfo = 3;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message Message.PollResultSnapshotMessage.
 * Use `create(Message_PollResultSnapshotMessageSchema)` to create a new message.
 */
declare const Message_PollResultSnapshotMessageSchema: GenMessage<Message_PollResultSnapshotMessage>;
/**
 * @generated from message Message.PollResultSnapshotMessage.PollVote
 */
type Message_PollResultSnapshotMessage_PollVote = Message$1<"Message.PollResultSnapshotMessage.PollVote"> & {
    /**
     * @generated from field: optional string optionName = 1;
     */
    optionName: string;
    /**
     * @generated from field: optional int64 optionVoteCount = 2;
     */
    optionVoteCount: bigint;
};
/**
 * Describes the message Message.PollResultSnapshotMessage.PollVote.
 * Use `create(Message_PollResultSnapshotMessage_PollVoteSchema)` to create a new message.
 */
declare const Message_PollResultSnapshotMessage_PollVoteSchema: GenMessage<Message_PollResultSnapshotMessage_PollVote>;
/**
 * @generated from message Message.PollUpdateMessage
 */
type Message_PollUpdateMessage = Message$1<"Message.PollUpdateMessage"> & {
    /**
     * @generated from field: optional MessageKey pollCreationMessageKey = 1;
     */
    pollCreationMessageKey?: MessageKey;
    /**
     * @generated from field: optional Message.PollEncValue vote = 2;
     */
    vote?: Message_PollEncValue;
    /**
     * @generated from field: optional Message.PollUpdateMessageMetadata metadata = 3;
     */
    metadata?: Message_PollUpdateMessageMetadata;
    /**
     * @generated from field: optional int64 senderTimestampMs = 4;
     */
    senderTimestampMs: bigint;
};
/**
 * Describes the message Message.PollUpdateMessage.
 * Use `create(Message_PollUpdateMessageSchema)` to create a new message.
 */
declare const Message_PollUpdateMessageSchema: GenMessage<Message_PollUpdateMessage>;
/**
 * @generated from message Message.PollUpdateMessageMetadata
 */
type Message_PollUpdateMessageMetadata = Message$1<"Message.PollUpdateMessageMetadata"> & {};
/**
 * Describes the message Message.PollUpdateMessageMetadata.
 * Use `create(Message_PollUpdateMessageMetadataSchema)` to create a new message.
 */
declare const Message_PollUpdateMessageMetadataSchema: GenMessage<Message_PollUpdateMessageMetadata>;
/**
 * @generated from message Message.PollVoteMessage
 */
type Message_PollVoteMessage = Message$1<"Message.PollVoteMessage"> & {
    /**
     * @generated from field: repeated bytes selectedOptions = 1;
     */
    selectedOptions: Uint8Array[];
};
/**
 * Describes the message Message.PollVoteMessage.
 * Use `create(Message_PollVoteMessageSchema)` to create a new message.
 */
declare const Message_PollVoteMessageSchema: GenMessage<Message_PollVoteMessage>;
/**
 * @generated from message Message.ProductMessage
 */
type Message_ProductMessage = Message$1<"Message.ProductMessage"> & {
    /**
     * @generated from field: optional Message.ProductMessage.ProductSnapshot product = 1;
     */
    product?: Message_ProductMessage_ProductSnapshot;
    /**
     * @generated from field: optional string businessOwnerJid = 2;
     */
    businessOwnerJid: string;
    /**
     * @generated from field: optional Message.ProductMessage.CatalogSnapshot catalog = 4;
     */
    catalog?: Message_ProductMessage_CatalogSnapshot;
    /**
     * @generated from field: optional string body = 5;
     */
    body: string;
    /**
     * @generated from field: optional string footer = 6;
     */
    footer: string;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message Message.ProductMessage.
 * Use `create(Message_ProductMessageSchema)` to create a new message.
 */
declare const Message_ProductMessageSchema: GenMessage<Message_ProductMessage>;
/**
 * @generated from message Message.ProductMessage.CatalogSnapshot
 */
type Message_ProductMessage_CatalogSnapshot = Message$1<"Message.ProductMessage.CatalogSnapshot"> & {
    /**
     * @generated from field: optional Message.ImageMessage catalogImage = 1;
     */
    catalogImage?: Message_ImageMessage;
    /**
     * @generated from field: optional string title = 2;
     */
    title: string;
    /**
     * @generated from field: optional string description = 3;
     */
    description: string;
};
/**
 * Describes the message Message.ProductMessage.CatalogSnapshot.
 * Use `create(Message_ProductMessage_CatalogSnapshotSchema)` to create a new message.
 */
declare const Message_ProductMessage_CatalogSnapshotSchema: GenMessage<Message_ProductMessage_CatalogSnapshot>;
/**
 * @generated from message Message.ProductMessage.ProductSnapshot
 */
type Message_ProductMessage_ProductSnapshot = Message$1<"Message.ProductMessage.ProductSnapshot"> & {
    /**
     * @generated from field: optional Message.ImageMessage productImage = 1;
     */
    productImage?: Message_ImageMessage;
    /**
     * @generated from field: optional string productId = 2;
     */
    productId: string;
    /**
     * @generated from field: optional string title = 3;
     */
    title: string;
    /**
     * @generated from field: optional string description = 4;
     */
    description: string;
    /**
     * @generated from field: optional string currencyCode = 5;
     */
    currencyCode: string;
    /**
     * @generated from field: optional int64 priceAmount1000 = 6;
     */
    priceAmount1000: bigint;
    /**
     * @generated from field: optional string retailerId = 7;
     */
    retailerId: string;
    /**
     * @generated from field: optional string url = 8;
     */
    url: string;
    /**
     * @generated from field: optional uint32 productImageCount = 9;
     */
    productImageCount: number;
    /**
     * @generated from field: optional string firstImageId = 11;
     */
    firstImageId: string;
    /**
     * @generated from field: optional int64 salePriceAmount1000 = 12;
     */
    salePriceAmount1000: bigint;
    /**
     * @generated from field: optional string signedUrl = 13;
     */
    signedUrl: string;
};
/**
 * Describes the message Message.ProductMessage.ProductSnapshot.
 * Use `create(Message_ProductMessage_ProductSnapshotSchema)` to create a new message.
 */
declare const Message_ProductMessage_ProductSnapshotSchema: GenMessage<Message_ProductMessage_ProductSnapshot>;
/**
 * @generated from message Message.ProtocolMessage
 */
type Message_ProtocolMessage = Message$1<"Message.ProtocolMessage"> & {
    /**
     * @generated from field: optional MessageKey key = 1;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional Message.ProtocolMessage.Type type = 2;
     */
    type: Message_ProtocolMessage_Type;
    /**
     * @generated from field: optional uint32 ephemeralExpiration = 4;
     */
    ephemeralExpiration: number;
    /**
     * @generated from field: optional int64 ephemeralSettingTimestamp = 5;
     */
    ephemeralSettingTimestamp: bigint;
    /**
     * @generated from field: optional Message.HistorySyncNotification historySyncNotification = 6;
     */
    historySyncNotification?: Message_HistorySyncNotification;
    /**
     * @generated from field: optional Message.AppStateSyncKeyShare appStateSyncKeyShare = 7;
     */
    appStateSyncKeyShare?: Message_AppStateSyncKeyShare;
    /**
     * @generated from field: optional Message.AppStateSyncKeyRequest appStateSyncKeyRequest = 8;
     */
    appStateSyncKeyRequest?: Message_AppStateSyncKeyRequest;
    /**
     * @generated from field: optional Message.InitialSecurityNotificationSettingSync initialSecurityNotificationSettingSync = 9;
     */
    initialSecurityNotificationSettingSync?: Message_InitialSecurityNotificationSettingSync;
    /**
     * @generated from field: optional Message.AppStateFatalExceptionNotification appStateFatalExceptionNotification = 10;
     */
    appStateFatalExceptionNotification?: Message_AppStateFatalExceptionNotification;
    /**
     * @generated from field: optional DisappearingMode disappearingMode = 11;
     */
    disappearingMode?: DisappearingMode;
    /**
     * @generated from field: optional Message editedMessage = 14;
     */
    editedMessage?: Message;
    /**
     * @generated from field: optional int64 timestampMs = 15;
     */
    timestampMs: bigint;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestMessage peerDataOperationRequestMessage = 16;
     */
    peerDataOperationRequestMessage?: Message_PeerDataOperationRequestMessage;
    /**
     * @generated from field: optional Message.PeerDataOperationRequestResponseMessage peerDataOperationRequestResponseMessage = 17;
     */
    peerDataOperationRequestResponseMessage?: Message_PeerDataOperationRequestResponseMessage;
    /**
     * @generated from field: optional Message.BotFeedbackMessage botFeedbackMessage = 18;
     */
    botFeedbackMessage?: Message_BotFeedbackMessage;
    /**
     * @generated from field: optional string invokerJid = 19;
     */
    invokerJid: string;
    /**
     * @generated from field: optional Message.RequestWelcomeMessageMetadata requestWelcomeMessageMetadata = 20;
     */
    requestWelcomeMessageMetadata?: Message_RequestWelcomeMessageMetadata;
    /**
     * @generated from field: optional MediaNotifyMessage mediaNotifyMessage = 21;
     */
    mediaNotifyMessage?: MediaNotifyMessage;
    /**
     * @generated from field: optional Message.CloudAPIThreadControlNotification cloudApiThreadControlNotification = 22;
     */
    cloudApiThreadControlNotification?: Message_CloudAPIThreadControlNotification;
    /**
     * @generated from field: optional LIDMigrationMappingSyncMessage lidMigrationMappingSyncMessage = 23;
     */
    lidMigrationMappingSyncMessage?: LIDMigrationMappingSyncMessage;
    /**
     * @generated from field: optional LimitSharing limitSharing = 24;
     */
    limitSharing?: LimitSharing;
    /**
     * @generated from field: optional bytes aiPsiMetadata = 25;
     */
    aiPsiMetadata: Uint8Array;
    /**
     * @generated from field: optional AIQueryFanout aiQueryFanout = 26;
     */
    aiQueryFanout?: AIQueryFanout;
    /**
     * @generated from field: optional MemberLabel memberLabel = 27;
     */
    memberLabel?: MemberLabel;
};
/**
 * Describes the message Message.ProtocolMessage.
 * Use `create(Message_ProtocolMessageSchema)` to create a new message.
 */
declare const Message_ProtocolMessageSchema: GenMessage<Message_ProtocolMessage>;
/**
 * @generated from enum Message.ProtocolMessage.Type
 */
declare enum Message_ProtocolMessage_Type {
    /**
     * @generated from enum value: REVOKE = 0;
     */
    REVOKE = 0,
    /**
     * @generated from enum value: EPHEMERAL_SETTING = 3;
     */
    EPHEMERAL_SETTING = 3,
    /**
     * @generated from enum value: EPHEMERAL_SYNC_RESPONSE = 4;
     */
    EPHEMERAL_SYNC_RESPONSE = 4,
    /**
     * @generated from enum value: HISTORY_SYNC_NOTIFICATION = 5;
     */
    HISTORY_SYNC_NOTIFICATION = 5,
    /**
     * @generated from enum value: APP_STATE_SYNC_KEY_SHARE = 6;
     */
    APP_STATE_SYNC_KEY_SHARE = 6,
    /**
     * @generated from enum value: APP_STATE_SYNC_KEY_REQUEST = 7;
     */
    APP_STATE_SYNC_KEY_REQUEST = 7,
    /**
     * @generated from enum value: MSG_FANOUT_BACKFILL_REQUEST = 8;
     */
    MSG_FANOUT_BACKFILL_REQUEST = 8,
    /**
     * @generated from enum value: INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC = 9;
     */
    INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC = 9,
    /**
     * @generated from enum value: APP_STATE_FATAL_EXCEPTION_NOTIFICATION = 10;
     */
    APP_STATE_FATAL_EXCEPTION_NOTIFICATION = 10,
    /**
     * @generated from enum value: SHARE_PHONE_NUMBER = 11;
     */
    SHARE_PHONE_NUMBER = 11,
    /**
     * @generated from enum value: MESSAGE_EDIT = 14;
     */
    MESSAGE_EDIT = 14,
    /**
     * @generated from enum value: PEER_DATA_OPERATION_REQUEST_MESSAGE = 16;
     */
    PEER_DATA_OPERATION_REQUEST_MESSAGE = 16,
    /**
     * @generated from enum value: PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE = 17;
     */
    PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE = 17,
    /**
     * @generated from enum value: REQUEST_WELCOME_MESSAGE = 18;
     */
    REQUEST_WELCOME_MESSAGE = 18,
    /**
     * @generated from enum value: BOT_FEEDBACK_MESSAGE = 19;
     */
    BOT_FEEDBACK_MESSAGE = 19,
    /**
     * @generated from enum value: MEDIA_NOTIFY_MESSAGE = 20;
     */
    MEDIA_NOTIFY_MESSAGE = 20,
    /**
     * @generated from enum value: CLOUD_API_THREAD_CONTROL_NOTIFICATION = 21;
     */
    CLOUD_API_THREAD_CONTROL_NOTIFICATION = 21,
    /**
     * @generated from enum value: LID_MIGRATION_MAPPING_SYNC = 22;
     */
    LID_MIGRATION_MAPPING_SYNC = 22,
    /**
     * @generated from enum value: REMINDER_MESSAGE = 23;
     */
    REMINDER_MESSAGE = 23,
    /**
     * @generated from enum value: BOT_MEMU_ONBOARDING_MESSAGE = 24;
     */
    BOT_MEMU_ONBOARDING_MESSAGE = 24,
    /**
     * @generated from enum value: STATUS_MENTION_MESSAGE = 25;
     */
    STATUS_MENTION_MESSAGE = 25,
    /**
     * @generated from enum value: STOP_GENERATION_MESSAGE = 26;
     */
    STOP_GENERATION_MESSAGE = 26,
    /**
     * @generated from enum value: LIMIT_SHARING = 27;
     */
    LIMIT_SHARING = 27,
    /**
     * @generated from enum value: AI_PSI_METADATA = 28;
     */
    AI_PSI_METADATA = 28,
    /**
     * @generated from enum value: AI_QUERY_FANOUT = 29;
     */
    AI_QUERY_FANOUT = 29,
    /**
     * @generated from enum value: GROUP_MEMBER_LABEL_CHANGE = 30;
     */
    GROUP_MEMBER_LABEL_CHANGE = 30
}
/**
 * Describes the enum Message.ProtocolMessage.Type.
 */
declare const Message_ProtocolMessage_TypeSchema: GenEnum<Message_ProtocolMessage_Type>;
/**
 * @generated from message Message.ReactionMessage
 */
type Message_ReactionMessage = Message$1<"Message.ReactionMessage"> & {
    /**
     * @generated from field: optional MessageKey key = 1;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional string text = 2;
     */
    text: string;
    /**
     * @generated from field: optional string groupingKey = 3;
     */
    groupingKey: string;
    /**
     * @generated from field: optional int64 senderTimestampMs = 4;
     */
    senderTimestampMs: bigint;
};
/**
 * Describes the message Message.ReactionMessage.
 * Use `create(Message_ReactionMessageSchema)` to create a new message.
 */
declare const Message_ReactionMessageSchema: GenMessage<Message_ReactionMessage>;
/**
 * @generated from message Message.RequestPaymentMessage
 */
type Message_RequestPaymentMessage = Message$1<"Message.RequestPaymentMessage"> & {
    /**
     * @generated from field: optional Message noteMessage = 4;
     */
    noteMessage?: Message;
    /**
     * @generated from field: optional string currencyCodeIso4217 = 1;
     */
    currencyCodeIso4217: string;
    /**
     * @generated from field: optional uint64 amount1000 = 2;
     */
    amount1000: bigint;
    /**
     * @generated from field: optional string requestFrom = 3;
     */
    requestFrom: string;
    /**
     * @generated from field: optional int64 expiryTimestamp = 5;
     */
    expiryTimestamp: bigint;
    /**
     * @generated from field: optional Money amount = 6;
     */
    amount?: Money;
    /**
     * @generated from field: optional PaymentBackground background = 7;
     */
    background?: PaymentBackground;
};
/**
 * Describes the message Message.RequestPaymentMessage.
 * Use `create(Message_RequestPaymentMessageSchema)` to create a new message.
 */
declare const Message_RequestPaymentMessageSchema: GenMessage<Message_RequestPaymentMessage>;
/**
 * @generated from message Message.RequestPhoneNumberMessage
 */
type Message_RequestPhoneNumberMessage = Message$1<"Message.RequestPhoneNumberMessage"> & {
    /**
     * @generated from field: optional ContextInfo contextInfo = 1;
     */
    contextInfo?: ContextInfo;
};
/**
 * Describes the message Message.RequestPhoneNumberMessage.
 * Use `create(Message_RequestPhoneNumberMessageSchema)` to create a new message.
 */
declare const Message_RequestPhoneNumberMessageSchema: GenMessage<Message_RequestPhoneNumberMessage>;
/**
 * @generated from message Message.RequestWelcomeMessageMetadata
 */
type Message_RequestWelcomeMessageMetadata = Message$1<"Message.RequestWelcomeMessageMetadata"> & {
    /**
     * @generated from field: optional Message.RequestWelcomeMessageMetadata.LocalChatState localChatState = 1;
     */
    localChatState: Message_RequestWelcomeMessageMetadata_LocalChatState;
};
/**
 * Describes the message Message.RequestWelcomeMessageMetadata.
 * Use `create(Message_RequestWelcomeMessageMetadataSchema)` to create a new message.
 */
declare const Message_RequestWelcomeMessageMetadataSchema: GenMessage<Message_RequestWelcomeMessageMetadata>;
/**
 * @generated from enum Message.RequestWelcomeMessageMetadata.LocalChatState
 */
declare enum Message_RequestWelcomeMessageMetadata_LocalChatState {
    /**
     * @generated from enum value: EMPTY = 0;
     */
    EMPTY = 0,
    /**
     * @generated from enum value: NON_EMPTY = 1;
     */
    NON_EMPTY = 1
}
/**
 * Describes the enum Message.RequestWelcomeMessageMetadata.LocalChatState.
 */
declare const Message_RequestWelcomeMessageMetadata_LocalChatStateSchema: GenEnum<Message_RequestWelcomeMessageMetadata_LocalChatState>;
/**
 * @generated from message Message.ScheduledCallCreationMessage
 */
type Message_ScheduledCallCreationMessage = Message$1<"Message.ScheduledCallCreationMessage"> & {
    /**
     * @generated from field: optional int64 scheduledTimestampMs = 1;
     */
    scheduledTimestampMs: bigint;
    /**
     * @generated from field: optional Message.ScheduledCallCreationMessage.CallType callType = 2;
     */
    callType: Message_ScheduledCallCreationMessage_CallType;
    /**
     * @generated from field: optional string title = 3;
     */
    title: string;
};
/**
 * Describes the message Message.ScheduledCallCreationMessage.
 * Use `create(Message_ScheduledCallCreationMessageSchema)` to create a new message.
 */
declare const Message_ScheduledCallCreationMessageSchema: GenMessage<Message_ScheduledCallCreationMessage>;
/**
 * @generated from enum Message.ScheduledCallCreationMessage.CallType
 */
declare enum Message_ScheduledCallCreationMessage_CallType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: VOICE = 1;
     */
    VOICE = 1,
    /**
     * @generated from enum value: VIDEO = 2;
     */
    VIDEO = 2
}
/**
 * Describes the enum Message.ScheduledCallCreationMessage.CallType.
 */
declare const Message_ScheduledCallCreationMessage_CallTypeSchema: GenEnum<Message_ScheduledCallCreationMessage_CallType>;
/**
 * @generated from message Message.ScheduledCallEditMessage
 */
type Message_ScheduledCallEditMessage = Message$1<"Message.ScheduledCallEditMessage"> & {
    /**
     * @generated from field: optional MessageKey key = 1;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional Message.ScheduledCallEditMessage.EditType editType = 2;
     */
    editType: Message_ScheduledCallEditMessage_EditType;
};
/**
 * Describes the message Message.ScheduledCallEditMessage.
 * Use `create(Message_ScheduledCallEditMessageSchema)` to create a new message.
 */
declare const Message_ScheduledCallEditMessageSchema: GenMessage<Message_ScheduledCallEditMessage>;
/**
 * @generated from enum Message.ScheduledCallEditMessage.EditType
 */
declare enum Message_ScheduledCallEditMessage_EditType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: CANCEL = 1;
     */
    CANCEL = 1
}
/**
 * Describes the enum Message.ScheduledCallEditMessage.EditType.
 */
declare const Message_ScheduledCallEditMessage_EditTypeSchema: GenEnum<Message_ScheduledCallEditMessage_EditType>;
/**
 * @generated from message Message.SecretEncryptedMessage
 */
type Message_SecretEncryptedMessage = Message$1<"Message.SecretEncryptedMessage"> & {
    /**
     * @generated from field: optional MessageKey targetMessageKey = 1;
     */
    targetMessageKey?: MessageKey;
    /**
     * @generated from field: optional bytes encPayload = 2;
     */
    encPayload: Uint8Array;
    /**
     * @generated from field: optional bytes encIv = 3;
     */
    encIv: Uint8Array;
    /**
     * @generated from field: optional Message.SecretEncryptedMessage.SecretEncType secretEncType = 4;
     */
    secretEncType: Message_SecretEncryptedMessage_SecretEncType;
};
/**
 * Describes the message Message.SecretEncryptedMessage.
 * Use `create(Message_SecretEncryptedMessageSchema)` to create a new message.
 */
declare const Message_SecretEncryptedMessageSchema: GenMessage<Message_SecretEncryptedMessage>;
/**
 * @generated from enum Message.SecretEncryptedMessage.SecretEncType
 */
declare enum Message_SecretEncryptedMessage_SecretEncType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: EVENT_EDIT = 1;
     */
    EVENT_EDIT = 1,
    /**
     * @generated from enum value: MESSAGE_EDIT = 2;
     */
    MESSAGE_EDIT = 2
}
/**
 * Describes the enum Message.SecretEncryptedMessage.SecretEncType.
 */
declare const Message_SecretEncryptedMessage_SecretEncTypeSchema: GenEnum<Message_SecretEncryptedMessage_SecretEncType>;
/**
 * @generated from message Message.SendPaymentMessage
 */
type Message_SendPaymentMessage = Message$1<"Message.SendPaymentMessage"> & {
    /**
     * @generated from field: optional Message noteMessage = 2;
     */
    noteMessage?: Message;
    /**
     * @generated from field: optional MessageKey requestMessageKey = 3;
     */
    requestMessageKey?: MessageKey;
    /**
     * @generated from field: optional PaymentBackground background = 4;
     */
    background?: PaymentBackground;
};
/**
 * Describes the message Message.SendPaymentMessage.
 * Use `create(Message_SendPaymentMessageSchema)` to create a new message.
 */
declare const Message_SendPaymentMessageSchema: GenMessage<Message_SendPaymentMessage>;
/**
 * @generated from message Message.SenderKeyDistributionMessage
 */
type Message_SenderKeyDistributionMessage = Message$1<"Message.SenderKeyDistributionMessage"> & {
    /**
     * @generated from field: optional string groupId = 1;
     */
    groupId: string;
    /**
     * @generated from field: optional bytes axolotlSenderKeyDistributionMessage = 2;
     */
    axolotlSenderKeyDistributionMessage: Uint8Array;
};
/**
 * Describes the message Message.SenderKeyDistributionMessage.
 * Use `create(Message_SenderKeyDistributionMessageSchema)` to create a new message.
 */
declare const Message_SenderKeyDistributionMessageSchema: GenMessage<Message_SenderKeyDistributionMessage>;
/**
 * @generated from message Message.StatusNotificationMessage
 */
type Message_StatusNotificationMessage = Message$1<"Message.StatusNotificationMessage"> & {
    /**
     * @generated from field: optional MessageKey responseMessageKey = 1;
     */
    responseMessageKey?: MessageKey;
    /**
     * @generated from field: optional MessageKey originalMessageKey = 2;
     */
    originalMessageKey?: MessageKey;
    /**
     * @generated from field: optional Message.StatusNotificationMessage.StatusNotificationType type = 3;
     */
    type: Message_StatusNotificationMessage_StatusNotificationType;
};
/**
 * Describes the message Message.StatusNotificationMessage.
 * Use `create(Message_StatusNotificationMessageSchema)` to create a new message.
 */
declare const Message_StatusNotificationMessageSchema: GenMessage<Message_StatusNotificationMessage>;
/**
 * @generated from enum Message.StatusNotificationMessage.StatusNotificationType
 */
declare enum Message_StatusNotificationMessage_StatusNotificationType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: STATUS_ADD_YOURS = 1;
     */
    STATUS_ADD_YOURS = 1,
    /**
     * @generated from enum value: STATUS_RESHARE = 2;
     */
    STATUS_RESHARE = 2
}
/**
 * Describes the enum Message.StatusNotificationMessage.StatusNotificationType.
 */
declare const Message_StatusNotificationMessage_StatusNotificationTypeSchema: GenEnum<Message_StatusNotificationMessage_StatusNotificationType>;
/**
 * @generated from message Message.StickerMessage
 */
type Message_StickerMessage = Message$1<"Message.StickerMessage"> & {
    /**
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * @generated from field: optional bytes fileSha256 = 2;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional bytes fileEncSha256 = 3;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: optional bytes mediaKey = 4;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional string mimetype = 5;
     */
    mimetype: string;
    /**
     * @generated from field: optional uint32 height = 6;
     */
    height: number;
    /**
     * @generated from field: optional uint32 width = 7;
     */
    width: number;
    /**
     * @generated from field: optional string directPath = 8;
     */
    directPath: string;
    /**
     * @generated from field: optional uint64 fileLength = 9;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 10;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional uint32 firstFrameLength = 11;
     */
    firstFrameLength: number;
    /**
     * @generated from field: optional bytes firstFrameSidecar = 12;
     */
    firstFrameSidecar: Uint8Array;
    /**
     * @generated from field: optional bool isAnimated = 13;
     */
    isAnimated: boolean;
    /**
     * @generated from field: optional bytes pngThumbnail = 16;
     */
    pngThumbnail: Uint8Array;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional int64 stickerSentTs = 18;
     */
    stickerSentTs: bigint;
    /**
     * @generated from field: optional bool isAvatar = 19;
     */
    isAvatar: boolean;
    /**
     * @generated from field: optional bool isAiSticker = 20;
     */
    isAiSticker: boolean;
    /**
     * @generated from field: optional bool isLottie = 21;
     */
    isLottie: boolean;
    /**
     * @generated from field: optional string accessibilityLabel = 22;
     */
    accessibilityLabel: string;
};
/**
 * Describes the message Message.StickerMessage.
 * Use `create(Message_StickerMessageSchema)` to create a new message.
 */
declare const Message_StickerMessageSchema: GenMessage<Message_StickerMessage>;
/**
 * @generated from message Message.StickerPackMessage
 */
type Message_StickerPackMessage = Message$1<"Message.StickerPackMessage"> & {
    /**
     * @generated from field: optional string stickerPackId = 1;
     */
    stickerPackId: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name: string;
    /**
     * @generated from field: optional string publisher = 3;
     */
    publisher: string;
    /**
     * @generated from field: repeated Message.StickerPackMessage.Sticker stickers = 4;
     */
    stickers: Message_StickerPackMessage_Sticker[];
    /**
     * @generated from field: optional uint64 fileLength = 5;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional bytes fileSha256 = 6;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional bytes fileEncSha256 = 7;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: optional bytes mediaKey = 8;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional string directPath = 9;
     */
    directPath: string;
    /**
     * @generated from field: optional string caption = 10;
     */
    caption: string;
    /**
     * @generated from field: optional ContextInfo contextInfo = 11;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional string packDescription = 12;
     */
    packDescription: string;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 13;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional string trayIconFileName = 14;
     */
    trayIconFileName: string;
    /**
     * @generated from field: optional string thumbnailDirectPath = 15;
     */
    thumbnailDirectPath: string;
    /**
     * @generated from field: optional bytes thumbnailSha256 = 16;
     */
    thumbnailSha256: Uint8Array;
    /**
     * @generated from field: optional bytes thumbnailEncSha256 = 17;
     */
    thumbnailEncSha256: Uint8Array;
    /**
     * @generated from field: optional uint32 thumbnailHeight = 18;
     */
    thumbnailHeight: number;
    /**
     * @generated from field: optional uint32 thumbnailWidth = 19;
     */
    thumbnailWidth: number;
    /**
     * @generated from field: optional string imageDataHash = 20;
     */
    imageDataHash: string;
    /**
     * @generated from field: optional uint64 stickerPackSize = 21;
     */
    stickerPackSize: bigint;
    /**
     * @generated from field: optional Message.StickerPackMessage.StickerPackOrigin stickerPackOrigin = 22;
     */
    stickerPackOrigin: Message_StickerPackMessage_StickerPackOrigin;
};
/**
 * Describes the message Message.StickerPackMessage.
 * Use `create(Message_StickerPackMessageSchema)` to create a new message.
 */
declare const Message_StickerPackMessageSchema: GenMessage<Message_StickerPackMessage>;
/**
 * @generated from message Message.StickerPackMessage.Sticker
 */
type Message_StickerPackMessage_Sticker = Message$1<"Message.StickerPackMessage.Sticker"> & {
    /**
     * @generated from field: optional string fileName = 1;
     */
    fileName: string;
    /**
     * @generated from field: optional bool isAnimated = 2;
     */
    isAnimated: boolean;
    /**
     * @generated from field: repeated string emojis = 3;
     */
    emojis: string[];
    /**
     * @generated from field: optional string accessibilityLabel = 4;
     */
    accessibilityLabel: string;
    /**
     * @generated from field: optional bool isLottie = 5;
     */
    isLottie: boolean;
    /**
     * @generated from field: optional string mimetype = 6;
     */
    mimetype: string;
};
/**
 * Describes the message Message.StickerPackMessage.Sticker.
 * Use `create(Message_StickerPackMessage_StickerSchema)` to create a new message.
 */
declare const Message_StickerPackMessage_StickerSchema: GenMessage<Message_StickerPackMessage_Sticker>;
/**
 * @generated from enum Message.StickerPackMessage.StickerPackOrigin
 */
declare enum Message_StickerPackMessage_StickerPackOrigin {
    /**
     * @generated from enum value: FIRST_PARTY = 0;
     */
    FIRST_PARTY = 0,
    /**
     * @generated from enum value: THIRD_PARTY = 1;
     */
    THIRD_PARTY = 1,
    /**
     * @generated from enum value: USER_CREATED = 2;
     */
    USER_CREATED = 2
}
/**
 * Describes the enum Message.StickerPackMessage.StickerPackOrigin.
 */
declare const Message_StickerPackMessage_StickerPackOriginSchema: GenEnum<Message_StickerPackMessage_StickerPackOrigin>;
/**
 * @generated from message Message.StickerSyncRMRMessage
 */
type Message_StickerSyncRMRMessage = Message$1<"Message.StickerSyncRMRMessage"> & {
    /**
     * @generated from field: repeated string filehash = 1;
     */
    filehash: string[];
    /**
     * @generated from field: optional string rmrSource = 2;
     */
    rmrSource: string;
    /**
     * @generated from field: optional int64 requestTimestamp = 3;
     */
    requestTimestamp: bigint;
};
/**
 * Describes the message Message.StickerSyncRMRMessage.
 * Use `create(Message_StickerSyncRMRMessageSchema)` to create a new message.
 */
declare const Message_StickerSyncRMRMessageSchema: GenMessage<Message_StickerSyncRMRMessage>;
/**
 * @generated from message Message.TemplateButtonReplyMessage
 */
type Message_TemplateButtonReplyMessage = Message$1<"Message.TemplateButtonReplyMessage"> & {
    /**
     * @generated from field: optional string selectedId = 1;
     */
    selectedId: string;
    /**
     * @generated from field: optional string selectedDisplayText = 2;
     */
    selectedDisplayText: string;
    /**
     * @generated from field: optional ContextInfo contextInfo = 3;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional uint32 selectedIndex = 4;
     */
    selectedIndex: number;
    /**
     * @generated from field: optional uint32 selectedCarouselCardIndex = 5;
     */
    selectedCarouselCardIndex: number;
};
/**
 * Describes the message Message.TemplateButtonReplyMessage.
 * Use `create(Message_TemplateButtonReplyMessageSchema)` to create a new message.
 */
declare const Message_TemplateButtonReplyMessageSchema: GenMessage<Message_TemplateButtonReplyMessage>;
/**
 * @generated from message Message.TemplateMessage
 */
type Message_TemplateMessage = Message$1<"Message.TemplateMessage"> & {
    /**
     * @generated from field: optional ContextInfo contextInfo = 3;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional Message.TemplateMessage.HydratedFourRowTemplate hydratedTemplate = 4;
     */
    hydratedTemplate?: Message_TemplateMessage_HydratedFourRowTemplate;
    /**
     * @generated from field: optional string templateId = 9;
     */
    templateId: string;
    /**
     * @generated from oneof Message.TemplateMessage.format
     */
    format: {
        /**
         * @generated from field: Message.TemplateMessage.FourRowTemplate fourRowTemplate = 1;
         */
        value: Message_TemplateMessage_FourRowTemplate;
        case: "fourRowTemplate";
    } | {
        /**
         * @generated from field: Message.TemplateMessage.HydratedFourRowTemplate hydratedFourRowTemplate = 2;
         */
        value: Message_TemplateMessage_HydratedFourRowTemplate;
        case: "hydratedFourRowTemplate";
    } | {
        /**
         * @generated from field: Message.InteractiveMessage interactiveMessageTemplate = 5;
         */
        value: Message_InteractiveMessage;
        case: "interactiveMessageTemplate";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message Message.TemplateMessage.
 * Use `create(Message_TemplateMessageSchema)` to create a new message.
 */
declare const Message_TemplateMessageSchema: GenMessage<Message_TemplateMessage>;
/**
 * @generated from message Message.TemplateMessage.FourRowTemplate
 */
type Message_TemplateMessage_FourRowTemplate = Message$1<"Message.TemplateMessage.FourRowTemplate"> & {
    /**
     * @generated from field: optional Message.HighlyStructuredMessage content = 6;
     */
    content?: Message_HighlyStructuredMessage;
    /**
     * @generated from field: optional Message.HighlyStructuredMessage footer = 7;
     */
    footer?: Message_HighlyStructuredMessage;
    /**
     * @generated from field: repeated TemplateButton buttons = 8;
     */
    buttons: TemplateButton[];
    /**
     * @generated from oneof Message.TemplateMessage.FourRowTemplate.title
     */
    title: {
        /**
         * @generated from field: Message.DocumentMessage documentMessage = 1;
         */
        value: Message_DocumentMessage;
        case: "documentMessage";
    } | {
        /**
         * @generated from field: Message.HighlyStructuredMessage highlyStructuredMessage = 2;
         */
        value: Message_HighlyStructuredMessage;
        case: "highlyStructuredMessage";
    } | {
        /**
         * @generated from field: Message.ImageMessage imageMessage = 3;
         */
        value: Message_ImageMessage;
        case: "imageMessage";
    } | {
        /**
         * @generated from field: Message.VideoMessage videoMessage = 4;
         */
        value: Message_VideoMessage;
        case: "videoMessage";
    } | {
        /**
         * @generated from field: Message.LocationMessage locationMessage = 5;
         */
        value: Message_LocationMessage;
        case: "locationMessage";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message Message.TemplateMessage.FourRowTemplate.
 * Use `create(Message_TemplateMessage_FourRowTemplateSchema)` to create a new message.
 */
declare const Message_TemplateMessage_FourRowTemplateSchema: GenMessage<Message_TemplateMessage_FourRowTemplate>;
/**
 * @generated from message Message.TemplateMessage.HydratedFourRowTemplate
 */
type Message_TemplateMessage_HydratedFourRowTemplate = Message$1<"Message.TemplateMessage.HydratedFourRowTemplate"> & {
    /**
     * @generated from field: optional string hydratedContentText = 6;
     */
    hydratedContentText: string;
    /**
     * @generated from field: optional string hydratedFooterText = 7;
     */
    hydratedFooterText: string;
    /**
     * @generated from field: repeated HydratedTemplateButton hydratedButtons = 8;
     */
    hydratedButtons: HydratedTemplateButton[];
    /**
     * @generated from field: optional string templateId = 9;
     */
    templateId: string;
    /**
     * @generated from field: optional bool maskLinkedDevices = 10;
     */
    maskLinkedDevices: boolean;
    /**
     * @generated from oneof Message.TemplateMessage.HydratedFourRowTemplate.title
     */
    title: {
        /**
         * @generated from field: Message.DocumentMessage documentMessage = 1;
         */
        value: Message_DocumentMessage;
        case: "documentMessage";
    } | {
        /**
         * @generated from field: string hydratedTitleText = 2;
         */
        value: string;
        case: "hydratedTitleText";
    } | {
        /**
         * @generated from field: Message.ImageMessage imageMessage = 3;
         */
        value: Message_ImageMessage;
        case: "imageMessage";
    } | {
        /**
         * @generated from field: Message.VideoMessage videoMessage = 4;
         */
        value: Message_VideoMessage;
        case: "videoMessage";
    } | {
        /**
         * @generated from field: Message.LocationMessage locationMessage = 5;
         */
        value: Message_LocationMessage;
        case: "locationMessage";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message Message.TemplateMessage.HydratedFourRowTemplate.
 * Use `create(Message_TemplateMessage_HydratedFourRowTemplateSchema)` to create a new message.
 */
declare const Message_TemplateMessage_HydratedFourRowTemplateSchema: GenMessage<Message_TemplateMessage_HydratedFourRowTemplate>;
/**
 * @generated from message Message.URLMetadata
 */
type Message_URLMetadata = Message$1<"Message.URLMetadata"> & {
    /**
     * @generated from field: optional uint32 fbExperimentId = 1;
     */
    fbExperimentId: number;
};
/**
 * Describes the message Message.URLMetadata.
 * Use `create(Message_URLMetadataSchema)` to create a new message.
 */
declare const Message_URLMetadataSchema: GenMessage<Message_URLMetadata>;
/**
 * @generated from message Message.VideoMessage
 */
type Message_VideoMessage = Message$1<"Message.VideoMessage"> & {
    /**
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * @generated from field: optional string mimetype = 2;
     */
    mimetype: string;
    /**
     * @generated from field: optional bytes fileSha256 = 3;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional uint64 fileLength = 4;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional uint32 seconds = 5;
     */
    seconds: number;
    /**
     * @generated from field: optional bytes mediaKey = 6;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional string caption = 7;
     */
    caption: string;
    /**
     * @generated from field: optional bool gifPlayback = 8;
     */
    gifPlayback: boolean;
    /**
     * @generated from field: optional uint32 height = 9;
     */
    height: number;
    /**
     * @generated from field: optional uint32 width = 10;
     */
    width: number;
    /**
     * @generated from field: optional bytes fileEncSha256 = 11;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: repeated InteractiveAnnotation interactiveAnnotations = 12;
     */
    interactiveAnnotations: InteractiveAnnotation[];
    /**
     * @generated from field: optional string directPath = 13;
     */
    directPath: string;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 14;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional bytes jpegThumbnail = 16;
     */
    jpegThumbnail: Uint8Array;
    /**
     * @generated from field: optional ContextInfo contextInfo = 17;
     */
    contextInfo?: ContextInfo;
    /**
     * @generated from field: optional bytes streamingSidecar = 18;
     */
    streamingSidecar: Uint8Array;
    /**
     * @generated from field: optional Message.VideoMessage.Attribution gifAttribution = 19;
     */
    gifAttribution: Message_VideoMessage_Attribution;
    /**
     * @generated from field: optional bool viewOnce = 20;
     */
    viewOnce: boolean;
    /**
     * @generated from field: optional string thumbnailDirectPath = 21;
     */
    thumbnailDirectPath: string;
    /**
     * @generated from field: optional bytes thumbnailSha256 = 22;
     */
    thumbnailSha256: Uint8Array;
    /**
     * @generated from field: optional bytes thumbnailEncSha256 = 23;
     */
    thumbnailEncSha256: Uint8Array;
    /**
     * @generated from field: optional string staticUrl = 24;
     */
    staticUrl: string;
    /**
     * @generated from field: repeated InteractiveAnnotation annotations = 25;
     */
    annotations: InteractiveAnnotation[];
    /**
     * @generated from field: optional string accessibilityLabel = 26;
     */
    accessibilityLabel: string;
    /**
     * @generated from field: repeated ProcessedVideo processedVideos = 27;
     */
    processedVideos: ProcessedVideo[];
    /**
     * @generated from field: optional uint32 externalShareFullVideoDurationInSeconds = 28;
     */
    externalShareFullVideoDurationInSeconds: number;
    /**
     * @generated from field: optional uint64 motionPhotoPresentationOffsetMs = 29;
     */
    motionPhotoPresentationOffsetMs: bigint;
    /**
     * @generated from field: optional string metadataUrl = 30;
     */
    metadataUrl: string;
    /**
     * @generated from field: optional Message.VideoMessage.VideoSourceType videoSourceType = 31;
     */
    videoSourceType: Message_VideoMessage_VideoSourceType;
};
/**
 * Describes the message Message.VideoMessage.
 * Use `create(Message_VideoMessageSchema)` to create a new message.
 */
declare const Message_VideoMessageSchema: GenMessage<Message_VideoMessage>;
/**
 * @generated from enum Message.VideoMessage.Attribution
 */
declare enum Message_VideoMessage_Attribution {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: GIPHY = 1;
     */
    GIPHY = 1,
    /**
     * @generated from enum value: TENOR = 2;
     */
    TENOR = 2
}
/**
 * Describes the enum Message.VideoMessage.Attribution.
 */
declare const Message_VideoMessage_AttributionSchema: GenEnum<Message_VideoMessage_Attribution>;
/**
 * @generated from enum Message.VideoMessage.VideoSourceType
 */
declare enum Message_VideoMessage_VideoSourceType {
    /**
     * @generated from enum value: USER_VIDEO = 0;
     */
    USER_VIDEO = 0,
    /**
     * @generated from enum value: AI_GENERATED = 1;
     */
    AI_GENERATED = 1
}
/**
 * Describes the enum Message.VideoMessage.VideoSourceType.
 */
declare const Message_VideoMessage_VideoSourceTypeSchema: GenEnum<Message_VideoMessage_VideoSourceType>;
/**
 * @generated from enum Message.PeerDataOperationRequestType
 */
declare enum Message_PeerDataOperationRequestType {
    /**
     * @generated from enum value: UPLOAD_STICKER = 0;
     */
    UPLOAD_STICKER = 0,
    /**
     * @generated from enum value: SEND_RECENT_STICKER_BOOTSTRAP = 1;
     */
    SEND_RECENT_STICKER_BOOTSTRAP = 1,
    /**
     * @generated from enum value: GENERATE_LINK_PREVIEW = 2;
     */
    GENERATE_LINK_PREVIEW = 2,
    /**
     * @generated from enum value: HISTORY_SYNC_ON_DEMAND = 3;
     */
    HISTORY_SYNC_ON_DEMAND = 3,
    /**
     * @generated from enum value: PLACEHOLDER_MESSAGE_RESEND = 4;
     */
    PLACEHOLDER_MESSAGE_RESEND = 4,
    /**
     * @generated from enum value: WAFFLE_LINKING_NONCE_FETCH = 5;
     */
    WAFFLE_LINKING_NONCE_FETCH = 5,
    /**
     * @generated from enum value: FULL_HISTORY_SYNC_ON_DEMAND = 6;
     */
    FULL_HISTORY_SYNC_ON_DEMAND = 6,
    /**
     * @generated from enum value: COMPANION_META_NONCE_FETCH = 7;
     */
    COMPANION_META_NONCE_FETCH = 7,
    /**
     * @generated from enum value: COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY = 8;
     */
    COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY = 8,
    /**
     * @generated from enum value: COMPANION_CANONICAL_USER_NONCE_FETCH = 9;
     */
    COMPANION_CANONICAL_USER_NONCE_FETCH = 9
}
/**
 * Describes the enum Message.PeerDataOperationRequestType.
 */
declare const Message_PeerDataOperationRequestTypeSchema: GenEnum<Message_PeerDataOperationRequestType>;
/**
 * @generated from enum Message.PollContentType
 */
declare enum Message_PollContentType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: TEXT = 1;
     */
    TEXT = 1,
    /**
     * @generated from enum value: IMAGE = 2;
     */
    IMAGE = 2
}
/**
 * Describes the enum Message.PollContentType.
 */
declare const Message_PollContentTypeSchema: GenEnum<Message_PollContentType>;
/**
 * @generated from message MessageAddOn
 */
type MessageAddOn = Message$1<"MessageAddOn"> & {
    /**
     * @generated from field: optional MessageAddOn.MessageAddOnType messageAddOnType = 1;
     */
    messageAddOnType: MessageAddOn_MessageAddOnType;
    /**
     * @generated from field: optional Message messageAddOn = 2;
     */
    messageAddOn?: Message;
    /**
     * @generated from field: optional int64 senderTimestampMs = 3;
     */
    senderTimestampMs: bigint;
    /**
     * @generated from field: optional int64 serverTimestampMs = 4;
     */
    serverTimestampMs: bigint;
    /**
     * @generated from field: optional WebMessageInfo.Status status = 5;
     */
    status: WebMessageInfo_Status;
    /**
     * @generated from field: optional MessageAddOnContextInfo addOnContextInfo = 6;
     */
    addOnContextInfo?: MessageAddOnContextInfo;
    /**
     * @generated from field: optional MessageKey messageAddOnKey = 7;
     */
    messageAddOnKey?: MessageKey;
    /**
     * @generated from field: optional LegacyMessage legacyMessage = 8;
     */
    legacyMessage?: LegacyMessage;
};
/**
 * Describes the message MessageAddOn.
 * Use `create(MessageAddOnSchema)` to create a new message.
 */
declare const MessageAddOnSchema: GenMessage<MessageAddOn>;
/**
 * @generated from enum MessageAddOn.MessageAddOnType
 */
declare enum MessageAddOn_MessageAddOnType {
    /**
     * @generated from enum value: UNDEFINED = 0;
     */
    UNDEFINED = 0,
    /**
     * @generated from enum value: REACTION = 1;
     */
    REACTION = 1,
    /**
     * @generated from enum value: EVENT_RESPONSE = 2;
     */
    EVENT_RESPONSE = 2,
    /**
     * @generated from enum value: POLL_UPDATE = 3;
     */
    POLL_UPDATE = 3,
    /**
     * @generated from enum value: PIN_IN_CHAT = 4;
     */
    PIN_IN_CHAT = 4
}
/**
 * Describes the enum MessageAddOn.MessageAddOnType.
 */
declare const MessageAddOn_MessageAddOnTypeSchema: GenEnum<MessageAddOn_MessageAddOnType>;
/**
 * @generated from message MessageAddOnContextInfo
 */
type MessageAddOnContextInfo = Message$1<"MessageAddOnContextInfo"> & {
    /**
     * @generated from field: optional uint32 messageAddOnDurationInSecs = 1;
     */
    messageAddOnDurationInSecs: number;
    /**
     * @generated from field: optional MessageContextInfo.MessageAddonExpiryType messageAddOnExpiryType = 2;
     */
    messageAddOnExpiryType: MessageContextInfo_MessageAddonExpiryType;
};
/**
 * Describes the message MessageAddOnContextInfo.
 * Use `create(MessageAddOnContextInfoSchema)` to create a new message.
 */
declare const MessageAddOnContextInfoSchema: GenMessage<MessageAddOnContextInfo>;
/**
 * @generated from message MessageAssociation
 */
type MessageAssociation = Message$1<"MessageAssociation"> & {
    /**
     * @generated from field: optional MessageAssociation.AssociationType associationType = 1;
     */
    associationType: MessageAssociation_AssociationType;
    /**
     * @generated from field: optional MessageKey parentMessageKey = 2;
     */
    parentMessageKey?: MessageKey;
    /**
     * @generated from field: optional int32 messageIndex = 3;
     */
    messageIndex: number;
};
/**
 * Describes the message MessageAssociation.
 * Use `create(MessageAssociationSchema)` to create a new message.
 */
declare const MessageAssociationSchema: GenMessage<MessageAssociation>;
/**
 * @generated from enum MessageAssociation.AssociationType
 */
declare enum MessageAssociation_AssociationType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: MEDIA_ALBUM = 1;
     */
    MEDIA_ALBUM = 1,
    /**
     * @generated from enum value: BOT_PLUGIN = 2;
     */
    BOT_PLUGIN = 2,
    /**
     * @generated from enum value: EVENT_COVER_IMAGE = 3;
     */
    EVENT_COVER_IMAGE = 3,
    /**
     * @generated from enum value: STATUS_POLL = 4;
     */
    STATUS_POLL = 4,
    /**
     * @generated from enum value: HD_VIDEO_DUAL_UPLOAD = 5;
     */
    HD_VIDEO_DUAL_UPLOAD = 5,
    /**
     * @generated from enum value: STATUS_EXTERNAL_RESHARE = 6;
     */
    STATUS_EXTERNAL_RESHARE = 6,
    /**
     * @generated from enum value: MEDIA_POLL = 7;
     */
    MEDIA_POLL = 7,
    /**
     * @generated from enum value: STATUS_ADD_YOURS = 8;
     */
    STATUS_ADD_YOURS = 8,
    /**
     * @generated from enum value: STATUS_NOTIFICATION = 9;
     */
    STATUS_NOTIFICATION = 9,
    /**
     * @generated from enum value: HD_IMAGE_DUAL_UPLOAD = 10;
     */
    HD_IMAGE_DUAL_UPLOAD = 10,
    /**
     * @generated from enum value: STICKER_ANNOTATION = 11;
     */
    STICKER_ANNOTATION = 11,
    /**
     * @generated from enum value: MOTION_PHOTO = 12;
     */
    MOTION_PHOTO = 12,
    /**
     * @generated from enum value: STATUS_LINK_ACTION = 13;
     */
    STATUS_LINK_ACTION = 13,
    /**
     * @generated from enum value: VIEW_ALL_REPLIES = 14;
     */
    VIEW_ALL_REPLIES = 14,
    /**
     * @generated from enum value: STATUS_ADD_YOURS_AI_IMAGINE = 15;
     */
    STATUS_ADD_YOURS_AI_IMAGINE = 15
}
/**
 * Describes the enum MessageAssociation.AssociationType.
 */
declare const MessageAssociation_AssociationTypeSchema: GenEnum<MessageAssociation_AssociationType>;
/**
 * @generated from message MessageContextInfo
 */
type MessageContextInfo = Message$1<"MessageContextInfo"> & {
    /**
     * @generated from field: optional DeviceListMetadata deviceListMetadata = 1;
     */
    deviceListMetadata?: DeviceListMetadata;
    /**
     * @generated from field: optional int32 deviceListMetadataVersion = 2;
     */
    deviceListMetadataVersion: number;
    /**
     * @generated from field: optional bytes messageSecret = 3;
     */
    messageSecret: Uint8Array;
    /**
     * @generated from field: optional bytes paddingBytes = 4;
     */
    paddingBytes: Uint8Array;
    /**
     * @generated from field: optional uint32 messageAddOnDurationInSecs = 5;
     */
    messageAddOnDurationInSecs: number;
    /**
     * @generated from field: optional bytes botMessageSecret = 6;
     */
    botMessageSecret: Uint8Array;
    /**
     * @generated from field: optional BotMetadata botMetadata = 7;
     */
    botMetadata?: BotMetadata;
    /**
     * @generated from field: optional int32 reportingTokenVersion = 8;
     */
    reportingTokenVersion: number;
    /**
     * @generated from field: optional MessageContextInfo.MessageAddonExpiryType messageAddOnExpiryType = 9;
     */
    messageAddOnExpiryType: MessageContextInfo_MessageAddonExpiryType;
    /**
     * @generated from field: optional MessageAssociation messageAssociation = 10;
     */
    messageAssociation?: MessageAssociation;
    /**
     * @generated from field: optional bool capiCreatedGroup = 11;
     */
    capiCreatedGroup: boolean;
    /**
     * @generated from field: optional string supportPayload = 12;
     */
    supportPayload: string;
    /**
     * @generated from field: optional LimitSharing limitSharing = 13;
     */
    limitSharing?: LimitSharing;
    /**
     * @generated from field: optional LimitSharing limitSharingV2 = 14;
     */
    limitSharingV2?: LimitSharing;
    /**
     * @generated from field: repeated ThreadID threadId = 15;
     */
    threadId: ThreadID[];
};
/**
 * Describes the message MessageContextInfo.
 * Use `create(MessageContextInfoSchema)` to create a new message.
 */
declare const MessageContextInfoSchema: GenMessage<MessageContextInfo>;
/**
 * @generated from enum MessageContextInfo.MessageAddonExpiryType
 */
declare enum MessageContextInfo_MessageAddonExpiryType {
    /**
     * @generated from enum value: STATIC = 1;
     */
    STATIC = 1,
    /**
     * @generated from enum value: DEPENDENT_ON_PARENT = 2;
     */
    DEPENDENT_ON_PARENT = 2
}
/**
 * Describes the enum MessageContextInfo.MessageAddonExpiryType.
 */
declare const MessageContextInfo_MessageAddonExpiryTypeSchema: GenEnum<MessageContextInfo_MessageAddonExpiryType>;
/**
 * @generated from message MessageKey
 */
type MessageKey = Message$1<"MessageKey"> & {
    /**
     * @generated from field: optional string remoteJid = 1;
     */
    remoteJid: string;
    /**
     * @generated from field: optional bool fromMe = 2;
     */
    fromMe: boolean;
    /**
     * @generated from field: optional string id = 3;
     */
    id: string;
    /**
     * @generated from field: optional string participant = 4;
     */
    participant: string;
};
/**
 * Describes the message MessageKey.
 * Use `create(MessageKeySchema)` to create a new message.
 */
declare const MessageKeySchema: GenMessage<MessageKey>;
/**
 * @generated from message MessageSecretMessage
 */
type MessageSecretMessage = Message$1<"MessageSecretMessage"> & {
    /**
     * @generated from field: optional sfixed32 version = 1;
     */
    version: number;
    /**
     * @generated from field: optional bytes encIv = 2;
     */
    encIv: Uint8Array;
    /**
     * @generated from field: optional bytes encPayload = 3;
     */
    encPayload: Uint8Array;
};
/**
 * Describes the message MessageSecretMessage.
 * Use `create(MessageSecretMessageSchema)` to create a new message.
 */
declare const MessageSecretMessageSchema: GenMessage<MessageSecretMessage>;
/**
 * @generated from message Money
 */
type Money = Message$1<"Money"> & {
    /**
     * @generated from field: optional int64 value = 1;
     */
    value: bigint;
    /**
     * @generated from field: optional uint32 offset = 2;
     */
    offset: number;
    /**
     * @generated from field: optional string currencyCode = 3;
     */
    currencyCode: string;
};
/**
 * Describes the message Money.
 * Use `create(MoneySchema)` to create a new message.
 */
declare const MoneySchema: GenMessage<Money>;
/**
 * @generated from message MsgOpaqueData
 */
type MsgOpaqueData = Message$1<"MsgOpaqueData"> & {
    /**
     * @generated from field: optional string body = 1;
     */
    body: string;
    /**
     * @generated from field: optional string caption = 3;
     */
    caption: string;
    /**
     * @generated from field: optional double lng = 5;
     */
    lng: number;
    /**
     * @generated from field: optional bool isLive = 6;
     */
    isLive: boolean;
    /**
     * @generated from field: optional double lat = 7;
     */
    lat: number;
    /**
     * @generated from field: optional int32 paymentAmount1000 = 8;
     */
    paymentAmount1000: number;
    /**
     * @generated from field: optional string paymentNoteMsgBody = 9;
     */
    paymentNoteMsgBody: string;
    /**
     * @generated from field: optional string matchedText = 11;
     */
    matchedText: string;
    /**
     * @generated from field: optional string title = 12;
     */
    title: string;
    /**
     * @generated from field: optional string description = 13;
     */
    description: string;
    /**
     * @generated from field: optional bytes futureproofBuffer = 14;
     */
    futureproofBuffer: Uint8Array;
    /**
     * @generated from field: optional string clientUrl = 15;
     */
    clientUrl: string;
    /**
     * @generated from field: optional string loc = 16;
     */
    loc: string;
    /**
     * @generated from field: optional string pollName = 17;
     */
    pollName: string;
    /**
     * @generated from field: repeated MsgOpaqueData.PollOption pollOptions = 18;
     */
    pollOptions: MsgOpaqueData_PollOption[];
    /**
     * @generated from field: optional uint32 pollSelectableOptionsCount = 20;
     */
    pollSelectableOptionsCount: number;
    /**
     * @generated from field: optional bytes messageSecret = 21;
     */
    messageSecret: Uint8Array;
    /**
     * @generated from field: optional string originalSelfAuthor = 51;
     */
    originalSelfAuthor: string;
    /**
     * @generated from field: optional int64 senderTimestampMs = 22;
     */
    senderTimestampMs: bigint;
    /**
     * @generated from field: optional string pollUpdateParentKey = 23;
     */
    pollUpdateParentKey: string;
    /**
     * @generated from field: optional PollEncValue encPollVote = 24;
     */
    encPollVote?: PollEncValue;
    /**
     * @generated from field: optional bool isSentCagPollCreation = 28;
     */
    isSentCagPollCreation: boolean;
    /**
     * @generated from field: optional MsgOpaqueData.PollContentType pollContentType = 42;
     */
    pollContentType: MsgOpaqueData_PollContentType;
    /**
     * @generated from field: optional MsgOpaqueData.PollVotesSnapshot pollVotesSnapshot = 41;
     */
    pollVotesSnapshot?: MsgOpaqueData_PollVotesSnapshot;
    /**
     * @generated from field: optional string encReactionTargetMessageKey = 25;
     */
    encReactionTargetMessageKey: string;
    /**
     * @generated from field: optional bytes encReactionEncPayload = 26;
     */
    encReactionEncPayload: Uint8Array;
    /**
     * @generated from field: optional bytes encReactionEncIv = 27;
     */
    encReactionEncIv: Uint8Array;
    /**
     * @generated from field: optional bytes botMessageSecret = 29;
     */
    botMessageSecret: Uint8Array;
    /**
     * @generated from field: optional string targetMessageKey = 30;
     */
    targetMessageKey: string;
    /**
     * @generated from field: optional bytes encPayload = 31;
     */
    encPayload: Uint8Array;
    /**
     * @generated from field: optional bytes encIv = 32;
     */
    encIv: Uint8Array;
    /**
     * @generated from field: optional string eventName = 33;
     */
    eventName: string;
    /**
     * @generated from field: optional bool isEventCanceled = 34;
     */
    isEventCanceled: boolean;
    /**
     * @generated from field: optional string eventDescription = 35;
     */
    eventDescription: string;
    /**
     * @generated from field: optional string eventJoinLink = 36;
     */
    eventJoinLink: string;
    /**
     * @generated from field: optional int64 eventStartTime = 37;
     */
    eventStartTime: bigint;
    /**
     * @generated from field: optional MsgOpaqueData.EventLocation eventLocation = 38;
     */
    eventLocation?: MsgOpaqueData_EventLocation;
    /**
     * @generated from field: optional int64 eventEndTime = 40;
     */
    eventEndTime: bigint;
    /**
     * @generated from field: optional bytes plainProtobufBytes = 43;
     */
    plainProtobufBytes: Uint8Array;
};
/**
 * Describes the message MsgOpaqueData.
 * Use `create(MsgOpaqueDataSchema)` to create a new message.
 */
declare const MsgOpaqueDataSchema: GenMessage<MsgOpaqueData>;
/**
 * @generated from message MsgOpaqueData.EventLocation
 */
type MsgOpaqueData_EventLocation = Message$1<"MsgOpaqueData.EventLocation"> & {
    /**
     * @generated from field: optional double degreesLatitude = 1;
     */
    degreesLatitude: number;
    /**
     * @generated from field: optional double degreesLongitude = 2;
     */
    degreesLongitude: number;
    /**
     * @generated from field: optional string name = 3;
     */
    name: string;
    /**
     * @generated from field: optional string address = 4;
     */
    address: string;
    /**
     * @generated from field: optional string url = 5;
     */
    url: string;
    /**
     * @generated from field: optional bytes jpegThumbnail = 6;
     */
    jpegThumbnail: Uint8Array;
};
/**
 * Describes the message MsgOpaqueData.EventLocation.
 * Use `create(MsgOpaqueData_EventLocationSchema)` to create a new message.
 */
declare const MsgOpaqueData_EventLocationSchema: GenMessage<MsgOpaqueData_EventLocation>;
/**
 * @generated from message MsgOpaqueData.PollOption
 */
type MsgOpaqueData_PollOption = Message$1<"MsgOpaqueData.PollOption"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional string hash = 2;
     */
    hash: string;
};
/**
 * Describes the message MsgOpaqueData.PollOption.
 * Use `create(MsgOpaqueData_PollOptionSchema)` to create a new message.
 */
declare const MsgOpaqueData_PollOptionSchema: GenMessage<MsgOpaqueData_PollOption>;
/**
 * @generated from message MsgOpaqueData.PollVoteSnapshot
 */
type MsgOpaqueData_PollVoteSnapshot = Message$1<"MsgOpaqueData.PollVoteSnapshot"> & {
    /**
     * @generated from field: optional MsgOpaqueData.PollOption option = 1;
     */
    option?: MsgOpaqueData_PollOption;
    /**
     * @generated from field: optional int32 optionVoteCount = 2;
     */
    optionVoteCount: number;
};
/**
 * Describes the message MsgOpaqueData.PollVoteSnapshot.
 * Use `create(MsgOpaqueData_PollVoteSnapshotSchema)` to create a new message.
 */
declare const MsgOpaqueData_PollVoteSnapshotSchema: GenMessage<MsgOpaqueData_PollVoteSnapshot>;
/**
 * @generated from message MsgOpaqueData.PollVotesSnapshot
 */
type MsgOpaqueData_PollVotesSnapshot = Message$1<"MsgOpaqueData.PollVotesSnapshot"> & {
    /**
     * @generated from field: repeated MsgOpaqueData.PollVoteSnapshot pollVotes = 1;
     */
    pollVotes: MsgOpaqueData_PollVoteSnapshot[];
};
/**
 * Describes the message MsgOpaqueData.PollVotesSnapshot.
 * Use `create(MsgOpaqueData_PollVotesSnapshotSchema)` to create a new message.
 */
declare const MsgOpaqueData_PollVotesSnapshotSchema: GenMessage<MsgOpaqueData_PollVotesSnapshot>;
/**
 * @generated from enum MsgOpaqueData.PollContentType
 */
declare enum MsgOpaqueData_PollContentType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: TEXT = 1;
     */
    TEXT = 1,
    /**
     * @generated from enum value: IMAGE = 2;
     */
    IMAGE = 2
}
/**
 * Describes the enum MsgOpaqueData.PollContentType.
 */
declare const MsgOpaqueData_PollContentTypeSchema: GenEnum<MsgOpaqueData_PollContentType>;
/**
 * @generated from message MsgRowOpaqueData
 */
type MsgRowOpaqueData = Message$1<"MsgRowOpaqueData"> & {
    /**
     * @generated from field: optional MsgOpaqueData currentMsg = 1;
     */
    currentMsg?: MsgOpaqueData;
    /**
     * @generated from field: optional MsgOpaqueData quotedMsg = 2;
     */
    quotedMsg?: MsgOpaqueData;
};
/**
 * Describes the message MsgRowOpaqueData.
 * Use `create(MsgRowOpaqueDataSchema)` to create a new message.
 */
declare const MsgRowOpaqueDataSchema: GenMessage<MsgRowOpaqueData>;
/**
 * @generated from message NoiseCertificate
 */
type NoiseCertificate = Message$1<"NoiseCertificate"> & {
    /**
     * @generated from field: optional bytes details = 1;
     */
    details: Uint8Array;
    /**
     * @generated from field: optional bytes signature = 2;
     */
    signature: Uint8Array;
};
/**
 * Describes the message NoiseCertificate.
 * Use `create(NoiseCertificateSchema)` to create a new message.
 */
declare const NoiseCertificateSchema: GenMessage<NoiseCertificate>;
/**
 * @generated from message NoiseCertificate.Details
 */
type NoiseCertificate_Details = Message$1<"NoiseCertificate.Details"> & {
    /**
     * @generated from field: optional uint32 serial = 1;
     */
    serial: number;
    /**
     * @generated from field: optional string issuer = 2;
     */
    issuer: string;
    /**
     * @generated from field: optional uint64 expires = 3;
     */
    expires: bigint;
    /**
     * @generated from field: optional string subject = 4;
     */
    subject: string;
    /**
     * @generated from field: optional bytes key = 5;
     */
    key: Uint8Array;
};
/**
 * Describes the message NoiseCertificate.Details.
 * Use `create(NoiseCertificate_DetailsSchema)` to create a new message.
 */
declare const NoiseCertificate_DetailsSchema: GenMessage<NoiseCertificate_Details>;
/**
 * @generated from message NotificationMessageInfo
 */
type NotificationMessageInfo = Message$1<"NotificationMessageInfo"> & {
    /**
     * @generated from field: optional MessageKey key = 1;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional Message message = 2;
     */
    message?: Message;
    /**
     * @generated from field: optional uint64 messageTimestamp = 3;
     */
    messageTimestamp: bigint;
    /**
     * @generated from field: optional string participant = 4;
     */
    participant: string;
};
/**
 * Describes the message NotificationMessageInfo.
 * Use `create(NotificationMessageInfoSchema)` to create a new message.
 */
declare const NotificationMessageInfoSchema: GenMessage<NotificationMessageInfo>;
/**
 * @generated from message NotificationSettings
 */
type NotificationSettings = Message$1<"NotificationSettings"> & {
    /**
     * @generated from field: optional string messageVibrate = 1;
     */
    messageVibrate: string;
    /**
     * @generated from field: optional string messagePopup = 2;
     */
    messagePopup: string;
    /**
     * @generated from field: optional string messageLight = 3;
     */
    messageLight: string;
    /**
     * @generated from field: optional bool lowPriorityNotifications = 4;
     */
    lowPriorityNotifications: boolean;
    /**
     * @generated from field: optional bool reactionsMuted = 5;
     */
    reactionsMuted: boolean;
    /**
     * @generated from field: optional string callVibrate = 6;
     */
    callVibrate: string;
};
/**
 * Describes the message NotificationSettings.
 * Use `create(NotificationSettingsSchema)` to create a new message.
 */
declare const NotificationSettingsSchema: GenMessage<NotificationSettings>;
/**
 * @generated from message PairingRequest
 */
type PairingRequest = Message$1<"PairingRequest"> & {
    /**
     * @generated from field: optional bytes companionPublicKey = 1;
     */
    companionPublicKey: Uint8Array;
    /**
     * @generated from field: optional bytes companionIdentityKey = 2;
     */
    companionIdentityKey: Uint8Array;
    /**
     * @generated from field: optional bytes advSecret = 3;
     */
    advSecret: Uint8Array;
};
/**
 * Describes the message PairingRequest.
 * Use `create(PairingRequestSchema)` to create a new message.
 */
declare const PairingRequestSchema: GenMessage<PairingRequest>;
/**
 * @generated from message PastParticipant
 */
type PastParticipant = Message$1<"PastParticipant"> & {
    /**
     * @generated from field: optional string userJid = 1;
     */
    userJid: string;
    /**
     * @generated from field: optional PastParticipant.LeaveReason leaveReason = 2;
     */
    leaveReason: PastParticipant_LeaveReason;
    /**
     * @generated from field: optional uint64 leaveTs = 3;
     */
    leaveTs: bigint;
};
/**
 * Describes the message PastParticipant.
 * Use `create(PastParticipantSchema)` to create a new message.
 */
declare const PastParticipantSchema: GenMessage<PastParticipant>;
/**
 * @generated from enum PastParticipant.LeaveReason
 */
declare enum PastParticipant_LeaveReason {
    /**
     * @generated from enum value: LEFT = 0;
     */
    LEFT = 0,
    /**
     * @generated from enum value: REMOVED = 1;
     */
    REMOVED = 1
}
/**
 * Describes the enum PastParticipant.LeaveReason.
 */
declare const PastParticipant_LeaveReasonSchema: GenEnum<PastParticipant_LeaveReason>;
/**
 * @generated from message PastParticipants
 */
type PastParticipants = Message$1<"PastParticipants"> & {
    /**
     * @generated from field: optional string groupJid = 1;
     */
    groupJid: string;
    /**
     * @generated from field: repeated PastParticipant pastParticipants = 2;
     */
    pastParticipants: PastParticipant[];
};
/**
 * Describes the message PastParticipants.
 * Use `create(PastParticipantsSchema)` to create a new message.
 */
declare const PastParticipantsSchema: GenMessage<PastParticipants>;
/**
 * @generated from message PatchDebugData
 */
type PatchDebugData = Message$1<"PatchDebugData"> & {
    /**
     * @generated from field: optional bytes currentLthash = 1;
     */
    currentLthash: Uint8Array;
    /**
     * @generated from field: optional bytes newLthash = 2;
     */
    newLthash: Uint8Array;
    /**
     * @generated from field: optional bytes patchVersion = 3;
     */
    patchVersion: Uint8Array;
    /**
     * @generated from field: optional bytes collectionName = 4;
     */
    collectionName: Uint8Array;
    /**
     * @generated from field: optional bytes firstFourBytesFromAHashOfSnapshotMacKey = 5;
     */
    firstFourBytesFromAHashOfSnapshotMacKey: Uint8Array;
    /**
     * @generated from field: optional bytes newLthashSubtract = 6;
     */
    newLthashSubtract: Uint8Array;
    /**
     * @generated from field: optional int32 numberAdd = 7;
     */
    numberAdd: number;
    /**
     * @generated from field: optional int32 numberRemove = 8;
     */
    numberRemove: number;
    /**
     * @generated from field: optional int32 numberOverride = 9;
     */
    numberOverride: number;
    /**
     * @generated from field: optional PatchDebugData.Platform senderPlatform = 10;
     */
    senderPlatform: PatchDebugData_Platform;
    /**
     * @generated from field: optional bool isSenderPrimary = 11;
     */
    isSenderPrimary: boolean;
};
/**
 * Describes the message PatchDebugData.
 * Use `create(PatchDebugDataSchema)` to create a new message.
 */
declare const PatchDebugDataSchema: GenMessage<PatchDebugData>;
/**
 * @generated from enum PatchDebugData.Platform
 */
declare enum PatchDebugData_Platform {
    /**
     * @generated from enum value: ANDROID = 0;
     */
    ANDROID = 0,
    /**
     * @generated from enum value: SMBA = 1;
     */
    SMBA = 1,
    /**
     * @generated from enum value: IPHONE = 2;
     */
    IPHONE = 2,
    /**
     * @generated from enum value: SMBI = 3;
     */
    SMBI = 3,
    /**
     * @generated from enum value: WEB = 4;
     */
    WEB = 4,
    /**
     * @generated from enum value: UWP = 5;
     */
    UWP = 5,
    /**
     * @generated from enum value: DARWIN = 6;
     */
    DARWIN = 6,
    /**
     * @generated from enum value: IPAD = 7;
     */
    IPAD = 7,
    /**
     * @generated from enum value: WEAROS = 8;
     */
    WEAROS = 8
}
/**
 * Describes the enum PatchDebugData.Platform.
 */
declare const PatchDebugData_PlatformSchema: GenEnum<PatchDebugData_Platform>;
/**
 * @generated from message PaymentBackground
 */
type PaymentBackground = Message$1<"PaymentBackground"> & {
    /**
     * @generated from field: optional string id = 1;
     */
    id: string;
    /**
     * @generated from field: optional uint64 fileLength = 2;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional uint32 width = 3;
     */
    width: number;
    /**
     * @generated from field: optional uint32 height = 4;
     */
    height: number;
    /**
     * @generated from field: optional string mimetype = 5;
     */
    mimetype: string;
    /**
     * @generated from field: optional fixed32 placeholderArgb = 6;
     */
    placeholderArgb: number;
    /**
     * @generated from field: optional fixed32 textArgb = 7;
     */
    textArgb: number;
    /**
     * @generated from field: optional fixed32 subtextArgb = 8;
     */
    subtextArgb: number;
    /**
     * @generated from field: optional PaymentBackground.MediaData mediaData = 9;
     */
    mediaData?: PaymentBackground_MediaData;
    /**
     * @generated from field: optional PaymentBackground.Type type = 10;
     */
    type: PaymentBackground_Type;
};
/**
 * Describes the message PaymentBackground.
 * Use `create(PaymentBackgroundSchema)` to create a new message.
 */
declare const PaymentBackgroundSchema: GenMessage<PaymentBackground>;
/**
 * @generated from message PaymentBackground.MediaData
 */
type PaymentBackground_MediaData = Message$1<"PaymentBackground.MediaData"> & {
    /**
     * @generated from field: optional bytes mediaKey = 1;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional int64 mediaKeyTimestamp = 2;
     */
    mediaKeyTimestamp: bigint;
    /**
     * @generated from field: optional bytes fileSha256 = 3;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional bytes fileEncSha256 = 4;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: optional string directPath = 5;
     */
    directPath: string;
};
/**
 * Describes the message PaymentBackground.MediaData.
 * Use `create(PaymentBackground_MediaDataSchema)` to create a new message.
 */
declare const PaymentBackground_MediaDataSchema: GenMessage<PaymentBackground_MediaData>;
/**
 * @generated from enum PaymentBackground.Type
 */
declare enum PaymentBackground_Type {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: DEFAULT = 1;
     */
    DEFAULT = 1
}
/**
 * Describes the enum PaymentBackground.Type.
 */
declare const PaymentBackground_TypeSchema: GenEnum<PaymentBackground_Type>;
/**
 * @generated from message PaymentInfo
 */
type PaymentInfo = Message$1<"PaymentInfo"> & {
    /**
     * @generated from field: optional PaymentInfo.Currency currencyDeprecated = 1;
     */
    currencyDeprecated: PaymentInfo_Currency;
    /**
     * @generated from field: optional uint64 amount1000 = 2;
     */
    amount1000: bigint;
    /**
     * @generated from field: optional string receiverJid = 3;
     */
    receiverJid: string;
    /**
     * @generated from field: optional PaymentInfo.Status status = 4;
     */
    status: PaymentInfo_Status;
    /**
     * @generated from field: optional uint64 transactionTimestamp = 5;
     */
    transactionTimestamp: bigint;
    /**
     * @generated from field: optional MessageKey requestMessageKey = 6;
     */
    requestMessageKey?: MessageKey;
    /**
     * @generated from field: optional uint64 expiryTimestamp = 7;
     */
    expiryTimestamp: bigint;
    /**
     * @generated from field: optional bool futureproofed = 8;
     */
    futureproofed: boolean;
    /**
     * @generated from field: optional string currency = 9;
     */
    currency: string;
    /**
     * @generated from field: optional PaymentInfo.TxnStatus txnStatus = 10;
     */
    txnStatus: PaymentInfo_TxnStatus;
    /**
     * @generated from field: optional bool useNoviFiatFormat = 11;
     */
    useNoviFiatFormat: boolean;
    /**
     * @generated from field: optional Money primaryAmount = 12;
     */
    primaryAmount?: Money;
    /**
     * @generated from field: optional Money exchangeAmount = 13;
     */
    exchangeAmount?: Money;
};
/**
 * Describes the message PaymentInfo.
 * Use `create(PaymentInfoSchema)` to create a new message.
 */
declare const PaymentInfoSchema: GenMessage<PaymentInfo>;
/**
 * @generated from enum PaymentInfo.Currency
 */
declare enum PaymentInfo_Currency {
    /**
     * @generated from enum value: UNKNOWN_CURRENCY = 0;
     */
    UNKNOWN_CURRENCY = 0,
    /**
     * @generated from enum value: INR = 1;
     */
    INR = 1
}
/**
 * Describes the enum PaymentInfo.Currency.
 */
declare const PaymentInfo_CurrencySchema: GenEnum<PaymentInfo_Currency>;
/**
 * @generated from enum PaymentInfo.Status
 */
declare enum PaymentInfo_Status {
    /**
     * @generated from enum value: UNKNOWN_STATUS = 0;
     */
    UNKNOWN_STATUS = 0,
    /**
     * @generated from enum value: PROCESSING = 1;
     */
    PROCESSING = 1,
    /**
     * @generated from enum value: SENT = 2;
     */
    SENT = 2,
    /**
     * @generated from enum value: NEED_TO_ACCEPT = 3;
     */
    NEED_TO_ACCEPT = 3,
    /**
     * @generated from enum value: COMPLETE = 4;
     */
    COMPLETE = 4,
    /**
     * @generated from enum value: COULD_NOT_COMPLETE = 5;
     */
    COULD_NOT_COMPLETE = 5,
    /**
     * @generated from enum value: REFUNDED = 6;
     */
    REFUNDED = 6,
    /**
     * @generated from enum value: EXPIRED = 7;
     */
    EXPIRED = 7,
    /**
     * @generated from enum value: REJECTED = 8;
     */
    REJECTED = 8,
    /**
     * @generated from enum value: CANCELLED = 9;
     */
    CANCELLED = 9,
    /**
     * @generated from enum value: WAITING_FOR_PAYER = 10;
     */
    WAITING_FOR_PAYER = 10,
    /**
     * @generated from enum value: WAITING = 11;
     */
    WAITING = 11
}
/**
 * Describes the enum PaymentInfo.Status.
 */
declare const PaymentInfo_StatusSchema: GenEnum<PaymentInfo_Status>;
/**
 * @generated from enum PaymentInfo.TxnStatus
 */
declare enum PaymentInfo_TxnStatus {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: PENDING_SETUP = 1;
     */
    PENDING_SETUP = 1,
    /**
     * @generated from enum value: PENDING_RECEIVER_SETUP = 2;
     */
    PENDING_RECEIVER_SETUP = 2,
    /**
     * @generated from enum value: INIT = 3;
     */
    INIT = 3,
    /**
     * @generated from enum value: SUCCESS = 4;
     */
    SUCCESS = 4,
    /**
     * @generated from enum value: COMPLETED = 5;
     */
    COMPLETED = 5,
    /**
     * @generated from enum value: FAILED = 6;
     */
    FAILED = 6,
    /**
     * @generated from enum value: FAILED_RISK = 7;
     */
    FAILED_RISK = 7,
    /**
     * @generated from enum value: FAILED_PROCESSING = 8;
     */
    FAILED_PROCESSING = 8,
    /**
     * @generated from enum value: FAILED_RECEIVER_PROCESSING = 9;
     */
    FAILED_RECEIVER_PROCESSING = 9,
    /**
     * @generated from enum value: FAILED_DA = 10;
     */
    FAILED_DA = 10,
    /**
     * @generated from enum value: FAILED_DA_FINAL = 11;
     */
    FAILED_DA_FINAL = 11,
    /**
     * @generated from enum value: REFUNDED_TXN = 12;
     */
    REFUNDED_TXN = 12,
    /**
     * @generated from enum value: REFUND_FAILED = 13;
     */
    REFUND_FAILED = 13,
    /**
     * @generated from enum value: REFUND_FAILED_PROCESSING = 14;
     */
    REFUND_FAILED_PROCESSING = 14,
    /**
     * @generated from enum value: REFUND_FAILED_DA = 15;
     */
    REFUND_FAILED_DA = 15,
    /**
     * @generated from enum value: EXPIRED_TXN = 16;
     */
    EXPIRED_TXN = 16,
    /**
     * @generated from enum value: AUTH_CANCELED = 17;
     */
    AUTH_CANCELED = 17,
    /**
     * @generated from enum value: AUTH_CANCEL_FAILED_PROCESSING = 18;
     */
    AUTH_CANCEL_FAILED_PROCESSING = 18,
    /**
     * @generated from enum value: AUTH_CANCEL_FAILED = 19;
     */
    AUTH_CANCEL_FAILED = 19,
    /**
     * @generated from enum value: COLLECT_INIT = 20;
     */
    COLLECT_INIT = 20,
    /**
     * @generated from enum value: COLLECT_SUCCESS = 21;
     */
    COLLECT_SUCCESS = 21,
    /**
     * @generated from enum value: COLLECT_FAILED = 22;
     */
    COLLECT_FAILED = 22,
    /**
     * @generated from enum value: COLLECT_FAILED_RISK = 23;
     */
    COLLECT_FAILED_RISK = 23,
    /**
     * @generated from enum value: COLLECT_REJECTED = 24;
     */
    COLLECT_REJECTED = 24,
    /**
     * @generated from enum value: COLLECT_EXPIRED = 25;
     */
    COLLECT_EXPIRED = 25,
    /**
     * @generated from enum value: COLLECT_CANCELED = 26;
     */
    COLLECT_CANCELED = 26,
    /**
     * @generated from enum value: COLLECT_CANCELLING = 27;
     */
    COLLECT_CANCELLING = 27,
    /**
     * @generated from enum value: IN_REVIEW = 28;
     */
    IN_REVIEW = 28,
    /**
     * @generated from enum value: REVERSAL_SUCCESS = 29;
     */
    REVERSAL_SUCCESS = 29,
    /**
     * @generated from enum value: REVERSAL_PENDING = 30;
     */
    REVERSAL_PENDING = 30,
    /**
     * @generated from enum value: REFUND_PENDING = 31;
     */
    REFUND_PENDING = 31
}
/**
 * Describes the enum PaymentInfo.TxnStatus.
 */
declare const PaymentInfo_TxnStatusSchema: GenEnum<PaymentInfo_TxnStatus>;
/**
 * @generated from message PhoneNumberToLIDMapping
 */
type PhoneNumberToLIDMapping = Message$1<"PhoneNumberToLIDMapping"> & {
    /**
     * @generated from field: optional string pnJid = 1;
     */
    pnJid: string;
    /**
     * @generated from field: optional string lidJid = 2;
     */
    lidJid: string;
};
/**
 * Describes the message PhoneNumberToLIDMapping.
 * Use `create(PhoneNumberToLIDMappingSchema)` to create a new message.
 */
declare const PhoneNumberToLIDMappingSchema: GenMessage<PhoneNumberToLIDMapping>;
/**
 * @generated from message PhotoChange
 */
type PhotoChange = Message$1<"PhotoChange"> & {
    /**
     * @generated from field: optional bytes oldPhoto = 1;
     */
    oldPhoto: Uint8Array;
    /**
     * @generated from field: optional bytes newPhoto = 2;
     */
    newPhoto: Uint8Array;
    /**
     * @generated from field: optional uint32 newPhotoId = 3;
     */
    newPhotoId: number;
};
/**
 * Describes the message PhotoChange.
 * Use `create(PhotoChangeSchema)` to create a new message.
 */
declare const PhotoChangeSchema: GenMessage<PhotoChange>;
/**
 * @generated from message PinInChat
 */
type PinInChat = Message$1<"PinInChat"> & {
    /**
     * @generated from field: optional PinInChat.Type type = 1;
     */
    type: PinInChat_Type;
    /**
     * @generated from field: optional MessageKey key = 2;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional int64 senderTimestampMs = 3;
     */
    senderTimestampMs: bigint;
    /**
     * @generated from field: optional int64 serverTimestampMs = 4;
     */
    serverTimestampMs: bigint;
    /**
     * @generated from field: optional MessageAddOnContextInfo messageAddOnContextInfo = 5;
     */
    messageAddOnContextInfo?: MessageAddOnContextInfo;
};
/**
 * Describes the message PinInChat.
 * Use `create(PinInChatSchema)` to create a new message.
 */
declare const PinInChatSchema: GenMessage<PinInChat>;
/**
 * @generated from enum PinInChat.Type
 */
declare enum PinInChat_Type {
    /**
     * @generated from enum value: UNKNOWN_TYPE = 0;
     */
    UNKNOWN_TYPE = 0,
    /**
     * @generated from enum value: PIN_FOR_ALL = 1;
     */
    PIN_FOR_ALL = 1,
    /**
     * @generated from enum value: UNPIN_FOR_ALL = 2;
     */
    UNPIN_FOR_ALL = 2
}
/**
 * Describes the enum PinInChat.Type.
 */
declare const PinInChat_TypeSchema: GenEnum<PinInChat_Type>;
/**
 * @generated from message Point
 */
type Point = Message$1<"Point"> & {
    /**
     * @generated from field: optional int32 xDeprecated = 1;
     */
    xDeprecated: number;
    /**
     * @generated from field: optional int32 yDeprecated = 2;
     */
    yDeprecated: number;
    /**
     * @generated from field: optional double x = 3;
     */
    x: number;
    /**
     * @generated from field: optional double y = 4;
     */
    y: number;
};
/**
 * Describes the message Point.
 * Use `create(PointSchema)` to create a new message.
 */
declare const PointSchema: GenMessage<Point>;
/**
 * @generated from message PollAdditionalMetadata
 */
type PollAdditionalMetadata = Message$1<"PollAdditionalMetadata"> & {
    /**
     * @generated from field: optional bool pollInvalidated = 1;
     */
    pollInvalidated: boolean;
};
/**
 * Describes the message PollAdditionalMetadata.
 * Use `create(PollAdditionalMetadataSchema)` to create a new message.
 */
declare const PollAdditionalMetadataSchema: GenMessage<PollAdditionalMetadata>;
/**
 * @generated from message PollEncValue
 */
type PollEncValue = Message$1<"PollEncValue"> & {
    /**
     * @generated from field: optional bytes encPayload = 1;
     */
    encPayload: Uint8Array;
    /**
     * @generated from field: optional bytes encIv = 2;
     */
    encIv: Uint8Array;
};
/**
 * Describes the message PollEncValue.
 * Use `create(PollEncValueSchema)` to create a new message.
 */
declare const PollEncValueSchema: GenMessage<PollEncValue>;
/**
 * @generated from message PollUpdate
 */
type PollUpdate = Message$1<"PollUpdate"> & {
    /**
     * @generated from field: optional MessageKey pollUpdateMessageKey = 1;
     */
    pollUpdateMessageKey?: MessageKey;
    /**
     * @generated from field: optional Message.PollVoteMessage vote = 2;
     */
    vote?: Message_PollVoteMessage;
    /**
     * @generated from field: optional int64 senderTimestampMs = 3;
     */
    senderTimestampMs: bigint;
    /**
     * @generated from field: optional int64 serverTimestampMs = 4;
     */
    serverTimestampMs: bigint;
    /**
     * @generated from field: optional bool unread = 5;
     */
    unread: boolean;
};
/**
 * Describes the message PollUpdate.
 * Use `create(PollUpdateSchema)` to create a new message.
 */
declare const PollUpdateSchema: GenMessage<PollUpdate>;
/**
 * @generated from message PreKeyRecordStructure
 */
type PreKeyRecordStructure = Message$1<"PreKeyRecordStructure"> & {
    /**
     * @generated from field: optional uint32 id = 1;
     */
    id: number;
    /**
     * @generated from field: optional bytes publicKey = 2;
     */
    publicKey: Uint8Array;
    /**
     * @generated from field: optional bytes privateKey = 3;
     */
    privateKey: Uint8Array;
};
/**
 * Describes the message PreKeyRecordStructure.
 * Use `create(PreKeyRecordStructureSchema)` to create a new message.
 */
declare const PreKeyRecordStructureSchema: GenMessage<PreKeyRecordStructure>;
/**
 * @generated from message PreKeySignalMessage
 */
type PreKeySignalMessage = Message$1<"PreKeySignalMessage"> & {
    /**
     * @generated from field: optional uint32 registrationId = 5;
     */
    registrationId: number;
    /**
     * @generated from field: optional uint32 preKeyId = 1;
     */
    preKeyId: number;
    /**
     * @generated from field: optional uint32 signedPreKeyId = 6;
     */
    signedPreKeyId: number;
    /**
     * @generated from field: optional bytes baseKey = 2;
     */
    baseKey: Uint8Array;
    /**
     * @generated from field: optional bytes identityKey = 3;
     */
    identityKey: Uint8Array;
    /**
     * @generated from field: optional bytes message = 4;
     */
    message: Uint8Array;
};
/**
 * Describes the message PreKeySignalMessage.
 * Use `create(PreKeySignalMessageSchema)` to create a new message.
 */
declare const PreKeySignalMessageSchema: GenMessage<PreKeySignalMessage>;
/**
 * @generated from message PremiumMessageInfo
 */
type PremiumMessageInfo = Message$1<"PremiumMessageInfo"> & {
    /**
     * @generated from field: optional string serverCampaignId = 1;
     */
    serverCampaignId: string;
};
/**
 * Describes the message PremiumMessageInfo.
 * Use `create(PremiumMessageInfoSchema)` to create a new message.
 */
declare const PremiumMessageInfoSchema: GenMessage<PremiumMessageInfo>;
/**
 * @generated from message PrimaryEphemeralIdentity
 */
type PrimaryEphemeralIdentity = Message$1<"PrimaryEphemeralIdentity"> & {
    /**
     * @generated from field: optional bytes publicKey = 1;
     */
    publicKey: Uint8Array;
    /**
     * @generated from field: optional bytes nonce = 2;
     */
    nonce: Uint8Array;
};
/**
 * Describes the message PrimaryEphemeralIdentity.
 * Use `create(PrimaryEphemeralIdentitySchema)` to create a new message.
 */
declare const PrimaryEphemeralIdentitySchema: GenMessage<PrimaryEphemeralIdentity>;
/**
 * @generated from message ProcessedVideo
 */
type ProcessedVideo = Message$1<"ProcessedVideo"> & {
    /**
     * @generated from field: optional string directPath = 1;
     */
    directPath: string;
    /**
     * @generated from field: optional bytes fileSha256 = 2;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional uint32 height = 3;
     */
    height: number;
    /**
     * @generated from field: optional uint32 width = 4;
     */
    width: number;
    /**
     * @generated from field: optional uint64 fileLength = 5;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional uint32 bitrate = 6;
     */
    bitrate: number;
    /**
     * @generated from field: optional ProcessedVideo.VideoQuality quality = 7;
     */
    quality: ProcessedVideo_VideoQuality;
    /**
     * @generated from field: repeated string capabilities = 8;
     */
    capabilities: string[];
};
/**
 * Describes the message ProcessedVideo.
 * Use `create(ProcessedVideoSchema)` to create a new message.
 */
declare const ProcessedVideoSchema: GenMessage<ProcessedVideo>;
/**
 * @generated from enum ProcessedVideo.VideoQuality
 */
declare enum ProcessedVideo_VideoQuality {
    /**
     * @generated from enum value: UNDEFINED = 0;
     */
    UNDEFINED = 0,
    /**
     * @generated from enum value: LOW = 1;
     */
    LOW = 1,
    /**
     * @generated from enum value: MID = 2;
     */
    MID = 2,
    /**
     * @generated from enum value: HIGH = 3;
     */
    HIGH = 3
}
/**
 * Describes the enum ProcessedVideo.VideoQuality.
 */
declare const ProcessedVideo_VideoQualitySchema: GenEnum<ProcessedVideo_VideoQuality>;
/**
 * @generated from message ProloguePayload
 */
type ProloguePayload = Message$1<"ProloguePayload"> & {
    /**
     * @generated from field: optional bytes companionEphemeralIdentity = 1;
     */
    companionEphemeralIdentity: Uint8Array;
    /**
     * @generated from field: optional CompanionCommitment commitment = 2;
     */
    commitment?: CompanionCommitment;
};
/**
 * Describes the message ProloguePayload.
 * Use `create(ProloguePayloadSchema)` to create a new message.
 */
declare const ProloguePayloadSchema: GenMessage<ProloguePayload>;
/**
 * @generated from message Pushname
 */
type Pushname = Message$1<"Pushname"> & {
    /**
     * @generated from field: optional string id = 1;
     */
    id: string;
    /**
     * @generated from field: optional string pushname = 2;
     */
    pushname: string;
};
/**
 * Describes the message Pushname.
 * Use `create(PushnameSchema)` to create a new message.
 */
declare const PushnameSchema: GenMessage<Pushname>;
/**
 * @generated from message Reaction
 */
type Reaction = Message$1<"Reaction"> & {
    /**
     * @generated from field: optional MessageKey key = 1;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional string text = 2;
     */
    text: string;
    /**
     * @generated from field: optional string groupingKey = 3;
     */
    groupingKey: string;
    /**
     * @generated from field: optional int64 senderTimestampMs = 4;
     */
    senderTimestampMs: bigint;
    /**
     * @generated from field: optional bool unread = 5;
     */
    unread: boolean;
};
/**
 * Describes the message Reaction.
 * Use `create(ReactionSchema)` to create a new message.
 */
declare const ReactionSchema: GenMessage<Reaction>;
/**
 * @generated from message RecentEmojiWeight
 */
type RecentEmojiWeight = Message$1<"RecentEmojiWeight"> & {
    /**
     * @generated from field: optional string emoji = 1;
     */
    emoji: string;
    /**
     * @generated from field: optional float weight = 2;
     */
    weight: number;
};
/**
 * Describes the message RecentEmojiWeight.
 * Use `create(RecentEmojiWeightSchema)` to create a new message.
 */
declare const RecentEmojiWeightSchema: GenMessage<RecentEmojiWeight>;
/**
 * @generated from message RecordStructure
 */
type RecordStructure = Message$1<"RecordStructure"> & {
    /**
     * @generated from field: optional SessionStructure currentSession = 1;
     */
    currentSession?: SessionStructure;
    /**
     * @generated from field: repeated SessionStructure previousSessions = 2;
     */
    previousSessions: SessionStructure[];
};
/**
 * Describes the message RecordStructure.
 * Use `create(RecordStructureSchema)` to create a new message.
 */
declare const RecordStructureSchema: GenMessage<RecordStructure>;
/**
 * @generated from message Reportable
 */
type Reportable = Message$1<"Reportable"> & {
    /**
     * @generated from field: optional uint32 minVersion = 1;
     */
    minVersion: number;
    /**
     * @generated from field: optional uint32 maxVersion = 2;
     */
    maxVersion: number;
    /**
     * @generated from field: optional uint32 notReportableMinVersion = 3;
     */
    notReportableMinVersion: number;
    /**
     * @generated from field: optional bool never = 4;
     */
    never: boolean;
};
/**
 * Describes the message Reportable.
 * Use `create(ReportableSchema)` to create a new message.
 */
declare const ReportableSchema: GenMessage<Reportable>;
/**
 * @generated from message ReportingTokenInfo
 */
type ReportingTokenInfo = Message$1<"ReportingTokenInfo"> & {
    /**
     * @generated from field: optional bytes reportingTag = 1;
     */
    reportingTag: Uint8Array;
};
/**
 * Describes the message ReportingTokenInfo.
 * Use `create(ReportingTokenInfoSchema)` to create a new message.
 */
declare const ReportingTokenInfoSchema: GenMessage<ReportingTokenInfo>;
/**
 * @generated from message SenderKeyDistributionMessage
 */
type SenderKeyDistributionMessage = Message$1<"SenderKeyDistributionMessage"> & {
    /**
     * @generated from field: optional uint32 id = 1;
     */
    id: number;
    /**
     * @generated from field: optional uint32 iteration = 2;
     */
    iteration: number;
    /**
     * @generated from field: optional bytes chainKey = 3;
     */
    chainKey: Uint8Array;
    /**
     * @generated from field: optional bytes signingKey = 4;
     */
    signingKey: Uint8Array;
};
/**
 * Describes the message SenderKeyDistributionMessage.
 * Use `create(SenderKeyDistributionMessageSchema)` to create a new message.
 */
declare const SenderKeyDistributionMessageSchema: GenMessage<SenderKeyDistributionMessage>;
/**
 * @generated from message SenderKeyMessage
 */
type SenderKeyMessage = Message$1<"SenderKeyMessage"> & {
    /**
     * @generated from field: optional uint32 id = 1;
     */
    id: number;
    /**
     * @generated from field: optional uint32 iteration = 2;
     */
    iteration: number;
    /**
     * @generated from field: optional bytes ciphertext = 3;
     */
    ciphertext: Uint8Array;
};
/**
 * Describes the message SenderKeyMessage.
 * Use `create(SenderKeyMessageSchema)` to create a new message.
 */
declare const SenderKeyMessageSchema: GenMessage<SenderKeyMessage>;
/**
 * @generated from message SenderKeyRecordStructure
 */
type SenderKeyRecordStructure = Message$1<"SenderKeyRecordStructure"> & {
    /**
     * @generated from field: repeated SenderKeyStateStructure senderKeyStates = 1;
     */
    senderKeyStates: SenderKeyStateStructure[];
};
/**
 * Describes the message SenderKeyRecordStructure.
 * Use `create(SenderKeyRecordStructureSchema)` to create a new message.
 */
declare const SenderKeyRecordStructureSchema: GenMessage<SenderKeyRecordStructure>;
/**
 * @generated from message SenderKeyStateStructure
 */
type SenderKeyStateStructure = Message$1<"SenderKeyStateStructure"> & {
    /**
     * @generated from field: optional uint32 senderKeyId = 1;
     */
    senderKeyId: number;
    /**
     * @generated from field: optional SenderKeyStateStructure.SenderChainKey senderChainKey = 2;
     */
    senderChainKey?: SenderKeyStateStructure_SenderChainKey;
    /**
     * @generated from field: optional SenderKeyStateStructure.SenderSigningKey senderSigningKey = 3;
     */
    senderSigningKey?: SenderKeyStateStructure_SenderSigningKey;
    /**
     * @generated from field: repeated SenderKeyStateStructure.SenderMessageKey senderMessageKeys = 4;
     */
    senderMessageKeys: SenderKeyStateStructure_SenderMessageKey[];
};
/**
 * Describes the message SenderKeyStateStructure.
 * Use `create(SenderKeyStateStructureSchema)` to create a new message.
 */
declare const SenderKeyStateStructureSchema: GenMessage<SenderKeyStateStructure>;
/**
 * @generated from message SenderKeyStateStructure.SenderChainKey
 */
type SenderKeyStateStructure_SenderChainKey = Message$1<"SenderKeyStateStructure.SenderChainKey"> & {
    /**
     * @generated from field: optional uint32 iteration = 1;
     */
    iteration: number;
    /**
     * @generated from field: optional bytes seed = 2;
     */
    seed: Uint8Array;
};
/**
 * Describes the message SenderKeyStateStructure.SenderChainKey.
 * Use `create(SenderKeyStateStructure_SenderChainKeySchema)` to create a new message.
 */
declare const SenderKeyStateStructure_SenderChainKeySchema: GenMessage<SenderKeyStateStructure_SenderChainKey>;
/**
 * @generated from message SenderKeyStateStructure.SenderMessageKey
 */
type SenderKeyStateStructure_SenderMessageKey = Message$1<"SenderKeyStateStructure.SenderMessageKey"> & {
    /**
     * @generated from field: optional uint32 iteration = 1;
     */
    iteration: number;
    /**
     * @generated from field: optional bytes seed = 2;
     */
    seed: Uint8Array;
};
/**
 * Describes the message SenderKeyStateStructure.SenderMessageKey.
 * Use `create(SenderKeyStateStructure_SenderMessageKeySchema)` to create a new message.
 */
declare const SenderKeyStateStructure_SenderMessageKeySchema: GenMessage<SenderKeyStateStructure_SenderMessageKey>;
/**
 * @generated from message SenderKeyStateStructure.SenderSigningKey
 */
type SenderKeyStateStructure_SenderSigningKey = Message$1<"SenderKeyStateStructure.SenderSigningKey"> & {
    /**
     * @generated from field: optional bytes public = 1;
     */
    public: Uint8Array;
    /**
     * @generated from field: optional bytes private = 2;
     */
    private: Uint8Array;
};
/**
 * Describes the message SenderKeyStateStructure.SenderSigningKey.
 * Use `create(SenderKeyStateStructure_SenderSigningKeySchema)` to create a new message.
 */
declare const SenderKeyStateStructure_SenderSigningKeySchema: GenMessage<SenderKeyStateStructure_SenderSigningKey>;
/**
 * @generated from message ServerErrorReceipt
 */
type ServerErrorReceipt = Message$1<"ServerErrorReceipt"> & {
    /**
     * @generated from field: optional string stanzaId = 1;
     */
    stanzaId: string;
};
/**
 * Describes the message ServerErrorReceipt.
 * Use `create(ServerErrorReceiptSchema)` to create a new message.
 */
declare const ServerErrorReceiptSchema: GenMessage<ServerErrorReceipt>;
/**
 * @generated from message SessionStructure
 */
type SessionStructure = Message$1<"SessionStructure"> & {
    /**
     * @generated from field: optional uint32 sessionVersion = 1;
     */
    sessionVersion: number;
    /**
     * @generated from field: optional bytes localIdentityPublic = 2;
     */
    localIdentityPublic: Uint8Array;
    /**
     * @generated from field: optional bytes remoteIdentityPublic = 3;
     */
    remoteIdentityPublic: Uint8Array;
    /**
     * @generated from field: optional bytes rootKey = 4;
     */
    rootKey: Uint8Array;
    /**
     * @generated from field: optional uint32 previousCounter = 5;
     */
    previousCounter: number;
    /**
     * @generated from field: optional SessionStructure.Chain senderChain = 6;
     */
    senderChain?: SessionStructure_Chain;
    /**
     * @generated from field: repeated SessionStructure.Chain receiverChains = 7;
     */
    receiverChains: SessionStructure_Chain[];
    /**
     * @generated from field: optional SessionStructure.PendingKeyExchange pendingKeyExchange = 8;
     */
    pendingKeyExchange?: SessionStructure_PendingKeyExchange;
    /**
     * @generated from field: optional SessionStructure.PendingPreKey pendingPreKey = 9;
     */
    pendingPreKey?: SessionStructure_PendingPreKey;
    /**
     * @generated from field: optional uint32 remoteRegistrationId = 10;
     */
    remoteRegistrationId: number;
    /**
     * @generated from field: optional uint32 localRegistrationId = 11;
     */
    localRegistrationId: number;
    /**
     * @generated from field: optional bool needsRefresh = 12;
     */
    needsRefresh: boolean;
    /**
     * @generated from field: optional bytes aliceBaseKey = 13;
     */
    aliceBaseKey: Uint8Array;
};
/**
 * Describes the message SessionStructure.
 * Use `create(SessionStructureSchema)` to create a new message.
 */
declare const SessionStructureSchema: GenMessage<SessionStructure>;
/**
 * @generated from message SessionStructure.Chain
 */
type SessionStructure_Chain = Message$1<"SessionStructure.Chain"> & {
    /**
     * @generated from field: optional bytes senderRatchetKey = 1;
     */
    senderRatchetKey: Uint8Array;
    /**
     * @generated from field: optional bytes senderRatchetKeyPrivate = 2;
     */
    senderRatchetKeyPrivate: Uint8Array;
    /**
     * @generated from field: optional SessionStructure.Chain.ChainKey chainKey = 3;
     */
    chainKey?: SessionStructure_Chain_ChainKey;
    /**
     * @generated from field: repeated SessionStructure.Chain.MessageKey messageKeys = 4;
     */
    messageKeys: SessionStructure_Chain_MessageKey[];
};
/**
 * Describes the message SessionStructure.Chain.
 * Use `create(SessionStructure_ChainSchema)` to create a new message.
 */
declare const SessionStructure_ChainSchema: GenMessage<SessionStructure_Chain>;
/**
 * @generated from message SessionStructure.Chain.ChainKey
 */
type SessionStructure_Chain_ChainKey = Message$1<"SessionStructure.Chain.ChainKey"> & {
    /**
     * @generated from field: optional uint32 index = 1;
     */
    index: number;
    /**
     * @generated from field: optional bytes key = 2;
     */
    key: Uint8Array;
};
/**
 * Describes the message SessionStructure.Chain.ChainKey.
 * Use `create(SessionStructure_Chain_ChainKeySchema)` to create a new message.
 */
declare const SessionStructure_Chain_ChainKeySchema: GenMessage<SessionStructure_Chain_ChainKey>;
/**
 * @generated from message SessionStructure.Chain.MessageKey
 */
type SessionStructure_Chain_MessageKey = Message$1<"SessionStructure.Chain.MessageKey"> & {
    /**
     * @generated from field: optional uint32 index = 1;
     */
    index: number;
    /**
     * @generated from field: optional bytes cipherKey = 2;
     */
    cipherKey: Uint8Array;
    /**
     * @generated from field: optional bytes macKey = 3;
     */
    macKey: Uint8Array;
    /**
     * @generated from field: optional bytes iv = 4;
     */
    iv: Uint8Array;
};
/**
 * Describes the message SessionStructure.Chain.MessageKey.
 * Use `create(SessionStructure_Chain_MessageKeySchema)` to create a new message.
 */
declare const SessionStructure_Chain_MessageKeySchema: GenMessage<SessionStructure_Chain_MessageKey>;
/**
 * @generated from message SessionStructure.PendingKeyExchange
 */
type SessionStructure_PendingKeyExchange = Message$1<"SessionStructure.PendingKeyExchange"> & {
    /**
     * @generated from field: optional uint32 sequence = 1;
     */
    sequence: number;
    /**
     * @generated from field: optional bytes localBaseKey = 2;
     */
    localBaseKey: Uint8Array;
    /**
     * @generated from field: optional bytes localBaseKeyPrivate = 3;
     */
    localBaseKeyPrivate: Uint8Array;
    /**
     * @generated from field: optional bytes localRatchetKey = 4;
     */
    localRatchetKey: Uint8Array;
    /**
     * @generated from field: optional bytes localRatchetKeyPrivate = 5;
     */
    localRatchetKeyPrivate: Uint8Array;
    /**
     * @generated from field: optional bytes localIdentityKey = 7;
     */
    localIdentityKey: Uint8Array;
    /**
     * @generated from field: optional bytes localIdentityKeyPrivate = 8;
     */
    localIdentityKeyPrivate: Uint8Array;
};
/**
 * Describes the message SessionStructure.PendingKeyExchange.
 * Use `create(SessionStructure_PendingKeyExchangeSchema)` to create a new message.
 */
declare const SessionStructure_PendingKeyExchangeSchema: GenMessage<SessionStructure_PendingKeyExchange>;
/**
 * @generated from message SessionStructure.PendingPreKey
 */
type SessionStructure_PendingPreKey = Message$1<"SessionStructure.PendingPreKey"> & {
    /**
     * @generated from field: optional uint32 preKeyId = 1;
     */
    preKeyId: number;
    /**
     * @generated from field: optional int32 signedPreKeyId = 3;
     */
    signedPreKeyId: number;
    /**
     * @generated from field: optional bytes baseKey = 2;
     */
    baseKey: Uint8Array;
};
/**
 * Describes the message SessionStructure.PendingPreKey.
 * Use `create(SessionStructure_PendingPreKeySchema)` to create a new message.
 */
declare const SessionStructure_PendingPreKeySchema: GenMessage<SessionStructure_PendingPreKey>;
/**
 * @generated from message SignalMessage
 */
type SignalMessage = Message$1<"SignalMessage"> & {
    /**
     * @generated from field: optional bytes ratchetKey = 1;
     */
    ratchetKey: Uint8Array;
    /**
     * @generated from field: optional uint32 counter = 2;
     */
    counter: number;
    /**
     * @generated from field: optional uint32 previousCounter = 3;
     */
    previousCounter: number;
    /**
     * @generated from field: optional bytes ciphertext = 4;
     */
    ciphertext: Uint8Array;
};
/**
 * Describes the message SignalMessage.
 * Use `create(SignalMessageSchema)` to create a new message.
 */
declare const SignalMessageSchema: GenMessage<SignalMessage>;
/**
 * @generated from message SignedPreKeyRecordStructure
 */
type SignedPreKeyRecordStructure = Message$1<"SignedPreKeyRecordStructure"> & {
    /**
     * @generated from field: optional uint32 id = 1;
     */
    id: number;
    /**
     * @generated from field: optional bytes publicKey = 2;
     */
    publicKey: Uint8Array;
    /**
     * @generated from field: optional bytes privateKey = 3;
     */
    privateKey: Uint8Array;
    /**
     * @generated from field: optional bytes signature = 4;
     */
    signature: Uint8Array;
    /**
     * @generated from field: optional fixed64 timestamp = 5;
     */
    timestamp: bigint;
};
/**
 * Describes the message SignedPreKeyRecordStructure.
 * Use `create(SignedPreKeyRecordStructureSchema)` to create a new message.
 */
declare const SignedPreKeyRecordStructureSchema: GenMessage<SignedPreKeyRecordStructure>;
/**
 * @generated from message StatusAttribution
 */
type StatusAttribution = Message$1<"StatusAttribution"> & {
    /**
     * @generated from field: optional StatusAttribution.Type type = 1;
     */
    type: StatusAttribution_Type;
    /**
     * @generated from field: optional string actionUrl = 2;
     */
    actionUrl: string;
    /**
     * @generated from oneof StatusAttribution.attributionData
     */
    attributionData: {
        /**
         * @generated from field: StatusAttribution.StatusReshare statusReshare = 3;
         */
        value: StatusAttribution_StatusReshare;
        case: "statusReshare";
    } | {
        /**
         * @generated from field: StatusAttribution.ExternalShare externalShare = 4;
         */
        value: StatusAttribution_ExternalShare;
        case: "externalShare";
    } | {
        /**
         * @generated from field: StatusAttribution.Music music = 5;
         */
        value: StatusAttribution_Music;
        case: "music";
    } | {
        /**
         * @generated from field: StatusAttribution.GroupStatus groupStatus = 6;
         */
        value: StatusAttribution_GroupStatus;
        case: "groupStatus";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message StatusAttribution.
 * Use `create(StatusAttributionSchema)` to create a new message.
 */
declare const StatusAttributionSchema: GenMessage<StatusAttribution>;
/**
 * @generated from message StatusAttribution.ExternalShare
 */
type StatusAttribution_ExternalShare = Message$1<"StatusAttribution.ExternalShare"> & {
    /**
     * @generated from field: optional string actionUrl = 1;
     */
    actionUrl: string;
    /**
     * @generated from field: optional StatusAttribution.ExternalShare.Source source = 2;
     */
    source: StatusAttribution_ExternalShare_Source;
    /**
     * @generated from field: optional int32 duration = 3;
     */
    duration: number;
    /**
     * @generated from field: optional string actionFallbackUrl = 4;
     */
    actionFallbackUrl: string;
};
/**
 * Describes the message StatusAttribution.ExternalShare.
 * Use `create(StatusAttribution_ExternalShareSchema)` to create a new message.
 */
declare const StatusAttribution_ExternalShareSchema: GenMessage<StatusAttribution_ExternalShare>;
/**
 * @generated from enum StatusAttribution.ExternalShare.Source
 */
declare enum StatusAttribution_ExternalShare_Source {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: INSTAGRAM = 1;
     */
    INSTAGRAM = 1,
    /**
     * @generated from enum value: FACEBOOK = 2;
     */
    FACEBOOK = 2,
    /**
     * @generated from enum value: MESSENGER = 3;
     */
    MESSENGER = 3,
    /**
     * @generated from enum value: SPOTIFY = 4;
     */
    SPOTIFY = 4,
    /**
     * @generated from enum value: YOUTUBE = 5;
     */
    YOUTUBE = 5,
    /**
     * @generated from enum value: PINTEREST = 6;
     */
    PINTEREST = 6
}
/**
 * Describes the enum StatusAttribution.ExternalShare.Source.
 */
declare const StatusAttribution_ExternalShare_SourceSchema: GenEnum<StatusAttribution_ExternalShare_Source>;
/**
 * @generated from message StatusAttribution.GroupStatus
 */
type StatusAttribution_GroupStatus = Message$1<"StatusAttribution.GroupStatus"> & {
    /**
     * @generated from field: optional string authorJid = 1;
     */
    authorJid: string;
};
/**
 * Describes the message StatusAttribution.GroupStatus.
 * Use `create(StatusAttribution_GroupStatusSchema)` to create a new message.
 */
declare const StatusAttribution_GroupStatusSchema: GenMessage<StatusAttribution_GroupStatus>;
/**
 * @generated from message StatusAttribution.Music
 */
type StatusAttribution_Music = Message$1<"StatusAttribution.Music"> & {
    /**
     * @generated from field: optional string authorName = 1;
     */
    authorName: string;
    /**
     * @generated from field: optional string songId = 2;
     */
    songId: string;
    /**
     * @generated from field: optional string title = 3;
     */
    title: string;
    /**
     * @generated from field: optional string author = 4;
     */
    author: string;
    /**
     * @generated from field: optional string artistAttribution = 5;
     */
    artistAttribution: string;
    /**
     * @generated from field: optional bool isExplicit = 6;
     */
    isExplicit: boolean;
};
/**
 * Describes the message StatusAttribution.Music.
 * Use `create(StatusAttribution_MusicSchema)` to create a new message.
 */
declare const StatusAttribution_MusicSchema: GenMessage<StatusAttribution_Music>;
/**
 * @generated from message StatusAttribution.StatusReshare
 */
type StatusAttribution_StatusReshare = Message$1<"StatusAttribution.StatusReshare"> & {
    /**
     * @generated from field: optional StatusAttribution.StatusReshare.Source source = 1;
     */
    source: StatusAttribution_StatusReshare_Source;
    /**
     * @generated from field: optional StatusAttribution.StatusReshare.Metadata metadata = 2;
     */
    metadata?: StatusAttribution_StatusReshare_Metadata;
};
/**
 * Describes the message StatusAttribution.StatusReshare.
 * Use `create(StatusAttribution_StatusReshareSchema)` to create a new message.
 */
declare const StatusAttribution_StatusReshareSchema: GenMessage<StatusAttribution_StatusReshare>;
/**
 * @generated from message StatusAttribution.StatusReshare.Metadata
 */
type StatusAttribution_StatusReshare_Metadata = Message$1<"StatusAttribution.StatusReshare.Metadata"> & {
    /**
     * @generated from field: optional int32 duration = 1;
     */
    duration: number;
    /**
     * @generated from field: optional string channelJid = 2;
     */
    channelJid: string;
    /**
     * @generated from field: optional int32 channelMessageId = 3;
     */
    channelMessageId: number;
    /**
     * @generated from field: optional bool hasMultipleReshares = 4;
     */
    hasMultipleReshares: boolean;
};
/**
 * Describes the message StatusAttribution.StatusReshare.Metadata.
 * Use `create(StatusAttribution_StatusReshare_MetadataSchema)` to create a new message.
 */
declare const StatusAttribution_StatusReshare_MetadataSchema: GenMessage<StatusAttribution_StatusReshare_Metadata>;
/**
 * @generated from enum StatusAttribution.StatusReshare.Source
 */
declare enum StatusAttribution_StatusReshare_Source {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: INTERNAL_RESHARE = 1;
     */
    INTERNAL_RESHARE = 1,
    /**
     * @generated from enum value: MENTION_RESHARE = 2;
     */
    MENTION_RESHARE = 2,
    /**
     * @generated from enum value: CHANNEL_RESHARE = 3;
     */
    CHANNEL_RESHARE = 3
}
/**
 * Describes the enum StatusAttribution.StatusReshare.Source.
 */
declare const StatusAttribution_StatusReshare_SourceSchema: GenEnum<StatusAttribution_StatusReshare_Source>;
/**
 * @generated from enum StatusAttribution.Type
 */
declare enum StatusAttribution_Type {
    /**
     * @generated from enum value: RESHARE = 0;
     */
    RESHARE = 0,
    /**
     * @generated from enum value: EXTERNAL_SHARE = 1;
     */
    EXTERNAL_SHARE = 1,
    /**
     * @generated from enum value: MUSIC = 2;
     */
    MUSIC = 2,
    /**
     * @generated from enum value: STATUS_MENTION = 3;
     */
    STATUS_MENTION = 3,
    /**
     * @generated from enum value: GROUP_STATUS = 4;
     */
    GROUP_STATUS = 4
}
/**
 * Describes the enum StatusAttribution.Type.
 */
declare const StatusAttribution_TypeSchema: GenEnum<StatusAttribution_Type>;
/**
 * @generated from message StatusMentionMessage
 */
type StatusMentionMessage = Message$1<"StatusMentionMessage"> & {
    /**
     * @generated from field: optional Message quotedStatus = 1;
     */
    quotedStatus?: Message;
};
/**
 * Describes the message StatusMentionMessage.
 * Use `create(StatusMentionMessageSchema)` to create a new message.
 */
declare const StatusMentionMessageSchema: GenMessage<StatusMentionMessage>;
/**
 * @generated from message StatusPSA
 */
type StatusPSA = Message$1<"StatusPSA"> & {
    /**
     * @generated from field: required uint64 campaignId = 44;
     */
    campaignId: bigint;
    /**
     * @generated from field: optional uint64 campaignExpirationTimestamp = 45;
     */
    campaignExpirationTimestamp: bigint;
};
/**
 * Describes the message StatusPSA.
 * Use `create(StatusPSASchema)` to create a new message.
 */
declare const StatusPSASchema: GenMessage<StatusPSA>;
/**
 * @generated from message StickerMetadata
 */
type StickerMetadata = Message$1<"StickerMetadata"> & {
    /**
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * @generated from field: optional bytes fileSha256 = 2;
     */
    fileSha256: Uint8Array;
    /**
     * @generated from field: optional bytes fileEncSha256 = 3;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: optional bytes mediaKey = 4;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional string mimetype = 5;
     */
    mimetype: string;
    /**
     * @generated from field: optional uint32 height = 6;
     */
    height: number;
    /**
     * @generated from field: optional uint32 width = 7;
     */
    width: number;
    /**
     * @generated from field: optional string directPath = 8;
     */
    directPath: string;
    /**
     * @generated from field: optional uint64 fileLength = 9;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional float weight = 10;
     */
    weight: number;
    /**
     * @generated from field: optional int64 lastStickerSentTs = 11;
     */
    lastStickerSentTs: bigint;
    /**
     * @generated from field: optional bool isLottie = 12;
     */
    isLottie: boolean;
};
/**
 * Describes the message StickerMetadata.
 * Use `create(StickerMetadataSchema)` to create a new message.
 */
declare const StickerMetadataSchema: GenMessage<StickerMetadata>;
/**
 * @generated from message SyncActionData
 */
type SyncActionData = Message$1<"SyncActionData"> & {
    /**
     * @generated from field: optional bytes index = 1;
     */
    index: Uint8Array;
    /**
     * @generated from field: optional SyncActionValue value = 2;
     */
    value?: SyncActionValue;
    /**
     * @generated from field: optional bytes padding = 3;
     */
    padding: Uint8Array;
    /**
     * @generated from field: optional int32 version = 4;
     */
    version: number;
};
/**
 * Describes the message SyncActionData.
 * Use `create(SyncActionDataSchema)` to create a new message.
 */
declare const SyncActionDataSchema: GenMessage<SyncActionData>;
/**
 * @generated from message SyncActionValue
 */
type SyncActionValue = Message$1<"SyncActionValue"> & {
    /**
     * @generated from field: optional int64 timestamp = 1;
     */
    timestamp: bigint;
    /**
     * @generated from field: optional SyncActionValue.StarAction starAction = 2;
     */
    starAction?: SyncActionValue_StarAction;
    /**
     * @generated from field: optional SyncActionValue.ContactAction contactAction = 3;
     */
    contactAction?: SyncActionValue_ContactAction;
    /**
     * @generated from field: optional SyncActionValue.MuteAction muteAction = 4;
     */
    muteAction?: SyncActionValue_MuteAction;
    /**
     * @generated from field: optional SyncActionValue.PinAction pinAction = 5;
     */
    pinAction?: SyncActionValue_PinAction;
    /**
     * @generated from field: optional SyncActionValue.SecurityNotificationSetting securityNotificationSetting = 6;
     */
    securityNotificationSetting?: SyncActionValue_SecurityNotificationSetting;
    /**
     * @generated from field: optional SyncActionValue.PushNameSetting pushNameSetting = 7;
     */
    pushNameSetting?: SyncActionValue_PushNameSetting;
    /**
     * @generated from field: optional SyncActionValue.QuickReplyAction quickReplyAction = 8;
     */
    quickReplyAction?: SyncActionValue_QuickReplyAction;
    /**
     * @generated from field: optional SyncActionValue.RecentEmojiWeightsAction recentEmojiWeightsAction = 11;
     */
    recentEmojiWeightsAction?: SyncActionValue_RecentEmojiWeightsAction;
    /**
     * @generated from field: optional SyncActionValue.LabelEditAction labelEditAction = 14;
     */
    labelEditAction?: SyncActionValue_LabelEditAction;
    /**
     * @generated from field: optional SyncActionValue.LabelAssociationAction labelAssociationAction = 15;
     */
    labelAssociationAction?: SyncActionValue_LabelAssociationAction;
    /**
     * @generated from field: optional SyncActionValue.LocaleSetting localeSetting = 16;
     */
    localeSetting?: SyncActionValue_LocaleSetting;
    /**
     * @generated from field: optional SyncActionValue.ArchiveChatAction archiveChatAction = 17;
     */
    archiveChatAction?: SyncActionValue_ArchiveChatAction;
    /**
     * @generated from field: optional SyncActionValue.DeleteMessageForMeAction deleteMessageForMeAction = 18;
     */
    deleteMessageForMeAction?: SyncActionValue_DeleteMessageForMeAction;
    /**
     * @generated from field: optional SyncActionValue.KeyExpiration keyExpiration = 19;
     */
    keyExpiration?: SyncActionValue_KeyExpiration;
    /**
     * @generated from field: optional SyncActionValue.MarkChatAsReadAction markChatAsReadAction = 20;
     */
    markChatAsReadAction?: SyncActionValue_MarkChatAsReadAction;
    /**
     * @generated from field: optional SyncActionValue.ClearChatAction clearChatAction = 21;
     */
    clearChatAction?: SyncActionValue_ClearChatAction;
    /**
     * @generated from field: optional SyncActionValue.DeleteChatAction deleteChatAction = 22;
     */
    deleteChatAction?: SyncActionValue_DeleteChatAction;
    /**
     * @generated from field: optional SyncActionValue.UnarchiveChatsSetting unarchiveChatsSetting = 23;
     */
    unarchiveChatsSetting?: SyncActionValue_UnarchiveChatsSetting;
    /**
     * @generated from field: optional SyncActionValue.PrimaryFeature primaryFeature = 24;
     */
    primaryFeature?: SyncActionValue_PrimaryFeature;
    /**
     * @generated from field: optional SyncActionValue.AndroidUnsupportedActions androidUnsupportedActions = 26;
     */
    androidUnsupportedActions?: SyncActionValue_AndroidUnsupportedActions;
    /**
     * @generated from field: optional SyncActionValue.AgentAction agentAction = 27;
     */
    agentAction?: SyncActionValue_AgentAction;
    /**
     * @generated from field: optional SyncActionValue.SubscriptionAction subscriptionAction = 28;
     */
    subscriptionAction?: SyncActionValue_SubscriptionAction;
    /**
     * @generated from field: optional SyncActionValue.UserStatusMuteAction userStatusMuteAction = 29;
     */
    userStatusMuteAction?: SyncActionValue_UserStatusMuteAction;
    /**
     * @generated from field: optional SyncActionValue.TimeFormatAction timeFormatAction = 30;
     */
    timeFormatAction?: SyncActionValue_TimeFormatAction;
    /**
     * @generated from field: optional SyncActionValue.NuxAction nuxAction = 31;
     */
    nuxAction?: SyncActionValue_NuxAction;
    /**
     * @generated from field: optional SyncActionValue.PrimaryVersionAction primaryVersionAction = 32;
     */
    primaryVersionAction?: SyncActionValue_PrimaryVersionAction;
    /**
     * @generated from field: optional SyncActionValue.StickerAction stickerAction = 33;
     */
    stickerAction?: SyncActionValue_StickerAction;
    /**
     * @generated from field: optional SyncActionValue.RemoveRecentStickerAction removeRecentStickerAction = 34;
     */
    removeRecentStickerAction?: SyncActionValue_RemoveRecentStickerAction;
    /**
     * @generated from field: optional SyncActionValue.ChatAssignmentAction chatAssignment = 35;
     */
    chatAssignment?: SyncActionValue_ChatAssignmentAction;
    /**
     * @generated from field: optional SyncActionValue.ChatAssignmentOpenedStatusAction chatAssignmentOpenedStatus = 36;
     */
    chatAssignmentOpenedStatus?: SyncActionValue_ChatAssignmentOpenedStatusAction;
    /**
     * @generated from field: optional SyncActionValue.PnForLidChatAction pnForLidChatAction = 37;
     */
    pnForLidChatAction?: SyncActionValue_PnForLidChatAction;
    /**
     * @generated from field: optional SyncActionValue.MarketingMessageAction marketingMessageAction = 38;
     */
    marketingMessageAction?: SyncActionValue_MarketingMessageAction;
    /**
     * @generated from field: optional SyncActionValue.MarketingMessageBroadcastAction marketingMessageBroadcastAction = 39;
     */
    marketingMessageBroadcastAction?: SyncActionValue_MarketingMessageBroadcastAction;
    /**
     * @generated from field: optional SyncActionValue.ExternalWebBetaAction externalWebBetaAction = 40;
     */
    externalWebBetaAction?: SyncActionValue_ExternalWebBetaAction;
    /**
     * @generated from field: optional SyncActionValue.PrivacySettingRelayAllCalls privacySettingRelayAllCalls = 41;
     */
    privacySettingRelayAllCalls?: SyncActionValue_PrivacySettingRelayAllCalls;
    /**
     * @generated from field: optional SyncActionValue.CallLogAction callLogAction = 42;
     */
    callLogAction?: SyncActionValue_CallLogAction;
    /**
     * @generated from field: optional SyncActionValue.StatusPrivacyAction statusPrivacy = 44;
     */
    statusPrivacy?: SyncActionValue_StatusPrivacyAction;
    /**
     * @generated from field: optional SyncActionValue.BotWelcomeRequestAction botWelcomeRequestAction = 45;
     */
    botWelcomeRequestAction?: SyncActionValue_BotWelcomeRequestAction;
    /**
     * @generated from field: optional SyncActionValue.DeleteIndividualCallLogAction deleteIndividualCallLog = 46;
     */
    deleteIndividualCallLog?: SyncActionValue_DeleteIndividualCallLogAction;
    /**
     * @generated from field: optional SyncActionValue.LabelReorderingAction labelReorderingAction = 47;
     */
    labelReorderingAction?: SyncActionValue_LabelReorderingAction;
    /**
     * @generated from field: optional SyncActionValue.PaymentInfoAction paymentInfoAction = 48;
     */
    paymentInfoAction?: SyncActionValue_PaymentInfoAction;
    /**
     * @generated from field: optional SyncActionValue.CustomPaymentMethodsAction customPaymentMethodsAction = 49;
     */
    customPaymentMethodsAction?: SyncActionValue_CustomPaymentMethodsAction;
    /**
     * @generated from field: optional SyncActionValue.LockChatAction lockChatAction = 50;
     */
    lockChatAction?: SyncActionValue_LockChatAction;
    /**
     * @generated from field: optional ChatLockSettings chatLockSettings = 51;
     */
    chatLockSettings?: ChatLockSettings;
    /**
     * @generated from field: optional SyncActionValue.WamoUserIdentifierAction wamoUserIdentifierAction = 52;
     */
    wamoUserIdentifierAction?: SyncActionValue_WamoUserIdentifierAction;
    /**
     * @generated from field: optional SyncActionValue.PrivacySettingDisableLinkPreviewsAction privacySettingDisableLinkPreviewsAction = 53;
     */
    privacySettingDisableLinkPreviewsAction?: SyncActionValue_PrivacySettingDisableLinkPreviewsAction;
    /**
     * @generated from field: optional DeviceCapabilities deviceCapabilities = 54;
     */
    deviceCapabilities?: DeviceCapabilities;
    /**
     * @generated from field: optional SyncActionValue.NoteEditAction noteEditAction = 55;
     */
    noteEditAction?: SyncActionValue_NoteEditAction;
    /**
     * @generated from field: optional SyncActionValue.FavoritesAction favoritesAction = 56;
     */
    favoritesAction?: SyncActionValue_FavoritesAction;
    /**
     * @generated from field: optional SyncActionValue.MerchantPaymentPartnerAction merchantPaymentPartnerAction = 57;
     */
    merchantPaymentPartnerAction?: SyncActionValue_MerchantPaymentPartnerAction;
    /**
     * @generated from field: optional SyncActionValue.WaffleAccountLinkStateAction waffleAccountLinkStateAction = 58;
     */
    waffleAccountLinkStateAction?: SyncActionValue_WaffleAccountLinkStateAction;
    /**
     * @generated from field: optional SyncActionValue.UsernameChatStartModeAction usernameChatStartMode = 59;
     */
    usernameChatStartMode?: SyncActionValue_UsernameChatStartModeAction;
    /**
     * @generated from field: optional SyncActionValue.NotificationActivitySettingAction notificationActivitySettingAction = 60;
     */
    notificationActivitySettingAction?: SyncActionValue_NotificationActivitySettingAction;
    /**
     * @generated from field: optional SyncActionValue.LidContactAction lidContactAction = 61;
     */
    lidContactAction?: SyncActionValue_LidContactAction;
    /**
     * @generated from field: optional SyncActionValue.CtwaPerCustomerDataSharingAction ctwaPerCustomerDataSharingAction = 62;
     */
    ctwaPerCustomerDataSharingAction?: SyncActionValue_CtwaPerCustomerDataSharingAction;
    /**
     * @generated from field: optional SyncActionValue.PaymentTosAction paymentTosAction = 63;
     */
    paymentTosAction?: SyncActionValue_PaymentTosAction;
    /**
     * @generated from field: optional SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction privacySettingChannelsPersonalisedRecommendationAction = 64;
     */
    privacySettingChannelsPersonalisedRecommendationAction?: SyncActionValue_PrivacySettingChannelsPersonalisedRecommendationAction;
    /**
     * @generated from field: optional SyncActionValue.BusinessBroadcastAssociationAction businessBroadcastAssociationAction = 65;
     */
    businessBroadcastAssociationAction?: SyncActionValue_BusinessBroadcastAssociationAction;
};
/**
 * Describes the message SyncActionValue.
 * Use `create(SyncActionValueSchema)` to create a new message.
 */
declare const SyncActionValueSchema: GenMessage<SyncActionValue>;
/**
 * @generated from message SyncActionValue.AgentAction
 */
type SyncActionValue_AgentAction = Message$1<"SyncActionValue.AgentAction"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional int32 deviceID = 2;
     */
    deviceID: number;
    /**
     * @generated from field: optional bool isDeleted = 3;
     */
    isDeleted: boolean;
};
/**
 * Describes the message SyncActionValue.AgentAction.
 * Use `create(SyncActionValue_AgentActionSchema)` to create a new message.
 */
declare const SyncActionValue_AgentActionSchema: GenMessage<SyncActionValue_AgentAction>;
/**
 * @generated from message SyncActionValue.AndroidUnsupportedActions
 */
type SyncActionValue_AndroidUnsupportedActions = Message$1<"SyncActionValue.AndroidUnsupportedActions"> & {
    /**
     * @generated from field: optional bool allowed = 1;
     */
    allowed: boolean;
};
/**
 * Describes the message SyncActionValue.AndroidUnsupportedActions.
 * Use `create(SyncActionValue_AndroidUnsupportedActionsSchema)` to create a new message.
 */
declare const SyncActionValue_AndroidUnsupportedActionsSchema: GenMessage<SyncActionValue_AndroidUnsupportedActions>;
/**
 * @generated from message SyncActionValue.ArchiveChatAction
 */
type SyncActionValue_ArchiveChatAction = Message$1<"SyncActionValue.ArchiveChatAction"> & {
    /**
     * @generated from field: optional bool archived = 1;
     */
    archived: boolean;
    /**
     * @generated from field: optional SyncActionValue.SyncActionMessageRange messageRange = 2;
     */
    messageRange?: SyncActionValue_SyncActionMessageRange;
};
/**
 * Describes the message SyncActionValue.ArchiveChatAction.
 * Use `create(SyncActionValue_ArchiveChatActionSchema)` to create a new message.
 */
declare const SyncActionValue_ArchiveChatActionSchema: GenMessage<SyncActionValue_ArchiveChatAction>;
/**
 * @generated from message SyncActionValue.BotWelcomeRequestAction
 */
type SyncActionValue_BotWelcomeRequestAction = Message$1<"SyncActionValue.BotWelcomeRequestAction"> & {
    /**
     * @generated from field: optional bool isSent = 1;
     */
    isSent: boolean;
};
/**
 * Describes the message SyncActionValue.BotWelcomeRequestAction.
 * Use `create(SyncActionValue_BotWelcomeRequestActionSchema)` to create a new message.
 */
declare const SyncActionValue_BotWelcomeRequestActionSchema: GenMessage<SyncActionValue_BotWelcomeRequestAction>;
/**
 * @generated from message SyncActionValue.BusinessBroadcastAssociationAction
 */
type SyncActionValue_BusinessBroadcastAssociationAction = Message$1<"SyncActionValue.BusinessBroadcastAssociationAction"> & {
    /**
     * @generated from field: optional bool deleted = 1;
     */
    deleted: boolean;
};
/**
 * Describes the message SyncActionValue.BusinessBroadcastAssociationAction.
 * Use `create(SyncActionValue_BusinessBroadcastAssociationActionSchema)` to create a new message.
 */
declare const SyncActionValue_BusinessBroadcastAssociationActionSchema: GenMessage<SyncActionValue_BusinessBroadcastAssociationAction>;
/**
 * @generated from message SyncActionValue.CallLogAction
 */
type SyncActionValue_CallLogAction = Message$1<"SyncActionValue.CallLogAction"> & {
    /**
     * @generated from field: optional CallLogRecord callLogRecord = 1;
     */
    callLogRecord?: CallLogRecord;
};
/**
 * Describes the message SyncActionValue.CallLogAction.
 * Use `create(SyncActionValue_CallLogActionSchema)` to create a new message.
 */
declare const SyncActionValue_CallLogActionSchema: GenMessage<SyncActionValue_CallLogAction>;
/**
 * @generated from message SyncActionValue.ChatAssignmentAction
 */
type SyncActionValue_ChatAssignmentAction = Message$1<"SyncActionValue.ChatAssignmentAction"> & {
    /**
     * @generated from field: optional string deviceAgentID = 1;
     */
    deviceAgentID: string;
};
/**
 * Describes the message SyncActionValue.ChatAssignmentAction.
 * Use `create(SyncActionValue_ChatAssignmentActionSchema)` to create a new message.
 */
declare const SyncActionValue_ChatAssignmentActionSchema: GenMessage<SyncActionValue_ChatAssignmentAction>;
/**
 * @generated from message SyncActionValue.ChatAssignmentOpenedStatusAction
 */
type SyncActionValue_ChatAssignmentOpenedStatusAction = Message$1<"SyncActionValue.ChatAssignmentOpenedStatusAction"> & {
    /**
     * @generated from field: optional bool chatOpened = 1;
     */
    chatOpened: boolean;
};
/**
 * Describes the message SyncActionValue.ChatAssignmentOpenedStatusAction.
 * Use `create(SyncActionValue_ChatAssignmentOpenedStatusActionSchema)` to create a new message.
 */
declare const SyncActionValue_ChatAssignmentOpenedStatusActionSchema: GenMessage<SyncActionValue_ChatAssignmentOpenedStatusAction>;
/**
 * @generated from message SyncActionValue.ClearChatAction
 */
type SyncActionValue_ClearChatAction = Message$1<"SyncActionValue.ClearChatAction"> & {
    /**
     * @generated from field: optional SyncActionValue.SyncActionMessageRange messageRange = 1;
     */
    messageRange?: SyncActionValue_SyncActionMessageRange;
};
/**
 * Describes the message SyncActionValue.ClearChatAction.
 * Use `create(SyncActionValue_ClearChatActionSchema)` to create a new message.
 */
declare const SyncActionValue_ClearChatActionSchema: GenMessage<SyncActionValue_ClearChatAction>;
/**
 * @generated from message SyncActionValue.ContactAction
 */
type SyncActionValue_ContactAction = Message$1<"SyncActionValue.ContactAction"> & {
    /**
     * @generated from field: optional string fullName = 1;
     */
    fullName: string;
    /**
     * @generated from field: optional string firstName = 2;
     */
    firstName: string;
    /**
     * @generated from field: optional string lidJid = 3;
     */
    lidJid: string;
    /**
     * @generated from field: optional bool saveOnPrimaryAddressbook = 4;
     */
    saveOnPrimaryAddressbook: boolean;
    /**
     * @generated from field: optional string pnJid = 5;
     */
    pnJid: string;
    /**
     * @generated from field: optional string username = 6;
     */
    username: string;
};
/**
 * Describes the message SyncActionValue.ContactAction.
 * Use `create(SyncActionValue_ContactActionSchema)` to create a new message.
 */
declare const SyncActionValue_ContactActionSchema: GenMessage<SyncActionValue_ContactAction>;
/**
 * @generated from message SyncActionValue.CtwaPerCustomerDataSharingAction
 */
type SyncActionValue_CtwaPerCustomerDataSharingAction = Message$1<"SyncActionValue.CtwaPerCustomerDataSharingAction"> & {
    /**
     * @generated from field: optional bool isCtwaPerCustomerDataSharingEnabled = 1;
     */
    isCtwaPerCustomerDataSharingEnabled: boolean;
};
/**
 * Describes the message SyncActionValue.CtwaPerCustomerDataSharingAction.
 * Use `create(SyncActionValue_CtwaPerCustomerDataSharingActionSchema)` to create a new message.
 */
declare const SyncActionValue_CtwaPerCustomerDataSharingActionSchema: GenMessage<SyncActionValue_CtwaPerCustomerDataSharingAction>;
/**
 * @generated from message SyncActionValue.CustomPaymentMethod
 */
type SyncActionValue_CustomPaymentMethod = Message$1<"SyncActionValue.CustomPaymentMethod"> & {
    /**
     * @generated from field: required string credentialId = 1;
     */
    credentialId: string;
    /**
     * @generated from field: required string country = 2;
     */
    country: string;
    /**
     * @generated from field: required string type = 3;
     */
    type: string;
    /**
     * @generated from field: repeated SyncActionValue.CustomPaymentMethodMetadata metadata = 4;
     */
    metadata: SyncActionValue_CustomPaymentMethodMetadata[];
};
/**
 * Describes the message SyncActionValue.CustomPaymentMethod.
 * Use `create(SyncActionValue_CustomPaymentMethodSchema)` to create a new message.
 */
declare const SyncActionValue_CustomPaymentMethodSchema: GenMessage<SyncActionValue_CustomPaymentMethod>;
/**
 * @generated from message SyncActionValue.CustomPaymentMethodMetadata
 */
type SyncActionValue_CustomPaymentMethodMetadata = Message$1<"SyncActionValue.CustomPaymentMethodMetadata"> & {
    /**
     * @generated from field: required string key = 1;
     */
    key: string;
    /**
     * @generated from field: required string value = 2;
     */
    value: string;
};
/**
 * Describes the message SyncActionValue.CustomPaymentMethodMetadata.
 * Use `create(SyncActionValue_CustomPaymentMethodMetadataSchema)` to create a new message.
 */
declare const SyncActionValue_CustomPaymentMethodMetadataSchema: GenMessage<SyncActionValue_CustomPaymentMethodMetadata>;
/**
 * @generated from message SyncActionValue.CustomPaymentMethodsAction
 */
type SyncActionValue_CustomPaymentMethodsAction = Message$1<"SyncActionValue.CustomPaymentMethodsAction"> & {
    /**
     * @generated from field: repeated SyncActionValue.CustomPaymentMethod customPaymentMethods = 1;
     */
    customPaymentMethods: SyncActionValue_CustomPaymentMethod[];
};
/**
 * Describes the message SyncActionValue.CustomPaymentMethodsAction.
 * Use `create(SyncActionValue_CustomPaymentMethodsActionSchema)` to create a new message.
 */
declare const SyncActionValue_CustomPaymentMethodsActionSchema: GenMessage<SyncActionValue_CustomPaymentMethodsAction>;
/**
 * @generated from message SyncActionValue.DeleteChatAction
 */
type SyncActionValue_DeleteChatAction = Message$1<"SyncActionValue.DeleteChatAction"> & {
    /**
     * @generated from field: optional SyncActionValue.SyncActionMessageRange messageRange = 1;
     */
    messageRange?: SyncActionValue_SyncActionMessageRange;
};
/**
 * Describes the message SyncActionValue.DeleteChatAction.
 * Use `create(SyncActionValue_DeleteChatActionSchema)` to create a new message.
 */
declare const SyncActionValue_DeleteChatActionSchema: GenMessage<SyncActionValue_DeleteChatAction>;
/**
 * @generated from message SyncActionValue.DeleteIndividualCallLogAction
 */
type SyncActionValue_DeleteIndividualCallLogAction = Message$1<"SyncActionValue.DeleteIndividualCallLogAction"> & {
    /**
     * @generated from field: optional string peerJid = 1;
     */
    peerJid: string;
    /**
     * @generated from field: optional bool isIncoming = 2;
     */
    isIncoming: boolean;
};
/**
 * Describes the message SyncActionValue.DeleteIndividualCallLogAction.
 * Use `create(SyncActionValue_DeleteIndividualCallLogActionSchema)` to create a new message.
 */
declare const SyncActionValue_DeleteIndividualCallLogActionSchema: GenMessage<SyncActionValue_DeleteIndividualCallLogAction>;
/**
 * @generated from message SyncActionValue.DeleteMessageForMeAction
 */
type SyncActionValue_DeleteMessageForMeAction = Message$1<"SyncActionValue.DeleteMessageForMeAction"> & {
    /**
     * @generated from field: optional bool deleteMedia = 1;
     */
    deleteMedia: boolean;
    /**
     * @generated from field: optional int64 messageTimestamp = 2;
     */
    messageTimestamp: bigint;
};
/**
 * Describes the message SyncActionValue.DeleteMessageForMeAction.
 * Use `create(SyncActionValue_DeleteMessageForMeActionSchema)` to create a new message.
 */
declare const SyncActionValue_DeleteMessageForMeActionSchema: GenMessage<SyncActionValue_DeleteMessageForMeAction>;
/**
 * @generated from message SyncActionValue.ExternalWebBetaAction
 */
type SyncActionValue_ExternalWebBetaAction = Message$1<"SyncActionValue.ExternalWebBetaAction"> & {
    /**
     * @generated from field: optional bool isOptIn = 1;
     */
    isOptIn: boolean;
};
/**
 * Describes the message SyncActionValue.ExternalWebBetaAction.
 * Use `create(SyncActionValue_ExternalWebBetaActionSchema)` to create a new message.
 */
declare const SyncActionValue_ExternalWebBetaActionSchema: GenMessage<SyncActionValue_ExternalWebBetaAction>;
/**
 * @generated from message SyncActionValue.FavoritesAction
 */
type SyncActionValue_FavoritesAction = Message$1<"SyncActionValue.FavoritesAction"> & {
    /**
     * @generated from field: repeated SyncActionValue.FavoritesAction.Favorite favorites = 1;
     */
    favorites: SyncActionValue_FavoritesAction_Favorite[];
};
/**
 * Describes the message SyncActionValue.FavoritesAction.
 * Use `create(SyncActionValue_FavoritesActionSchema)` to create a new message.
 */
declare const SyncActionValue_FavoritesActionSchema: GenMessage<SyncActionValue_FavoritesAction>;
/**
 * @generated from message SyncActionValue.FavoritesAction.Favorite
 */
type SyncActionValue_FavoritesAction_Favorite = Message$1<"SyncActionValue.FavoritesAction.Favorite"> & {
    /**
     * @generated from field: optional string id = 1;
     */
    id: string;
};
/**
 * Describes the message SyncActionValue.FavoritesAction.Favorite.
 * Use `create(SyncActionValue_FavoritesAction_FavoriteSchema)` to create a new message.
 */
declare const SyncActionValue_FavoritesAction_FavoriteSchema: GenMessage<SyncActionValue_FavoritesAction_Favorite>;
/**
 * @generated from message SyncActionValue.KeyExpiration
 */
type SyncActionValue_KeyExpiration = Message$1<"SyncActionValue.KeyExpiration"> & {
    /**
     * @generated from field: optional int32 expiredKeyEpoch = 1;
     */
    expiredKeyEpoch: number;
};
/**
 * Describes the message SyncActionValue.KeyExpiration.
 * Use `create(SyncActionValue_KeyExpirationSchema)` to create a new message.
 */
declare const SyncActionValue_KeyExpirationSchema: GenMessage<SyncActionValue_KeyExpiration>;
/**
 * @generated from message SyncActionValue.LabelAssociationAction
 */
type SyncActionValue_LabelAssociationAction = Message$1<"SyncActionValue.LabelAssociationAction"> & {
    /**
     * @generated from field: optional bool labeled = 1;
     */
    labeled: boolean;
};
/**
 * Describes the message SyncActionValue.LabelAssociationAction.
 * Use `create(SyncActionValue_LabelAssociationActionSchema)` to create a new message.
 */
declare const SyncActionValue_LabelAssociationActionSchema: GenMessage<SyncActionValue_LabelAssociationAction>;
/**
 * @generated from message SyncActionValue.LabelEditAction
 */
type SyncActionValue_LabelEditAction = Message$1<"SyncActionValue.LabelEditAction"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional int32 color = 2;
     */
    color: number;
    /**
     * @generated from field: optional int32 predefinedId = 3;
     */
    predefinedId: number;
    /**
     * @generated from field: optional bool deleted = 4;
     */
    deleted: boolean;
    /**
     * @generated from field: optional int32 orderIndex = 5;
     */
    orderIndex: number;
    /**
     * @generated from field: optional bool isActive = 6;
     */
    isActive: boolean;
    /**
     * @generated from field: optional SyncActionValue.LabelEditAction.ListType type = 7;
     */
    type: SyncActionValue_LabelEditAction_ListType;
    /**
     * @generated from field: optional bool isImmutable = 8;
     */
    isImmutable: boolean;
};
/**
 * Describes the message SyncActionValue.LabelEditAction.
 * Use `create(SyncActionValue_LabelEditActionSchema)` to create a new message.
 */
declare const SyncActionValue_LabelEditActionSchema: GenMessage<SyncActionValue_LabelEditAction>;
/**
 * @generated from enum SyncActionValue.LabelEditAction.ListType
 */
declare enum SyncActionValue_LabelEditAction_ListType {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: UNREAD = 1;
     */
    UNREAD = 1,
    /**
     * @generated from enum value: GROUPS = 2;
     */
    GROUPS = 2,
    /**
     * @generated from enum value: FAVORITES = 3;
     */
    FAVORITES = 3,
    /**
     * @generated from enum value: PREDEFINED = 4;
     */
    PREDEFINED = 4,
    /**
     * @generated from enum value: CUSTOM = 5;
     */
    CUSTOM = 5,
    /**
     * @generated from enum value: COMMUNITY = 6;
     */
    COMMUNITY = 6,
    /**
     * @generated from enum value: SERVER_ASSIGNED = 7;
     */
    SERVER_ASSIGNED = 7
}
/**
 * Describes the enum SyncActionValue.LabelEditAction.ListType.
 */
declare const SyncActionValue_LabelEditAction_ListTypeSchema: GenEnum<SyncActionValue_LabelEditAction_ListType>;
/**
 * @generated from message SyncActionValue.LabelReorderingAction
 */
type SyncActionValue_LabelReorderingAction = Message$1<"SyncActionValue.LabelReorderingAction"> & {
    /**
     * @generated from field: repeated int32 sortedLabelIds = 1;
     */
    sortedLabelIds: number[];
};
/**
 * Describes the message SyncActionValue.LabelReorderingAction.
 * Use `create(SyncActionValue_LabelReorderingActionSchema)` to create a new message.
 */
declare const SyncActionValue_LabelReorderingActionSchema: GenMessage<SyncActionValue_LabelReorderingAction>;
/**
 * @generated from message SyncActionValue.LidContactAction
 */
type SyncActionValue_LidContactAction = Message$1<"SyncActionValue.LidContactAction"> & {
    /**
     * @generated from field: optional string fullName = 1;
     */
    fullName: string;
    /**
     * @generated from field: optional string firstName = 2;
     */
    firstName: string;
    /**
     * @generated from field: optional string username = 3;
     */
    username: string;
    /**
     * @generated from field: optional bool saveOnPrimaryAddressbook = 4;
     */
    saveOnPrimaryAddressbook: boolean;
};
/**
 * Describes the message SyncActionValue.LidContactAction.
 * Use `create(SyncActionValue_LidContactActionSchema)` to create a new message.
 */
declare const SyncActionValue_LidContactActionSchema: GenMessage<SyncActionValue_LidContactAction>;
/**
 * @generated from message SyncActionValue.LocaleSetting
 */
type SyncActionValue_LocaleSetting = Message$1<"SyncActionValue.LocaleSetting"> & {
    /**
     * @generated from field: optional string locale = 1;
     */
    locale: string;
};
/**
 * Describes the message SyncActionValue.LocaleSetting.
 * Use `create(SyncActionValue_LocaleSettingSchema)` to create a new message.
 */
declare const SyncActionValue_LocaleSettingSchema: GenMessage<SyncActionValue_LocaleSetting>;
/**
 * @generated from message SyncActionValue.LockChatAction
 */
type SyncActionValue_LockChatAction = Message$1<"SyncActionValue.LockChatAction"> & {
    /**
     * @generated from field: optional bool locked = 1;
     */
    locked: boolean;
};
/**
 * Describes the message SyncActionValue.LockChatAction.
 * Use `create(SyncActionValue_LockChatActionSchema)` to create a new message.
 */
declare const SyncActionValue_LockChatActionSchema: GenMessage<SyncActionValue_LockChatAction>;
/**
 * @generated from message SyncActionValue.MarkChatAsReadAction
 */
type SyncActionValue_MarkChatAsReadAction = Message$1<"SyncActionValue.MarkChatAsReadAction"> & {
    /**
     * @generated from field: optional bool read = 1;
     */
    read: boolean;
    /**
     * @generated from field: optional SyncActionValue.SyncActionMessageRange messageRange = 2;
     */
    messageRange?: SyncActionValue_SyncActionMessageRange;
};
/**
 * Describes the message SyncActionValue.MarkChatAsReadAction.
 * Use `create(SyncActionValue_MarkChatAsReadActionSchema)` to create a new message.
 */
declare const SyncActionValue_MarkChatAsReadActionSchema: GenMessage<SyncActionValue_MarkChatAsReadAction>;
/**
 * @generated from message SyncActionValue.MarketingMessageAction
 */
type SyncActionValue_MarketingMessageAction = Message$1<"SyncActionValue.MarketingMessageAction"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional string message = 2;
     */
    message: string;
    /**
     * @generated from field: optional SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType type = 3;
     */
    type: SyncActionValue_MarketingMessageAction_MarketingMessagePrototypeType;
    /**
     * @generated from field: optional int64 createdAt = 4;
     */
    createdAt: bigint;
    /**
     * @generated from field: optional int64 lastSentAt = 5;
     */
    lastSentAt: bigint;
    /**
     * @generated from field: optional bool isDeleted = 6;
     */
    isDeleted: boolean;
    /**
     * @generated from field: optional string mediaId = 7;
     */
    mediaId: string;
};
/**
 * Describes the message SyncActionValue.MarketingMessageAction.
 * Use `create(SyncActionValue_MarketingMessageActionSchema)` to create a new message.
 */
declare const SyncActionValue_MarketingMessageActionSchema: GenMessage<SyncActionValue_MarketingMessageAction>;
/**
 * @generated from enum SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType
 */
declare enum SyncActionValue_MarketingMessageAction_MarketingMessagePrototypeType {
    /**
     * @generated from enum value: PERSONALIZED = 0;
     */
    PERSONALIZED = 0
}
/**
 * Describes the enum SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType.
 */
declare const SyncActionValue_MarketingMessageAction_MarketingMessagePrototypeTypeSchema: GenEnum<SyncActionValue_MarketingMessageAction_MarketingMessagePrototypeType>;
/**
 * @generated from message SyncActionValue.MarketingMessageBroadcastAction
 */
type SyncActionValue_MarketingMessageBroadcastAction = Message$1<"SyncActionValue.MarketingMessageBroadcastAction"> & {
    /**
     * @generated from field: optional int32 repliedCount = 1;
     */
    repliedCount: number;
};
/**
 * Describes the message SyncActionValue.MarketingMessageBroadcastAction.
 * Use `create(SyncActionValue_MarketingMessageBroadcastActionSchema)` to create a new message.
 */
declare const SyncActionValue_MarketingMessageBroadcastActionSchema: GenMessage<SyncActionValue_MarketingMessageBroadcastAction>;
/**
 * @generated from message SyncActionValue.MerchantPaymentPartnerAction
 */
type SyncActionValue_MerchantPaymentPartnerAction = Message$1<"SyncActionValue.MerchantPaymentPartnerAction"> & {
    /**
     * @generated from field: required SyncActionValue.MerchantPaymentPartnerAction.Status status = 1;
     */
    status: SyncActionValue_MerchantPaymentPartnerAction_Status;
    /**
     * @generated from field: required string country = 2;
     */
    country: string;
    /**
     * @generated from field: optional string gatewayName = 3;
     */
    gatewayName: string;
    /**
     * @generated from field: optional string credentialId = 4;
     */
    credentialId: string;
};
/**
 * Describes the message SyncActionValue.MerchantPaymentPartnerAction.
 * Use `create(SyncActionValue_MerchantPaymentPartnerActionSchema)` to create a new message.
 */
declare const SyncActionValue_MerchantPaymentPartnerActionSchema: GenMessage<SyncActionValue_MerchantPaymentPartnerAction>;
/**
 * @generated from enum SyncActionValue.MerchantPaymentPartnerAction.Status
 */
declare enum SyncActionValue_MerchantPaymentPartnerAction_Status {
    /**
     * @generated from enum value: ACTIVE = 0;
     */
    ACTIVE = 0,
    /**
     * @generated from enum value: INACTIVE = 1;
     */
    INACTIVE = 1
}
/**
 * Describes the enum SyncActionValue.MerchantPaymentPartnerAction.Status.
 */
declare const SyncActionValue_MerchantPaymentPartnerAction_StatusSchema: GenEnum<SyncActionValue_MerchantPaymentPartnerAction_Status>;
/**
 * @generated from message SyncActionValue.MuteAction
 */
type SyncActionValue_MuteAction = Message$1<"SyncActionValue.MuteAction"> & {
    /**
     * @generated from field: optional bool muted = 1;
     */
    muted: boolean;
    /**
     * @generated from field: optional int64 muteEndTimestamp = 2;
     */
    muteEndTimestamp: bigint;
    /**
     * @generated from field: optional bool autoMuted = 3;
     */
    autoMuted: boolean;
};
/**
 * Describes the message SyncActionValue.MuteAction.
 * Use `create(SyncActionValue_MuteActionSchema)` to create a new message.
 */
declare const SyncActionValue_MuteActionSchema: GenMessage<SyncActionValue_MuteAction>;
/**
 * @generated from message SyncActionValue.NoteEditAction
 */
type SyncActionValue_NoteEditAction = Message$1<"SyncActionValue.NoteEditAction"> & {
    /**
     * @generated from field: optional SyncActionValue.NoteEditAction.NoteType type = 1;
     */
    type: SyncActionValue_NoteEditAction_NoteType;
    /**
     * @generated from field: optional string chatJid = 2;
     */
    chatJid: string;
    /**
     * @generated from field: optional int64 createdAt = 3;
     */
    createdAt: bigint;
    /**
     * @generated from field: optional bool deleted = 4;
     */
    deleted: boolean;
    /**
     * @generated from field: optional string unstructuredContent = 5;
     */
    unstructuredContent: string;
};
/**
 * Describes the message SyncActionValue.NoteEditAction.
 * Use `create(SyncActionValue_NoteEditActionSchema)` to create a new message.
 */
declare const SyncActionValue_NoteEditActionSchema: GenMessage<SyncActionValue_NoteEditAction>;
/**
 * @generated from enum SyncActionValue.NoteEditAction.NoteType
 */
declare enum SyncActionValue_NoteEditAction_NoteType {
    /**
     * @generated from enum value: UNSTRUCTURED = 1;
     */
    UNSTRUCTURED = 1,
    /**
     * @generated from enum value: STRUCTURED = 2;
     */
    STRUCTURED = 2
}
/**
 * Describes the enum SyncActionValue.NoteEditAction.NoteType.
 */
declare const SyncActionValue_NoteEditAction_NoteTypeSchema: GenEnum<SyncActionValue_NoteEditAction_NoteType>;
/**
 * @generated from message SyncActionValue.NotificationActivitySettingAction
 */
type SyncActionValue_NotificationActivitySettingAction = Message$1<"SyncActionValue.NotificationActivitySettingAction"> & {
    /**
     * @generated from field: optional SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting notificationActivitySetting = 1;
     */
    notificationActivitySetting: SyncActionValue_NotificationActivitySettingAction_NotificationActivitySetting;
};
/**
 * Describes the message SyncActionValue.NotificationActivitySettingAction.
 * Use `create(SyncActionValue_NotificationActivitySettingActionSchema)` to create a new message.
 */
declare const SyncActionValue_NotificationActivitySettingActionSchema: GenMessage<SyncActionValue_NotificationActivitySettingAction>;
/**
 * @generated from enum SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting
 */
declare enum SyncActionValue_NotificationActivitySettingAction_NotificationActivitySetting {
    /**
     * @generated from enum value: DEFAULT_ALL_MESSAGES = 0;
     */
    DEFAULT_ALL_MESSAGES = 0,
    /**
     * @generated from enum value: ALL_MESSAGES = 1;
     */
    ALL_MESSAGES = 1,
    /**
     * @generated from enum value: HIGHLIGHTS = 2;
     */
    HIGHLIGHTS = 2,
    /**
     * @generated from enum value: DEFAULT_HIGHLIGHTS = 3;
     */
    DEFAULT_HIGHLIGHTS = 3
}
/**
 * Describes the enum SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting.
 */
declare const SyncActionValue_NotificationActivitySettingAction_NotificationActivitySettingSchema: GenEnum<SyncActionValue_NotificationActivitySettingAction_NotificationActivitySetting>;
/**
 * @generated from message SyncActionValue.NuxAction
 */
type SyncActionValue_NuxAction = Message$1<"SyncActionValue.NuxAction"> & {
    /**
     * @generated from field: optional bool acknowledged = 1;
     */
    acknowledged: boolean;
};
/**
 * Describes the message SyncActionValue.NuxAction.
 * Use `create(SyncActionValue_NuxActionSchema)` to create a new message.
 */
declare const SyncActionValue_NuxActionSchema: GenMessage<SyncActionValue_NuxAction>;
/**
 * @generated from message SyncActionValue.PaymentInfoAction
 */
type SyncActionValue_PaymentInfoAction = Message$1<"SyncActionValue.PaymentInfoAction"> & {
    /**
     * @generated from field: optional string cpi = 1;
     */
    cpi: string;
};
/**
 * Describes the message SyncActionValue.PaymentInfoAction.
 * Use `create(SyncActionValue_PaymentInfoActionSchema)` to create a new message.
 */
declare const SyncActionValue_PaymentInfoActionSchema: GenMessage<SyncActionValue_PaymentInfoAction>;
/**
 * @generated from message SyncActionValue.PaymentTosAction
 */
type SyncActionValue_PaymentTosAction = Message$1<"SyncActionValue.PaymentTosAction"> & {
    /**
     * @generated from field: required SyncActionValue.PaymentTosAction.PaymentNotice paymentNotice = 1;
     */
    paymentNotice: SyncActionValue_PaymentTosAction_PaymentNotice;
    /**
     * @generated from field: required bool accepted = 2;
     */
    accepted: boolean;
};
/**
 * Describes the message SyncActionValue.PaymentTosAction.
 * Use `create(SyncActionValue_PaymentTosActionSchema)` to create a new message.
 */
declare const SyncActionValue_PaymentTosActionSchema: GenMessage<SyncActionValue_PaymentTosAction>;
/**
 * @generated from enum SyncActionValue.PaymentTosAction.PaymentNotice
 */
declare enum SyncActionValue_PaymentTosAction_PaymentNotice {
    /**
     * @generated from enum value: BR_PAY_PRIVACY_POLICY = 0;
     */
    BR_PAY_PRIVACY_POLICY = 0
}
/**
 * Describes the enum SyncActionValue.PaymentTosAction.PaymentNotice.
 */
declare const SyncActionValue_PaymentTosAction_PaymentNoticeSchema: GenEnum<SyncActionValue_PaymentTosAction_PaymentNotice>;
/**
 * @generated from message SyncActionValue.PinAction
 */
type SyncActionValue_PinAction = Message$1<"SyncActionValue.PinAction"> & {
    /**
     * @generated from field: optional bool pinned = 1;
     */
    pinned: boolean;
};
/**
 * Describes the message SyncActionValue.PinAction.
 * Use `create(SyncActionValue_PinActionSchema)` to create a new message.
 */
declare const SyncActionValue_PinActionSchema: GenMessage<SyncActionValue_PinAction>;
/**
 * @generated from message SyncActionValue.PnForLidChatAction
 */
type SyncActionValue_PnForLidChatAction = Message$1<"SyncActionValue.PnForLidChatAction"> & {
    /**
     * @generated from field: optional string pnJid = 1;
     */
    pnJid: string;
};
/**
 * Describes the message SyncActionValue.PnForLidChatAction.
 * Use `create(SyncActionValue_PnForLidChatActionSchema)` to create a new message.
 */
declare const SyncActionValue_PnForLidChatActionSchema: GenMessage<SyncActionValue_PnForLidChatAction>;
/**
 * @generated from message SyncActionValue.PrimaryFeature
 */
type SyncActionValue_PrimaryFeature = Message$1<"SyncActionValue.PrimaryFeature"> & {
    /**
     * @generated from field: repeated string flags = 1;
     */
    flags: string[];
};
/**
 * Describes the message SyncActionValue.PrimaryFeature.
 * Use `create(SyncActionValue_PrimaryFeatureSchema)` to create a new message.
 */
declare const SyncActionValue_PrimaryFeatureSchema: GenMessage<SyncActionValue_PrimaryFeature>;
/**
 * @generated from message SyncActionValue.PrimaryVersionAction
 */
type SyncActionValue_PrimaryVersionAction = Message$1<"SyncActionValue.PrimaryVersionAction"> & {
    /**
     * @generated from field: optional string version = 1;
     */
    version: string;
};
/**
 * Describes the message SyncActionValue.PrimaryVersionAction.
 * Use `create(SyncActionValue_PrimaryVersionActionSchema)` to create a new message.
 */
declare const SyncActionValue_PrimaryVersionActionSchema: GenMessage<SyncActionValue_PrimaryVersionAction>;
/**
 * @generated from message SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction
 */
type SyncActionValue_PrivacySettingChannelsPersonalisedRecommendationAction = Message$1<"SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction"> & {
    /**
     * @generated from field: optional bool isUserOptedOut = 1;
     */
    isUserOptedOut: boolean;
};
/**
 * Describes the message SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction.
 * Use `create(SyncActionValue_PrivacySettingChannelsPersonalisedRecommendationActionSchema)` to create a new message.
 */
declare const SyncActionValue_PrivacySettingChannelsPersonalisedRecommendationActionSchema: GenMessage<SyncActionValue_PrivacySettingChannelsPersonalisedRecommendationAction>;
/**
 * @generated from message SyncActionValue.PrivacySettingDisableLinkPreviewsAction
 */
type SyncActionValue_PrivacySettingDisableLinkPreviewsAction = Message$1<"SyncActionValue.PrivacySettingDisableLinkPreviewsAction"> & {
    /**
     * @generated from field: optional bool isPreviewsDisabled = 1;
     */
    isPreviewsDisabled: boolean;
};
/**
 * Describes the message SyncActionValue.PrivacySettingDisableLinkPreviewsAction.
 * Use `create(SyncActionValue_PrivacySettingDisableLinkPreviewsActionSchema)` to create a new message.
 */
declare const SyncActionValue_PrivacySettingDisableLinkPreviewsActionSchema: GenMessage<SyncActionValue_PrivacySettingDisableLinkPreviewsAction>;
/**
 * @generated from message SyncActionValue.PrivacySettingRelayAllCalls
 */
type SyncActionValue_PrivacySettingRelayAllCalls = Message$1<"SyncActionValue.PrivacySettingRelayAllCalls"> & {
    /**
     * @generated from field: optional bool isEnabled = 1;
     */
    isEnabled: boolean;
};
/**
 * Describes the message SyncActionValue.PrivacySettingRelayAllCalls.
 * Use `create(SyncActionValue_PrivacySettingRelayAllCallsSchema)` to create a new message.
 */
declare const SyncActionValue_PrivacySettingRelayAllCallsSchema: GenMessage<SyncActionValue_PrivacySettingRelayAllCalls>;
/**
 * @generated from message SyncActionValue.PushNameSetting
 */
type SyncActionValue_PushNameSetting = Message$1<"SyncActionValue.PushNameSetting"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name: string;
};
/**
 * Describes the message SyncActionValue.PushNameSetting.
 * Use `create(SyncActionValue_PushNameSettingSchema)` to create a new message.
 */
declare const SyncActionValue_PushNameSettingSchema: GenMessage<SyncActionValue_PushNameSetting>;
/**
 * @generated from message SyncActionValue.QuickReplyAction
 */
type SyncActionValue_QuickReplyAction = Message$1<"SyncActionValue.QuickReplyAction"> & {
    /**
     * @generated from field: optional string shortcut = 1;
     */
    shortcut: string;
    /**
     * @generated from field: optional string message = 2;
     */
    message: string;
    /**
     * @generated from field: repeated string keywords = 3;
     */
    keywords: string[];
    /**
     * @generated from field: optional int32 count = 4;
     */
    count: number;
    /**
     * @generated from field: optional bool deleted = 5;
     */
    deleted: boolean;
};
/**
 * Describes the message SyncActionValue.QuickReplyAction.
 * Use `create(SyncActionValue_QuickReplyActionSchema)` to create a new message.
 */
declare const SyncActionValue_QuickReplyActionSchema: GenMessage<SyncActionValue_QuickReplyAction>;
/**
 * @generated from message SyncActionValue.RecentEmojiWeightsAction
 */
type SyncActionValue_RecentEmojiWeightsAction = Message$1<"SyncActionValue.RecentEmojiWeightsAction"> & {
    /**
     * @generated from field: repeated RecentEmojiWeight weights = 1;
     */
    weights: RecentEmojiWeight[];
};
/**
 * Describes the message SyncActionValue.RecentEmojiWeightsAction.
 * Use `create(SyncActionValue_RecentEmojiWeightsActionSchema)` to create a new message.
 */
declare const SyncActionValue_RecentEmojiWeightsActionSchema: GenMessage<SyncActionValue_RecentEmojiWeightsAction>;
/**
 * @generated from message SyncActionValue.RemoveRecentStickerAction
 */
type SyncActionValue_RemoveRecentStickerAction = Message$1<"SyncActionValue.RemoveRecentStickerAction"> & {
    /**
     * @generated from field: optional int64 lastStickerSentTs = 1;
     */
    lastStickerSentTs: bigint;
};
/**
 * Describes the message SyncActionValue.RemoveRecentStickerAction.
 * Use `create(SyncActionValue_RemoveRecentStickerActionSchema)` to create a new message.
 */
declare const SyncActionValue_RemoveRecentStickerActionSchema: GenMessage<SyncActionValue_RemoveRecentStickerAction>;
/**
 * @generated from message SyncActionValue.SecurityNotificationSetting
 */
type SyncActionValue_SecurityNotificationSetting = Message$1<"SyncActionValue.SecurityNotificationSetting"> & {
    /**
     * @generated from field: optional bool showNotification = 1;
     */
    showNotification: boolean;
};
/**
 * Describes the message SyncActionValue.SecurityNotificationSetting.
 * Use `create(SyncActionValue_SecurityNotificationSettingSchema)` to create a new message.
 */
declare const SyncActionValue_SecurityNotificationSettingSchema: GenMessage<SyncActionValue_SecurityNotificationSetting>;
/**
 * @generated from message SyncActionValue.StarAction
 */
type SyncActionValue_StarAction = Message$1<"SyncActionValue.StarAction"> & {
    /**
     * @generated from field: optional bool starred = 1;
     */
    starred: boolean;
};
/**
 * Describes the message SyncActionValue.StarAction.
 * Use `create(SyncActionValue_StarActionSchema)` to create a new message.
 */
declare const SyncActionValue_StarActionSchema: GenMessage<SyncActionValue_StarAction>;
/**
 * @generated from message SyncActionValue.StatusPrivacyAction
 */
type SyncActionValue_StatusPrivacyAction = Message$1<"SyncActionValue.StatusPrivacyAction"> & {
    /**
     * @generated from field: optional SyncActionValue.StatusPrivacyAction.StatusDistributionMode mode = 1;
     */
    mode: SyncActionValue_StatusPrivacyAction_StatusDistributionMode;
    /**
     * @generated from field: repeated string userJid = 2;
     */
    userJid: string[];
};
/**
 * Describes the message SyncActionValue.StatusPrivacyAction.
 * Use `create(SyncActionValue_StatusPrivacyActionSchema)` to create a new message.
 */
declare const SyncActionValue_StatusPrivacyActionSchema: GenMessage<SyncActionValue_StatusPrivacyAction>;
/**
 * @generated from enum SyncActionValue.StatusPrivacyAction.StatusDistributionMode
 */
declare enum SyncActionValue_StatusPrivacyAction_StatusDistributionMode {
    /**
     * @generated from enum value: ALLOW_LIST = 0;
     */
    ALLOW_LIST = 0,
    /**
     * @generated from enum value: DENY_LIST = 1;
     */
    DENY_LIST = 1,
    /**
     * @generated from enum value: CONTACTS = 2;
     */
    CONTACTS = 2
}
/**
 * Describes the enum SyncActionValue.StatusPrivacyAction.StatusDistributionMode.
 */
declare const SyncActionValue_StatusPrivacyAction_StatusDistributionModeSchema: GenEnum<SyncActionValue_StatusPrivacyAction_StatusDistributionMode>;
/**
 * @generated from message SyncActionValue.StickerAction
 */
type SyncActionValue_StickerAction = Message$1<"SyncActionValue.StickerAction"> & {
    /**
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * @generated from field: optional bytes fileEncSha256 = 2;
     */
    fileEncSha256: Uint8Array;
    /**
     * @generated from field: optional bytes mediaKey = 3;
     */
    mediaKey: Uint8Array;
    /**
     * @generated from field: optional string mimetype = 4;
     */
    mimetype: string;
    /**
     * @generated from field: optional uint32 height = 5;
     */
    height: number;
    /**
     * @generated from field: optional uint32 width = 6;
     */
    width: number;
    /**
     * @generated from field: optional string directPath = 7;
     */
    directPath: string;
    /**
     * @generated from field: optional uint64 fileLength = 8;
     */
    fileLength: bigint;
    /**
     * @generated from field: optional bool isFavorite = 9;
     */
    isFavorite: boolean;
    /**
     * @generated from field: optional uint32 deviceIdHint = 10;
     */
    deviceIdHint: number;
    /**
     * @generated from field: optional bool isLottie = 11;
     */
    isLottie: boolean;
};
/**
 * Describes the message SyncActionValue.StickerAction.
 * Use `create(SyncActionValue_StickerActionSchema)` to create a new message.
 */
declare const SyncActionValue_StickerActionSchema: GenMessage<SyncActionValue_StickerAction>;
/**
 * @generated from message SyncActionValue.SubscriptionAction
 */
type SyncActionValue_SubscriptionAction = Message$1<"SyncActionValue.SubscriptionAction"> & {
    /**
     * @generated from field: optional bool isDeactivated = 1;
     */
    isDeactivated: boolean;
    /**
     * @generated from field: optional bool isAutoRenewing = 2;
     */
    isAutoRenewing: boolean;
    /**
     * @generated from field: optional int64 expirationDate = 3;
     */
    expirationDate: bigint;
};
/**
 * Describes the message SyncActionValue.SubscriptionAction.
 * Use `create(SyncActionValue_SubscriptionActionSchema)` to create a new message.
 */
declare const SyncActionValue_SubscriptionActionSchema: GenMessage<SyncActionValue_SubscriptionAction>;
/**
 * @generated from message SyncActionValue.SyncActionMessage
 */
type SyncActionValue_SyncActionMessage = Message$1<"SyncActionValue.SyncActionMessage"> & {
    /**
     * @generated from field: optional MessageKey key = 1;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional int64 timestamp = 2;
     */
    timestamp: bigint;
};
/**
 * Describes the message SyncActionValue.SyncActionMessage.
 * Use `create(SyncActionValue_SyncActionMessageSchema)` to create a new message.
 */
declare const SyncActionValue_SyncActionMessageSchema: GenMessage<SyncActionValue_SyncActionMessage>;
/**
 * @generated from message SyncActionValue.SyncActionMessageRange
 */
type SyncActionValue_SyncActionMessageRange = Message$1<"SyncActionValue.SyncActionMessageRange"> & {
    /**
     * @generated from field: optional int64 lastMessageTimestamp = 1;
     */
    lastMessageTimestamp: bigint;
    /**
     * @generated from field: optional int64 lastSystemMessageTimestamp = 2;
     */
    lastSystemMessageTimestamp: bigint;
    /**
     * @generated from field: repeated SyncActionValue.SyncActionMessage messages = 3;
     */
    messages: SyncActionValue_SyncActionMessage[];
};
/**
 * Describes the message SyncActionValue.SyncActionMessageRange.
 * Use `create(SyncActionValue_SyncActionMessageRangeSchema)` to create a new message.
 */
declare const SyncActionValue_SyncActionMessageRangeSchema: GenMessage<SyncActionValue_SyncActionMessageRange>;
/**
 * @generated from message SyncActionValue.TimeFormatAction
 */
type SyncActionValue_TimeFormatAction = Message$1<"SyncActionValue.TimeFormatAction"> & {
    /**
     * @generated from field: optional bool isTwentyFourHourFormatEnabled = 1;
     */
    isTwentyFourHourFormatEnabled: boolean;
};
/**
 * Describes the message SyncActionValue.TimeFormatAction.
 * Use `create(SyncActionValue_TimeFormatActionSchema)` to create a new message.
 */
declare const SyncActionValue_TimeFormatActionSchema: GenMessage<SyncActionValue_TimeFormatAction>;
/**
 * @generated from message SyncActionValue.UnarchiveChatsSetting
 */
type SyncActionValue_UnarchiveChatsSetting = Message$1<"SyncActionValue.UnarchiveChatsSetting"> & {
    /**
     * @generated from field: optional bool unarchiveChats = 1;
     */
    unarchiveChats: boolean;
};
/**
 * Describes the message SyncActionValue.UnarchiveChatsSetting.
 * Use `create(SyncActionValue_UnarchiveChatsSettingSchema)` to create a new message.
 */
declare const SyncActionValue_UnarchiveChatsSettingSchema: GenMessage<SyncActionValue_UnarchiveChatsSetting>;
/**
 * @generated from message SyncActionValue.UserStatusMuteAction
 */
type SyncActionValue_UserStatusMuteAction = Message$1<"SyncActionValue.UserStatusMuteAction"> & {
    /**
     * @generated from field: optional bool muted = 1;
     */
    muted: boolean;
};
/**
 * Describes the message SyncActionValue.UserStatusMuteAction.
 * Use `create(SyncActionValue_UserStatusMuteActionSchema)` to create a new message.
 */
declare const SyncActionValue_UserStatusMuteActionSchema: GenMessage<SyncActionValue_UserStatusMuteAction>;
/**
 * @generated from message SyncActionValue.UsernameChatStartModeAction
 */
type SyncActionValue_UsernameChatStartModeAction = Message$1<"SyncActionValue.UsernameChatStartModeAction"> & {
    /**
     * @generated from field: optional SyncActionValue.UsernameChatStartModeAction.ChatStartMode chatStartMode = 1;
     */
    chatStartMode: SyncActionValue_UsernameChatStartModeAction_ChatStartMode;
};
/**
 * Describes the message SyncActionValue.UsernameChatStartModeAction.
 * Use `create(SyncActionValue_UsernameChatStartModeActionSchema)` to create a new message.
 */
declare const SyncActionValue_UsernameChatStartModeActionSchema: GenMessage<SyncActionValue_UsernameChatStartModeAction>;
/**
 * @generated from enum SyncActionValue.UsernameChatStartModeAction.ChatStartMode
 */
declare enum SyncActionValue_UsernameChatStartModeAction_ChatStartMode {
    /**
     * @generated from enum value: LID = 1;
     */
    LID = 1,
    /**
     * @generated from enum value: PN = 2;
     */
    PN = 2
}
/**
 * Describes the enum SyncActionValue.UsernameChatStartModeAction.ChatStartMode.
 */
declare const SyncActionValue_UsernameChatStartModeAction_ChatStartModeSchema: GenEnum<SyncActionValue_UsernameChatStartModeAction_ChatStartMode>;
/**
 * @generated from message SyncActionValue.WaffleAccountLinkStateAction
 */
type SyncActionValue_WaffleAccountLinkStateAction = Message$1<"SyncActionValue.WaffleAccountLinkStateAction"> & {
    /**
     * @generated from field: optional SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState linkState = 2;
     */
    linkState: SyncActionValue_WaffleAccountLinkStateAction_AccountLinkState;
};
/**
 * Describes the message SyncActionValue.WaffleAccountLinkStateAction.
 * Use `create(SyncActionValue_WaffleAccountLinkStateActionSchema)` to create a new message.
 */
declare const SyncActionValue_WaffleAccountLinkStateActionSchema: GenMessage<SyncActionValue_WaffleAccountLinkStateAction>;
/**
 * @generated from enum SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState
 */
declare enum SyncActionValue_WaffleAccountLinkStateAction_AccountLinkState {
    /**
     * @generated from enum value: ACTIVE = 0;
     */
    ACTIVE = 0
}
/**
 * Describes the enum SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState.
 */
declare const SyncActionValue_WaffleAccountLinkStateAction_AccountLinkStateSchema: GenEnum<SyncActionValue_WaffleAccountLinkStateAction_AccountLinkState>;
/**
 * @generated from message SyncActionValue.WamoUserIdentifierAction
 */
type SyncActionValue_WamoUserIdentifierAction = Message$1<"SyncActionValue.WamoUserIdentifierAction"> & {
    /**
     * @generated from field: optional string identifier = 1;
     */
    identifier: string;
};
/**
 * Describes the message SyncActionValue.WamoUserIdentifierAction.
 * Use `create(SyncActionValue_WamoUserIdentifierActionSchema)` to create a new message.
 */
declare const SyncActionValue_WamoUserIdentifierActionSchema: GenMessage<SyncActionValue_WamoUserIdentifierAction>;
/**
 * @generated from message SyncdIndex
 */
type SyncdIndex = Message$1<"SyncdIndex"> & {
    /**
     * @generated from field: optional bytes blob = 1;
     */
    blob: Uint8Array;
};
/**
 * Describes the message SyncdIndex.
 * Use `create(SyncdIndexSchema)` to create a new message.
 */
declare const SyncdIndexSchema: GenMessage<SyncdIndex>;
/**
 * @generated from message SyncdMutation
 */
type SyncdMutation = Message$1<"SyncdMutation"> & {
    /**
     * @generated from field: optional SyncdMutation.SyncdOperation operation = 1;
     */
    operation: SyncdMutation_SyncdOperation;
    /**
     * @generated from field: optional SyncdRecord record = 2;
     */
    record?: SyncdRecord;
};
/**
 * Describes the message SyncdMutation.
 * Use `create(SyncdMutationSchema)` to create a new message.
 */
declare const SyncdMutationSchema: GenMessage<SyncdMutation>;
/**
 * @generated from enum SyncdMutation.SyncdOperation
 */
declare enum SyncdMutation_SyncdOperation {
    /**
     * @generated from enum value: SET = 0;
     */
    SET = 0,
    /**
     * @generated from enum value: REMOVE = 1;
     */
    REMOVE = 1
}
/**
 * Describes the enum SyncdMutation.SyncdOperation.
 */
declare const SyncdMutation_SyncdOperationSchema: GenEnum<SyncdMutation_SyncdOperation>;
/**
 * @generated from message SyncdMutations
 */
type SyncdMutations = Message$1<"SyncdMutations"> & {
    /**
     * @generated from field: repeated SyncdMutation mutations = 1;
     */
    mutations: SyncdMutation[];
};
/**
 * Describes the message SyncdMutations.
 * Use `create(SyncdMutationsSchema)` to create a new message.
 */
declare const SyncdMutationsSchema: GenMessage<SyncdMutations>;
/**
 * @generated from message SyncdPatch
 */
type SyncdPatch = Message$1<"SyncdPatch"> & {
    /**
     * @generated from field: optional SyncdVersion version = 1;
     */
    version?: SyncdVersion;
    /**
     * @generated from field: repeated SyncdMutation mutations = 2;
     */
    mutations: SyncdMutation[];
    /**
     * @generated from field: optional ExternalBlobReference externalMutations = 3;
     */
    externalMutations?: ExternalBlobReference;
    /**
     * @generated from field: optional bytes snapshotMac = 4;
     */
    snapshotMac: Uint8Array;
    /**
     * @generated from field: optional bytes patchMac = 5;
     */
    patchMac: Uint8Array;
    /**
     * @generated from field: optional KeyId keyId = 6;
     */
    keyId?: KeyId;
    /**
     * @generated from field: optional ExitCode exitCode = 7;
     */
    exitCode?: ExitCode;
    /**
     * @generated from field: optional uint32 deviceIndex = 8;
     */
    deviceIndex: number;
    /**
     * @generated from field: optional bytes clientDebugData = 9;
     */
    clientDebugData: Uint8Array;
};
/**
 * Describes the message SyncdPatch.
 * Use `create(SyncdPatchSchema)` to create a new message.
 */
declare const SyncdPatchSchema: GenMessage<SyncdPatch>;
/**
 * @generated from message SyncdRecord
 */
type SyncdRecord = Message$1<"SyncdRecord"> & {
    /**
     * @generated from field: optional SyncdIndex index = 1;
     */
    index?: SyncdIndex;
    /**
     * @generated from field: optional SyncdValue value = 2;
     */
    value?: SyncdValue;
    /**
     * @generated from field: optional KeyId keyId = 3;
     */
    keyId?: KeyId;
};
/**
 * Describes the message SyncdRecord.
 * Use `create(SyncdRecordSchema)` to create a new message.
 */
declare const SyncdRecordSchema: GenMessage<SyncdRecord>;
/**
 * @generated from message SyncdSnapshot
 */
type SyncdSnapshot = Message$1<"SyncdSnapshot"> & {
    /**
     * @generated from field: optional SyncdVersion version = 1;
     */
    version?: SyncdVersion;
    /**
     * @generated from field: repeated SyncdRecord records = 2;
     */
    records: SyncdRecord[];
    /**
     * @generated from field: optional bytes mac = 3;
     */
    mac: Uint8Array;
    /**
     * @generated from field: optional KeyId keyId = 4;
     */
    keyId?: KeyId;
};
/**
 * Describes the message SyncdSnapshot.
 * Use `create(SyncdSnapshotSchema)` to create a new message.
 */
declare const SyncdSnapshotSchema: GenMessage<SyncdSnapshot>;
/**
 * @generated from message SyncdValue
 */
type SyncdValue = Message$1<"SyncdValue"> & {
    /**
     * @generated from field: optional bytes blob = 1;
     */
    blob: Uint8Array;
};
/**
 * Describes the message SyncdValue.
 * Use `create(SyncdValueSchema)` to create a new message.
 */
declare const SyncdValueSchema: GenMessage<SyncdValue>;
/**
 * @generated from message SyncdVersion
 */
type SyncdVersion = Message$1<"SyncdVersion"> & {
    /**
     * @generated from field: optional uint64 version = 1;
     */
    version: bigint;
};
/**
 * Describes the message SyncdVersion.
 * Use `create(SyncdVersionSchema)` to create a new message.
 */
declare const SyncdVersionSchema: GenMessage<SyncdVersion>;
/**
 * @generated from message TapLinkAction
 */
type TapLinkAction = Message$1<"TapLinkAction"> & {
    /**
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * @generated from field: optional string tapUrl = 2;
     */
    tapUrl: string;
};
/**
 * Describes the message TapLinkAction.
 * Use `create(TapLinkActionSchema)` to create a new message.
 */
declare const TapLinkActionSchema: GenMessage<TapLinkAction>;
/**
 * @generated from message TemplateButton
 */
type TemplateButton = Message$1<"TemplateButton"> & {
    /**
     * @generated from field: optional uint32 index = 4;
     */
    index: number;
    /**
     * @generated from oneof TemplateButton.button
     */
    button: {
        /**
         * @generated from field: TemplateButton.QuickReplyButton quickReplyButton = 1;
         */
        value: TemplateButton_QuickReplyButton;
        case: "quickReplyButton";
    } | {
        /**
         * @generated from field: TemplateButton.URLButton urlButton = 2;
         */
        value: TemplateButton_URLButton;
        case: "urlButton";
    } | {
        /**
         * @generated from field: TemplateButton.CallButton callButton = 3;
         */
        value: TemplateButton_CallButton;
        case: "callButton";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message TemplateButton.
 * Use `create(TemplateButtonSchema)` to create a new message.
 */
declare const TemplateButtonSchema: GenMessage<TemplateButton>;
/**
 * @generated from message TemplateButton.CallButton
 */
type TemplateButton_CallButton = Message$1<"TemplateButton.CallButton"> & {
    /**
     * @generated from field: optional Message.HighlyStructuredMessage displayText = 1;
     */
    displayText?: Message_HighlyStructuredMessage;
    /**
     * @generated from field: optional Message.HighlyStructuredMessage phoneNumber = 2;
     */
    phoneNumber?: Message_HighlyStructuredMessage;
};
/**
 * Describes the message TemplateButton.CallButton.
 * Use `create(TemplateButton_CallButtonSchema)` to create a new message.
 */
declare const TemplateButton_CallButtonSchema: GenMessage<TemplateButton_CallButton>;
/**
 * @generated from message TemplateButton.QuickReplyButton
 */
type TemplateButton_QuickReplyButton = Message$1<"TemplateButton.QuickReplyButton"> & {
    /**
     * @generated from field: optional Message.HighlyStructuredMessage displayText = 1;
     */
    displayText?: Message_HighlyStructuredMessage;
    /**
     * @generated from field: optional string id = 2;
     */
    id: string;
};
/**
 * Describes the message TemplateButton.QuickReplyButton.
 * Use `create(TemplateButton_QuickReplyButtonSchema)` to create a new message.
 */
declare const TemplateButton_QuickReplyButtonSchema: GenMessage<TemplateButton_QuickReplyButton>;
/**
 * @generated from message TemplateButton.URLButton
 */
type TemplateButton_URLButton = Message$1<"TemplateButton.URLButton"> & {
    /**
     * @generated from field: optional Message.HighlyStructuredMessage displayText = 1;
     */
    displayText?: Message_HighlyStructuredMessage;
    /**
     * @generated from field: optional Message.HighlyStructuredMessage url = 2;
     */
    url?: Message_HighlyStructuredMessage;
};
/**
 * Describes the message TemplateButton.URLButton.
 * Use `create(TemplateButton_URLButtonSchema)` to create a new message.
 */
declare const TemplateButton_URLButtonSchema: GenMessage<TemplateButton_URLButton>;
/**
 * @generated from message ThreadID
 */
type ThreadID = Message$1<"ThreadID"> & {
    /**
     * @generated from field: optional ThreadID.ThreadType threadType = 1;
     */
    threadType: ThreadID_ThreadType;
    /**
     * @generated from field: optional MessageKey threadKey = 2;
     */
    threadKey?: MessageKey;
};
/**
 * Describes the message ThreadID.
 * Use `create(ThreadIDSchema)` to create a new message.
 */
declare const ThreadIDSchema: GenMessage<ThreadID>;
/**
 * @generated from enum ThreadID.ThreadType
 */
declare enum ThreadID_ThreadType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: VIEW_REPLIES = 1;
     */
    VIEW_REPLIES = 1
}
/**
 * Describes the enum ThreadID.ThreadType.
 */
declare const ThreadID_ThreadTypeSchema: GenEnum<ThreadID_ThreadType>;
/**
 * @generated from message UrlTrackingMap
 */
type UrlTrackingMap = Message$1<"UrlTrackingMap"> & {
    /**
     * @generated from field: repeated UrlTrackingMap.UrlTrackingMapElement urlTrackingMapElements = 1;
     */
    urlTrackingMapElements: UrlTrackingMap_UrlTrackingMapElement[];
};
/**
 * Describes the message UrlTrackingMap.
 * Use `create(UrlTrackingMapSchema)` to create a new message.
 */
declare const UrlTrackingMapSchema: GenMessage<UrlTrackingMap>;
/**
 * @generated from message UrlTrackingMap.UrlTrackingMapElement
 */
type UrlTrackingMap_UrlTrackingMapElement = Message$1<"UrlTrackingMap.UrlTrackingMapElement"> & {
    /**
     * @generated from field: optional string originalUrl = 1;
     */
    originalUrl: string;
    /**
     * @generated from field: optional string unconsentedUsersUrl = 2;
     */
    unconsentedUsersUrl: string;
    /**
     * @generated from field: optional string consentedUsersUrl = 3;
     */
    consentedUsersUrl: string;
    /**
     * @generated from field: optional uint32 cardIndex = 4;
     */
    cardIndex: number;
};
/**
 * Describes the message UrlTrackingMap.UrlTrackingMapElement.
 * Use `create(UrlTrackingMap_UrlTrackingMapElementSchema)` to create a new message.
 */
declare const UrlTrackingMap_UrlTrackingMapElementSchema: GenMessage<UrlTrackingMap_UrlTrackingMapElement>;
/**
 * @generated from message UserPassword
 */
type UserPassword = Message$1<"UserPassword"> & {
    /**
     * @generated from field: optional UserPassword.Encoding encoding = 1;
     */
    encoding: UserPassword_Encoding;
    /**
     * @generated from field: optional UserPassword.Transformer transformer = 2;
     */
    transformer: UserPassword_Transformer;
    /**
     * @generated from field: repeated UserPassword.TransformerArg transformerArg = 3;
     */
    transformerArg: UserPassword_TransformerArg[];
    /**
     * @generated from field: optional bytes transformedData = 4;
     */
    transformedData: Uint8Array;
};
/**
 * Describes the message UserPassword.
 * Use `create(UserPasswordSchema)` to create a new message.
 */
declare const UserPasswordSchema: GenMessage<UserPassword>;
/**
 * @generated from message UserPassword.TransformerArg
 */
type UserPassword_TransformerArg = Message$1<"UserPassword.TransformerArg"> & {
    /**
     * @generated from field: optional string key = 1;
     */
    key: string;
    /**
     * @generated from field: optional UserPassword.TransformerArg.Value value = 2;
     */
    value?: UserPassword_TransformerArg_Value;
};
/**
 * Describes the message UserPassword.TransformerArg.
 * Use `create(UserPassword_TransformerArgSchema)` to create a new message.
 */
declare const UserPassword_TransformerArgSchema: GenMessage<UserPassword_TransformerArg>;
/**
 * @generated from message UserPassword.TransformerArg.Value
 */
type UserPassword_TransformerArg_Value = Message$1<"UserPassword.TransformerArg.Value"> & {
    /**
     * @generated from oneof UserPassword.TransformerArg.Value.value
     */
    value: {
        /**
         * @generated from field: bytes asBlob = 1;
         */
        value: Uint8Array;
        case: "asBlob";
    } | {
        /**
         * @generated from field: uint32 asUnsignedInteger = 2;
         */
        value: number;
        case: "asUnsignedInteger";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message UserPassword.TransformerArg.Value.
 * Use `create(UserPassword_TransformerArg_ValueSchema)` to create a new message.
 */
declare const UserPassword_TransformerArg_ValueSchema: GenMessage<UserPassword_TransformerArg_Value>;
/**
 * @generated from enum UserPassword.Encoding
 */
declare enum UserPassword_Encoding {
    /**
     * @generated from enum value: UTF8 = 0;
     */
    UTF8 = 0,
    /**
     * @generated from enum value: UTF8_BROKEN = 1;
     */
    UTF8_BROKEN = 1
}
/**
 * Describes the enum UserPassword.Encoding.
 */
declare const UserPassword_EncodingSchema: GenEnum<UserPassword_Encoding>;
/**
 * @generated from enum UserPassword.Transformer
 */
declare enum UserPassword_Transformer {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: PBKDF2_HMAC_SHA512 = 1;
     */
    PBKDF2_HMAC_SHA512 = 1,
    /**
     * @generated from enum value: PBKDF2_HMAC_SHA384 = 2;
     */
    PBKDF2_HMAC_SHA384 = 2
}
/**
 * Describes the enum UserPassword.Transformer.
 */
declare const UserPassword_TransformerSchema: GenEnum<UserPassword_Transformer>;
/**
 * @generated from message UserReceipt
 */
type UserReceipt = Message$1<"UserReceipt"> & {
    /**
     * @generated from field: required string userJid = 1;
     */
    userJid: string;
    /**
     * @generated from field: optional int64 receiptTimestamp = 2;
     */
    receiptTimestamp: bigint;
    /**
     * @generated from field: optional int64 readTimestamp = 3;
     */
    readTimestamp: bigint;
    /**
     * @generated from field: optional int64 playedTimestamp = 4;
     */
    playedTimestamp: bigint;
    /**
     * @generated from field: repeated string pendingDeviceJid = 5;
     */
    pendingDeviceJid: string[];
    /**
     * @generated from field: repeated string deliveredDeviceJid = 6;
     */
    deliveredDeviceJid: string[];
};
/**
 * Describes the message UserReceipt.
 * Use `create(UserReceiptSchema)` to create a new message.
 */
declare const UserReceiptSchema: GenMessage<UserReceipt>;
/**
 * @generated from message VerifiedNameCertificate
 */
type VerifiedNameCertificate = Message$1<"VerifiedNameCertificate"> & {
    /**
     * @generated from field: optional bytes details = 1;
     */
    details: Uint8Array;
    /**
     * @generated from field: optional bytes signature = 2;
     */
    signature: Uint8Array;
    /**
     * @generated from field: optional bytes serverSignature = 3;
     */
    serverSignature: Uint8Array;
};
/**
 * Describes the message VerifiedNameCertificate.
 * Use `create(VerifiedNameCertificateSchema)` to create a new message.
 */
declare const VerifiedNameCertificateSchema: GenMessage<VerifiedNameCertificate>;
/**
 * @generated from message VerifiedNameCertificate.Details
 */
type VerifiedNameCertificate_Details = Message$1<"VerifiedNameCertificate.Details"> & {
    /**
     * @generated from field: optional uint64 serial = 1;
     */
    serial: bigint;
    /**
     * @generated from field: optional string issuer = 2;
     */
    issuer: string;
    /**
     * @generated from field: optional string verifiedName = 4;
     */
    verifiedName: string;
    /**
     * @generated from field: repeated LocalizedName localizedNames = 8;
     */
    localizedNames: LocalizedName[];
    /**
     * @generated from field: optional uint64 issueTime = 10;
     */
    issueTime: bigint;
};
/**
 * Describes the message VerifiedNameCertificate.Details.
 * Use `create(VerifiedNameCertificate_DetailsSchema)` to create a new message.
 */
declare const VerifiedNameCertificate_DetailsSchema: GenMessage<VerifiedNameCertificate_Details>;
/**
 * @generated from message WallpaperSettings
 */
type WallpaperSettings = Message$1<"WallpaperSettings"> & {
    /**
     * @generated from field: optional string filename = 1;
     */
    filename: string;
    /**
     * @generated from field: optional uint32 opacity = 2;
     */
    opacity: number;
};
/**
 * Describes the message WallpaperSettings.
 * Use `create(WallpaperSettingsSchema)` to create a new message.
 */
declare const WallpaperSettingsSchema: GenMessage<WallpaperSettings>;
/**
 * @generated from message WebFeatures
 */
type WebFeatures = Message$1<"WebFeatures"> & {
    /**
     * @generated from field: optional WebFeatures.Flag labelsDisplay = 1;
     */
    labelsDisplay: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag voipIndividualOutgoing = 2;
     */
    voipIndividualOutgoing: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag groupsV3 = 3;
     */
    groupsV3: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag groupsV3Create = 4;
     */
    groupsV3Create: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag changeNumberV2 = 5;
     */
    changeNumberV2: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag queryStatusV3Thumbnail = 6;
     */
    queryStatusV3Thumbnail: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag liveLocations = 7;
     */
    liveLocations: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag queryVname = 8;
     */
    queryVname: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag voipIndividualIncoming = 9;
     */
    voipIndividualIncoming: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag quickRepliesQuery = 10;
     */
    quickRepliesQuery: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag payments = 11;
     */
    payments: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag stickerPackQuery = 12;
     */
    stickerPackQuery: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag liveLocationsFinal = 13;
     */
    liveLocationsFinal: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag labelsEdit = 14;
     */
    labelsEdit: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag mediaUpload = 15;
     */
    mediaUpload: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag mediaUploadRichQuickReplies = 18;
     */
    mediaUploadRichQuickReplies: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag vnameV2 = 19;
     */
    vnameV2: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag videoPlaybackUrl = 20;
     */
    videoPlaybackUrl: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag statusRanking = 21;
     */
    statusRanking: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag voipIndividualVideo = 22;
     */
    voipIndividualVideo: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag thirdPartyStickers = 23;
     */
    thirdPartyStickers: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag frequentlyForwardedSetting = 24;
     */
    frequentlyForwardedSetting: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag groupsV4JoinPermission = 25;
     */
    groupsV4JoinPermission: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag recentStickers = 26;
     */
    recentStickers: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag catalog = 27;
     */
    catalog: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag starredStickers = 28;
     */
    starredStickers: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag voipGroupCall = 29;
     */
    voipGroupCall: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag templateMessage = 30;
     */
    templateMessage: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag templateMessageInteractivity = 31;
     */
    templateMessageInteractivity: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag ephemeralMessages = 32;
     */
    ephemeralMessages: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag e2ENotificationSync = 33;
     */
    e2ENotificationSync: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag recentStickersV2 = 34;
     */
    recentStickersV2: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag recentStickersV3 = 36;
     */
    recentStickersV3: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag userNotice = 37;
     */
    userNotice: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag support = 39;
     */
    support: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag groupUiiCleanup = 40;
     */
    groupUiiCleanup: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag groupDogfoodingInternalOnly = 41;
     */
    groupDogfoodingInternalOnly: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag settingsSync = 42;
     */
    settingsSync: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag archiveV2 = 43;
     */
    archiveV2: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag ephemeralAllowGroupMembers = 44;
     */
    ephemeralAllowGroupMembers: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag ephemeral24HDuration = 45;
     */
    ephemeral24HDuration: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag mdForceUpgrade = 46;
     */
    mdForceUpgrade: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag disappearingMode = 47;
     */
    disappearingMode: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag externalMdOptInAvailable = 48;
     */
    externalMdOptInAvailable: WebFeatures_Flag;
    /**
     * @generated from field: optional WebFeatures.Flag noDeleteMessageTimeLimit = 49;
     */
    noDeleteMessageTimeLimit: WebFeatures_Flag;
};
/**
 * Describes the message WebFeatures.
 * Use `create(WebFeaturesSchema)` to create a new message.
 */
declare const WebFeaturesSchema: GenMessage<WebFeatures>;
/**
 * @generated from enum WebFeatures.Flag
 */
declare enum WebFeatures_Flag {
    /**
     * @generated from enum value: NOT_STARTED = 0;
     */
    NOT_STARTED = 0,
    /**
     * @generated from enum value: FORCE_UPGRADE = 1;
     */
    FORCE_UPGRADE = 1,
    /**
     * @generated from enum value: DEVELOPMENT = 2;
     */
    DEVELOPMENT = 2,
    /**
     * @generated from enum value: PRODUCTION = 3;
     */
    PRODUCTION = 3
}
/**
 * Describes the enum WebFeatures.Flag.
 */
declare const WebFeatures_FlagSchema: GenEnum<WebFeatures_Flag>;
/**
 * @generated from message WebMessageInfo
 */
type WebMessageInfo = Message$1<"WebMessageInfo"> & {
    /**
     * @generated from field: required MessageKey key = 1;
     */
    key?: MessageKey;
    /**
     * @generated from field: optional Message message = 2;
     */
    message?: Message;
    /**
     * @generated from field: optional uint64 messageTimestamp = 3;
     */
    messageTimestamp: bigint;
    /**
     * @generated from field: optional WebMessageInfo.Status status = 4;
     */
    status: WebMessageInfo_Status;
    /**
     * @generated from field: optional string participant = 5;
     */
    participant: string;
    /**
     * @generated from field: optional uint64 messageC2STimestamp = 6;
     */
    messageC2STimestamp: bigint;
    /**
     * @generated from field: optional bool ignore = 16;
     */
    ignore: boolean;
    /**
     * @generated from field: optional bool starred = 17;
     */
    starred: boolean;
    /**
     * @generated from field: optional bool broadcast = 18;
     */
    broadcast: boolean;
    /**
     * @generated from field: optional string pushName = 19;
     */
    pushName: string;
    /**
     * @generated from field: optional bytes mediaCiphertextSha256 = 20;
     */
    mediaCiphertextSha256: Uint8Array;
    /**
     * @generated from field: optional bool multicast = 21;
     */
    multicast: boolean;
    /**
     * @generated from field: optional bool urlText = 22;
     */
    urlText: boolean;
    /**
     * @generated from field: optional bool urlNumber = 23;
     */
    urlNumber: boolean;
    /**
     * @generated from field: optional WebMessageInfo.StubType messageStubType = 24;
     */
    messageStubType: WebMessageInfo_StubType;
    /**
     * @generated from field: optional bool clearMedia = 25;
     */
    clearMedia: boolean;
    /**
     * @generated from field: repeated string messageStubParameters = 26;
     */
    messageStubParameters: string[];
    /**
     * @generated from field: optional uint32 duration = 27;
     */
    duration: number;
    /**
     * @generated from field: repeated string labels = 28;
     */
    labels: string[];
    /**
     * @generated from field: optional PaymentInfo paymentInfo = 29;
     */
    paymentInfo?: PaymentInfo;
    /**
     * @generated from field: optional Message.LiveLocationMessage finalLiveLocation = 30;
     */
    finalLiveLocation?: Message_LiveLocationMessage;
    /**
     * @generated from field: optional PaymentInfo quotedPaymentInfo = 31;
     */
    quotedPaymentInfo?: PaymentInfo;
    /**
     * @generated from field: optional uint64 ephemeralStartTimestamp = 32;
     */
    ephemeralStartTimestamp: bigint;
    /**
     * @generated from field: optional uint32 ephemeralDuration = 33;
     */
    ephemeralDuration: number;
    /**
     * @generated from field: optional bool ephemeralOffToOn = 34;
     */
    ephemeralOffToOn: boolean;
    /**
     * @generated from field: optional bool ephemeralOutOfSync = 35;
     */
    ephemeralOutOfSync: boolean;
    /**
     * @generated from field: optional WebMessageInfo.BizPrivacyStatus bizPrivacyStatus = 36;
     */
    bizPrivacyStatus: WebMessageInfo_BizPrivacyStatus;
    /**
     * @generated from field: optional string verifiedBizName = 37;
     */
    verifiedBizName: string;
    /**
     * @generated from field: optional MediaData mediaData = 38;
     */
    mediaData?: MediaData;
    /**
     * @generated from field: optional PhotoChange photoChange = 39;
     */
    photoChange?: PhotoChange;
    /**
     * @generated from field: repeated UserReceipt userReceipt = 40;
     */
    userReceipt: UserReceipt[];
    /**
     * @generated from field: repeated Reaction reactions = 41;
     */
    reactions: Reaction[];
    /**
     * @generated from field: optional MediaData quotedStickerData = 42;
     */
    quotedStickerData?: MediaData;
    /**
     * @generated from field: optional bytes futureproofData = 43;
     */
    futureproofData: Uint8Array;
    /**
     * @generated from field: optional StatusPSA statusPsa = 44;
     */
    statusPsa?: StatusPSA;
    /**
     * @generated from field: repeated PollUpdate pollUpdates = 45;
     */
    pollUpdates: PollUpdate[];
    /**
     * @generated from field: optional PollAdditionalMetadata pollAdditionalMetadata = 46;
     */
    pollAdditionalMetadata?: PollAdditionalMetadata;
    /**
     * @generated from field: optional string agentId = 47;
     */
    agentId: string;
    /**
     * @generated from field: optional bool statusAlreadyViewed = 48;
     */
    statusAlreadyViewed: boolean;
    /**
     * @generated from field: optional bytes messageSecret = 49;
     */
    messageSecret: Uint8Array;
    /**
     * @generated from field: optional KeepInChat keepInChat = 50;
     */
    keepInChat?: KeepInChat;
    /**
     * @generated from field: optional string originalSelfAuthorUserJidString = 51;
     */
    originalSelfAuthorUserJidString: string;
    /**
     * @generated from field: optional uint64 revokeMessageTimestamp = 52;
     */
    revokeMessageTimestamp: bigint;
    /**
     * @generated from field: optional PinInChat pinInChat = 54;
     */
    pinInChat?: PinInChat;
    /**
     * @generated from field: optional PremiumMessageInfo premiumMessageInfo = 55;
     */
    premiumMessageInfo?: PremiumMessageInfo;
    /**
     * @generated from field: optional bool is1PBizBotMessage = 56;
     */
    is1PBizBotMessage: boolean;
    /**
     * @generated from field: optional bool isGroupHistoryMessage = 57;
     */
    isGroupHistoryMessage: boolean;
    /**
     * @generated from field: optional string botMessageInvokerJid = 58;
     */
    botMessageInvokerJid: string;
    /**
     * @generated from field: optional CommentMetadata commentMetadata = 59;
     */
    commentMetadata?: CommentMetadata;
    /**
     * @generated from field: repeated EventResponse eventResponses = 61;
     */
    eventResponses: EventResponse[];
    /**
     * @generated from field: optional ReportingTokenInfo reportingTokenInfo = 62;
     */
    reportingTokenInfo?: ReportingTokenInfo;
    /**
     * @generated from field: optional uint64 newsletterServerId = 63;
     */
    newsletterServerId: bigint;
    /**
     * @generated from field: optional EventAdditionalMetadata eventAdditionalMetadata = 64;
     */
    eventAdditionalMetadata?: EventAdditionalMetadata;
    /**
     * @generated from field: optional bool isMentionedInStatus = 65;
     */
    isMentionedInStatus: boolean;
    /**
     * @generated from field: repeated string statusMentions = 66;
     */
    statusMentions: string[];
    /**
     * @generated from field: optional MessageKey targetMessageId = 67;
     */
    targetMessageId?: MessageKey;
    /**
     * @generated from field: repeated MessageAddOn messageAddOns = 68;
     */
    messageAddOns: MessageAddOn[];
    /**
     * @generated from field: optional StatusMentionMessage statusMentionMessageInfo = 69;
     */
    statusMentionMessageInfo?: StatusMentionMessage;
    /**
     * @generated from field: optional bool isSupportAiMessage = 70;
     */
    isSupportAiMessage: boolean;
    /**
     * @generated from field: repeated string statusMentionSources = 71;
     */
    statusMentionSources: string[];
    /**
     * @generated from field: repeated Citation supportAiCitations = 72;
     */
    supportAiCitations: Citation[];
    /**
     * @generated from field: optional string botTargetId = 73;
     */
    botTargetId: string;
};
/**
 * Describes the message WebMessageInfo.
 * Use `create(WebMessageInfoSchema)` to create a new message.
 */
declare const WebMessageInfoSchema: GenMessage<WebMessageInfo>;
/**
 * @generated from enum WebMessageInfo.BizPrivacyStatus
 */
declare enum WebMessageInfo_BizPrivacyStatus {
    /**
     * @generated from enum value: E2EE = 0;
     */
    E2EE = 0,
    /**
     * @generated from enum value: FB = 2;
     */
    FB = 2,
    /**
     * @generated from enum value: BSP = 1;
     */
    BSP = 1,
    /**
     * @generated from enum value: BSP_AND_FB = 3;
     */
    BSP_AND_FB = 3
}
/**
 * Describes the enum WebMessageInfo.BizPrivacyStatus.
 */
declare const WebMessageInfo_BizPrivacyStatusSchema: GenEnum<WebMessageInfo_BizPrivacyStatus>;
/**
 * @generated from enum WebMessageInfo.Status
 */
declare enum WebMessageInfo_Status {
    /**
     * @generated from enum value: ERROR = 0;
     */
    ERROR = 0,
    /**
     * @generated from enum value: PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from enum value: SERVER_ACK = 2;
     */
    SERVER_ACK = 2,
    /**
     * @generated from enum value: DELIVERY_ACK = 3;
     */
    DELIVERY_ACK = 3,
    /**
     * @generated from enum value: READ = 4;
     */
    READ = 4,
    /**
     * @generated from enum value: PLAYED = 5;
     */
    PLAYED = 5
}
/**
 * Describes the enum WebMessageInfo.Status.
 */
declare const WebMessageInfo_StatusSchema: GenEnum<WebMessageInfo_Status>;
/**
 * @generated from enum WebMessageInfo.StubType
 */
declare enum WebMessageInfo_StubType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: REVOKE = 1;
     */
    REVOKE = 1,
    /**
     * @generated from enum value: CIPHERTEXT = 2;
     */
    CIPHERTEXT = 2,
    /**
     * @generated from enum value: FUTUREPROOF = 3;
     */
    FUTUREPROOF = 3,
    /**
     * @generated from enum value: NON_VERIFIED_TRANSITION = 4;
     */
    NON_VERIFIED_TRANSITION = 4,
    /**
     * @generated from enum value: UNVERIFIED_TRANSITION = 5;
     */
    UNVERIFIED_TRANSITION = 5,
    /**
     * @generated from enum value: VERIFIED_TRANSITION = 6;
     */
    VERIFIED_TRANSITION = 6,
    /**
     * @generated from enum value: VERIFIED_LOW_UNKNOWN = 7;
     */
    VERIFIED_LOW_UNKNOWN = 7,
    /**
     * @generated from enum value: VERIFIED_HIGH = 8;
     */
    VERIFIED_HIGH = 8,
    /**
     * @generated from enum value: VERIFIED_INITIAL_UNKNOWN = 9;
     */
    VERIFIED_INITIAL_UNKNOWN = 9,
    /**
     * @generated from enum value: VERIFIED_INITIAL_LOW = 10;
     */
    VERIFIED_INITIAL_LOW = 10,
    /**
     * @generated from enum value: VERIFIED_INITIAL_HIGH = 11;
     */
    VERIFIED_INITIAL_HIGH = 11,
    /**
     * @generated from enum value: VERIFIED_TRANSITION_ANY_TO_NONE = 12;
     */
    VERIFIED_TRANSITION_ANY_TO_NONE = 12,
    /**
     * @generated from enum value: VERIFIED_TRANSITION_ANY_TO_HIGH = 13;
     */
    VERIFIED_TRANSITION_ANY_TO_HIGH = 13,
    /**
     * @generated from enum value: VERIFIED_TRANSITION_HIGH_TO_LOW = 14;
     */
    VERIFIED_TRANSITION_HIGH_TO_LOW = 14,
    /**
     * @generated from enum value: VERIFIED_TRANSITION_HIGH_TO_UNKNOWN = 15;
     */
    VERIFIED_TRANSITION_HIGH_TO_UNKNOWN = 15,
    /**
     * @generated from enum value: VERIFIED_TRANSITION_UNKNOWN_TO_LOW = 16;
     */
    VERIFIED_TRANSITION_UNKNOWN_TO_LOW = 16,
    /**
     * @generated from enum value: VERIFIED_TRANSITION_LOW_TO_UNKNOWN = 17;
     */
    VERIFIED_TRANSITION_LOW_TO_UNKNOWN = 17,
    /**
     * @generated from enum value: VERIFIED_TRANSITION_NONE_TO_LOW = 18;
     */
    VERIFIED_TRANSITION_NONE_TO_LOW = 18,
    /**
     * @generated from enum value: VERIFIED_TRANSITION_NONE_TO_UNKNOWN = 19;
     */
    VERIFIED_TRANSITION_NONE_TO_UNKNOWN = 19,
    /**
     * @generated from enum value: GROUP_CREATE = 20;
     */
    GROUP_CREATE = 20,
    /**
     * @generated from enum value: GROUP_CHANGE_SUBJECT = 21;
     */
    GROUP_CHANGE_SUBJECT = 21,
    /**
     * @generated from enum value: GROUP_CHANGE_ICON = 22;
     */
    GROUP_CHANGE_ICON = 22,
    /**
     * @generated from enum value: GROUP_CHANGE_INVITE_LINK = 23;
     */
    GROUP_CHANGE_INVITE_LINK = 23,
    /**
     * @generated from enum value: GROUP_CHANGE_DESCRIPTION = 24;
     */
    GROUP_CHANGE_DESCRIPTION = 24,
    /**
     * @generated from enum value: GROUP_CHANGE_RESTRICT = 25;
     */
    GROUP_CHANGE_RESTRICT = 25,
    /**
     * @generated from enum value: GROUP_CHANGE_ANNOUNCE = 26;
     */
    GROUP_CHANGE_ANNOUNCE = 26,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_ADD = 27;
     */
    GROUP_PARTICIPANT_ADD = 27,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_REMOVE = 28;
     */
    GROUP_PARTICIPANT_REMOVE = 28,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_PROMOTE = 29;
     */
    GROUP_PARTICIPANT_PROMOTE = 29,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_DEMOTE = 30;
     */
    GROUP_PARTICIPANT_DEMOTE = 30,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_INVITE = 31;
     */
    GROUP_PARTICIPANT_INVITE = 31,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_LEAVE = 32;
     */
    GROUP_PARTICIPANT_LEAVE = 32,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_CHANGE_NUMBER = 33;
     */
    GROUP_PARTICIPANT_CHANGE_NUMBER = 33,
    /**
     * @generated from enum value: BROADCAST_CREATE = 34;
     */
    BROADCAST_CREATE = 34,
    /**
     * @generated from enum value: BROADCAST_ADD = 35;
     */
    BROADCAST_ADD = 35,
    /**
     * @generated from enum value: BROADCAST_REMOVE = 36;
     */
    BROADCAST_REMOVE = 36,
    /**
     * @generated from enum value: GENERIC_NOTIFICATION = 37;
     */
    GENERIC_NOTIFICATION = 37,
    /**
     * @generated from enum value: E2E_IDENTITY_CHANGED = 38;
     */
    E2E_IDENTITY_CHANGED = 38,
    /**
     * @generated from enum value: E2E_ENCRYPTED = 39;
     */
    E2E_ENCRYPTED = 39,
    /**
     * @generated from enum value: CALL_MISSED_VOICE = 40;
     */
    CALL_MISSED_VOICE = 40,
    /**
     * @generated from enum value: CALL_MISSED_VIDEO = 41;
     */
    CALL_MISSED_VIDEO = 41,
    /**
     * @generated from enum value: INDIVIDUAL_CHANGE_NUMBER = 42;
     */
    INDIVIDUAL_CHANGE_NUMBER = 42,
    /**
     * @generated from enum value: GROUP_DELETE = 43;
     */
    GROUP_DELETE = 43,
    /**
     * @generated from enum value: GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE = 44;
     */
    GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE = 44,
    /**
     * @generated from enum value: CALL_MISSED_GROUP_VOICE = 45;
     */
    CALL_MISSED_GROUP_VOICE = 45,
    /**
     * @generated from enum value: CALL_MISSED_GROUP_VIDEO = 46;
     */
    CALL_MISSED_GROUP_VIDEO = 46,
    /**
     * @generated from enum value: PAYMENT_CIPHERTEXT = 47;
     */
    PAYMENT_CIPHERTEXT = 47,
    /**
     * @generated from enum value: PAYMENT_FUTUREPROOF = 48;
     */
    PAYMENT_FUTUREPROOF = 48,
    /**
     * @generated from enum value: PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED = 49;
     */
    PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED = 49,
    /**
     * @generated from enum value: PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED = 50;
     */
    PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED = 50,
    /**
     * @generated from enum value: PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED = 51;
     */
    PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED = 51,
    /**
     * @generated from enum value: PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP = 52;
     */
    PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP = 52,
    /**
     * @generated from enum value: PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP = 53;
     */
    PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP = 53,
    /**
     * @generated from enum value: PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER = 54;
     */
    PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER = 54,
    /**
     * @generated from enum value: PAYMENT_ACTION_SEND_PAYMENT_REMINDER = 55;
     */
    PAYMENT_ACTION_SEND_PAYMENT_REMINDER = 55,
    /**
     * @generated from enum value: PAYMENT_ACTION_SEND_PAYMENT_INVITATION = 56;
     */
    PAYMENT_ACTION_SEND_PAYMENT_INVITATION = 56,
    /**
     * @generated from enum value: PAYMENT_ACTION_REQUEST_DECLINED = 57;
     */
    PAYMENT_ACTION_REQUEST_DECLINED = 57,
    /**
     * @generated from enum value: PAYMENT_ACTION_REQUEST_EXPIRED = 58;
     */
    PAYMENT_ACTION_REQUEST_EXPIRED = 58,
    /**
     * @generated from enum value: PAYMENT_ACTION_REQUEST_CANCELLED = 59;
     */
    PAYMENT_ACTION_REQUEST_CANCELLED = 59,
    /**
     * @generated from enum value: BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM = 60;
     */
    BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM = 60,
    /**
     * @generated from enum value: BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP = 61;
     */
    BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP = 61,
    /**
     * @generated from enum value: BIZ_INTRO_TOP = 62;
     */
    BIZ_INTRO_TOP = 62,
    /**
     * @generated from enum value: BIZ_INTRO_BOTTOM = 63;
     */
    BIZ_INTRO_BOTTOM = 63,
    /**
     * @generated from enum value: BIZ_NAME_CHANGE = 64;
     */
    BIZ_NAME_CHANGE = 64,
    /**
     * @generated from enum value: BIZ_MOVE_TO_CONSUMER_APP = 65;
     */
    BIZ_MOVE_TO_CONSUMER_APP = 65,
    /**
     * @generated from enum value: BIZ_TWO_TIER_MIGRATION_TOP = 66;
     */
    BIZ_TWO_TIER_MIGRATION_TOP = 66,
    /**
     * @generated from enum value: BIZ_TWO_TIER_MIGRATION_BOTTOM = 67;
     */
    BIZ_TWO_TIER_MIGRATION_BOTTOM = 67,
    /**
     * @generated from enum value: OVERSIZED = 68;
     */
    OVERSIZED = 68,
    /**
     * @generated from enum value: GROUP_CHANGE_NO_FREQUENTLY_FORWARDED = 69;
     */
    GROUP_CHANGE_NO_FREQUENTLY_FORWARDED = 69,
    /**
     * @generated from enum value: GROUP_V4_ADD_INVITE_SENT = 70;
     */
    GROUP_V4_ADD_INVITE_SENT = 70,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_ADD_REQUEST_JOIN = 71;
     */
    GROUP_PARTICIPANT_ADD_REQUEST_JOIN = 71,
    /**
     * @generated from enum value: CHANGE_EPHEMERAL_SETTING = 72;
     */
    CHANGE_EPHEMERAL_SETTING = 72,
    /**
     * @generated from enum value: E2E_DEVICE_CHANGED = 73;
     */
    E2E_DEVICE_CHANGED = 73,
    /**
     * @generated from enum value: VIEWED_ONCE = 74;
     */
    VIEWED_ONCE = 74,
    /**
     * @generated from enum value: E2E_ENCRYPTED_NOW = 75;
     */
    E2E_ENCRYPTED_NOW = 75,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_TO_BSP_PREMISE = 76;
     */
    BLUE_MSG_BSP_FB_TO_BSP_PREMISE = 76,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_TO_SELF_FB = 77;
     */
    BLUE_MSG_BSP_FB_TO_SELF_FB = 77,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_TO_SELF_PREMISE = 78;
     */
    BLUE_MSG_BSP_FB_TO_SELF_PREMISE = 78,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_UNVERIFIED = 79;
     */
    BLUE_MSG_BSP_FB_UNVERIFIED = 79,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 80;
     */
    BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 80,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_VERIFIED = 81;
     */
    BLUE_MSG_BSP_FB_VERIFIED = 81,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 82;
     */
    BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 82,
    /**
     * @generated from enum value: BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE = 83;
     */
    BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE = 83,
    /**
     * @generated from enum value: BLUE_MSG_BSP_PREMISE_UNVERIFIED = 84;
     */
    BLUE_MSG_BSP_PREMISE_UNVERIFIED = 84,
    /**
     * @generated from enum value: BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 85;
     */
    BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 85,
    /**
     * @generated from enum value: BLUE_MSG_BSP_PREMISE_VERIFIED = 86;
     */
    BLUE_MSG_BSP_PREMISE_VERIFIED = 86,
    /**
     * @generated from enum value: BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 87;
     */
    BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 87,
    /**
     * @generated from enum value: BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED = 88;
     */
    BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED = 88,
    /**
     * @generated from enum value: BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED = 89;
     */
    BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED = 89,
    /**
     * @generated from enum value: BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED = 90;
     */
    BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED = 90,
    /**
     * @generated from enum value: BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED = 91;
     */
    BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED = 91,
    /**
     * @generated from enum value: BLUE_MSG_SELF_FB_TO_BSP_PREMISE = 92;
     */
    BLUE_MSG_SELF_FB_TO_BSP_PREMISE = 92,
    /**
     * @generated from enum value: BLUE_MSG_SELF_FB_TO_SELF_PREMISE = 93;
     */
    BLUE_MSG_SELF_FB_TO_SELF_PREMISE = 93,
    /**
     * @generated from enum value: BLUE_MSG_SELF_FB_UNVERIFIED = 94;
     */
    BLUE_MSG_SELF_FB_UNVERIFIED = 94,
    /**
     * @generated from enum value: BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 95;
     */
    BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 95,
    /**
     * @generated from enum value: BLUE_MSG_SELF_FB_VERIFIED = 96;
     */
    BLUE_MSG_SELF_FB_VERIFIED = 96,
    /**
     * @generated from enum value: BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 97;
     */
    BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 97,
    /**
     * @generated from enum value: BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE = 98;
     */
    BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE = 98,
    /**
     * @generated from enum value: BLUE_MSG_SELF_PREMISE_UNVERIFIED = 99;
     */
    BLUE_MSG_SELF_PREMISE_UNVERIFIED = 99,
    /**
     * @generated from enum value: BLUE_MSG_SELF_PREMISE_VERIFIED = 100;
     */
    BLUE_MSG_SELF_PREMISE_VERIFIED = 100,
    /**
     * @generated from enum value: BLUE_MSG_TO_BSP_FB = 101;
     */
    BLUE_MSG_TO_BSP_FB = 101,
    /**
     * @generated from enum value: BLUE_MSG_TO_CONSUMER = 102;
     */
    BLUE_MSG_TO_CONSUMER = 102,
    /**
     * @generated from enum value: BLUE_MSG_TO_SELF_FB = 103;
     */
    BLUE_MSG_TO_SELF_FB = 103,
    /**
     * @generated from enum value: BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED = 104;
     */
    BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED = 104,
    /**
     * @generated from enum value: BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 105;
     */
    BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 105,
    /**
     * @generated from enum value: BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED = 106;
     */
    BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED = 106,
    /**
     * @generated from enum value: BLUE_MSG_UNVERIFIED_TO_VERIFIED = 107;
     */
    BLUE_MSG_UNVERIFIED_TO_VERIFIED = 107,
    /**
     * @generated from enum value: BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED = 108;
     */
    BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED = 108,
    /**
     * @generated from enum value: BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 109;
     */
    BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 109,
    /**
     * @generated from enum value: BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED = 110;
     */
    BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED = 110,
    /**
     * @generated from enum value: BLUE_MSG_VERIFIED_TO_UNVERIFIED = 111;
     */
    BLUE_MSG_VERIFIED_TO_UNVERIFIED = 111,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 112;
     */
    BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 112,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED = 113;
     */
    BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED = 113,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 114;
     */
    BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 114,
    /**
     * @generated from enum value: BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED = 115;
     */
    BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED = 115,
    /**
     * @generated from enum value: BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 116;
     */
    BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 116,
    /**
     * @generated from enum value: BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 117;
     */
    BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 117,
    /**
     * @generated from enum value: E2E_IDENTITY_UNAVAILABLE = 118;
     */
    E2E_IDENTITY_UNAVAILABLE = 118,
    /**
     * @generated from enum value: GROUP_CREATING = 119;
     */
    GROUP_CREATING = 119,
    /**
     * @generated from enum value: GROUP_CREATE_FAILED = 120;
     */
    GROUP_CREATE_FAILED = 120,
    /**
     * @generated from enum value: GROUP_BOUNCED = 121;
     */
    GROUP_BOUNCED = 121,
    /**
     * @generated from enum value: BLOCK_CONTACT = 122;
     */
    BLOCK_CONTACT = 122,
    /**
     * @generated from enum value: EPHEMERAL_SETTING_NOT_APPLIED = 123;
     */
    EPHEMERAL_SETTING_NOT_APPLIED = 123,
    /**
     * @generated from enum value: SYNC_FAILED = 124;
     */
    SYNC_FAILED = 124,
    /**
     * @generated from enum value: SYNCING = 125;
     */
    SYNCING = 125,
    /**
     * @generated from enum value: BIZ_PRIVACY_MODE_INIT_FB = 126;
     */
    BIZ_PRIVACY_MODE_INIT_FB = 126,
    /**
     * @generated from enum value: BIZ_PRIVACY_MODE_INIT_BSP = 127;
     */
    BIZ_PRIVACY_MODE_INIT_BSP = 127,
    /**
     * @generated from enum value: BIZ_PRIVACY_MODE_TO_FB = 128;
     */
    BIZ_PRIVACY_MODE_TO_FB = 128,
    /**
     * @generated from enum value: BIZ_PRIVACY_MODE_TO_BSP = 129;
     */
    BIZ_PRIVACY_MODE_TO_BSP = 129,
    /**
     * @generated from enum value: DISAPPEARING_MODE = 130;
     */
    DISAPPEARING_MODE = 130,
    /**
     * @generated from enum value: E2E_DEVICE_FETCH_FAILED = 131;
     */
    E2E_DEVICE_FETCH_FAILED = 131,
    /**
     * @generated from enum value: ADMIN_REVOKE = 132;
     */
    ADMIN_REVOKE = 132,
    /**
     * @generated from enum value: GROUP_INVITE_LINK_GROWTH_LOCKED = 133;
     */
    GROUP_INVITE_LINK_GROWTH_LOCKED = 133,
    /**
     * @generated from enum value: COMMUNITY_LINK_PARENT_GROUP = 134;
     */
    COMMUNITY_LINK_PARENT_GROUP = 134,
    /**
     * @generated from enum value: COMMUNITY_LINK_SIBLING_GROUP = 135;
     */
    COMMUNITY_LINK_SIBLING_GROUP = 135,
    /**
     * @generated from enum value: COMMUNITY_LINK_SUB_GROUP = 136;
     */
    COMMUNITY_LINK_SUB_GROUP = 136,
    /**
     * @generated from enum value: COMMUNITY_UNLINK_PARENT_GROUP = 137;
     */
    COMMUNITY_UNLINK_PARENT_GROUP = 137,
    /**
     * @generated from enum value: COMMUNITY_UNLINK_SIBLING_GROUP = 138;
     */
    COMMUNITY_UNLINK_SIBLING_GROUP = 138,
    /**
     * @generated from enum value: COMMUNITY_UNLINK_SUB_GROUP = 139;
     */
    COMMUNITY_UNLINK_SUB_GROUP = 139,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_ACCEPT = 140;
     */
    GROUP_PARTICIPANT_ACCEPT = 140,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_LINKED_GROUP_JOIN = 141;
     */
    GROUP_PARTICIPANT_LINKED_GROUP_JOIN = 141,
    /**
     * @generated from enum value: COMMUNITY_CREATE = 142;
     */
    COMMUNITY_CREATE = 142,
    /**
     * @generated from enum value: EPHEMERAL_KEEP_IN_CHAT = 143;
     */
    EPHEMERAL_KEEP_IN_CHAT = 143,
    /**
     * @generated from enum value: GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST = 144;
     */
    GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST = 144,
    /**
     * @generated from enum value: GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE = 145;
     */
    GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE = 145,
    /**
     * @generated from enum value: INTEGRITY_UNLINK_PARENT_GROUP = 146;
     */
    INTEGRITY_UNLINK_PARENT_GROUP = 146,
    /**
     * @generated from enum value: COMMUNITY_PARTICIPANT_PROMOTE = 147;
     */
    COMMUNITY_PARTICIPANT_PROMOTE = 147,
    /**
     * @generated from enum value: COMMUNITY_PARTICIPANT_DEMOTE = 148;
     */
    COMMUNITY_PARTICIPANT_DEMOTE = 148,
    /**
     * @generated from enum value: COMMUNITY_PARENT_GROUP_DELETED = 149;
     */
    COMMUNITY_PARENT_GROUP_DELETED = 149,
    /**
     * @generated from enum value: COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL = 150;
     */
    COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL = 150,
    /**
     * @generated from enum value: GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP = 151;
     */
    GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP = 151,
    /**
     * @generated from enum value: MASKED_THREAD_CREATED = 152;
     */
    MASKED_THREAD_CREATED = 152,
    /**
     * @generated from enum value: MASKED_THREAD_UNMASKED = 153;
     */
    MASKED_THREAD_UNMASKED = 153,
    /**
     * @generated from enum value: BIZ_CHAT_ASSIGNMENT = 154;
     */
    BIZ_CHAT_ASSIGNMENT = 154,
    /**
     * @generated from enum value: CHAT_PSA = 155;
     */
    CHAT_PSA = 155,
    /**
     * @generated from enum value: CHAT_POLL_CREATION_MESSAGE = 156;
     */
    CHAT_POLL_CREATION_MESSAGE = 156,
    /**
     * @generated from enum value: CAG_MASKED_THREAD_CREATED = 157;
     */
    CAG_MASKED_THREAD_CREATED = 157,
    /**
     * @generated from enum value: COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED = 158;
     */
    COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED = 158,
    /**
     * @generated from enum value: CAG_INVITE_AUTO_ADD = 159;
     */
    CAG_INVITE_AUTO_ADD = 159,
    /**
     * @generated from enum value: BIZ_CHAT_ASSIGNMENT_UNASSIGN = 160;
     */
    BIZ_CHAT_ASSIGNMENT_UNASSIGN = 160,
    /**
     * @generated from enum value: CAG_INVITE_AUTO_JOINED = 161;
     */
    CAG_INVITE_AUTO_JOINED = 161,
    /**
     * @generated from enum value: SCHEDULED_CALL_START_MESSAGE = 162;
     */
    SCHEDULED_CALL_START_MESSAGE = 162,
    /**
     * @generated from enum value: COMMUNITY_INVITE_RICH = 163;
     */
    COMMUNITY_INVITE_RICH = 163,
    /**
     * @generated from enum value: COMMUNITY_INVITE_AUTO_ADD_RICH = 164;
     */
    COMMUNITY_INVITE_AUTO_ADD_RICH = 164,
    /**
     * @generated from enum value: SUB_GROUP_INVITE_RICH = 165;
     */
    SUB_GROUP_INVITE_RICH = 165,
    /**
     * @generated from enum value: SUB_GROUP_PARTICIPANT_ADD_RICH = 166;
     */
    SUB_GROUP_PARTICIPANT_ADD_RICH = 166,
    /**
     * @generated from enum value: COMMUNITY_LINK_PARENT_GROUP_RICH = 167;
     */
    COMMUNITY_LINK_PARENT_GROUP_RICH = 167,
    /**
     * @generated from enum value: COMMUNITY_PARTICIPANT_ADD_RICH = 168;
     */
    COMMUNITY_PARTICIPANT_ADD_RICH = 168,
    /**
     * @generated from enum value: SILENCED_UNKNOWN_CALLER_AUDIO = 169;
     */
    SILENCED_UNKNOWN_CALLER_AUDIO = 169,
    /**
     * @generated from enum value: SILENCED_UNKNOWN_CALLER_VIDEO = 170;
     */
    SILENCED_UNKNOWN_CALLER_VIDEO = 170,
    /**
     * @generated from enum value: GROUP_MEMBER_ADD_MODE = 171;
     */
    GROUP_MEMBER_ADD_MODE = 171,
    /**
     * @generated from enum value: GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD = 172;
     */
    GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD = 172,
    /**
     * @generated from enum value: COMMUNITY_CHANGE_DESCRIPTION = 173;
     */
    COMMUNITY_CHANGE_DESCRIPTION = 173,
    /**
     * @generated from enum value: SENDER_INVITE = 174;
     */
    SENDER_INVITE = 174,
    /**
     * @generated from enum value: RECEIVER_INVITE = 175;
     */
    RECEIVER_INVITE = 175,
    /**
     * @generated from enum value: COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS = 176;
     */
    COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS = 176,
    /**
     * @generated from enum value: PINNED_MESSAGE_IN_CHAT = 177;
     */
    PINNED_MESSAGE_IN_CHAT = 177,
    /**
     * @generated from enum value: PAYMENT_INVITE_SETUP_INVITER = 178;
     */
    PAYMENT_INVITE_SETUP_INVITER = 178,
    /**
     * @generated from enum value: PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY = 179;
     */
    PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY = 179,
    /**
     * @generated from enum value: PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE = 180;
     */
    PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE = 180,
    /**
     * @generated from enum value: LINKED_GROUP_CALL_START = 181;
     */
    LINKED_GROUP_CALL_START = 181,
    /**
     * @generated from enum value: REPORT_TO_ADMIN_ENABLED_STATUS = 182;
     */
    REPORT_TO_ADMIN_ENABLED_STATUS = 182,
    /**
     * @generated from enum value: EMPTY_SUBGROUP_CREATE = 183;
     */
    EMPTY_SUBGROUP_CREATE = 183,
    /**
     * @generated from enum value: SCHEDULED_CALL_CANCEL = 184;
     */
    SCHEDULED_CALL_CANCEL = 184,
    /**
     * @generated from enum value: SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH = 185;
     */
    SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH = 185,
    /**
     * @generated from enum value: GROUP_CHANGE_RECENT_HISTORY_SHARING = 186;
     */
    GROUP_CHANGE_RECENT_HISTORY_SHARING = 186,
    /**
     * @generated from enum value: PAID_MESSAGE_SERVER_CAMPAIGN_ID = 187;
     */
    PAID_MESSAGE_SERVER_CAMPAIGN_ID = 187,
    /**
     * @generated from enum value: GENERAL_CHAT_CREATE = 188;
     */
    GENERAL_CHAT_CREATE = 188,
    /**
     * @generated from enum value: GENERAL_CHAT_ADD = 189;
     */
    GENERAL_CHAT_ADD = 189,
    /**
     * @generated from enum value: GENERAL_CHAT_AUTO_ADD_DISABLED = 190;
     */
    GENERAL_CHAT_AUTO_ADD_DISABLED = 190,
    /**
     * @generated from enum value: SUGGESTED_SUBGROUP_ANNOUNCE = 191;
     */
    SUGGESTED_SUBGROUP_ANNOUNCE = 191,
    /**
     * @generated from enum value: BIZ_BOT_1P_MESSAGING_ENABLED = 192;
     */
    BIZ_BOT_1P_MESSAGING_ENABLED = 192,
    /**
     * @generated from enum value: CHANGE_USERNAME = 193;
     */
    CHANGE_USERNAME = 193,
    /**
     * @generated from enum value: BIZ_COEX_PRIVACY_INIT_SELF = 194;
     */
    BIZ_COEX_PRIVACY_INIT_SELF = 194,
    /**
     * @generated from enum value: BIZ_COEX_PRIVACY_TRANSITION_SELF = 195;
     */
    BIZ_COEX_PRIVACY_TRANSITION_SELF = 195,
    /**
     * @generated from enum value: SUPPORT_AI_EDUCATION = 196;
     */
    SUPPORT_AI_EDUCATION = 196,
    /**
     * @generated from enum value: BIZ_BOT_3P_MESSAGING_ENABLED = 197;
     */
    BIZ_BOT_3P_MESSAGING_ENABLED = 197,
    /**
     * @generated from enum value: REMINDER_SETUP_MESSAGE = 198;
     */
    REMINDER_SETUP_MESSAGE = 198,
    /**
     * @generated from enum value: REMINDER_SENT_MESSAGE = 199;
     */
    REMINDER_SENT_MESSAGE = 199,
    /**
     * @generated from enum value: REMINDER_CANCEL_MESSAGE = 200;
     */
    REMINDER_CANCEL_MESSAGE = 200,
    /**
     * @generated from enum value: BIZ_COEX_PRIVACY_INIT = 201;
     */
    BIZ_COEX_PRIVACY_INIT = 201,
    /**
     * @generated from enum value: BIZ_COEX_PRIVACY_TRANSITION = 202;
     */
    BIZ_COEX_PRIVACY_TRANSITION = 202,
    /**
     * @generated from enum value: GROUP_DEACTIVATED = 203;
     */
    GROUP_DEACTIVATED = 203,
    /**
     * @generated from enum value: COMMUNITY_DEACTIVATE_SIBLING_GROUP = 204;
     */
    COMMUNITY_DEACTIVATE_SIBLING_GROUP = 204,
    /**
     * @generated from enum value: EVENT_UPDATED = 205;
     */
    EVENT_UPDATED = 205,
    /**
     * @generated from enum value: EVENT_CANCELED = 206;
     */
    EVENT_CANCELED = 206,
    /**
     * @generated from enum value: COMMUNITY_OWNER_UPDATED = 207;
     */
    COMMUNITY_OWNER_UPDATED = 207,
    /**
     * @generated from enum value: COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN = 208;
     */
    COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN = 208,
    /**
     * @generated from enum value: CAPI_GROUP_NE2EE_SYSTEM_MESSAGE = 209;
     */
    CAPI_GROUP_NE2EE_SYSTEM_MESSAGE = 209,
    /**
     * @generated from enum value: STATUS_MENTION = 210;
     */
    STATUS_MENTION = 210,
    /**
     * @generated from enum value: USER_CONTROLS_SYSTEM_MESSAGE = 211;
     */
    USER_CONTROLS_SYSTEM_MESSAGE = 211,
    /**
     * @generated from enum value: SUPPORT_SYSTEM_MESSAGE = 212;
     */
    SUPPORT_SYSTEM_MESSAGE = 212,
    /**
     * @generated from enum value: CHANGE_LID = 213;
     */
    CHANGE_LID = 213,
    /**
     * @generated from enum value: BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE = 214;
     */
    BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE = 214,
    /**
     * @generated from enum value: BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE = 215;
     */
    BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE = 215,
    /**
     * @generated from enum value: CHANGE_LIMIT_SHARING = 216;
     */
    CHANGE_LIMIT_SHARING = 216,
    /**
     * @generated from enum value: GROUP_MEMBER_LINK_MODE = 217;
     */
    GROUP_MEMBER_LINK_MODE = 217,
    /**
     * @generated from enum value: BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE = 218;
     */
    BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE = 218,
    /**
     * @generated from enum value: PHONE_NUMBER_HIDING_CHAT_DEPRECATED_MESSAGE = 219;
     */
    PHONE_NUMBER_HIDING_CHAT_DEPRECATED_MESSAGE = 219
}
/**
 * Describes the enum WebMessageInfo.StubType.
 */
declare const WebMessageInfo_StubTypeSchema: GenEnum<WebMessageInfo_StubType>;
/**
 * @generated from message WebNotificationsInfo
 */
type WebNotificationsInfo = Message$1<"WebNotificationsInfo"> & {
    /**
     * @generated from field: optional uint64 timestamp = 2;
     */
    timestamp: bigint;
    /**
     * @generated from field: optional uint32 unreadChats = 3;
     */
    unreadChats: number;
    /**
     * @generated from field: optional uint32 notifyMessageCount = 4;
     */
    notifyMessageCount: number;
    /**
     * @generated from field: repeated WebMessageInfo notifyMessages = 5;
     */
    notifyMessages: WebMessageInfo[];
};
/**
 * Describes the message WebNotificationsInfo.
 * Use `create(WebNotificationsInfoSchema)` to create a new message.
 */
declare const WebNotificationsInfoSchema: GenMessage<WebNotificationsInfo>;
/**
 * @generated from enum ADVEncryptionType
 */
declare enum ADVEncryptionType {
    /**
     * @generated from enum value: E2EE = 0;
     */
    E2EE = 0,
    /**
     * @generated from enum value: HOSTED = 1;
     */
    HOSTED = 1
}
/**
 * Describes the enum ADVEncryptionType.
 */
declare const ADVEncryptionTypeSchema: GenEnum<ADVEncryptionType>;
/**
 * @generated from enum BotMetricsEntryPoint
 */
declare enum BotMetricsEntryPoint {
    /**
     * @generated from enum value: FAVICON = 1;
     */
    FAVICON = 1,
    /**
     * @generated from enum value: CHATLIST = 2;
     */
    CHATLIST = 2,
    /**
     * @generated from enum value: AISEARCH_NULL_STATE_PAPER_PLANE = 3;
     */
    AISEARCH_NULL_STATE_PAPER_PLANE = 3,
    /**
     * @generated from enum value: AISEARCH_NULL_STATE_SUGGESTION = 4;
     */
    AISEARCH_NULL_STATE_SUGGESTION = 4,
    /**
     * @generated from enum value: AISEARCH_TYPE_AHEAD_SUGGESTION = 5;
     */
    AISEARCH_TYPE_AHEAD_SUGGESTION = 5,
    /**
     * @generated from enum value: AISEARCH_TYPE_AHEAD_PAPER_PLANE = 6;
     */
    AISEARCH_TYPE_AHEAD_PAPER_PLANE = 6,
    /**
     * @generated from enum value: AISEARCH_TYPE_AHEAD_RESULT_CHATLIST = 7;
     */
    AISEARCH_TYPE_AHEAD_RESULT_CHATLIST = 7,
    /**
     * @generated from enum value: AISEARCH_TYPE_AHEAD_RESULT_MESSAGES = 8;
     */
    AISEARCH_TYPE_AHEAD_RESULT_MESSAGES = 8,
    /**
     * @generated from enum value: AIVOICE_SEARCH_BAR = 9;
     */
    AIVOICE_SEARCH_BAR = 9,
    /**
     * @generated from enum value: AIVOICE_FAVICON = 10;
     */
    AIVOICE_FAVICON = 10,
    /**
     * @generated from enum value: AISTUDIO = 11;
     */
    AISTUDIO = 11,
    /**
     * @generated from enum value: DEEPLINK = 12;
     */
    DEEPLINK = 12,
    /**
     * @generated from enum value: NOTIFICATION = 13;
     */
    NOTIFICATION = 13,
    /**
     * @generated from enum value: PROFILE_MESSAGE_BUTTON = 14;
     */
    PROFILE_MESSAGE_BUTTON = 14,
    /**
     * @generated from enum value: FORWARD = 15;
     */
    FORWARD = 15,
    /**
     * @generated from enum value: APP_SHORTCUT = 16;
     */
    APP_SHORTCUT = 16,
    /**
     * @generated from enum value: FF_FAMILY = 17;
     */
    FF_FAMILY = 17,
    /**
     * @generated from enum value: AI_TAB = 18;
     */
    AI_TAB = 18,
    /**
     * @generated from enum value: AI_HOME = 19;
     */
    AI_HOME = 19,
    /**
     * @generated from enum value: AI_DEEPLINK_IMMERSIVE = 20;
     */
    AI_DEEPLINK_IMMERSIVE = 20,
    /**
     * @generated from enum value: AI_DEEPLINK = 21;
     */
    AI_DEEPLINK = 21,
    /**
     * @generated from enum value: META_AI_CHAT_SHORTCUT_AI_STUDIO = 22;
     */
    META_AI_CHAT_SHORTCUT_AI_STUDIO = 22,
    /**
     * @generated from enum value: UGC_CHAT_SHORTCUT_AI_STUDIO = 23;
     */
    UGC_CHAT_SHORTCUT_AI_STUDIO = 23,
    /**
     * @generated from enum value: NEW_CHAT_AI_STUDIO = 24;
     */
    NEW_CHAT_AI_STUDIO = 24,
    /**
     * @generated from enum value: AIVOICE_FAVICON_CALL_HISTORY = 25;
     */
    AIVOICE_FAVICON_CALL_HISTORY = 25,
    /**
     * @generated from enum value: ASK_META_AI_CONTEXT_MENU = 26;
     */
    ASK_META_AI_CONTEXT_MENU = 26
}
/**
 * Describes the enum BotMetricsEntryPoint.
 */
declare const BotMetricsEntryPointSchema: GenEnum<BotMetricsEntryPoint>;
/**
 * @generated from enum BotMetricsThreadEntryPoint
 */
declare enum BotMetricsThreadEntryPoint {
    /**
     * @generated from enum value: AI_TAB_THREAD = 1;
     */
    AI_TAB_THREAD = 1,
    /**
     * @generated from enum value: AI_HOME_THREAD = 2;
     */
    AI_HOME_THREAD = 2,
    /**
     * @generated from enum value: AI_DEEPLINK_IMMERSIVE_THREAD = 3;
     */
    AI_DEEPLINK_IMMERSIVE_THREAD = 3,
    /**
     * @generated from enum value: AI_DEEPLINK_THREAD = 4;
     */
    AI_DEEPLINK_THREAD = 4,
    /**
     * @generated from enum value: ASK_META_AI_CONTEXT_MENU_THREAD = 5;
     */
    ASK_META_AI_CONTEXT_MENU_THREAD = 5
}
/**
 * Describes the enum BotMetricsThreadEntryPoint.
 */
declare const BotMetricsThreadEntryPointSchema: GenEnum<BotMetricsThreadEntryPoint>;
/**
 * @generated from enum BotSessionSource
 */
declare enum BotSessionSource {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: NULL_STATE = 1;
     */
    NULL_STATE = 1,
    /**
     * @generated from enum value: TYPEAHEAD = 2;
     */
    TYPEAHEAD = 2,
    /**
     * @generated from enum value: USER_INPUT = 3;
     */
    USER_INPUT = 3,
    /**
     * @generated from enum value: EMU_FLASH = 4;
     */
    EMU_FLASH = 4,
    /**
     * @generated from enum value: EMU_FLASH_FOLLOWUP = 5;
     */
    EMU_FLASH_FOLLOWUP = 5,
    /**
     * @generated from enum value: VOICE = 6;
     */
    VOICE = 6
}
/**
 * Describes the enum BotSessionSource.
 */
declare const BotSessionSourceSchema: GenEnum<BotSessionSource>;
/**
 * @generated from enum KeepType
 */
declare enum KeepType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: KEEP_FOR_ALL = 1;
     */
    KEEP_FOR_ALL = 1,
    /**
     * @generated from enum value: UNDO_KEEP_FOR_ALL = 2;
     */
    UNDO_KEEP_FOR_ALL = 2
}
/**
 * Describes the enum KeepType.
 */
declare const KeepTypeSchema: GenEnum<KeepType>;
/**
 * @generated from enum MediaVisibility
 */
declare enum MediaVisibility {
    /**
     * @generated from enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from enum value: OFF = 1;
     */
    OFF = 1,
    /**
     * @generated from enum value: ON = 2;
     */
    ON = 2
}
/**
 * Describes the enum MediaVisibility.
 */
declare const MediaVisibilitySchema: GenEnum<MediaVisibility>;
/**
 * @generated from enum PrivacySystemMessage
 */
declare enum PrivacySystemMessage {
    /**
     * @generated from enum value: E2EE_MSG = 1;
     */
    E2EE_MSG = 1,
    /**
     * @generated from enum value: NE2EE_SELF = 2;
     */
    NE2EE_SELF = 2,
    /**
     * @generated from enum value: NE2EE_OTHER = 3;
     */
    NE2EE_OTHER = 3
}
/**
 * Describes the enum PrivacySystemMessage.
 */
declare const PrivacySystemMessageSchema: GenEnum<PrivacySystemMessage>;

declare class SessionRecord {
    sessions: {
        [baseKeyBase64: string]: ProtoSessionEntry;
    };
    version: string;
    static createEntry(): ProtoSessionEntry;
    static deserialize(data: Uint8Array): SessionRecord;
    serialize(): Uint8Array;
    haveOpenSession(): boolean;
    getSession(baseKey: Uint8Array): ProtoSessionEntry | undefined;
    getOpenSession(): ProtoSessionEntry | undefined;
    setSession(session: ProtoSessionEntry): void;
    getSessions(): ProtoSessionEntry[];
    closeSession(session: ProtoSessionEntry): void;
    openSession(session: ProtoSessionEntry): void;
    isClosed(session: ProtoSessionEntry): boolean;
    removeOldSessions(): void;
    deleteAllSessions(): void;
}

declare const ChainType: {
    SENDING: number;
    RECEIVING: number;
};
type ChainType = typeof ChainType[keyof typeof ChainType];

type KeyPair = {
    publicKey: Uint8Array;
    privateKey: Uint8Array;
};
type SignedKeyPair = {
    keyPair: KeyPair;
    signature: Uint8Array;
    keyId: number;
};
type ProtocolAddress$1 = {
    name: string;
    deviceId: number;
};
type SignalIdentity = {
    identifier: ProtocolAddress$1;
    identifierKey: Uint8Array;
};
interface SignalSessionStorage {
    loadSession(addr: string): Promise<SessionRecord | undefined | null>;
    storeSession(addr: string, record: SessionRecord): Promise<void>;
    getOurIdentity(): Promise<KeyPair>;
    getOurRegistrationId(): Promise<number>;
    isTrustedIdentity(identifier: string, identityKey: Uint8Array, _direction: ChainType): Promise<boolean>;
    removePreKey?(id: number): Promise<void>;
    loadPreKey(keyId: number): Promise<KeyPair | undefined>;
    loadSignedPreKey(keyId: number): Promise<KeyPair | undefined>;
}

declare class ProtocolAddress {
    id: string;
    deviceId: number;
    static from(encoded: string): ProtocolAddress;
    constructor(id: string, deviceId: number);
    toString(): string;
    is(other: ProtocolAddress): boolean;
}

declare class SessionCipher {
    private addr;
    private storage;
    private mutex;
    constructor(storage: SignalSessionStorage, protocolAddress: ProtocolAddress);
    private _encodeTupleByte;
    private _decodeTupleByte;
    toString(): string;
    getRecord(): Promise<SessionRecord | undefined>;
    storeRecord(record: SessionRecord): Promise<void>;
    encrypt(data: Uint8Array): Promise<{
        type: number;
        body: Uint8Array;
        registrationId: number;
    }>;
    decryptWithSessions(data: Uint8Array, sessions: ProtoSessionEntry[]): Promise<{
        session: ProtoSessionEntry;
        plaintext: Uint8Array;
    }>;
    decryptWhisperMessage(data: Uint8Array): Promise<Uint8Array>;
    decryptPreKeyWhisperMessage(data: Uint8Array): Promise<Uint8Array>;
    private doDecryptWhisperMessage;
    private fillMessageKeys;
    private maybeStepRatchet;
    private calculateRatchet;
    hasOpenSession(): Promise<boolean>;
    closeOpenSession(): Promise<void>;
}
declare function hmacSha256Verify(data: Uint8Array, key: Uint8Array, mac: Uint8Array, length: number): void;

declare class SessionBuilder {
    private readonly addr;
    private readonly storage;
    private readonly mutex;
    constructor(storage: SignalSessionStorage, protocolAddress: ProtocolAddress);
    initOutgoing(device: {
        identityKey: Uint8Array;
        signedPreKey: {
            publicKey: Uint8Array;
            keyId: number;
            signature: Uint8Array;
        };
        preKey?: {
            publicKey: Uint8Array;
            keyId: number;
        };
        registrationId: number;
    }): Promise<void>;
    initIncoming(record: SessionRecord, message: {
        identityKey: Uint8Array;
        baseKey: Uint8Array;
        preKeyId?: number;
        signedPreKeyId?: number;
        registrationId?: number;
    }): Promise<number | undefined>;
    initSession(isInitiator: boolean, ourEphemeralKey: {
        privateKey: Uint8Array;
        publicKey: Uint8Array;
    }, ourSignedKey: {
        privateKey: Uint8Array;
        publicKey: Uint8Array;
    } | undefined, theirIdentityPubKey: Uint8Array, theirEphemeralPubKey: Uint8Array | undefined, theirSignedPubKey: Uint8Array | undefined, registrationId: number | undefined): Promise<ProtoSessionEntry>;
    calculateSendingRatchet(session: ProtoSessionEntry, remoteKey: Uint8Array): void;
}

declare function randomBytes(size: number): Uint8Array;
declare function hmacSign(key: Uint8Array, buffer: Uint8Array): Uint8Array;
declare function hkdfSignalDeriveSecrets(input: Uint8Array, salt: Uint8Array, info: Uint8Array): [Uint8Array, Uint8Array, Uint8Array];
declare function aesEncrypt(buffer: Uint8Array, key: Uint8Array, iv?: Uint8Array<ArrayBufferLike>): Uint8Array;
declare function aesDecrypt(key: Uint8Array, buffer: Uint8Array, iv: Uint8Array): Uint8Array;

export { type ADVDeviceIdentity, ADVDeviceIdentitySchema, ADVEncryptionType, ADVEncryptionTypeSchema, type ADVKeyIndexList, ADVKeyIndexListSchema, type ADVSignedDeviceIdentity, type ADVSignedDeviceIdentityHMAC, ADVSignedDeviceIdentityHMACSchema, ADVSignedDeviceIdentitySchema, type ADVSignedKeyIndexList, ADVSignedKeyIndexListSchema, type AIQueryFanout, AIQueryFanoutSchema, type AIRichResponseMessage, AIRichResponseMessageSchema, type AIRichResponseMessage_AIRichResponseCodeMetadata, AIRichResponseMessage_AIRichResponseCodeMetadataSchema, type AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeBlock, AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeBlockSchema, AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeHighlightType, AIRichResponseMessage_AIRichResponseCodeMetadata_AIRichResponseCodeHighlightTypeSchema, type AIRichResponseMessage_AIRichResponseContentItemsMetadata, AIRichResponseMessage_AIRichResponseContentItemsMetadataSchema, type AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseContentItemMetadata, AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseContentItemMetadataSchema, type AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseReelItem, AIRichResponseMessage_AIRichResponseContentItemsMetadata_AIRichResponseReelItemSchema, AIRichResponseMessage_AIRichResponseContentItemsMetadata_ContentType, AIRichResponseMessage_AIRichResponseContentItemsMetadata_ContentTypeSchema, type AIRichResponseMessage_AIRichResponseDynamicMetadata, AIRichResponseMessage_AIRichResponseDynamicMetadataSchema, AIRichResponseMessage_AIRichResponseDynamicMetadata_AIRichResponseDynamicMetadataType, AIRichResponseMessage_AIRichResponseDynamicMetadata_AIRichResponseDynamicMetadataTypeSchema, type AIRichResponseMessage_AIRichResponseGridImageMetadata, AIRichResponseMessage_AIRichResponseGridImageMetadataSchema, type AIRichResponseMessage_AIRichResponseImageURL, AIRichResponseMessage_AIRichResponseImageURLSchema, type AIRichResponseMessage_AIRichResponseInlineImageMetadata, AIRichResponseMessage_AIRichResponseInlineImageMetadataSchema, AIRichResponseMessage_AIRichResponseInlineImageMetadata_AIRichResponseImageAlignment, AIRichResponseMessage_AIRichResponseInlineImageMetadata_AIRichResponseImageAlignmentSchema, type AIRichResponseMessage_AIRichResponseLatexMetadata, AIRichResponseMessage_AIRichResponseLatexMetadataSchema, type AIRichResponseMessage_AIRichResponseLatexMetadata_AIRichResponseLatexExpression, AIRichResponseMessage_AIRichResponseLatexMetadata_AIRichResponseLatexExpressionSchema, type AIRichResponseMessage_AIRichResponseMapMetadata, AIRichResponseMessage_AIRichResponseMapMetadataSchema, type AIRichResponseMessage_AIRichResponseMapMetadata_AIRichResponseMapAnnotation, AIRichResponseMessage_AIRichResponseMapMetadata_AIRichResponseMapAnnotationSchema, AIRichResponseMessage_AIRichResponseMessageType, AIRichResponseMessage_AIRichResponseMessageTypeSchema, type AIRichResponseMessage_AIRichResponseSubMessage, AIRichResponseMessage_AIRichResponseSubMessageSchema, AIRichResponseMessage_AIRichResponseSubMessageType, AIRichResponseMessage_AIRichResponseSubMessageTypeSchema, type AIRichResponseMessage_AIRichResponseTableMetadata, AIRichResponseMessage_AIRichResponseTableMetadataSchema, type AIRichResponseMessage_AIRichResponseTableMetadata_AIRichResponseTableRow, AIRichResponseMessage_AIRichResponseTableMetadata_AIRichResponseTableRowSchema, type AIRichResponseMessage_AIRichResponseUnifiedResponse, AIRichResponseMessage_AIRichResponseUnifiedResponseSchema, type Account, AccountSchema, type ActionLink, ActionLinkSchema, type AutoDownloadSettings, AutoDownloadSettingsSchema, type AvatarUserSettings, AvatarUserSettingsSchema, type BizAccountLinkInfo, BizAccountLinkInfoSchema, BizAccountLinkInfo_AccountType, BizAccountLinkInfo_AccountTypeSchema, BizAccountLinkInfo_HostStorageType, BizAccountLinkInfo_HostStorageTypeSchema, type BizAccountPayload, BizAccountPayloadSchema, type BizIdentityInfo, BizIdentityInfoSchema, BizIdentityInfo_ActualActorsType, BizIdentityInfo_ActualActorsTypeSchema, BizIdentityInfo_HostStorageType, BizIdentityInfo_HostStorageTypeSchema, BizIdentityInfo_VerifiedLevelValue, BizIdentityInfo_VerifiedLevelValueSchema, type BotAgeCollectionMetadata, BotAgeCollectionMetadataSchema, type BotAvatarMetadata, BotAvatarMetadataSchema, type BotCapabilityMetadata, BotCapabilityMetadataSchema, BotCapabilityMetadata_BotCapabilityType, BotCapabilityMetadata_BotCapabilityTypeSchema, type BotImagineMetadata, BotImagineMetadataSchema, BotImagineMetadata_ImagineType, BotImagineMetadata_ImagineTypeSchema, type BotLinkedAccount, BotLinkedAccountSchema, BotLinkedAccount_BotLinkedAccountType, BotLinkedAccount_BotLinkedAccountTypeSchema, type BotLinkedAccountsMetadata, BotLinkedAccountsMetadataSchema, type BotMediaMetadata, BotMediaMetadataSchema, BotMediaMetadata_OrientationType, BotMediaMetadata_OrientationTypeSchema, type BotMemoryFact, BotMemoryFactSchema, type BotMemoryMetadata, BotMemoryMetadataSchema, type BotMemuMetadata, BotMemuMetadataSchema, type BotMetadata, BotMetadataSchema, BotMetricsEntryPoint, BotMetricsEntryPointSchema, type BotMetricsMetadata, BotMetricsMetadataSchema, BotMetricsThreadEntryPoint, BotMetricsThreadEntryPointSchema, type BotModeSelectionMetadata, BotModeSelectionMetadataSchema, BotModeSelectionMetadata_BotUserSelectionMode, BotModeSelectionMetadata_BotUserSelectionModeSchema, type BotModelMetadata, BotModelMetadataSchema, BotModelMetadata_ModelType, BotModelMetadata_ModelTypeSchema, BotModelMetadata_PremiumModelStatus, BotModelMetadata_PremiumModelStatusSchema, type BotPluginMetadata, BotPluginMetadataSchema, BotPluginMetadata_PluginType, BotPluginMetadata_PluginTypeSchema, BotPluginMetadata_SearchProvider, BotPluginMetadata_SearchProviderSchema, type BotProgressIndicatorMetadata, BotProgressIndicatorMetadataSchema, type BotProgressIndicatorMetadata_BotPlanningStepMetadata, BotProgressIndicatorMetadata_BotPlanningStepMetadataSchema, type BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourceMetadata, BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourceMetadataSchema, type BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadata, BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadataSchema, BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadata_BotPlanningSearchSourceProvider, BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningSearchSourcesMetadata_BotPlanningSearchSourceProviderSchema, type BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningStepSectionMetadata, BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotPlanningStepSectionMetadataSchema, BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotSearchSourceProvider, BotProgressIndicatorMetadata_BotPlanningStepMetadata_BotSearchSourceProviderSchema, BotProgressIndicatorMetadata_BotPlanningStepMetadata_PlanningStepStatus, BotProgressIndicatorMetadata_BotPlanningStepMetadata_PlanningStepStatusSchema, type BotPromotionMessageMetadata, BotPromotionMessageMetadataSchema, BotPromotionMessageMetadata_BotPromotionType, BotPromotionMessageMetadata_BotPromotionTypeSchema, type BotPromptSuggestion, BotPromptSuggestionSchema, type BotPromptSuggestions, BotPromptSuggestionsSchema, type BotQuotaMetadata, BotQuotaMetadataSchema, type BotQuotaMetadata_BotFeatureQuotaMetadata, BotQuotaMetadata_BotFeatureQuotaMetadataSchema, BotQuotaMetadata_BotFeatureQuotaMetadata_BotFeatureType, BotQuotaMetadata_BotFeatureQuotaMetadata_BotFeatureTypeSchema, type BotReminderMetadata, BotReminderMetadataSchema, BotReminderMetadata_ReminderAction, BotReminderMetadata_ReminderActionSchema, BotReminderMetadata_ReminderFrequency, BotReminderMetadata_ReminderFrequencySchema, type BotRenderingMetadata, BotRenderingMetadataSchema, type BotRenderingMetadata_Keyword, BotRenderingMetadata_KeywordSchema, type BotSessionMetadata, BotSessionMetadataSchema, BotSessionSource, BotSessionSourceSchema, type BotSignatureVerificationMetadata, BotSignatureVerificationMetadataSchema, type BotSignatureVerificationUseCaseProof, BotSignatureVerificationUseCaseProofSchema, BotSignatureVerificationUseCaseProof_BotSignatureUseCase, BotSignatureVerificationUseCaseProof_BotSignatureUseCaseSchema, type BotSourcesMetadata, BotSourcesMetadataSchema, type BotSourcesMetadata_BotSourceItem, BotSourcesMetadata_BotSourceItemSchema, BotSourcesMetadata_BotSourceItem_SourceProvider, BotSourcesMetadata_BotSourceItem_SourceProviderSchema, type BotSuggestedPromptMetadata, BotSuggestedPromptMetadataSchema, type CallLogRecord, CallLogRecordSchema, CallLogRecord_CallResult, CallLogRecord_CallResultSchema, CallLogRecord_CallType, CallLogRecord_CallTypeSchema, type CallLogRecord_ParticipantInfo, CallLogRecord_ParticipantInfoSchema, CallLogRecord_SilenceReason, CallLogRecord_SilenceReasonSchema, type CertChain, CertChainSchema, type CertChain_NoiseCertificate, CertChain_NoiseCertificateSchema, type CertChain_NoiseCertificate_Details, CertChain_NoiseCertificate_DetailsSchema, type ChatLockSettings, ChatLockSettingsSchema, type ChatRowOpaqueData, ChatRowOpaqueDataSchema, type ChatRowOpaqueData_DraftMessage, ChatRowOpaqueData_DraftMessageSchema, type ChatRowOpaqueData_DraftMessage_CtwaContextData, ChatRowOpaqueData_DraftMessage_CtwaContextDataSchema, ChatRowOpaqueData_DraftMessage_CtwaContextData_ContextInfoExternalAdReplyInfoMediaType, ChatRowOpaqueData_DraftMessage_CtwaContextData_ContextInfoExternalAdReplyInfoMediaTypeSchema, type ChatRowOpaqueData_DraftMessage_CtwaContextLinkData, ChatRowOpaqueData_DraftMessage_CtwaContextLinkDataSchema, type Citation, CitationSchema, type ClientPairingProps, ClientPairingPropsSchema, type ClientPayload, ClientPayloadSchema, ClientPayload_AccountType, ClientPayload_AccountTypeSchema, ClientPayload_ConnectReason, ClientPayload_ConnectReasonSchema, ClientPayload_ConnectType, ClientPayload_ConnectTypeSchema, type ClientPayload_DNSSource, ClientPayload_DNSSourceSchema, ClientPayload_DNSSource_DNSResolutionMethod, ClientPayload_DNSSource_DNSResolutionMethodSchema, type ClientPayload_DevicePairingRegistrationData, ClientPayload_DevicePairingRegistrationDataSchema, ClientPayload_IOSAppExtension, ClientPayload_IOSAppExtensionSchema, type ClientPayload_InteropData, ClientPayload_InteropDataSchema, ClientPayload_Product, ClientPayload_ProductSchema, ClientPayload_TrafficAnonymization, ClientPayload_TrafficAnonymizationSchema, type ClientPayload_UserAgent, ClientPayload_UserAgentSchema, type ClientPayload_UserAgent_AppVersion, ClientPayload_UserAgent_AppVersionSchema, ClientPayload_UserAgent_DeviceType, ClientPayload_UserAgent_DeviceTypeSchema, ClientPayload_UserAgent_Platform, ClientPayload_UserAgent_PlatformSchema, ClientPayload_UserAgent_ReleaseChannel, ClientPayload_UserAgent_ReleaseChannelSchema, type ClientPayload_WebInfo, ClientPayload_WebInfoSchema, ClientPayload_WebInfo_WebSubPlatform, ClientPayload_WebInfo_WebSubPlatformSchema, type ClientPayload_WebInfo_WebdPayload, ClientPayload_WebInfo_WebdPayloadSchema, type CommentMetadata, CommentMetadataSchema, type CompanionCommitment, CompanionCommitmentSchema, type CompanionEphemeralIdentity, CompanionEphemeralIdentitySchema, type Config, ConfigSchema, type ContextInfo, ContextInfoSchema, type ContextInfo_AdReplyInfo, ContextInfo_AdReplyInfoSchema, ContextInfo_AdReplyInfo_MediaType, ContextInfo_AdReplyInfo_MediaTypeSchema, type ContextInfo_BusinessMessageForwardInfo, ContextInfo_BusinessMessageForwardInfoSchema, type ContextInfo_DataSharingContext, ContextInfo_DataSharingContextSchema, type ContextInfo_DataSharingContext_Parameters, ContextInfo_DataSharingContext_ParametersSchema, type ContextInfo_ExternalAdReplyInfo, ContextInfo_ExternalAdReplyInfoSchema, ContextInfo_ExternalAdReplyInfo_AdType, ContextInfo_ExternalAdReplyInfo_AdTypeSchema, ContextInfo_ExternalAdReplyInfo_MediaType, ContextInfo_ExternalAdReplyInfo_MediaTypeSchema, type ContextInfo_FeatureEligibilities, ContextInfo_FeatureEligibilitiesSchema, type ContextInfo_ForwardedAIBotMessageInfo, ContextInfo_ForwardedAIBotMessageInfoSchema, type ContextInfo_ForwardedNewsletterMessageInfo, ContextInfo_ForwardedNewsletterMessageInfoSchema, ContextInfo_ForwardedNewsletterMessageInfo_ContentType, ContextInfo_ForwardedNewsletterMessageInfo_ContentTypeSchema, ContextInfo_PairedMediaType, ContextInfo_PairedMediaTypeSchema, ContextInfo_StatusAttributionType, ContextInfo_StatusAttributionTypeSchema, ContextInfo_StatusSourceType, ContextInfo_StatusSourceTypeSchema, type ContextInfo_UTMInfo, ContextInfo_UTMInfoSchema, type Conversation, ConversationSchema, Conversation_EndOfHistoryTransferType, Conversation_EndOfHistoryTransferTypeSchema, type DeviceCapabilities, DeviceCapabilitiesSchema, DeviceCapabilities_ChatLockSupportLevel, DeviceCapabilities_ChatLockSupportLevelSchema, type DeviceCapabilities_LIDMigration, DeviceCapabilities_LIDMigrationSchema, type DeviceConsistencyCodeMessage, DeviceConsistencyCodeMessageSchema, type DeviceListMetadata, DeviceListMetadataSchema, type DeviceProps, DevicePropsSchema, type DeviceProps_AppVersion, DeviceProps_AppVersionSchema, type DeviceProps_HistorySyncConfig, DeviceProps_HistorySyncConfigSchema, DeviceProps_PlatformType, DeviceProps_PlatformTypeSchema, type DisappearingMode, DisappearingModeSchema, DisappearingMode_Initiator, DisappearingMode_InitiatorSchema, DisappearingMode_Trigger, DisappearingMode_TriggerSchema, type EmbeddedContent, EmbeddedContentSchema, type EmbeddedMessage, EmbeddedMessageSchema, type EmbeddedMusic, EmbeddedMusicSchema, type EncryptedPairingRequest, EncryptedPairingRequestSchema, type EphemeralSetting, EphemeralSettingSchema, type EventAdditionalMetadata, EventAdditionalMetadataSchema, type EventResponse, EventResponseSchema, type ExitCode, ExitCodeSchema, type ExternalBlobReference, ExternalBlobReferenceSchema, type Field, FieldSchema, type GlobalSettings, GlobalSettingsSchema, type GroupMention, GroupMentionSchema, type GroupParticipant, GroupParticipantSchema, GroupParticipant_Rank, GroupParticipant_RankSchema, type HandshakeMessage, HandshakeMessageSchema, type HandshakeMessage_ClientFinish, HandshakeMessage_ClientFinishSchema, type HandshakeMessage_ClientHello, HandshakeMessage_ClientHelloSchema, type HandshakeMessage_ServerHello, HandshakeMessage_ServerHelloSchema, type HistorySync, type HistorySyncMsg, HistorySyncMsgSchema, HistorySyncSchema, HistorySync_BotAIWaitListState, HistorySync_BotAIWaitListStateSchema, HistorySync_HistorySyncType, HistorySync_HistorySyncTypeSchema, type HydratedTemplateButton, HydratedTemplateButtonSchema, type HydratedTemplateButton_HydratedCallButton, HydratedTemplateButton_HydratedCallButtonSchema, type HydratedTemplateButton_HydratedQuickReplyButton, HydratedTemplateButton_HydratedQuickReplyButtonSchema, type HydratedTemplateButton_HydratedURLButton, HydratedTemplateButton_HydratedURLButtonSchema, HydratedTemplateButton_HydratedURLButton_WebviewPresentationType, HydratedTemplateButton_HydratedURLButton_WebviewPresentationTypeSchema, type IdentityKeyPairStructure, IdentityKeyPairStructureSchema, type InteractiveAnnotation, InteractiveAnnotationSchema, InteractiveAnnotation_StatusLinkType, InteractiveAnnotation_StatusLinkTypeSchema, type KeepInChat, KeepInChatSchema, KeepType, KeepTypeSchema, type KeyExchangeMessage, KeyExchangeMessageSchema, type KeyId, KeyIdSchema, type KeyPair, type LIDMigrationMapping, LIDMigrationMappingSchema, type LIDMigrationMappingSyncMessage, LIDMigrationMappingSyncMessageSchema, type LIDMigrationMappingSyncPayload, LIDMigrationMappingSyncPayloadSchema, type LegacyMessage, LegacyMessageSchema, type LimitSharing, LimitSharingSchema, LimitSharing_Trigger, LimitSharing_TriggerSchema, type LocalizedName, LocalizedNameSchema, type Location, LocationSchema, type MediaData, MediaDataSchema, type MediaNotifyMessage, MediaNotifyMessageSchema, type MediaRetryNotification, MediaRetryNotificationSchema, MediaRetryNotification_ResultType, MediaRetryNotification_ResultTypeSchema, MediaVisibility, MediaVisibilitySchema, type MemberLabel, MemberLabelSchema, type Message, type MessageAddOn, type MessageAddOnContextInfo, MessageAddOnContextInfoSchema, MessageAddOnSchema, MessageAddOn_MessageAddOnType, MessageAddOn_MessageAddOnTypeSchema, type MessageAssociation, MessageAssociationSchema, MessageAssociation_AssociationType, MessageAssociation_AssociationTypeSchema, type MessageContextInfo, MessageContextInfoSchema, MessageContextInfo_MessageAddonExpiryType, MessageContextInfo_MessageAddonExpiryTypeSchema, type MessageKey, MessageKeySchema, MessageSchema, type MessageSecretMessage, MessageSecretMessageSchema, type Message_AlbumMessage, Message_AlbumMessageSchema, type Message_AppStateFatalExceptionNotification, Message_AppStateFatalExceptionNotificationSchema, type Message_AppStateSyncKey, type Message_AppStateSyncKeyData, Message_AppStateSyncKeyDataSchema, type Message_AppStateSyncKeyFingerprint, Message_AppStateSyncKeyFingerprintSchema, type Message_AppStateSyncKeyId, Message_AppStateSyncKeyIdSchema, type Message_AppStateSyncKeyRequest, Message_AppStateSyncKeyRequestSchema, Message_AppStateSyncKeySchema, type Message_AppStateSyncKeyShare, Message_AppStateSyncKeyShareSchema, type Message_AudioMessage, Message_AudioMessageSchema, type Message_BCallMessage, Message_BCallMessageSchema, Message_BCallMessage_MediaType, Message_BCallMessage_MediaTypeSchema, type Message_BotFeedbackMessage, Message_BotFeedbackMessageSchema, Message_BotFeedbackMessage_BotFeedbackKind, Message_BotFeedbackMessage_BotFeedbackKindMultipleNegative, Message_BotFeedbackMessage_BotFeedbackKindMultipleNegativeSchema, Message_BotFeedbackMessage_BotFeedbackKindMultiplePositive, Message_BotFeedbackMessage_BotFeedbackKindMultiplePositiveSchema, Message_BotFeedbackMessage_BotFeedbackKindSchema, Message_BotFeedbackMessage_ReportKind, Message_BotFeedbackMessage_ReportKindSchema, type Message_ButtonsMessage, Message_ButtonsMessageSchema, type Message_ButtonsMessage_Button, Message_ButtonsMessage_ButtonSchema, type Message_ButtonsMessage_Button_ButtonText, Message_ButtonsMessage_Button_ButtonTextSchema, type Message_ButtonsMessage_Button_NativeFlowInfo, Message_ButtonsMessage_Button_NativeFlowInfoSchema, Message_ButtonsMessage_Button_Type, Message_ButtonsMessage_Button_TypeSchema, Message_ButtonsMessage_HeaderType, Message_ButtonsMessage_HeaderTypeSchema, type Message_ButtonsResponseMessage, Message_ButtonsResponseMessageSchema, Message_ButtonsResponseMessage_Type, Message_ButtonsResponseMessage_TypeSchema, type Message_Call, type Message_CallLogMessage, Message_CallLogMessageSchema, Message_CallLogMessage_CallOutcome, Message_CallLogMessage_CallOutcomeSchema, type Message_CallLogMessage_CallParticipant, Message_CallLogMessage_CallParticipantSchema, Message_CallLogMessage_CallType, Message_CallLogMessage_CallTypeSchema, Message_CallSchema, type Message_CancelPaymentRequestMessage, Message_CancelPaymentRequestMessageSchema, type Message_Chat, Message_ChatSchema, type Message_CloudAPIThreadControlNotification, Message_CloudAPIThreadControlNotificationSchema, Message_CloudAPIThreadControlNotification_CloudAPIThreadControl, type Message_CloudAPIThreadControlNotification_CloudAPIThreadControlNotificationContent, Message_CloudAPIThreadControlNotification_CloudAPIThreadControlNotificationContentSchema, Message_CloudAPIThreadControlNotification_CloudAPIThreadControlSchema, type Message_CommentMessage, Message_CommentMessageSchema, type Message_ContactMessage, Message_ContactMessageSchema, type Message_ContactsArrayMessage, Message_ContactsArrayMessageSchema, type Message_DeclinePaymentRequestMessage, Message_DeclinePaymentRequestMessageSchema, type Message_DeviceSentMessage, Message_DeviceSentMessageSchema, type Message_DocumentMessage, Message_DocumentMessageSchema, type Message_EncCommentMessage, Message_EncCommentMessageSchema, type Message_EncEventResponseMessage, Message_EncEventResponseMessageSchema, type Message_EncReactionMessage, Message_EncReactionMessageSchema, type Message_EventMessage, Message_EventMessageSchema, type Message_EventResponseMessage, Message_EventResponseMessageSchema, Message_EventResponseMessage_EventResponseType, Message_EventResponseMessage_EventResponseTypeSchema, type Message_ExtendedTextMessage, Message_ExtendedTextMessageSchema, Message_ExtendedTextMessage_FontType, Message_ExtendedTextMessage_FontTypeSchema, Message_ExtendedTextMessage_InviteLinkGroupType, Message_ExtendedTextMessage_InviteLinkGroupTypeSchema, Message_ExtendedTextMessage_PreviewType, Message_ExtendedTextMessage_PreviewTypeSchema, type Message_FullHistorySyncOnDemandRequestMetadata, Message_FullHistorySyncOnDemandRequestMetadataSchema, type Message_FutureProofMessage, Message_FutureProofMessageSchema, type Message_GroupInviteMessage, Message_GroupInviteMessageSchema, Message_GroupInviteMessage_GroupType, Message_GroupInviteMessage_GroupTypeSchema, type Message_HighlyStructuredMessage, Message_HighlyStructuredMessageSchema, type Message_HighlyStructuredMessage_HSMLocalizableParameter, Message_HighlyStructuredMessage_HSMLocalizableParameterSchema, type Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMCurrency, Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMCurrencySchema, type Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime, Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTimeSchema, type Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent, Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponentSchema, Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_CalendarType, Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_CalendarTypeSchema, Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_DayOfWeekType, Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeComponent_DayOfWeekTypeSchema, type Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeUnixEpoch, Message_HighlyStructuredMessage_HSMLocalizableParameter_HSMDateTime_HSMDateTimeUnixEpochSchema, type Message_HistorySyncNotification, Message_HistorySyncNotificationSchema, Message_HistorySyncNotification_HistorySyncType, Message_HistorySyncNotification_HistorySyncTypeSchema, type Message_ImageMessage, Message_ImageMessageSchema, Message_ImageMessage_ImageSourceType, Message_ImageMessage_ImageSourceTypeSchema, type Message_InitialSecurityNotificationSettingSync, Message_InitialSecurityNotificationSettingSyncSchema, type Message_InteractiveMessage, Message_InteractiveMessageSchema, type Message_InteractiveMessage_Body, Message_InteractiveMessage_BodySchema, type Message_InteractiveMessage_CarouselMessage, Message_InteractiveMessage_CarouselMessageSchema, type Message_InteractiveMessage_CollectionMessage, Message_InteractiveMessage_CollectionMessageSchema, type Message_InteractiveMessage_Footer, Message_InteractiveMessage_FooterSchema, type Message_InteractiveMessage_Header, Message_InteractiveMessage_HeaderSchema, type Message_InteractiveMessage_NativeFlowMessage, Message_InteractiveMessage_NativeFlowMessageSchema, type Message_InteractiveMessage_NativeFlowMessage_NativeFlowButton, Message_InteractiveMessage_NativeFlowMessage_NativeFlowButtonSchema, type Message_InteractiveMessage_ShopMessage, Message_InteractiveMessage_ShopMessageSchema, Message_InteractiveMessage_ShopMessage_Surface, Message_InteractiveMessage_ShopMessage_SurfaceSchema, type Message_InteractiveResponseMessage, Message_InteractiveResponseMessageSchema, type Message_InteractiveResponseMessage_Body, Message_InteractiveResponseMessage_BodySchema, Message_InteractiveResponseMessage_Body_Format, Message_InteractiveResponseMessage_Body_FormatSchema, type Message_InteractiveResponseMessage_NativeFlowResponseMessage, Message_InteractiveResponseMessage_NativeFlowResponseMessageSchema, type Message_InvoiceMessage, Message_InvoiceMessageSchema, Message_InvoiceMessage_AttachmentType, Message_InvoiceMessage_AttachmentTypeSchema, type Message_KeepInChatMessage, Message_KeepInChatMessageSchema, type Message_LinkPreviewMetadata, Message_LinkPreviewMetadataSchema, Message_LinkPreviewMetadata_SocialMediaPostType, Message_LinkPreviewMetadata_SocialMediaPostTypeSchema, type Message_ListMessage, Message_ListMessageSchema, Message_ListMessage_ListType, Message_ListMessage_ListTypeSchema, type Message_ListMessage_Product, type Message_ListMessage_ProductListHeaderImage, Message_ListMessage_ProductListHeaderImageSchema, type Message_ListMessage_ProductListInfo, Message_ListMessage_ProductListInfoSchema, Message_ListMessage_ProductSchema, type Message_ListMessage_ProductSection, Message_ListMessage_ProductSectionSchema, type Message_ListMessage_Row, Message_ListMessage_RowSchema, type Message_ListMessage_Section, Message_ListMessage_SectionSchema, type Message_ListResponseMessage, Message_ListResponseMessageSchema, Message_ListResponseMessage_ListType, Message_ListResponseMessage_ListTypeSchema, type Message_ListResponseMessage_SingleSelectReply, Message_ListResponseMessage_SingleSelectReplySchema, type Message_LiveLocationMessage, Message_LiveLocationMessageSchema, type Message_LocationMessage, Message_LocationMessageSchema, type Message_MMSThumbnailMetadata, Message_MMSThumbnailMetadataSchema, type Message_MessageHistoryBundle, Message_MessageHistoryBundleSchema, type Message_MessageHistoryMetadata, Message_MessageHistoryMetadataSchema, type Message_MessageHistoryNotice, Message_MessageHistoryNoticeSchema, type Message_NewsletterAdminInviteMessage, Message_NewsletterAdminInviteMessageSchema, type Message_OrderMessage, Message_OrderMessageSchema, Message_OrderMessage_OrderStatus, Message_OrderMessage_OrderStatusSchema, Message_OrderMessage_OrderSurface, Message_OrderMessage_OrderSurfaceSchema, type Message_PaymentInviteMessage, Message_PaymentInviteMessageSchema, Message_PaymentInviteMessage_ServiceType, Message_PaymentInviteMessage_ServiceTypeSchema, type Message_PaymentLinkMetadata, Message_PaymentLinkMetadataSchema, type Message_PaymentLinkMetadata_PaymentLinkButton, Message_PaymentLinkMetadata_PaymentLinkButtonSchema, type Message_PaymentLinkMetadata_PaymentLinkHeader, Message_PaymentLinkMetadata_PaymentLinkHeaderSchema, Message_PaymentLinkMetadata_PaymentLinkHeader_PaymentLinkHeaderType, Message_PaymentLinkMetadata_PaymentLinkHeader_PaymentLinkHeaderTypeSchema, type Message_PaymentLinkMetadata_PaymentLinkProvider, Message_PaymentLinkMetadata_PaymentLinkProviderSchema, type Message_PeerDataOperationRequestMessage, Message_PeerDataOperationRequestMessageSchema, type Message_PeerDataOperationRequestMessage_FullHistorySyncOnDemandRequest, Message_PeerDataOperationRequestMessage_FullHistorySyncOnDemandRequestSchema, type Message_PeerDataOperationRequestMessage_HistorySyncOnDemandRequest, Message_PeerDataOperationRequestMessage_HistorySyncOnDemandRequestSchema, type Message_PeerDataOperationRequestMessage_PlaceholderMessageResendRequest, Message_PeerDataOperationRequestMessage_PlaceholderMessageResendRequestSchema, type Message_PeerDataOperationRequestMessage_RequestStickerReupload, Message_PeerDataOperationRequestMessage_RequestStickerReuploadSchema, type Message_PeerDataOperationRequestMessage_RequestUrlPreview, Message_PeerDataOperationRequestMessage_RequestUrlPreviewSchema, type Message_PeerDataOperationRequestMessage_SyncDCollectionFatalRecoveryRequest, Message_PeerDataOperationRequestMessage_SyncDCollectionFatalRecoveryRequestSchema, type Message_PeerDataOperationRequestResponseMessage, Message_PeerDataOperationRequestResponseMessageSchema, type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResultSchema, type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionCanonicalUserNonceFetchResponse, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionCanonicalUserNonceFetchResponseSchema, type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionMetaNonceFetchResponse, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_CompanionMetaNonceFetchResponseSchema, type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandRequestResponse, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandRequestResponseSchema, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandResponseCode, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_FullHistorySyncOnDemandResponseCodeSchema, type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponseSchema, type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse_LinkPreviewHighQualityThumbnail, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_LinkPreviewResponse_LinkPreviewHighQualityThumbnailSchema, type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_PlaceholderMessageResendResponse, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_PlaceholderMessageResendResponseSchema, type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_SyncDSnapshotFatalRecoveryResponse, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_SyncDSnapshotFatalRecoveryResponseSchema, type Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_WaffleNonceFetchResponse, Message_PeerDataOperationRequestResponseMessage_PeerDataOperationResult_WaffleNonceFetchResponseSchema, Message_PeerDataOperationRequestType, Message_PeerDataOperationRequestTypeSchema, type Message_PinInChatMessage, Message_PinInChatMessageSchema, Message_PinInChatMessage_Type, Message_PinInChatMessage_TypeSchema, type Message_PlaceholderMessage, Message_PlaceholderMessageSchema, Message_PlaceholderMessage_PlaceholderType, Message_PlaceholderMessage_PlaceholderTypeSchema, Message_PollContentType, Message_PollContentTypeSchema, type Message_PollCreationMessage, Message_PollCreationMessageSchema, type Message_PollCreationMessage_Option, Message_PollCreationMessage_OptionSchema, Message_PollCreationMessage_PollType, Message_PollCreationMessage_PollTypeSchema, type Message_PollEncValue, Message_PollEncValueSchema, type Message_PollResultSnapshotMessage, Message_PollResultSnapshotMessageSchema, type Message_PollResultSnapshotMessage_PollVote, Message_PollResultSnapshotMessage_PollVoteSchema, type Message_PollUpdateMessage, type Message_PollUpdateMessageMetadata, Message_PollUpdateMessageMetadataSchema, Message_PollUpdateMessageSchema, type Message_PollVoteMessage, Message_PollVoteMessageSchema, type Message_ProductMessage, Message_ProductMessageSchema, type Message_ProductMessage_CatalogSnapshot, Message_ProductMessage_CatalogSnapshotSchema, type Message_ProductMessage_ProductSnapshot, Message_ProductMessage_ProductSnapshotSchema, type Message_ProtocolMessage, Message_ProtocolMessageSchema, Message_ProtocolMessage_Type, Message_ProtocolMessage_TypeSchema, type Message_ReactionMessage, Message_ReactionMessageSchema, type Message_RequestPaymentMessage, Message_RequestPaymentMessageSchema, type Message_RequestPhoneNumberMessage, Message_RequestPhoneNumberMessageSchema, type Message_RequestWelcomeMessageMetadata, Message_RequestWelcomeMessageMetadataSchema, Message_RequestWelcomeMessageMetadata_LocalChatState, Message_RequestWelcomeMessageMetadata_LocalChatStateSchema, type Message_ScheduledCallCreationMessage, Message_ScheduledCallCreationMessageSchema, Message_ScheduledCallCreationMessage_CallType, Message_ScheduledCallCreationMessage_CallTypeSchema, type Message_ScheduledCallEditMessage, Message_ScheduledCallEditMessageSchema, Message_ScheduledCallEditMessage_EditType, Message_ScheduledCallEditMessage_EditTypeSchema, type Message_SecretEncryptedMessage, Message_SecretEncryptedMessageSchema, Message_SecretEncryptedMessage_SecretEncType, Message_SecretEncryptedMessage_SecretEncTypeSchema, type Message_SendPaymentMessage, Message_SendPaymentMessageSchema, type Message_SenderKeyDistributionMessage, Message_SenderKeyDistributionMessageSchema, type Message_StatusNotificationMessage, Message_StatusNotificationMessageSchema, Message_StatusNotificationMessage_StatusNotificationType, Message_StatusNotificationMessage_StatusNotificationTypeSchema, type Message_StickerMessage, Message_StickerMessageSchema, type Message_StickerPackMessage, Message_StickerPackMessageSchema, type Message_StickerPackMessage_Sticker, Message_StickerPackMessage_StickerPackOrigin, Message_StickerPackMessage_StickerPackOriginSchema, Message_StickerPackMessage_StickerSchema, type Message_StickerSyncRMRMessage, Message_StickerSyncRMRMessageSchema, type Message_TemplateButtonReplyMessage, Message_TemplateButtonReplyMessageSchema, type Message_TemplateMessage, Message_TemplateMessageSchema, type Message_TemplateMessage_FourRowTemplate, Message_TemplateMessage_FourRowTemplateSchema, type Message_TemplateMessage_HydratedFourRowTemplate, Message_TemplateMessage_HydratedFourRowTemplateSchema, type Message_URLMetadata, Message_URLMetadataSchema, type Message_VideoMessage, Message_VideoMessageSchema, Message_VideoMessage_Attribution, Message_VideoMessage_AttributionSchema, Message_VideoMessage_VideoSourceType, Message_VideoMessage_VideoSourceTypeSchema, type Money, MoneySchema, type MsgOpaqueData, MsgOpaqueDataSchema, type MsgOpaqueData_EventLocation, MsgOpaqueData_EventLocationSchema, MsgOpaqueData_PollContentType, MsgOpaqueData_PollContentTypeSchema, type MsgOpaqueData_PollOption, MsgOpaqueData_PollOptionSchema, type MsgOpaqueData_PollVoteSnapshot, MsgOpaqueData_PollVoteSnapshotSchema, type MsgOpaqueData_PollVotesSnapshot, MsgOpaqueData_PollVotesSnapshotSchema, type MsgRowOpaqueData, MsgRowOpaqueDataSchema, type NoiseCertificate, NoiseCertificateSchema, type NoiseCertificate_Details, NoiseCertificate_DetailsSchema, type NotificationMessageInfo, NotificationMessageInfoSchema, type NotificationSettings, NotificationSettingsSchema, type PairingRequest, PairingRequestSchema, type PastParticipant, PastParticipantSchema, PastParticipant_LeaveReason, PastParticipant_LeaveReasonSchema, type PastParticipants, PastParticipantsSchema, type PatchDebugData, PatchDebugDataSchema, PatchDebugData_Platform, PatchDebugData_PlatformSchema, type PaymentBackground, PaymentBackgroundSchema, type PaymentBackground_MediaData, PaymentBackground_MediaDataSchema, PaymentBackground_Type, PaymentBackground_TypeSchema, type PaymentInfo, PaymentInfoSchema, PaymentInfo_Currency, PaymentInfo_CurrencySchema, PaymentInfo_Status, PaymentInfo_StatusSchema, PaymentInfo_TxnStatus, PaymentInfo_TxnStatusSchema, type PhoneNumberToLIDMapping, PhoneNumberToLIDMappingSchema, type PhotoChange, PhotoChangeSchema, type PinInChat, PinInChatSchema, PinInChat_Type, PinInChat_TypeSchema, type Point, PointSchema, type PollAdditionalMetadata, PollAdditionalMetadataSchema, type PollEncValue, PollEncValueSchema, type PollUpdate, PollUpdateSchema, type PreKeyRecordStructure, PreKeyRecordStructureSchema, type PreKeySignalMessage, PreKeySignalMessageSchema, type PremiumMessageInfo, PremiumMessageInfoSchema, type PrimaryEphemeralIdentity, PrimaryEphemeralIdentitySchema, PrivacySystemMessage, PrivacySystemMessageSchema, type ProcessedVideo, ProcessedVideoSchema, ProcessedVideo_VideoQuality, ProcessedVideo_VideoQualitySchema, type ProloguePayload, ProloguePayloadSchema, ProtoBaseKeyType, ProtoBaseKeyTypeSchema, type ProtoChain, type ProtoChainKey, ProtoChainKeySchema, ProtoChainSchema, ProtoChainType, ProtoChainTypeSchema, type ProtoCurrentRatchet, ProtoCurrentRatchetSchema, type ProtoIndexInfo, ProtoIndexInfoSchema, type ProtoKeyPair, ProtoKeyPairSchema, type ProtoPendingPreKey, ProtoPendingPreKeySchema, type ProtoSessionEntry, ProtoSessionEntrySchema, type ProtoSessionRecord, ProtoSessionRecordSchema, ProtocolAddress, type Pushname, PushnameSchema, type Reaction, ReactionSchema, type RecentEmojiWeight, RecentEmojiWeightSchema, type RecordStructure, RecordStructureSchema, type Reportable, ReportableSchema, type ReportingTokenInfo, ReportingTokenInfoSchema, type SenderKeyDistributionMessage, SenderKeyDistributionMessageSchema, type SenderKeyMessage, SenderKeyMessageSchema, type SenderKeyRecordStructure, SenderKeyRecordStructureSchema, type SenderKeyStateStructure, SenderKeyStateStructureSchema, type SenderKeyStateStructure_SenderChainKey, SenderKeyStateStructure_SenderChainKeySchema, type SenderKeyStateStructure_SenderMessageKey, SenderKeyStateStructure_SenderMessageKeySchema, type SenderKeyStateStructure_SenderSigningKey, SenderKeyStateStructure_SenderSigningKeySchema, type ServerErrorReceipt, ServerErrorReceiptSchema, SessionBuilder, SessionCipher, SessionRecord, type SessionStructure, SessionStructureSchema, type SessionStructure_Chain, SessionStructure_ChainSchema, type SessionStructure_Chain_ChainKey, SessionStructure_Chain_ChainKeySchema, type SessionStructure_Chain_MessageKey, SessionStructure_Chain_MessageKeySchema, type SessionStructure_PendingKeyExchange, SessionStructure_PendingKeyExchangeSchema, type SessionStructure_PendingPreKey, SessionStructure_PendingPreKeySchema, type SignalIdentity, type SignalMessage, SignalMessageSchema, type SignalSessionStorage, type SignedKeyPair, type SignedPreKeyRecordStructure, SignedPreKeyRecordStructureSchema, type StatusAttribution, StatusAttributionSchema, type StatusAttribution_ExternalShare, StatusAttribution_ExternalShareSchema, StatusAttribution_ExternalShare_Source, StatusAttribution_ExternalShare_SourceSchema, type StatusAttribution_GroupStatus, StatusAttribution_GroupStatusSchema, type StatusAttribution_Music, StatusAttribution_MusicSchema, type StatusAttribution_StatusReshare, StatusAttribution_StatusReshareSchema, type StatusAttribution_StatusReshare_Metadata, StatusAttribution_StatusReshare_MetadataSchema, StatusAttribution_StatusReshare_Source, StatusAttribution_StatusReshare_SourceSchema, StatusAttribution_Type, StatusAttribution_TypeSchema, type StatusMentionMessage, StatusMentionMessageSchema, type StatusPSA, StatusPSASchema, type StickerMetadata, StickerMetadataSchema, type SyncActionData, SyncActionDataSchema, type SyncActionValue, SyncActionValueSchema, type SyncActionValue_AgentAction, SyncActionValue_AgentActionSchema, type SyncActionValue_AndroidUnsupportedActions, SyncActionValue_AndroidUnsupportedActionsSchema, type SyncActionValue_ArchiveChatAction, SyncActionValue_ArchiveChatActionSchema, type SyncActionValue_BotWelcomeRequestAction, SyncActionValue_BotWelcomeRequestActionSchema, type SyncActionValue_BusinessBroadcastAssociationAction, SyncActionValue_BusinessBroadcastAssociationActionSchema, type SyncActionValue_CallLogAction, SyncActionValue_CallLogActionSchema, type SyncActionValue_ChatAssignmentAction, SyncActionValue_ChatAssignmentActionSchema, type SyncActionValue_ChatAssignmentOpenedStatusAction, SyncActionValue_ChatAssignmentOpenedStatusActionSchema, type SyncActionValue_ClearChatAction, SyncActionValue_ClearChatActionSchema, type SyncActionValue_ContactAction, SyncActionValue_ContactActionSchema, type SyncActionValue_CtwaPerCustomerDataSharingAction, SyncActionValue_CtwaPerCustomerDataSharingActionSchema, type SyncActionValue_CustomPaymentMethod, type SyncActionValue_CustomPaymentMethodMetadata, SyncActionValue_CustomPaymentMethodMetadataSchema, SyncActionValue_CustomPaymentMethodSchema, type SyncActionValue_CustomPaymentMethodsAction, SyncActionValue_CustomPaymentMethodsActionSchema, type SyncActionValue_DeleteChatAction, SyncActionValue_DeleteChatActionSchema, type SyncActionValue_DeleteIndividualCallLogAction, SyncActionValue_DeleteIndividualCallLogActionSchema, type SyncActionValue_DeleteMessageForMeAction, SyncActionValue_DeleteMessageForMeActionSchema, type SyncActionValue_ExternalWebBetaAction, SyncActionValue_ExternalWebBetaActionSchema, type SyncActionValue_FavoritesAction, SyncActionValue_FavoritesActionSchema, type SyncActionValue_FavoritesAction_Favorite, SyncActionValue_FavoritesAction_FavoriteSchema, type SyncActionValue_KeyExpiration, SyncActionValue_KeyExpirationSchema, type SyncActionValue_LabelAssociationAction, SyncActionValue_LabelAssociationActionSchema, type SyncActionValue_LabelEditAction, SyncActionValue_LabelEditActionSchema, SyncActionValue_LabelEditAction_ListType, SyncActionValue_LabelEditAction_ListTypeSchema, type SyncActionValue_LabelReorderingAction, SyncActionValue_LabelReorderingActionSchema, type SyncActionValue_LidContactAction, SyncActionValue_LidContactActionSchema, type SyncActionValue_LocaleSetting, SyncActionValue_LocaleSettingSchema, type SyncActionValue_LockChatAction, SyncActionValue_LockChatActionSchema, type SyncActionValue_MarkChatAsReadAction, SyncActionValue_MarkChatAsReadActionSchema, type SyncActionValue_MarketingMessageAction, SyncActionValue_MarketingMessageActionSchema, SyncActionValue_MarketingMessageAction_MarketingMessagePrototypeType, SyncActionValue_MarketingMessageAction_MarketingMessagePrototypeTypeSchema, type SyncActionValue_MarketingMessageBroadcastAction, SyncActionValue_MarketingMessageBroadcastActionSchema, type SyncActionValue_MerchantPaymentPartnerAction, SyncActionValue_MerchantPaymentPartnerActionSchema, SyncActionValue_MerchantPaymentPartnerAction_Status, SyncActionValue_MerchantPaymentPartnerAction_StatusSchema, type SyncActionValue_MuteAction, SyncActionValue_MuteActionSchema, type SyncActionValue_NoteEditAction, SyncActionValue_NoteEditActionSchema, SyncActionValue_NoteEditAction_NoteType, SyncActionValue_NoteEditAction_NoteTypeSchema, type SyncActionValue_NotificationActivitySettingAction, SyncActionValue_NotificationActivitySettingActionSchema, SyncActionValue_NotificationActivitySettingAction_NotificationActivitySetting, SyncActionValue_NotificationActivitySettingAction_NotificationActivitySettingSchema, type SyncActionValue_NuxAction, SyncActionValue_NuxActionSchema, type SyncActionValue_PaymentInfoAction, SyncActionValue_PaymentInfoActionSchema, type SyncActionValue_PaymentTosAction, SyncActionValue_PaymentTosActionSchema, SyncActionValue_PaymentTosAction_PaymentNotice, SyncActionValue_PaymentTosAction_PaymentNoticeSchema, type SyncActionValue_PinAction, SyncActionValue_PinActionSchema, type SyncActionValue_PnForLidChatAction, SyncActionValue_PnForLidChatActionSchema, type SyncActionValue_PrimaryFeature, SyncActionValue_PrimaryFeatureSchema, type SyncActionValue_PrimaryVersionAction, SyncActionValue_PrimaryVersionActionSchema, type SyncActionValue_PrivacySettingChannelsPersonalisedRecommendationAction, SyncActionValue_PrivacySettingChannelsPersonalisedRecommendationActionSchema, type SyncActionValue_PrivacySettingDisableLinkPreviewsAction, SyncActionValue_PrivacySettingDisableLinkPreviewsActionSchema, type SyncActionValue_PrivacySettingRelayAllCalls, SyncActionValue_PrivacySettingRelayAllCallsSchema, type SyncActionValue_PushNameSetting, SyncActionValue_PushNameSettingSchema, type SyncActionValue_QuickReplyAction, SyncActionValue_QuickReplyActionSchema, type SyncActionValue_RecentEmojiWeightsAction, SyncActionValue_RecentEmojiWeightsActionSchema, type SyncActionValue_RemoveRecentStickerAction, SyncActionValue_RemoveRecentStickerActionSchema, type SyncActionValue_SecurityNotificationSetting, SyncActionValue_SecurityNotificationSettingSchema, type SyncActionValue_StarAction, SyncActionValue_StarActionSchema, type SyncActionValue_StatusPrivacyAction, SyncActionValue_StatusPrivacyActionSchema, SyncActionValue_StatusPrivacyAction_StatusDistributionMode, SyncActionValue_StatusPrivacyAction_StatusDistributionModeSchema, type SyncActionValue_StickerAction, SyncActionValue_StickerActionSchema, type SyncActionValue_SubscriptionAction, SyncActionValue_SubscriptionActionSchema, type SyncActionValue_SyncActionMessage, type SyncActionValue_SyncActionMessageRange, SyncActionValue_SyncActionMessageRangeSchema, SyncActionValue_SyncActionMessageSchema, type SyncActionValue_TimeFormatAction, SyncActionValue_TimeFormatActionSchema, type SyncActionValue_UnarchiveChatsSetting, SyncActionValue_UnarchiveChatsSettingSchema, type SyncActionValue_UserStatusMuteAction, SyncActionValue_UserStatusMuteActionSchema, type SyncActionValue_UsernameChatStartModeAction, SyncActionValue_UsernameChatStartModeActionSchema, SyncActionValue_UsernameChatStartModeAction_ChatStartMode, SyncActionValue_UsernameChatStartModeAction_ChatStartModeSchema, type SyncActionValue_WaffleAccountLinkStateAction, SyncActionValue_WaffleAccountLinkStateActionSchema, SyncActionValue_WaffleAccountLinkStateAction_AccountLinkState, SyncActionValue_WaffleAccountLinkStateAction_AccountLinkStateSchema, type SyncActionValue_WamoUserIdentifierAction, SyncActionValue_WamoUserIdentifierActionSchema, type SyncdIndex, SyncdIndexSchema, type SyncdMutation, SyncdMutationSchema, SyncdMutation_SyncdOperation, SyncdMutation_SyncdOperationSchema, type SyncdMutations, SyncdMutationsSchema, type SyncdPatch, SyncdPatchSchema, type SyncdRecord, SyncdRecordSchema, type SyncdSnapshot, SyncdSnapshotSchema, type SyncdValue, SyncdValueSchema, type SyncdVersion, SyncdVersionSchema, type TapLinkAction, TapLinkActionSchema, type TemplateButton, TemplateButtonSchema, type TemplateButton_CallButton, TemplateButton_CallButtonSchema, type TemplateButton_QuickReplyButton, TemplateButton_QuickReplyButtonSchema, type TemplateButton_URLButton, TemplateButton_URLButtonSchema, type ThreadID, ThreadIDSchema, ThreadID_ThreadType, ThreadID_ThreadTypeSchema, type UrlTrackingMap, UrlTrackingMapSchema, type UrlTrackingMap_UrlTrackingMapElement, UrlTrackingMap_UrlTrackingMapElementSchema, type UserPassword, UserPasswordSchema, UserPassword_Encoding, UserPassword_EncodingSchema, UserPassword_Transformer, type UserPassword_TransformerArg, UserPassword_TransformerArgSchema, type UserPassword_TransformerArg_Value, UserPassword_TransformerArg_ValueSchema, UserPassword_TransformerSchema, type UserReceipt, UserReceiptSchema, type VerifiedNameCertificate, VerifiedNameCertificateSchema, type VerifiedNameCertificate_Details, VerifiedNameCertificate_DetailsSchema, type WallpaperSettings, WallpaperSettingsSchema, type WebFeatures, WebFeaturesSchema, WebFeatures_Flag, WebFeatures_FlagSchema, type WebMessageInfo, WebMessageInfoSchema, WebMessageInfo_BizPrivacyStatus, WebMessageInfo_BizPrivacyStatusSchema, WebMessageInfo_Status, WebMessageInfo_StatusSchema, WebMessageInfo_StubType, WebMessageInfo_StubTypeSchema, type WebNotificationsInfo, WebNotificationsInfoSchema, aesDecrypt, aesEncrypt, file_SignalSession, file_Whatsapp, hkdfSignalDeriveSecrets, hmacSha256Verify, hmacSign, randomBytes };
