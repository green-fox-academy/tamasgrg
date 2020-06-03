'use strict';
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
let num: number = 2;
function sum(num: number): number {
  for (let i: number = num - 1; i > 0; i--) {
    num += i;
  }
  return num;
}
console.log(sum(num));
export{};