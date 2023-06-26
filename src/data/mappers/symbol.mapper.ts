import { SymbolMongoModel, SymbolRawModel } from '../dtos/symbol';

import { MapperImpl } from '@alien-worlds/api-core';
import { Symbol } from '../../domain/entities';

// Mongo Mappers
export class SymbolMongoMapper extends MapperImpl<Symbol, SymbolMongoModel> {
  constructor() {
    super();

    this.mappingFromEntity.set('precision', {
      key: 'precision',
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('code', {
      key: 'code',
      mapper: (value: string) => value,
    });
  }

  public toEntity(mongoModel: SymbolMongoModel): Symbol {
    const { precision, code, ...rest } = mongoModel;

    return Symbol.create(precision ?? 0, code ?? '', rest);
  }
}

// Raw mappers
export class SymbolRawMapper extends MapperImpl<Symbol, SymbolRawModel> {
  public fromEntity(entity: Symbol): SymbolRawModel {
    const { precision, code, ...rest } = entity;

    return `${precision},${code}`;
  }

  public toEntity(rawModel: SymbolRawModel): Symbol {
    const [precision, code] = rawModel.split(/,\s*/);

    return Symbol.create(Number(precision ?? 0), code ?? '');
  }
}
