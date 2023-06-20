import { ExtendedSymbolStruct } from '../../data';

export class Symbol {
  public static fromStruct(value: string): Symbol {
    const [precision, code] = value.split(/,\s*/);
    return new Symbol(Number(precision), code);
  }

  public static create(precision: string | number, code: string): Symbol {
    return new Symbol(Number(precision), code);
  }

  protected constructor(
    public readonly precision: number,
    public readonly code: string
  ) { }

  public toStruct(): string {
    const { precision, code } = this;
    return `${precision},${code}`;
  }
}

export class ExtendedSymbol {
  public static create(struct: ExtendedSymbolStruct): ExtendedSymbol {
    const { symbol, contract } = struct;
    return new ExtendedSymbol(Symbol.fromStruct(symbol), contract);
  }

  protected constructor(
    public readonly symbol: Symbol,
    public readonly contract: string
  ) { }

  public toStruct(): ExtendedSymbolStruct {
    const { symbol, contract } = this;
    return {
      symbol: symbol.toString(),
      contract,
    };
  }
}
