export type ExtensionStruct = {
  type: number;
  data: string;
};
export type ExtendedSymbolStruct = {
  symbol: string;
  contract: string;
};
export type ExtendedAssetStruct = {
  contract: string;
  quantity: string;
};
export type PermissionLevelStruct = {
  actor: string;
  permission: string;
};
export type ActionStruct = {
  account: string;
  name: string;
  authorization: PermissionLevelStruct;
  data: string;
};
export type TransactionStruct = {
  expiration: string;
  ref_block_num: number;
  ref_block_prefix: number;
  max_net_usage_words: number;
  max_cpu_usage_ms: number;
  delay_sec: number;
  context_free_actions: ActionStruct[];
  actions: ActionStruct[];
  transaction_extensions: ExtensionStruct[];
};
export type KeyValuePairStruct<Key = string, Value = string> = { key: Key; value: Value };
export type FirstSecondPairStruct<First = string, Second = string> = {
  first: First;
  second: Second;
};
export type Bool = boolean;
export type Asset = string;
export type Symbol = string;
export type Name = string;
export type Int8 = number;
export type Int16 = number;
export type Int32 = number;
export type Int64 = bigint;
export type Int128 = bigint;
export type Int256 = bigint;
export type Int8T = number;
export type Int16T = number;
export type Int32T = number;
export type Int64T = bigint;
export type Int128T = bigint;
export type Int256T = bigint;
export type Uint8 = number;
export type Uint16 = number;
export type Uint32 = number;
export type Uint64 = bigint | string;
export type Uint128 = bigint | string;
export type Uint256 = bigint | string;
export type Uint8T = number;
export type Uint16T = number;
export type Uint32T = number;
export type Uint64T = bigint | string;
export type Uint128T = bigint | string;
export type Uint256T = bigint | string;
export type Checksum = string;
export type Checksum160 = string;
export type Checksum256 = string;
export type Checksum512 = string;
export type Variant = Array<unknown>;

export * from './dtos';
export * from './mappers';
