import { PermissionLevelStruct } from '../../data';

export class PermissionLevel {
  public static fromStruct(struct: PermissionLevelStruct): PermissionLevel {
    const { actor, permission } = struct;
    return new PermissionLevel(actor, permission);
  }

  protected constructor(
    public readonly actor: string,
    public readonly permission: string
  ) { }

  public toStruct(): PermissionLevelStruct {
    const { actor, permission } = this;
    return { actor, permission };
  }
}
