'use strict';
import { Animal } from "./Animal";

export class Mammal extends Animal {

  constructor(name: string) {
    super(name);
    this._name = name;
  }

}