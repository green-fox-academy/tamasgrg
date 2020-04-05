'use strict';
import {Pirate} from './15-Pirate';

export class Ship {
  captain: Pirate;
  crew: Pirate[] = [];

  fillShip(): Pirate[] {
    const randomNumber: number = Math.floor(Math.random() * 7 + 1);
    this.captain = new Pirate;
    for (let i = 0; i < randomNumber; i++) {
      let pirate = new Pirate;
      this.crew.push(pirate);
    }
    return this.crew;
  }

  printStateOfShip() {
    let captainIsDeadText: string = '';
    let captainIsPassedOutText: string = '';
    this.captain.isDead?
      captainIsDeadText = 'he is dead':
      captainIsDeadText = 'he is alive';
    this.captain.isPassedOut?
      captainIsPassedOutText = 'he is passed out':
      captainIsPassedOutText = 'he is not passed out';
    console.log(`The captain consumed ${this.captain.rumConsumed} units of rum, ` +
      `${captainIsDeadText}, and ${captainIsPassedOutText}`);

    let piratesAlive: number = 0;
    for (let i = 0; i < this.crew.length; i++) {
      if (this.crew[i].isDead != true) {
        piratesAlive++;
      }
    }
    console.log(`There are ${piratesAlive} pirates alive on the ship`);
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