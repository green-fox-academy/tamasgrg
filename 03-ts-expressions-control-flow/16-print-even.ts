'use strict';
// Create a program that prints all the even numbers between 0 and 500
for (let i = 2; i < 500; i += 2) {
  console.log(i);
}

// solution #2:
for (let i = 2; i < 500; i++) {
  if (i % 2 == 0) {
  console.log(i);
  }
}