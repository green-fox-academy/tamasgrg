'use strict';
// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
var listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
// Create a new list ('List B') with the values of List A
var listB: string[] = listA.slice();
// Print out whether List A contains Durian or not
console.log(listA.includes('Durian'));
// Remove Durian from List B
listB.splice(3, 1);
// Add Kiwifruit to List A after the 4th element
listA.splice(4, 0, 'Kiwifruit');
// Compare the size of List A and List B
if (listA.length > listB.length){
  console.log('listA is bigger');
} else {
  console.log('listB is bigger');
}
// Get the index of Avocado from List A
console.log(listA.indexOf('Avocado'));
// Get the index of Durian from List B
console.log(listB.indexOf('Durian'));
// Add Passion Fruit and Pomelo to List B in a single statement
listB.push('Passion Fruit', 'Pomelo');
// Print out the 3rd element from List A
console.log(listA[2]);
// console.log(listA);
// console.log(listB);
export{};