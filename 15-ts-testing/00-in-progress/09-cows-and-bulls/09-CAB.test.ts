'use strict';
import * as test from 'tape';
import { CAB } from "./09-CAB";

test ('CAB constructor goal', t => {
  const game: CAB = new CAB

  t.match(game.goal.toString(), /[1000-9999]/);
  t.end();
});

test ('CAB constructor gameState', t => {
  const expected: string = 'playing';

  const result: CAB  = new CAB;

  t.equal(result.gameState, expected);
  t.end();
});

test ('CAB constructor guessCount', t => {
  const expected: number = 0;

  const result: CAB  = new CAB;

  t.equal(result.guessCount, expected);
  t.end();
});

test ('CAB .guess() increases guessCount', t => {
  
});