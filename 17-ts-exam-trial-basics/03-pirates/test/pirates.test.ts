'use strict';
import * as test from 'tape';

import { Pirate } from "../Pirate";
import { Captain } from "../Captain";
import { Ship } from "../Ship";

test('test .work()', t => {
  const pirate1: Pirate = new Pirate('pirate1', 10, true);
  const captain1: Captain = new Captain('captain1', 10, true);
  pirate1.work();
  captain1.work();
  const expected1: number = 11;
  const expected2: number = 9;
  const expected3: number = 20;
  const expected4: number = 5;

  const result1: number = pirate1.goldAmount;
  const result2: number = pirate1.hp;
  const result3: number = captain1.goldAmount;
  const result4: number = captain1.hp;

  t.equal(result1, expected1);
  t.equal(result2, expected2);
  t.equal(result3, expected3);
  t.equal(result4, expected4);

  t.end();
});

test('test .party()', t => {
  const pirate1: Pirate = new Pirate('pirate1', 10, true);
  const captain1: Captain = new Captain('captain1', 10, true);
  pirate1.party();
  captain1.party();
  const expected1: number = 11;
  const expected2: number = 20;
  
  const result1: number = pirate1.hp;
  const result2: number = captain1.hp;
  
  t.equal(result1, expected1);
  t.equal(result2, expected2);
  
  t.end();
});

test('test .toString()', t => {
  const pirate1: Pirate = new Pirate('pirate1', 10, true);
  const pirate2: Pirate = new Pirate('pirate2', 10, false);
  
  const expected1: string = `Hello, I\'m ${pirate1.name}. I have a wooden leg and ${pirate1.goldAmount} golds.`;
  const expected2: string = `Hello, I\'m ${pirate2.name}. I still have my real legs and ${pirate2.goldAmount} golds.`;

  const result1: string = pirate1.toString();
  const result2: string = pirate2.toString();

  t.equal(result1, expected1);
  t.equal(result2, expected2);

  t.end();
});

test('test .addPirates()', t => {
  const pirate1: Pirate = new Pirate('pirate1', 10, true);
  const captain1: Captain = new Captain('captain1', 10, false);
  const ship1: Ship = new Ship;
  ship1.addPirates(pirate1);
  ship1.addPirates(captain1);
  
  const expected1: string = `${pirate1.name} has been successfully added to the crew`;
  const expected2: string = `This ship has a captain already, you cannot add ${captain1.name} to the crew`;

  const result1: string = ship1.addPirates(pirate1);
  const result2: string = ship1.addPirates(captain1);

  t.equal(result1, expected1);
  t.equal(result2, expected2);

  t.end();
});

export{};