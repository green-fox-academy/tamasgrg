'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
function makingMatches(a: string[], b: string[]): string[] {
  let pairs: string [] = [];
  for (let i: number = 0; i < a.length || i < b.length; i++){
    if (a[i] != undefined){
      pairs.push(a[i]);  
    }
    if (b[i] != undefined){
      pairs.push(b[i]);
    }
  }
  return pairs;
}
console.log(makingMatches(girls, boys));
export = makingMatches;