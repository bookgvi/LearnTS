function info<T extends { new(...args: any[]): Object }>(constructor: T): T {
  return class extends constructor {
    name = arguments[0] + ' Wilkinson';
    age = arguments[1] || 10;
    newAge = 100;
  }
}

@info
// @ts-ignore
export class Person {
  constructor(private name: String, private age?: Number) {
  }
  public get getName(): String {
    return this.name;
  }
  public get getAge(): Number {
    return this.age || 0
  }
}
