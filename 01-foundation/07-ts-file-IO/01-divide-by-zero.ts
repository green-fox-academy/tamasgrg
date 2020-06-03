'use strict';
// Create a function that takes a number
// divides ten with it, and prints the result.
// It should print 'fail' if the parameter is 0
function divideBy(num: number): void {
  if (num === 0) {
    console.log('fail');
  } else {
    console.log(10 / num);
  }
}
divideBy(0);
export{};