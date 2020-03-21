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

function halfLetters(array: string[]){
  let halfLetters: string[] = [];
  for (let i = 0; i < array.length; i += 2) {
    halfLetters.push(array[i]);
  }
  return halfLetters;
}

function decodeText(filePath){
  const origiText: string = readFile(filePath);
  const allLettersArray: string[] = origiText.split('');
  const halfLettersArray: string[] = halfLetters(allLettersArray);
  const readyText: string = halfLettersArray.join('');
  return readyText;
}

// console.log doesn't work, write to file does   ?????????????
console.log(decodeText('duplicated-chars.txt'))
fs.writeFileSync('decoded-text.txt', decodeText('duplicated-chars.txt'));
export {};