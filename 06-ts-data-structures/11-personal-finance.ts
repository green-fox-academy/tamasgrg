'use strict';
// We are going to represent our expenses in a list containing integers.
// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
let expenses: number[] = [500, 1000, 1250, 175, 800, 120];
// Create an application which solves the following problems.
// How much did we spend?
// solution #1:
function spend(list){
  console.log('We spent: ' + list.reduce((a, b) => a + b, 0));
}
spend(expenses);
// solution #2:
let spent: number = 0;
expenses.forEach(function(value){
  // let sum: number = 0;
  spent += value;
});
console.log('We spent: ' + spent);
// Which was our greatest expense?
console.log('Our greatest expense was: ' + Math.max(...expenses));
// Which was our cheapest spending?
console.log('Our cheapest spending was: ' + Math.min(...expenses));
// What was the average amount of our spendings?
console.log('The average amount of our spendings was: ' + spent / expenses.length);