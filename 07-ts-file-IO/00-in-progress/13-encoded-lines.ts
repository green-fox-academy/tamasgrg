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

function decodeText(filePath: string) {
  const rawText: string = readFile(filePath);
  // const textLines: string[] = rawText.split('\r');
  const codes: number[] = [];
  // textLines.forEach((value: string) => {

  // });

  for (let i = 0; i < rawText.length; i++) {
    codes.push(rawText.charCodeAt(i));
  }
  const newCodes: number[] = [];
  codes.forEach((value: number) => {
    newCodes.push(66 <= value && value <= 91 || 98 <= value && value <= 123 ? value - 1 : value);
  });
  let newText: string = String.fromCharCode(...newCodes);
  // codes.forEach((value: number) => {
  //   newText + String.fromCharCode(...codes)
  //   //   return value = value+1;
  // });
  
  console.log(newText);
  
  // const textLines: string[] = rawText.split('\r');

  // console.log(
  // rawText.split('')
  // )


  // console.log(singleChars(rawText));
  
  // return
}
// let char = 'a';
// console.log(
// char.charCodeAt(0)
// )
decodeText('files/13-encoded-lines.txt');
export{};