// Create a method that decrypts reversed-order.txt
'use strict';
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

function writeFile(outPath: string, fileContent: string): void {
  try {
    fs.writeFileSync(outPath, fileContent);
    console.log('File write successfull...');
  } catch (e) {
    console.log('Error while writing file...');
  }
}

function reverseLines(text: string): string {
  let reversedLines: string = text
    .split('\n')
    .reverse()
    .join('\n');
  return reversedLines;
}

function decodeText(inPath: string, outPath: string): string {
  const text: string = readFile(inPath);
  const decodedText: string = reverseLines(text);
  writeFile(outPath, decodedText);
  return decodedText;
}

console.log(decodeText('files/09-reversed-order.txt', 'files/09-decoded-text.txt'));
// decodeText('files/09-reversed-order.txt', 'files/09-decoded-text.txt');
export{};