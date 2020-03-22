// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
'use strict';
const fs = require('fs');

function readFile(inPath: string): string {
  let fileContent: string = '';
  try {
    fileContent = fs.readFileSync(inPath, 'utf-8');
  } catch (e) {
    console.log('Error while reading file...');
  }
  return fileContent;
}

function writeFile(outPath: string, fileContent: string): void {
  try {
    fs.writeFileSync(outPath, fileContent);
    console.log('File write successfull...');
  } catch (e) {
    console.log('Error while writing file...');
  }
}

function copyContent(inPath: string, outPath: string): void {
  const fileContent: string = readFile(inPath);
  writeFile(outPath, fileContent);
}

copyContent('in.txt', 'out.txt');
export {};