'use strict';
// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
let lineCount: number = 5;
let k: string = '%';
let s: string = ' ';
for (let i: number = 0; i < lineCount; i++) {
  let str: string = '';
  for (let j: number = 0; j < lineCount; j++) {
    if (i === 0 || i === lineCount - 1 || j === 0 || j === lineCount - 1) {
      str += k;
    } else {
      str += s;
    }
  }
  console.log(str);
}
export {};