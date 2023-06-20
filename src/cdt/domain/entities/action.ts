import { ActionStruct } from '../../data';
import { Bytes } from './bytes';
import { PermissionLevel } from './security';

export class Action {
  public static fromStruct(struct: ActionStruct): Action {
    const { account, name, authorization, data } = struct;

    return new Action(
      account,
      name,
      PermissionLevel.fromStruct(authorization),
      Bytes.fromStruct(data)
    );
  }

  protected constructor(
    public readonly account: string,
    public readonly name: string,
    public readonly authorization: PermissionLevel,
    public readonly data: Bytes
  ) { }

  public toStruct(): ActionStruct {
    const { account, name, authorization, data } = this;
    return {
      account,
      name,
      authorization: authorization.toStruct(),
      data: data.toStruct(),
    };
  }
}
