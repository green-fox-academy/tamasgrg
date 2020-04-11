'use strict';
// Strings again and again
// Given a string, compute recursively a new string where all the adjacent
//  chars are now separated by a *
let text: string = 'xoxo';

function separateStar(text: string): string {
  if (text.length == 0) {
    return text;
  } else {
    return text.charAt(0) + '*' + separateStar(text.substring(1));
  }
}

console.log(separateStar(text));
export{};