// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0
'use strict';
function divideBy(num: number){
  if (num === 0){
    console.log('fail');
  } else {
    console.log(10 / num);
  }
}
divideBy(0);