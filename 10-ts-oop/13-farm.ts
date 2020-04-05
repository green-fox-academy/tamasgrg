'use strict';
import {Animal} from './03-animal';
// Reuse your Animal class
// Create a Farm class
//  it has list of Animals
//  it has slots which defines the number of free places for animals
//  breed() -> creates a new animal if there's place for it
//  slaughter() -> removes the least hungry animal

export class Farm {
  animals: Animal[] = [];
  freeSlots: number = 10;

  breed(): void {
    if (this.freeSlots != 0) {
      let animal = new Animal;
      this.animals.push(animal);
      this.freeSlots--;
    } else {
      console.log('Not enough free space for new animals');
    }
  }

  slaughter(): void {
    let hungerValues: number[] = [];
    for (let i = 0; i < this.animals.length; i++) {
      hungerValues.push(this.animals[i].hunger);
      if (this.animals[i].hunger == Math.min(...hungerValues)) {
        this.animals.splice(i, 1);
      }
    }
    this.freeSlots++;
  }

}

let myFarm: Farm = new Farm;
let fatPig: Animal = new Animal(0, 50);
myFarm.animals.push(fatPig);
myFarm.breed();
myFarm.breed();
myFarm.breed();
console.log(myFarm);
myFarm.slaughter();
console.log(myFarm);