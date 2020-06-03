'use strict';
import { Plant } from "./02-Plant";
// The Tree
// needs water if its current water amount is less then 10
// when watering it the tree can only absorb the 40% of the water
// eg. watering with 10 the tree's amount of water should only increase with 4
export class Tree extends Plant {

  constructor(color: string) {
    super(color);
    this._waterNeeded = 10;
    this._absorbingCoefficient = 0.4;
  }
}