'use strict';
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
let lineCount: number = 4;
for (let i: number = 0; i < lineCount; i++){
  let str: string = ' ';
  for (let s: number = 1; s < lineCount - i; s++){
    str = str + ' ';
  }
  for (let k: number = 1; k <= 2 * i + 1; k++){
    str = str + '*';
  }
  console.log(str);
}