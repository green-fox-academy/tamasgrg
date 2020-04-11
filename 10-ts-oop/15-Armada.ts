'use strict';
import { Ship } from "./15-Ship";
import { Pirate } from "./15-Pirate";

export class Armada {
  private _shipList: Ship[] = [];

  fillArmada(): Ship[] {
    const randomNumber: number = Math.floor(Math.random() * 7 + 1);
    for (let i = 0; i < randomNumber; i++) {
      let ship = new Ship;
      ship.fillShip();
      ship.printStateOfShip();
      this._shipList.push(ship);
    }
    return this._shipList;
  }

  war(enemyArmada: Armada): boolean {
    let ifThisWinner: boolean;
    let thisShipsLost: number = 0;
    let enemyShipsLost: number = 0;
    let thisShipsRemaining: number = this._shipList.length - thisShipsLost;
    let enemyShipsRemaining: number = enemyArmada._shipList.length - enemyShipsLost;
    while (thisShipsRemaining > 0 || enemyShipsRemaining > 0) {
      if (
        this._shipList[thisShipsLost].battle(enemyArmada._shipList[enemyShipsLost]) == true) {
        enemyShipsLost++;
        console.log('Enemy Armada lost a ship');
      } else if (
        this._shipList[thisShipsLost].battle(enemyArmada._shipList[enemyShipsLost]) == false) {
        thisShipsLost++;
        console.log('This Armada lost a ship');
      } else {
        thisShipsLost++;
        enemyShipsLost++;
        console.log('Both Armadas lost a ship');  
      }
    }
    ifThisWinner = thisShipsRemaining > enemyShipsRemaining ? true : false;
    console.log(ifThisWinner ? 'This Armada has won the war' : 'Enemy Armada has won the war');
    return ifThisWinner;
  }

}

// console.log(this._shiplist);

let armada1 = new Armada;
let armada2 = new Armada;
armada1.fillArmada();
armada2.fillArmada();
// console.log(armada1);
// console.log(armada2);
armada1.war(armada2);
// console.log(armada1);
// console.log(armada2);