export class TimePoint {
  public static create(str: string): TimePoint {
    return new TimePoint(new Date(str));
  }

  constructor(public readonly date: Date) {}

  public toJSON(): { date: string } {
    const { date } = this;
    return { date: date.toISOString().replace('Z', '') };
  }
}

export class TimePointSec {
  public static create(str: string): TimePoint {
    return new TimePointSec(new Date(str));
  }

  constructor(public readonly date: Date) {}

  public toJSON(): { date: string } {
    const { date } = this;
    return { date: date.toISOString().split('.')[0] };
  }
}
