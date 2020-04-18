'use strict';
export abstract class Plant {
  protected _color: string;
  protected _waterNeeded: number;
  protected _waterAmount: number;
  protected _absorbingCoefficient: number;

  constructor(color: string, ) {
    this._color = color;
    this._waterAmount = 0;
  }
  
  ifNeedsWater(): boolean {
    return this._waterAmount < this._waterNeeded ? true : false;
  }

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