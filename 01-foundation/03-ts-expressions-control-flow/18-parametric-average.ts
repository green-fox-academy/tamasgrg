'use strict';
// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3
let num: number = 7;
let avNum: number = (num + 1) / 2;
for (let i: number = num - 1; i > 0; i--) {
  num += i;
}
console.log(`Sum: ${num}, Average: ${avNum}`);

// second interpretation of the text:
let num2: number = 7;
let numCount: number = num2;
for (let i2: number = num2 - 1; i2 > 0; i2--) {
  num2 += i2;
  }
console.log(`Sum: ${num2}, Average: ${num2/numCount}`);
export{};