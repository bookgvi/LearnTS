import { IMovement } from './IMovement';

export abstract class Auto implements IMovement {
  protected model: String;
  protected type: String;
  public acceleration: Number;
  public maxSpeed: Number;
}
