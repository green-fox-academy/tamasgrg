'use strict';
// import { Flower } from "./02-Flower";
// import { Tree } from "./02-Tree";
import { Plant } from "./02-Plant";
// The Garden
// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount
//  amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

export class Garden {
  private _plants: Plant[] = [];
  // _plants = this.flowers.concat(Tree.trees);
  constructor() {
    // this._plants.push
    // this._plants = Flower.flowers.concat(Tree.trees)
  }

  addPlant(plant: Plant): any {
    return this._plants.push(plant);
  }

  showGarden(): void {
    this._plants.forEach((item: Plant) => {
      let waterNeed: string = item.ifNeedsWater() ?
        'needs water' : 'doesnt need water';
      console.log(`The ${item.getColor()} ${item.constructor.name} ${waterNeed}`);
    })
  }


  // setPlants(): Plant[] {
  //   return this._plants;
  // }

  // fillGarden(): void {
  //   this._plants.push(Flower.getFlowers())
  // }

  water(item: Plant, amount: number): void {
    this._plants.forEach((item: Plant) => {
      let plantsToWater: number = 0;
      if (item.ifNeedsWater()) {
        plantsToWater++;
        item.setWaterAmount(amount / plantsToWater * item.getAbsorbingCoefficient());
      }
    })
  }
}

// let myGarden = new Garden;
