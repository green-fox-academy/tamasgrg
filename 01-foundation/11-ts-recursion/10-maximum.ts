'use strict';
// Maximum finder
// Write a function that finds the largest element of an array using recursion.
let list: number[] = [111, 5, 888, 2, 11, 3, 6];

function maxOf(array: number[]): number {
  if (array.length == 1) {
    return array[0];
  } else if (array[0] < array[1]) {
    array.splice(0, 1);
    return maxOf(array);
  } else {
    array.splice(1, 1);
    return maxOf(array);
  }
}

console.log(maxOf(list));
export{};