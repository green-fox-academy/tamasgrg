// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"
'use strict';
const fs = require('fs');
let myName = 'Gorog Tamas';

function writeFile(filePath: string, fileContent: string) {
  try {
    fs.writeFileSync(filePath, fileContent);
  } catch (e) {
    console.log('Unable to write file: my-file.txt');
  }
}

writeFile('my-file.txt', myName);
export{};