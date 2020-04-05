'use strict';
import {Sharpie} from './04-sharpie';

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

export class SharpieSet {
  sharpies: Sharpie[] = [sharpie1, sharpie2, sharpie3];

  countUsable(sharpies: Sharpie[]): number {
    let countUsable: number = 0;
    sharpies.forEach((value: Sharpie): void => {
      if (value.inkAmount != 0) {
        countUsable ++;
      }
    })
    console.log(countUsable);    
    return countUsable;
  }

  removeTrash(sharpies: Sharpie[]): void {
    for (let i = 0; i < sharpies.length; i++) {
      if (sharpies[i].inkAmount == 0) {
        sharpies.splice(i, 1);
        i--;
      }
    }
  }

}

const sharpie1: Sharpie = new Sharpie('green', 100, 100);
const sharpie2: Sharpie = new Sharpie('blue', 10, 0);
const sharpie3: Sharpie = new Sharpie('green', 10, 0);
const sharpieSet: SharpieSet = new SharpieSet;

console.log(sharpieSet);
sharpieSet.countUsable(sharpieSet.sharpies);
sharpieSet.removeTrash(sharpieSet.sharpies);
console.log(sharpieSet);