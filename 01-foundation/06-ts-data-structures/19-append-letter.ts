'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(list: string[]) {
  let newList: string[] = [];
  list.forEach(function(value: string) {
    newList.push(value + 'a');
  })
  return newList;
}

console.log(appendA(far));
// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
export = appendA;