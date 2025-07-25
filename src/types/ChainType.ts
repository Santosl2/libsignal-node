export const ChainType = {
  SENDING: 1,
  RECEIVING: 2,
};

export type ChainType = typeof ChainType[keyof typeof ChainType];
