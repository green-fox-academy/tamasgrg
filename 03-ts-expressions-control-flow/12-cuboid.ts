'use strict';
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
// Surface Area: 600
// Volume: 1000
let a: number = 1;
let b: number = 1;
let c: number = 1;

let surfaceArea: number = 2 * (a * b + a * c + b * c);
let volume: number = a * b * c;
console.log(`Surface Area: ${surfaceArea}`);
console.log(`Volume: ${volume}`);
export{};