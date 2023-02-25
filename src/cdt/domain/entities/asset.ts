import { ExtendedAssetStruct } from '../../data/types';
import { Symbol } from './symbol';

export class Asset {
  public static fromStruct(str: string): Asset {
    const [value, code] = str.split(/\s+/);
    const decimals = value.split('.')[1].length || 0;

    return new Asset(BigInt(value), Symbol.create(decimals, code));
  }

  public static create(amount: string | number, code: string): Asset {
    const decimals = amount.toString().split('.')[1].length || 0;
    return new Asset(BigInt(amount), Symbol.create(decimals, code));
  }

  protected constructor(public readonly amount: bigint, public readonly symbol: Symbol) {}

  public toStruct(): string {
    const { amount, symbol } = this;
    return `${amount.toString()} ${symbol.code}`;
  }
}

export class ExtendedAsset {
  public static fromStruct(struct: ExtendedAssetStruct): ExtendedAsset {
    const { contract, quantity } = struct;
    return new ExtendedAsset(Asset.fromStruct(quantity), contract);
  }

  public static create(quantity: string, contract: string): ExtendedAsset {
    return new ExtendedAsset(Asset.fromStruct(quantity), contract);
  }

  protected constructor(public quantity: Asset, public contract: string) {}

  public toStruct(): ExtendedAssetStruct {
    const { quantity, contract } = this;
    return {
      contract,
      quantity: quantity.toStruct(),
    };
  }
}
