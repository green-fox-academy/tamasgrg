'use strict';
var listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
var listB: string[] = listA.slice();
console.log(listA.includes('Durian'));
listB.splice(3, 1);
listA.splice(4, 0, 'Kiwifruit');
if (listA.length > listB.length){
  console.log('listA is bigger');
} else {
  console.log('listB is bigger');
}
console.log(listA.indexOf('Avocado'));
console.log(listB.indexOf('Durian'));
listB.push('Passion Fruit', 'Pomelo');
console.log(listA[2]);
// console.log(listA);
// console.log(listB);