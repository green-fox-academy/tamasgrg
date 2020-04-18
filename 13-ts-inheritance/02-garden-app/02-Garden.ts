'use strict';
import { Plant } from "./02-Plant";
// The Garden
// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount
//  amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10
export class Garden {
  private _plants: Plant[];
  
  constructor() {
    this._plants = [];
  };

  addPlant(plant: Plant): void {
    this._plants.push(plant);
  }

  showGarden(): void {
    this._plants.forEach((item: Plant) => {
      let waterNeed: string = item.ifNeedsWater() ?
        'needs water' : 'doesnt need water';
      console.log(`The ${item.getColor()} ${item.constructor.name} ${waterNeed}`);
    })
  }

  water(amount: number): void {
    let plantsToWater: Plant[] = [];
    this._plants.forEach((item: Plant) => {
      if (item.ifNeedsWater()) plantsToWater.push(item);
    })
    plantsToWater.forEach((item: Plant) =>
      item.setWaterAmount(amount / plantsToWater.length * item.getAbsorbingCoefficient())
    )
    console.log(`Watering with ${amount}`);
    this.showGarden();
  }
}