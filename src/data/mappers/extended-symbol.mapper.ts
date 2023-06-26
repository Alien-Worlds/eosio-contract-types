import { ExtendedSymbolMongoModel, ExtendedSymbolRawModel } from '../dtos';
import { SymbolMongoMapper, SymbolRawMapper } from './symbol.mapper';

import { ExtendedSymbol } from '../../domain/entities/extended-symbol';
import { MapperImpl } from '@alien-worlds/api-core';
import { Symbol } from '../../domain/entities';

// Mongo Mappers
export class ExtendedSymbolMongoMapper extends MapperImpl<
  ExtendedSymbol,
  ExtendedSymbolMongoModel
> {
  constructor() {
    super();

    this.mappingFromEntity.set('symbol', {
      key: 'symbol',
      mapper: (value: Symbol) => new SymbolMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('contract', {
      key: 'contract',
      mapper: (value: string) => value,
    });
  }

  public toEntity(mongoModel: ExtendedSymbolMongoModel): ExtendedSymbol {
    const { symbol, contract, ...rest } = mongoModel;

    return ExtendedSymbol.create(
      symbol ? new SymbolMongoMapper().toEntity(symbol) : Symbol.getDefault(),
      contract ?? '',
      rest
    );
  }
}

// Raw mappers
export class ExtendedSymbolRawMapper extends MapperImpl<
  ExtendedSymbol,
  ExtendedSymbolRawModel
> {
  public fromEntity(entity: ExtendedSymbol): ExtendedSymbolRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ExtendedSymbolRawModel): ExtendedSymbol {
    const { symbol, contract } = rawModel;

    return ExtendedSymbol.create(
      symbol ? new SymbolRawMapper().toEntity(symbol) : Symbol.getDefault(),
      contract ?? ''
    );
  }
}