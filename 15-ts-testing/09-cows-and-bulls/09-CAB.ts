'use strict';
export class CAB {

  private _goal: number; // 4-digit number
  private _gameState: string;
  private _guessCount: number;

  constructor() {
    this._goal = Math.floor(1000 + Math.random() * 9000);
    this._gameState = 'playing';
    this._guessCount = 0;
  }

  get goal(): number {
    return this._goal;
  }

  set goal(n: number) {
    this._goal = n;
  }

  get gameState(): string {
    return this._gameState;
  }

  set gameState(text: string) {
    this._gameState = text;
  }
  
  get guessCount(): number {
    return this._guessCount;
  }

  set guessCount(n: number) {
    this._guessCount = n;
  }

  guess(guess: number): string {
    if (guess.toString().length != 4) throw 'error, it\'s not a 4-digit number';
    // if (guess < 1000 || guess > 9999) throw 'error, it\'s not a 4-digit number';
    this.guessCount++;
    let bullCount: number = 0;
    let cowCount: number = 0;
    for (let i = 0; i < 4; i++) {
      if (Math.floor(guess / 10 ** i) == Math.floor(this.goal / 10 ** i)) {
        bullCount++;
      }  
    }
    if (bullCount == 4) {
      this.gameState = 'finished';
      return `Congarulations, you won. The secret number was ${this.goal}`;
    }
    let matchTotal: number = 0;
    for (let i = 0; i < 4; i++) {
      if (this.goal.toString().match(guess.toString().charAt(i))) {
        matchTotal++;
      }
    }
    cowCount = matchTotal - bullCount;
    let resultBull: string = bullCount == 0 ? '' : `${bullCount} bull`;
    let resultCow: string = cowCount == 0 ? '' : `${cowCount} cow`;
    return bullCount * cowCount > 0 ? `${resultBull}, ${resultCow}` : resultBull + resultCow;
  }

  cheat(n: number) {
    this.goal = n;
  }

}

let newGame: CAB = new CAB;
newGame.cheat(1234);
console.log(newGame.guess(9999));
console.log(newGame.guess(1043));
console.log(newGame.guess(1243));
console.log(newGame.guess(1234));

// Cows and Bulls
// Create a class what is capable of playing exactly one game of Cows and Bulls (CAB).
// The player have to guess a 4 digit number. For every digit that the player guessed correctly
// in the correct place, they have a “cow”. For every digit the player guessed correctly
// in the wrong place is a “bull.” If the player types a number that does not exist,
// that guess will not have any result.

// Example: If the number to be found is "7624" and the player types "7296", the result is:
//   "1 cow, 2 bull".

// The CAB object should have a random 4 digit number, which is the goal to guess.
// The CAB object should have a state where the game state is stored (playing, finished).
// The CAB object should have a counter where it counts the guesses.
// The CAB object should have a guess method, which returns a string of the guess result
// All methods, including constructor should be tested