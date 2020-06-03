'use strict';
import { Ship } from "./15-Ship";

export class Armada {
  private _shipList: Ship[] = [];

  fillArmada(): Ship[] {
    const randomNumber: number = Math.floor(Math.random() * 7 + 1);
    for (let i = 0; i < randomNumber; i++) {
      let ship = new Ship;
      ship.fillShip();
      this._shipList.push(ship);
    }
    return this._shipList;
  }

  war(enemyArmada: Armada): boolean {
    let ifThisWinner: boolean;
    let thisShipsLost: number = 0;
    let enemyShipsLost: number = 0;
    let clashResult: boolean;
    let round: number = 1;
    do {
      let thisShipsRemaining: number = this._shipList.length - thisShipsLost;
      let enemyShipsRemaining: number = enemyArmada._shipList.length - enemyShipsLost;  
      console.log(
        `\nClash #${round}\n` +
        `Your armada has ${thisShipsRemaining} ships remaining\n` +
        `Enemy armada has ${enemyShipsRemaining} ships remaining`
      );

      clashResult = this._shipList[thisShipsLost].battle(enemyArmada._shipList[enemyShipsLost]);
      if (clashResult === true) {
        enemyShipsLost++;
        console.log(`Enemy Armada lost a ship`);
      }
      else if (clashResult === false) {
        thisShipsLost++;
        console.log(`Your Armada lost a ship`);
      } else {
        thisShipsLost++;
        enemyShipsLost++;
        console.log(`Both Armadas lost a ship`);
      }

      round++;
    } while (
      this._shipList.length - thisShipsLost > 0 && enemyArmada._shipList.length - enemyShipsLost > 0
    );
  
  ifThisWinner =
    this._shipList.length - thisShipsLost > enemyArmada._shipList.length - enemyShipsLost ?
      true : false;
  console.log(ifThisWinner ?
      '\nYour Armada has won the war' : '\nEnemy Armada has won the war');
  return ifThisWinner;
  }
}