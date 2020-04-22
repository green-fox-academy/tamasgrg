'use strict';
import { Aircraft } from "./03-Aircraft";
import { F16 } from "./03-F16";
import { F35 } from "./03-F35";
import { Carrier } from "./03-Carrier";

// let a: F16 = new F16;
// let b: F35 = new F35;
// console.log(a.getStatus());
// console.log(b.getStatus());
// console.log(a.fight());
// console.log(b.fight());
// console.log(a.refill(100));
// console.log(b.refill(4));
// console.log(a.getStatus());
// console.log(b.getStatus());
// console.log(a.fight());
// console.log(b.fight());
// console.log(a.isPriority());
// console.log(b.isPriority());

let myCarrier: Carrier = new Carrier(2300, 5000);
myCarrier.add(5);
console.log(myCarrier.getStatus());
myCarrier.fill();
console.log(myCarrier.getStatus());