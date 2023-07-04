import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';

import { Asset } from '../../domain/entities';
import { AssetMongoModel, AssetRawModel } from '../dtos/asset';

// Mongo Mappers
export class AssetMongoMapper extends MapperImpl<Asset, AssetMongoModel> {
  constructor() {
    super();

    this.mappingFromEntity.set('value', {
      key: 'value',
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('symbol', {
      key: 'symbol',
      mapper: (value: string) => value,
    });
  }

  public toEntity(mongoModel: AssetMongoModel): Asset {
    const { value, symbol, ...rest } = mongoModel;

    return Asset.create(value.toBigInt() ?? 0, symbol ?? '', rest);
  }
}

// Raw mappers
export class AssetRawMapper extends MapperImpl<Asset, AssetRawModel> {
  public fromEntity(entity: Asset): AssetRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: AssetRawModel): Asset {
    const [value, symbol] = rawModel.split(/\s+/g);

    return Asset.create(Number(value ?? 0), symbol ?? '');
  }
}
