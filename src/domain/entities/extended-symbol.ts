/* eslint-disable @typescript-eslint/ban-types */
import { Entity, UnknownObject } from '@alien-worlds/api-core';
import { Symbol } from './symbol';

/**
 * Represents a `ExtendedSymbol` object.
 *
 * @class
 */
export class ExtendedSymbol implements Entity {
  /**
   * Constructs a new instance of the `ExtendedSymbol` class.
   *
   * @public
   * @constructor
   * @param Symbol symbol
   * @param string contract
   * @returns `ExtendedSymbol` - An instance of the `ExtendedSymbol` class.
   */
  public constructor(public symbol: Symbol, public contract: string) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `ExtendedSymbol` class to a JSON object.
   *
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      symbol: this.symbol.toJSON(),
      contract: this.contract,
    };
  }

  /**
   * Creates an instance of the `ExtendedSymbol` class.
   *
   * @static
   * @public
   * @returns `ExtendedSymbol` An instance of the `ExtendedSymbol` class.
   */
  public static create(
    symbol: Symbol,
    contract: string,
    rest?: UnknownObject
  ): ExtendedSymbol {
    const entity = new ExtendedSymbol(symbol, contract);
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): ExtendedSymbol {
    return new ExtendedSymbol(Symbol.getDefault(), '');
  }
}
