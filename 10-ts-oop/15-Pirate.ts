'use strict';

export class Pirate {
  rumConsumed: number = 0;
  // isDrunk: boolean = false;
  isPassedOut: boolean = false;
  isDead: boolean = false;

  constructor() { 
  }
  
  drinkSomeRum(): void {
    if (this.isPassedOut) {
      console.log('He is passed out');
    } else if (this.isDead) {
      console.log('He is dead');
    } else {
    this.rumConsumed += Math.floor(Math.random() * 5 + 1);
    }
  }

  howsItGoingMate() {
    if (this.isPassedOut) {
      console.log('He is passed out');
    } else if (this.isDead) {
      console.log('He is dead');
    } else {
      const pourMe: string = 'Pour me anudder!';
      const goToSleep: string = 'Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?';
      const randomNumber: number = Math.floor(Math.random() * 5);
      if (this.rumConsumed > 0) {
        for (let i = 0; i < randomNumber; i++) {
          console.log(pourMe);
        }
      } else {
        console.log(goToSleep);
        this.isPassedOut = true;
        this.rumConsumed = 0;
      }
    }
  }

  die() {
    this.isDead? console.log('He is already dead'):
    this.isDead = true;
  }

  brawl(pirate: Pirate) {
    if (pirate.isDead || pirate.isPassedOut) {
      console.log('Enemy is already out, mate!');
    } else {
      if (this.isPassedOut) {
        console.log('He is passed out');
      } else if (this.isDead) {
        console.log('He is dead');
      } else {
        const randomNumber: number = Math.floor(Math.random() * 3 + 1);
        if (randomNumber == 1) {
          this.isDead = true;
          console.log('Pirate died in battle');
        } else if (randomNumber == 2) {
          pirate.isDead = true;
          console.log('Enemy pirate died in battle');
        } else {
          this.isPassedOut = true;
          this.rumConsumed = 0;
          pirate.isPassedOut = true;
          pirate.rumConsumed = 0;
          console.log('Both pirates passed out');
        }
      }
    }
  }
}

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
//  0 to 4 times, "Pour me anudder!"
//  else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?",
//  the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following.
// die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just
//  result in he's dead.
// brawl(x) - where pirate fights another pirate (if that other pirate is alive)
//  and there's a 1/3 chance, 1 dies, the other dies or they both pass out.
// And... if you get that far...
// Add a parrot.