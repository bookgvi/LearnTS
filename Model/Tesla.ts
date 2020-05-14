import { Auto } from '../Resource/Auto'

export class Tesla extends Auto {
  constructor(
    protected model: String,
    protected type: String,
    public acceleration: Number,
    public maxSpeed: Number
  ) {
    super();
  }

  public get getInfo(): String {
    return `
    Model: ${this.model}
    Type: ${this.type}
    Acceleration: ${this.acceleration}
    MaxSpeed: ${this.maxSpeed}
    `
  }
}
