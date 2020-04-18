'use strict';
import { Animal } from "./Animal";
import { Eggable } from "./Eggable";

export class Reptile extends Animal implements Eggable {

  constructor(name: string, breedMethod: string = 'laying eggs') {
    super(name, breedMethod);
    this._name = name;
    this._breedMethod = breedMethod;
  }

  layEgg(): void {

  }

}