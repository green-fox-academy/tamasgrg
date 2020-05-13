// app to test

'use strict';

import { Pirate } from "./Pirate";
import { Captain } from "./Captain";
import { Ship } from "./Ship";

let p1 = new Pirate('p1', 10, true);
let p2 = new Pirate('p2', 20, false);
let p3 = new Pirate('p3', 15, true);
let p4 = new Pirate('p4', 5, true);
let p5 = new Pirate('p5', 0, false);

let c1 = new Captain('c1', 100, true);
let c2 = new Captain('c1', 100, false);

let s1 = new Ship;
console.log(c1);
console.log(p1);
p1.work();
c1.work();
p1.party();
p1.toString();
p2.toString();
c1.toString();
console.log(p1);
console.log(c1);
s1.addPirates(p4);
s1.addPirates(p2);

console.log(s1.addPirates(p1));
console.log(s1.addPirates(c1));
console.log(s1.getPoorPirates());
console.log(s1);
console.log(s1.getGolds());
s1.lastDayOnTheShip();
console.log(s1);
s1.prepareForBattle();
console.log(s1);

export{};