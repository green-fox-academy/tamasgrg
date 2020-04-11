'use strict';
// Strings
// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars
//  have been changed to 'y' chars.

let text: string = 'xoxo';

function changeXToY(text: string): string {
  if (text.length == 0) {
    return text;
  } else if (text.charAt(0) == 'x') {
    return 'y' + changeXToY(text.substring(1));
  } else {
    return text.charAt(0) + changeXToY(text.substring(1));
  }
}

console.log(changeXToY(text));
export{};