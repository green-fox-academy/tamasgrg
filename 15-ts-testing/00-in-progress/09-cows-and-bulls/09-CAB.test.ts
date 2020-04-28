'use strict';
import * as test from 'tape';
import { CAB } from "./09-CAB";

test ('test CAB constructor _goal', t => {
  const game: CAB = new CAB

  t.match(game.goal.toString(), /[1000-9999]/);
  t.end();
});

test ('test CAB constructor _gameState', t => {
  const expected: string = 'playing';

  const result: CAB  = new CAB;

  t.equal(result.gameState, expected);
  t.end();
});

test ('test CAB constructor _guessCount', t => {
  const expected: number = 0;

  const result: CAB  = new CAB;

  t.equal(result.guessCount, expected);
  t.end();
});

test ('test CAB .guess() - if increases guessCount', t => {
  const game: CAB = new CAB;
  game.guess(1111);
  game.guess(1111);
  const expected: number = 2;

  const result: number = game.guessCount;

  t.equal(result, expected, 'guessCount = 2');
  t.end();
});

test ('test CAB .guess() input exceptions', t => {
  const game: CAB = new CAB;
  
  t.throws(() => {game.guess(0);
  }, 'input = 0');

  t.throws(() => {game.guess(-5);
  }, 'input = -5');

  t.throws(() => {game.guess(99999);
  }, 'input = 99999');
  
  t.throws(() => {game.guess(2222.5);
  }, 'input = 2222.5');

  t.end();
});

test ('test CAB .guess() logic, goal = 1234, only bulls', t => {
  const game: CAB = new CAB;
  game.goal = 1234;
  const expected1: string = '1 bull';
  const expected2: string = '2 bull';
  const expected3: string = '3 bull';
  const expected4: string = '4 bull';
  const expected5: string = '';

  const result1: string = game.guess(1555);
  const result2: string = game.guess(1255);
  const result3: string = game.guess(1235);
  const result4: string = game.guess(1234);
  const result5: string = game.guess(5555);

  t.equal(result1, expected1, 'goal = 1234, guess = 1555, 1 bull');
  t.equal(result2, expected2, 'goal = 1234, guess = 1255, 2 bull');
  t.equal(result3, expected3, 'goal = 1234, guess = 1235, 3 bull');
  t.equal(result4, expected4, 'goal = 1234, guess = 1234, 4 bull');
  t.equal(result5, expected5, 'goal = 1234, guess = 5555, 0 bull');
  t.end();
});