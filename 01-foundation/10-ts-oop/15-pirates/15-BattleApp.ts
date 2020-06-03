'use strict';
import {Ship} from './15-Ship';

export class BattleApp {

  static battle(ship1: Ship, ship2: Ship): void {
    ship1.fillShip();
    ship2.fillShip();
    ship1.printStateOfShip();
    ship2.printStateOfShip();
    ship1.battle(ship2);
    ship1.printStateOfShip();
    ship2.printStateOfShip();
  }
}