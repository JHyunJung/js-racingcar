import { NumberGenerator } from "../domain/strategy/NumberGenerator";

export class MovableNumberGenerator extends NumberGenerator {
  static MOVABLE_NUMBER = 5;

  generate() {
    return MovableNumberGenerator.MOVABLE_NUMBER;
  }
}
