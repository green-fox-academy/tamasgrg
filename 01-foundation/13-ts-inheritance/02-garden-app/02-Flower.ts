'use strict';
import { Plant } from "./02-Plant";
// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5
export class Flower extends Plant {

  constructor(color: string) {
    super(color);
    this._waterNeeded = 5;
    this._absorbingCoefficient = 0.75;
  }
}