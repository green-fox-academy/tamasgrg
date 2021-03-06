'use strict';
import {Pirate} from './15-Pirate';

export class Ship {
  private _captain: Pirate;
  private _crew: Pirate[] = [];

  fillShip(): Pirate[] {
    const randomNumber: number = Math.floor(Math.random() * 7 + 1);
    this._captain = new Pirate;
    this._captain.drinkRandomRum();
    for (let i = 0; i < randomNumber; i++) {
      let pirate = new Pirate;
      this._crew.push(pirate);
    }
    return this._crew;
  }

  printStateOfShip(): void {
    let captainIsDeadText: string = '';
    let captainIsPassedOutText: string = '';
    this._captain.isDead ?
      captainIsDeadText = 'he is dead' :
      captainIsDeadText = 'he is alive';
    this._captain.isPassedOut ?
      captainIsPassedOutText = 'he is passed out' :
      captainIsPassedOutText = 'he is not passed out';
    console.log(`\nThe captain consumed ${this._captain.rumConsumed} units of rum, ` +
      `${captainIsDeadText}, and ${captainIsPassedOutText}`);
    console.log(`There are ${this.piratesAlive()} pirates alive on the ship\n`);
  }

  piratesAlive(): number {
    let piratesAlive: number = 0;
    for (let i = 0; i < this._crew.length; i++) {
      if (this._crew[i].isDead != true) {
        piratesAlive++;
      }
    }
    return piratesAlive;
  }

  static calculateShipScore(ship: Ship): number {
    let shipScore: number = ship.piratesAlive() - ship._captain.rumConsumed;
    return shipScore;
  }
  
  static calculateCasualties(ship: Ship): number {
    const randomCasualtyNumber: number = Math.floor(Math.random() * ship._crew.length + 1);
    return randomCasualtyNumber;
  }
  
  battle(enemyShip: Ship): boolean {
    if (Ship.calculateShipScore(this) > Ship.calculateShipScore(enemyShip)) {
      let enemyShipCasualties = Ship.calculateCasualties(enemyShip);
      for (let i = 0; i < enemyShipCasualties; i++) {
        enemyShip._crew[i].isDead = true;
      }
      for (let j = 0; j < this._crew.length; j++) {
        this._crew[j].drinkRandomRum();
      }
      this._captain.drinkRandomRum();
      console.log('Your ship won the battle, enemy ship lost ' +
        enemyShipCasualties + ' pirates, the winners had some rum');
      return true;

    } else if (Ship.calculateShipScore(this) < Ship.calculateShipScore(enemyShip)) {
      let thisCasualties = Ship.calculateCasualties(this);
      for (let i = 0; i < thisCasualties; i++) {
        this._crew[i].isDead =true;
      }
      for (let j = 0; j < enemyShip._crew.length; j++) {
        enemyShip._crew[j].drinkRandomRum();
      }
      enemyShip._captain.drinkRandomRum();
      console.log('Your ship lost the battle, lost '+
        thisCasualties + ' pirates, the winners had some rum');
      return false;

    } else {
      console.log('Draw!');
      return undefined;
    }
  }
}

// The Pirate Ship
// The place for the Pirates
// Create a Ship class.

// The Ship stores Pirate-s instances in a list as the crew and has one captain who is
// also a Pirate.
// When a ship is created it doesn't have a crew or a captain.
// The ship can be filled with pirates and a captain via fillShip() method.
// Filling the ship with a captain and random number of pirates.
// Ships should be represented in a nice way on command line including information about
// captains consumed rum, state (passed out / died)
// number of alive pirates in the crew
// Ships should have a method to battle other ships: ship.battle(otherShip)
// should return true if the actual ship (this) wins
// the ship should win if its calculated score is higher
// calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
// The loser crew has a random number of losses (deaths).
// The winner captain and crew has a party, including a random number of rum :)