'use strict';
// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
let numbers: number [] = [3, 4, 5, 6, 7];
// -  Reverse the order of the elements in `numbers`
// 	   -  do it with the built in method
console.log(numbers.reverse());
//	   -  do it with creating a new temp array and a loop
let numbers2: number [] = [3, 4, 5, 6, 7];
let revNumbers2: number [] = new Array(numbers2.length);
for (let i: number = 0; i < numbers2.length; i++) {
  revNumbers2[i] = numbers2[numbers2.length - 1 - i];
};
// -  Print the elements of the reversed `numbers`
console.log(revNumbers2);

export{};