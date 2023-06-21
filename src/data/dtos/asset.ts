import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * @typedef {Object} AssetMongoModel
 */
export type AssetMongoModel = {
  value?: MongoDB.Long;
  symbol?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AssetRawModel
 */
export type AssetRawModel = string;
