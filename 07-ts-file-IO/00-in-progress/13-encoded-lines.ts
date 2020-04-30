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
  

  let codes: number[] = [];
  for (let i = 0; i < rawText.length; i++) {
    codes.push(rawText.charCodeAt(i)-1);
  }
  let newText: string = String.fromCharCode(...codes);
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