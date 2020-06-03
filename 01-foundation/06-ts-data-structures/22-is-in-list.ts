'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
function checkNums(list: number[]): boolean {
  let result: boolean;
  list.includes(4) &&
  list.includes(8) &&
  list.includes(12) &&
  list.includes(16) ? result = true: result = false;
  return result;
}
console.log(checkNums(listOfNumbers));
export = checkNums;