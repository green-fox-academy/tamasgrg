'use strict';
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let k: string = '%';
let s: string = ' ';

for (let i: number = 1; i <= 8; i++) {
  let str: string = '';
  for (let j: number = 1; j <= 8; j++) {
    if ((i % 2 != 0 && j % 2 != 0) || (i % 2 === 0 && j % 2 === 0)) {
      str += k;    
    } else {
      str += s;
    }
  }
  console.log(str);
}
export{};