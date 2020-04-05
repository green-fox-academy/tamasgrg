'use strict';

export class Pirate {
  ifDrunk: boolean;

  drinkSomeRum(): boolean {
    return this.ifDrunk = true;
  }

  howsItGoingMate() {
    const pourMe: string = 'Pour me anudder!';
    const goToSleep: string = 'Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?';
    const randomNumber: number = Math.floor(Math.random()) * 4;
    if (this.ifDrunk) {
      let i: number = 0;
      while (i < randomNumber) {
        console.log(pourMe);
        i++;
      }
    } else {
      console.log(goToSleep);
    }
  }
}

let pirate1: Pirate = new Pirate;
pirate1.drinkSomeRum

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following.

// die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead.
// brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.
// And... if you get that far...

// Add a parrot.