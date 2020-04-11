'use strict';
// Strings again
// Given a string, compute recursively a new string where all the 'x' chars have been removed.
let text: string = 'xoxo';

function removeX(text: string): string {
  if (text.length == 0) {
    return text;
  } else if (text.charAt(0) == 'x') {
    return removeX(text.substring(1));
  } else {
    return text.charAt(0) + removeX(text.substring(1));
  }
}

console.log(removeX(text));
export{};