// Create a method that decrypts duplicated-chars.txt
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

//solution #1 (write to file ok, but console.log prints lines on top of each other)
function halfLetters(array: string[]){
  let halfLetters: string[] = [];
  for (let i = 0; i < array.length; i += 2) {
    halfLetters.push(array[i]);
  }
  return halfLetters;
}

function decodeText(filePath: string): string {
  const origiText: string = readFile(filePath);
  const allLettersArray: string[] = origiText.split('');
  const halfLettersArray: string[] = halfLetters(allLettersArray);
  const readyText: string = halfLettersArray.join('');
  return readyText;
}
// console.log(decodeText('files/07-duplicated-chars.txt'))
// fs.writeFileSync('files/07-decoded-text.txt', decodeText('files/07-duplicated-chars.txt'));


//solution #2

function singleChars(text: string[]): string {
  let singleText: string[] = [];
  text.forEach((value: string, index: number) => {
    singleText.push(value
    .split('')
    .filter((value: string, index: number) => index % 2 === 0)
    .join(''))
  })
  return singleText.join('');
}

function writeFile(outPath: string, fileContent: string): void {
  try {
    fs.writeFileSync(outPath, fileContent);
    console.log('File write successfull...');
  } catch (e) {
    console.log('Error while writing file...');
  }
}

function decodeText2(inPath: string, outPath: string): string {
  const text: string = readFile(inPath);
  const textLines: string[] = text.split('\r');
  const decodedText: string = singleChars(textLines);
  writeFile(outPath, decodedText);
  return decodedText;
}

// console.log(decodeText2('files/07-duplicated-chars.txt', 'files/07-decoded-text.txt'));
decodeText2('files/07-duplicated-chars.txt', 'files/07-decoded-text.txt');
export{};