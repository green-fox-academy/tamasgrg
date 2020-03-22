'use strict';
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
function printParams(...input: any){
  console.log(input);
}
printParams(1, 'KP', 5+6, 'Sarihaver', true, 5);