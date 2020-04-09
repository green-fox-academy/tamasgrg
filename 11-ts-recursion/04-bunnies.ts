'use strict';
// Bunnies
// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively
//  (without loops or multiplication).
function calculateNumberOfEarsOfBunnies(numBunnies: number): number {
  if (numBunnies == 1) {
    return 2;
  } else {
    return 2 + calculateNumberOfEarsOfBunnies(numBunnies - 1);
  }
}

console.log(calculateNumberOfEarsOfBunnies(10));
export{};