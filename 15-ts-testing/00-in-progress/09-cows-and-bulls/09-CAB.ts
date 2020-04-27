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

  get gameState(): string {
    return this._gameState;
  }
  
  get guessCount(): number {
    return this._guessCount;
  }

  set guessCount(n: number) {
    this._guessCount = n;
  }

  guess(): string {
    this.guessCount++;
    return '';
  }

}

// let game = new CAB;
// console.log(game);
// game.guess()
// game.guess()
// game.guess()
// console.log(game);

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