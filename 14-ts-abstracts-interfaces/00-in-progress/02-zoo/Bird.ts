'use strict';
import { Animal } from "./Animal";

export class Bird extends Animal {

  constructor(name: string) {
    super(name);
    this._name = name;
  }

}