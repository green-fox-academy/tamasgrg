'use strict';

// import { Garden } from "./02-Garden";

export class Plant {
  // private _plants: Plant[];
  protected _color: string;
  protected _waterNeeded: number;
  protected _waterAmount: number;
  protected _absorbingCoefficient: number;

  constructor(color: string, ) {
    this._color = color;
    this._waterAmount = 0;
    // this._plants.push(this);
    // let myGarden = new Garden;
    // myGarden._plants.push(this)
  }

  // plantToGarden(garden: Garden): void {
  //   garden._plants.push(this);
  // }
  
  ifNeedsWater(): boolean {
    return this._waterAmount < this._waterNeeded ? true : false;
  }

  // getWaterNeeded(): number {
  //   return this._waterNeeded;
  // }
  
  // getWaterAmount(): number {
  //   return this._waterAmount;
  // }

  setWaterAmount(amount: number): number {
    return this._waterAmount = amount;
  }
  
  getAbsorbingCoefficient(): number {
    return this._absorbingCoefficient;
  }

  getColor(): string {
    return this._color;
  }

}