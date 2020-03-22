'use strict';
// Swap the values of these variables
let a: number = 123;
let b: number = 526;

// solution #1
let temp: number = a;
a = b;
b = temp;
console.log(a);
console.log(b);

// soultion #2 - shortcut
[a,b] = [b,a];
console.log(a);
console.log(b);
export{};