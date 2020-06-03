'use strict';
// We are going to play with lists. Feel free to use the built-in methods where possible.
// Create an empty list which will contain names (strings)
let list: string [] = [];
// Print out the number of elements in the list
console.log(list.length);
// Add William to the list
list.push('William');
console.log(list);
// Print out whether the list is empty or not
if (list.length === 0) {
  console.log('empty');
} else {
    console.log('not empty');
};
// Add John to the list
list.push('John');
// Add Amanda to the list
list.push('Amanda ');
// Print out the number of elements in the list
console.log(list.length);
// Print out the 3rd element
console.log(list[2]);
// Iterate through the list and print out each name
// William
// John
// Amanda
list.forEach(function(value: string): void {
  console.log(value);
});
// Iterate through the list and print
// 1. William
// 2. John
// 3. Amanda
list.forEach(function(value: string, index: number): void {
  console.log(index + 1 + ".", value);
});
// Remove the 2nd element
list.splice(1, 1);
console.log(list);
// Iterate through the list in a reversed order and print out each name
// Amanda
// William
list.reverse().forEach(function(value: string): void {
  console.log(value);
});
// Remove all elements
list.splice(0, 2);
console.log(list);
export{};