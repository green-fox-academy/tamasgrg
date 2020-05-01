'use strict';
// Create a method that decrypts encoded-lines.txt
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

function changeChars(text: string): string {
  const codesOriginal: number[] = [];
  for (let i = 0; i < text.length; i++) {
    codesOriginal.push(text.charCodeAt(i));
  };
  const codesNew: number[] = [];
  codesOriginal.forEach((value: number) => {
    codesNew.push(value == 32 || value == 10 || value == 13 ? value : value - 1);
  });
  const decodedText: string = String.fromCharCode(...codesNew);
  return decodedText;
}

function decodeText(filePath: string): string {
  const rawText: string = readFile(filePath);
  const decodedText: string = changeChars(rawText);
  console.log(decodedText);
  return decodedText;
}

decodeText('files/13-encoded-lines.txt');
export{};