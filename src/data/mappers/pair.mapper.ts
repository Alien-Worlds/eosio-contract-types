import { MapperImpl } from '@alien-worlds/api-core';

import { Pair } from '../../domain/entities';
import { PairModel } from '../dtos';

// Mongo Mappers
export class PairMongoMapper extends MapperImpl<Pair, PairModel> {
  public toEntity(model: PairModel): Pair {
    const { key, value, first, second } = model;
    return Pair.create(key, value, first, second);
  }

  public fromEntity(entity: Pair): PairModel {
    return entity.toJSON();
  }
}

// Raw mappers
export class PairRawMapper extends MapperImpl<Pair, PairModel> {
  public fromEntity(entity: Pair): PairModel {
    return entity.toJSON();
  }

  public toEntity(model: PairModel): Pair {
    const { key, value, first, second } = model;
    return Pair.create(key, value, first, second);
  }
}
