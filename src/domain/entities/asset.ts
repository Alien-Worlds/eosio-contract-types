import { Entity, UnknownObject, parseToBigInt } from '@alien-worlds/api-core';

import { ExtendedAssetStruct } from '../../data';
import { Symbol } from './symbol';

/**
 * Represents a `Asset` object.
 *
 * @class
 */
export class Asset implements Entity {
  /**
   * Constructs a new instance of the `Asset` class.
   *
   * @public
   * @constructor
   * @param bigint value
   * @param string symbol
   * @returns `Asset` - An instance of the `Asset` class.
   */
  public constructor(public value: bigint, public symbol: string) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Asset` class to a JSON object.
   *
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      value: this.value,
      symbol: this.symbol,
    };
  }

  /**
   * Creates an instance of the `Asset` class.
   *
   * @static
   * @public
   * @returns `Asset` An instance of the `Asset` class.
   */
  public static create(
    value: string | number | bigint,
    symbol: string,
    rest?: UnknownObject
  ): Asset {
    const entity = new Asset(parseToBigInt(value), symbol);
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Asset {
    return new Asset(0n, '');
  }
}

// export class ExtendedAsset {
//   public static fromStruct(struct: ExtendedAssetStruct): ExtendedAsset {
//     const { contract, quantity } = struct;
//     return new ExtendedAsset(Asset.fromStruct(quantity), contract);
//   }

//   public static create(quantity: string, contract: string): ExtendedAsset {
//     return new ExtendedAsset(Asset.fromStruct(quantity), contract);
//   }

//   protected constructor(public quantity: Asset, public contract: string) {}

//   public toStruct(): ExtendedAssetStruct {
//     const { quantity, contract } = this;
//     return {
//       contract,
//       quantity: quantity.toStruct(),
//     };
//   }
// }
