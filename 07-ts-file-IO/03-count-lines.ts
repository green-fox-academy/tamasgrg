'use strict';
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
const fs = require('fs');
function readFile(filePath: string): string {
  let fileContent: string = '';
  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    console.log(0);
  }
  return fileContent;
}

function countLines(fileContent: string): number {
  const fileRows: string[] = fileContent.split('\n');
  const numberOfLines: number = fileRows.length;
  return numberOfLines;
}

function numberOfLines(filePath: string): void {
  const fileContent: string = readFile(filePath);
  if (fileContent != '') {
    const numberOfLines: number = countLines(fileContent);
    console.log(numberOfLines);
  }
}
numberOfLines('files/03-my-file.txt');
export{};