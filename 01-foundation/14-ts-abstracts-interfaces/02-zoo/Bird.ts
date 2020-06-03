'use strict';
import { Animal } from "./Animal";
import { Eggable } from "./Eggable";

export class Bird extends Animal implements Eggable {

  constructor(name: string, breedMethod: string = 'laying eggs') {
    super(name, breedMethod);
    this._name = name;
    this._breedMethod = breedMethod;
  }

  layEgg(): void {

  }

}