import { MapperImpl } from '@alien-worlds/api-core';

import { Bytes } from '../../domain/entities';
import { MongoDB } from '@alien-worlds/storage-mongodb';

// Mongo Mappers
export class BytesMongoMapper extends MapperImpl<Bytes, MongoDB.Binary> {
  public toEntity(mongoModel: MongoDB.Binary): Bytes {
    return Bytes.create(mongoModel.toString());
  }

  public fromEntity(entity: Bytes): MongoDB.Binary {
    return new MongoDB.Binary(entity.data);
  }
}

// Raw mappers
export class BytesRawMapper extends MapperImpl<Bytes, string> {
  public fromEntity(entity: Bytes): string {
    return entity.raw;
  }

  public toEntity(rawModel: string): Bytes {
    return Bytes.create(rawModel);
  }
}
