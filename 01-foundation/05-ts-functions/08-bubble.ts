'use strict';
//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending
function bubble(list: number[]): number[] {
  return list.sort((a, b) => a - b);
}

function advancedBubble(list: number[], boolean: boolean): number[] {
  let listSorted: number[] = list.sort((a, b) => a - b);
  if (boolean) {
    return listSorted.reverse();
  } else {
    return listSorted;
  }
}

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], false));
//  should print [34, 24, 12, 9, 5]
export{};