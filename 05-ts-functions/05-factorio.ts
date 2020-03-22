'use strict';
// -  Create a function called `factorio`
//    that returns it's input's factorial
let num: number = 5;
function factorio(num){
  for (let i: number = num - 1; i > 0; i--){
    num = num * i;
  }
  return num;
}
console.log(factorio(num));