'use strict';
// Create a method that decrypts reversed-lines.txt
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

function reverseText(text: string[]): string {
  let reversedText: string[] = [];
  text.forEach((value: string, index: number) => {
    reversedText.push(value
    .split('')
    .reverse()
    .join(''))
  })
  return reversedText.join('');
}

function decodeText(inPath: string, outPath: string): string {
  const text: string = readFile(inPath);
  const textLines: string[] = text.split('\r');
  const decodedText: string = reverseText(textLines);
  writeFile(outPath, decodedText);
  return decodedText;
}

console.log(decodeText('files/08-reversed-lines.txt', 'files/08-decoded-text.txt'));
// decodeText('files/08-reversed-lines.txt', 'files/08-decoded-text.txt');
export{};