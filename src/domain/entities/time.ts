export class TimePoint {
  public static fromStruct(str: string): TimePoint {
    return new TimePoint(new Date(str));
  }

  protected constructor(public readonly date: Date) {}

  public toStruct(): string {
    const { date } = this;
    return date.toISOString().replace('Z', '');
  }
}

export class TimePointSec {
  public static fromStruct(str: string): TimePoint {
    return new TimePointSec(new Date(str));
  }

  protected constructor(public readonly date: Date) {}

  public toStruct(): string {
    const { date } = this;
    return date.toISOString().split('.')[0];
  }
}
