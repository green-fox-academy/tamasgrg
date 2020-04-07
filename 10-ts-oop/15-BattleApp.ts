'use strict';
import {Pirate} from './15-Pirate';
import {Ship} from './15-Ship';

export class BattleApp {

}

let ship1 = new Ship;
let ship2 = new Ship;
ship1.fillShip();
ship2.fillShip();
ship1.captain.drinkSomeRum();
ship2.captain.drinkSomeRum();
ship1.printStateOfShip();
ship2.printStateOfShip();
// console.log(ship);
ship1.battle(ship2)
ship1.printStateOfShip();
ship2.printStateOfShip();