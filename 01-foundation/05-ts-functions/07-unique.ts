'use strict';
//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
function unique(arr: number[]): number[] {
  let arr2: number[] = [];
  arr.forEach((value: number, index: number) => {
    arr.sort();
    if (arr[index] != arr[index + 1]) {
      arr2.push(arr[index]);
    }
  })
  return arr2;
};

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`
export{};