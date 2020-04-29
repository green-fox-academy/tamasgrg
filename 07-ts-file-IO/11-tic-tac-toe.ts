'use strict';
// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
const fs = require('fs');

function readFile(filePath: string): string {
  let fileContent: string = '';
  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    console.log('Error while reading file...');
  }
  return fileContent;
}

function convertarray(list: string[]): number[] {
  const array: number[] = [];
  list.forEach((value: string) => {
    if (value == 'O') array.push(0);
    if (value == 'X') array.push(1);
  });
  return array;
}

// function checkInArray(array: number[], a: number, b: number, c: number): number {
//   if (array[a] + array[b] + array[c] == 0) return 0;
//   if (array[a] + array[b] + array[c] == 3) return 1;
// }

function checkResult(array: number[]): string {
  let result: number = 666;
  for (let i = 0; i < 3; i++) {
  // checkInArray(array, i*3, i*3+1, i*3+2) ||
  // checkInArray(array, i, i+3, i+6) ||
  // checkInArray(array, i, i+4, i+8) ||
  // checkInArray(array, i+2, i+4, i+6) != undefined) return 
    if (array[i * 3] + array[i * 3 + 1] + array[i * 3 + 2] == 0) result = 0;
    if (array[i * 3] + array[i * 3 + 1] + array[i * 3 + 2] == 3) result = 1;
    
    if (array[i] + array[i + 3] + array[i + 3 + 3] == 0) result = 0;
    if (array[i] + array[i + 3] + array[i + 3 + 3] == 3) result = 1;
    
    if (array[0] + array[4] + array[8] == 0) result = 0;
    if (array[2] + array[4] + array[6] == 0) result = 0;
    if (array[0] + array[4] + array[8] == 3) result = 1;
    if (array[2] + array[4] + array[6] == 3) result = 1;
  }
  if (result == 0) return 'O';
  if (result == 1) return 'X';
  else return 'Draw';
}

function ticTacResult(filePath: string): string {
  const fileContent: string = readFile(filePath);
  const fileContentSpliced: string[] = fileContent.split('');
  const toDigits: number[] = convertarray(fileContentSpliced);  
  const result: string = checkResult(toDigits);
  return result;
}

console.log(ticTacResult('files/11-win-o.txt'))
// Should print "O"

console.log(ticTacResult('files/11-win-x.txt'))
// Should print "X"

console.log(ticTacResult('files/11-draw.txt'))
// Should print "Draw"

export{};