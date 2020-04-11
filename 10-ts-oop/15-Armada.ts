'use strict';
import { Ship } from "./15-Ship";
import { Pirate } from "./15-Pirate";

export class Armada {
  private _shipList: Ship[] = [];

  war(enemyArmada: Armada): boolean {
    let thisShipsLost: number = 0;
    let enemyShipsLost: number = 0;
    while (
        thisShipsLost < this._shipList.length ||
        enemyShipsLost < enemyArmada._shipList.length) {
      if (this._shipList[thisShipsLost].battle(enemyArmada._shipList[enemyShipsLost])) {
        enemyShipsLost++;
      }

    return true;
  }

}

console.log(this._shiplist);
