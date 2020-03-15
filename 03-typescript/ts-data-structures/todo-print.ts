'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let todoText: string = ' - Buy milk\n';

let headText: string = 'My todo:\n';
let todoText2: string = ' - Download games\n';
let todoText3: string = '\t- Diablo';
let fullText: string = headText.concat(todoText, todoText2, todoText3);
todoText = fullText;
console.log(todoText);