'use strict';
// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let lineCount: number = 8;

let lineCountHalf: number = 0;
if (lineCount % 2 == 0) {
  lineCountHalf = (lineCount - 2) / 2;
} else {
  lineCountHalf = (lineCount - 1) / 2;
}

let str: string = ' ';
let o: string = ' ';
let x: string = '*';
  
for (let i: number = 0; i <= lineCountHalf; i++) {
  let str1: string = ' ';
  for (let s1: number = 1; s1 <= lineCountHalf - i; s1++) {
    str1 += o;
  }
  for (let k1: number = 1; k1 <= 2 * i + 1; k1++) {
    str1 += x;
  }
  console.log(str1);
}

if (lineCount % 2 == 0) {
  let str3: string = ' ';
  for (let h: number = 1; h < lineCount; h++) {
    str3 += x;
  }
  console.log(str3);
}

for (let j: number = 0; j <= lineCountHalf - 1; j++) {
  let str2: string = ' ';
  for (let s2: number = 0; s2 <= j; s2++) {
    str2 += o;
  }
  for (let k2: number = 1; k2 <= (lineCountHalf - j) * 2 - 1; k2++) {
    str2 += x;
  }
  console.log(str2);
}

export{};