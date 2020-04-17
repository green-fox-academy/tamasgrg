'use strict';
import { Plant } from "./02-Plant";

// The Tree
// needs water if its current water amount is less then 10
// when watering it the tree can only absorb the 40% of the water
// eg. watering with 10 the tree's amount of water should only increase with 4

export class Tree extends Plant {
  static trees: Tree[] = [];
  // private _waterNeeded: number = 10;
  // private _absorbingCoefficient: number = 0.4;

  constructor(color: string) {
    super(color);
  }

  // ifNeedsWater(): boolean {
  //   return this.getWaterAmount() < 10 ? true : false;
  // }
}