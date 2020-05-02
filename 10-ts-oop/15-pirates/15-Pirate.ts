'use strict';

export class Pirate {
  private _rumConsumed: number;
  private _isPassedOut: boolean;
  private _isDead: boolean;

  constructor(
    rumConsumed: number = 0,
    isPassedOut: boolean = false,
    isDead: boolean = false) { 
      this._rumConsumed = rumConsumed;
      this._isPassedOut = isPassedOut;
      this._isDead = isDead;
  }
   
  set rumConsumed(rum: number) {
    this._rumConsumed = rum;
  }
  
  set isPassedOut(x: boolean) {
    this._isPassedOut = x;
  }
  
  set isDead(x: boolean) {
    this._isDead = x;
  }

  get rumConsumed(): number {
    return this._rumConsumed;
  }
  
  get isPassedOut(): boolean {
    return this._isPassedOut;
  }

  get isDead(): boolean {
    return this._isDead;
  }

  drinkSomeRum(): void {
    if (this._isPassedOut) {
      console.log('Your pirate can\'t drink, he is passed out');
    } else if (this._isDead) {
      console.log('Your pirate can\'t drink, he is dead');
    } else {
      this._rumConsumed ++;
      // console.log(`Your pirate drinks some rum, he had ${this._rumConsumed} rums so far`);
    }
  }

  drinkRandomRum(): void {
    if (this._isPassedOut) {
      console.log('Your pirate can\'t drink, he is passed out');
    } else if (this._isDead) {
      console.log('Your pirate can\'t drink, he is dead');
    } else {
      this._rumConsumed += Math.floor(Math.random() * 5 + 1);
      // console.log(`Your pirate drinks some rum, he had ${this._rumConsumed} rums so far`);
    }
  }

  howsItGoingMate(): void {
    if (this._isPassedOut) {
      console.log('Your pirate is passed out');
    } else if (this._isDead) {
      console.log('Your pirate is dead');
    } else {
      if (this._rumConsumed < 5) {
        console.log('Pour me anudder!');
      } else {
        console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
        this._isPassedOut = true;
        this._rumConsumed = 0;
      }
    }
  }

  die(): void {
    this._isDead ? console.log('Your pirate is already dead'): this._isDead = true;
  }

  brawl(enemyPirate: Pirate): void {
    if (enemyPirate._isDead || enemyPirate._isPassedOut) {
      console.log('Enemy pirate is already out');
    } else {
      if (this._isPassedOut) {
        console.log('Your pirate can\'t brawl, he is already passed out');
      } else if (this._isDead) {
        console.log('Your pirate can\'t brawl, he is already dead');
      } else {
        const randomNumber: number = Math.floor(Math.random() * 3 + 1);
        if (randomNumber === 1) {
          this._isDead = true;
          console.log('Brawl is over, your pirate died in battle');
        } else if (randomNumber === 2) {
          enemyPirate._isDead = true;
          console.log('Brawl is over, enemy pirate died in battle');
        } else {
          this._isPassedOut = true;
          this._rumConsumed = 0;
          enemyPirate._isPassedOut = true;
          enemyPirate._rumConsumed = 0;
          console.log('Brawl is over, both pirates passed out');
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