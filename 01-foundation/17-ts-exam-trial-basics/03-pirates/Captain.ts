'use strict';

import { Pirate } from "./Pirate";

export class Captain extends Pirate {

  constructor(name: string, goldAmount: number, isWoodenLegged: boolean) {
    super(name, goldAmount, isWoodenLegged);
    this._isCaptain = true;
  }

  work(): void {
    this._goldAmount += 10;
    this._hp -= 5;
  }

  party(): void {
    this._hp += 10;
  }

}

export{};