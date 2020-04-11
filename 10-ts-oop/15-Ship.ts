'use strict';
import {Pirate} from './15-Pirate';

export class Ship {
  private _captain: Pirate;
  private _crew: Pirate[] = [];

  fillShip(): Pirate[] {
    const randomNumber: number = Math.floor(Math.random() * 7 + 1);
    this._captain = new Pirate;
    for (let i = 0; i < randomNumber; i++) {
      let pirate = new Pirate;
      this._crew.push(pirate);
    }
    return this._crew;
  }

  printStateOfShip() {
    let captainIsDeadText: string = '';
    let captainIsPassedOutText: string = '';
    this._captain.isDead ?
      captainIsDeadText = 'he is dead' :
      captainIsDeadText = 'he is alive';
    this._captain.isPassedOut ?
      captainIsPassedOutText = 'he is passed out' :
      captainIsPassedOutText = 'he is not passed out';
    console.log(`The captain consumed ${this._captain.rumConsumed} units of rum, ` +
      `${captainIsDeadText}, and ${captainIsPassedOutText}`);
    console.log(`There are ${this.piratesAlive()} pirates alive on the ship`);
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
    const randomCasaultyNumber: number = Math.floor(Math.random() * ship._crew.length + 1);
    return randomCasaultyNumber;
  }
  
  battle(enemyShip: Ship): boolean {
    if(this.calculateShipScore(this) > this.calculateShipScore(enemyShip)) {
      let shipCasualties = this.calculateCasualties(enemyShip);
      for (let i = 0; i < shipCasualties; i++) {
        enemyShip._crew[i].setIsDead(true);
      }
      for (let j = 0; j < this.crew.length; j++) {
        this._crew[j].drinkSomeRum();
      }
      this._captain.drinkSomeRum();
      console.log('Attacking ship won the battle, enemy ship lost ' +
        shipCasualties + ' pirates, and the attackers had some rum');
      return true;

    } else if (this.calculateShipScore(this) < this.calculateShipScore(ship)) {
      let thisCasualties = this.calculateCasualties(this);
      for (let i = 0; i < thisCasualties; i++) {
        this.crew[i].isDead = true;
      }
      for (let j = 0; j < ship.crew.length; j++) {
        ship.crew[j].drinkSomeRum();
      }
      ship.captain.drinkSomeRum();
      console.log('Attacking ship lost the battle, and lost '+
        thisCasualties + ' pirates, and the defenders had some rum');
      return false;

    } else {
      console.log('Draw! nothing happened, nobody drunk any rum :(');
    }
  }

  // generateRandomShip() {

  // }

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