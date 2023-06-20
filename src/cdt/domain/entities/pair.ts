import { FirstSecondPairStruct, KeyValuePairStruct } from '../../data';

export class KeyValuePair<KeyType = string, ValueType = string> {
  public static fromStruct<KeyType = string, ValueType = string>(
    pair: KeyValuePairStruct<KeyType, ValueType>
  ): KeyValuePair<KeyType, ValueType> {
    const { key, value } = pair;
    return new KeyValuePair(key, value);
  }

  protected constructor(public key: KeyType, public value: ValueType) { }

  public toStruct(): KeyValuePairStruct<KeyType, ValueType> {
    const { key, value } = this;
    return { key, value };
  }
}

export class FirstSecondPair<KeyType = string, ValueType = string> {
  public static fromStruct<KeyType = string, ValueType = string>(
    pair: FirstSecondPairStruct<KeyType, ValueType>
  ): FirstSecondPair<KeyType, ValueType> {
    const { first, second } = pair;
    return new FirstSecondPair(first, second);
  }

  protected constructor(public key: KeyType, public value: ValueType) { }

  public toStruct(): FirstSecondPairStruct<KeyType, ValueType> {
    const { key: first, value: second } = this;
    return { first, second };
  }
}
