'use strict';
import { Plant } from "./02-Plant";
// import { Garden } from "./02-Garden";

// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5

export class Flower extends Plant {
  // private _flowers: Flower[] = [];
  // protected _waterNeeded: number = 4;
  // protected _absorbingCoefficient: number = 0.75;

  constructor(color: string) {
    super(color);
    this._waterNeeded = 5;
    this._absorbingCoefficient = 0.75;
    // this._flowers.push(this);
  }
  
  // getFlowers(): Flower[] {
  //   return this._flowers;
  // }
  
  // ifNeedsWater(): boolean {
  //   // return this.getWaterAmount() < 5 ? true : false;
  //   return this._waterAmount < 5 ? true : false;
  // }
}