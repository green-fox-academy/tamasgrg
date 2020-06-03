'use strict';
import { Animal } from "./Animal";
import { OutPushable } from "./OutPushable";

export class Mammal extends Animal implements OutPushable {

  constructor(name: string, breedMethod: string = 'pushing miniature versions out') {
    super(name, breedMethod);
    this._name = name;
    this._breedMethod = breedMethod;
  }

  giveBirth(): void {

  }

}