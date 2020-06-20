'use strict';
// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const PrintFruit = (string) => {
  console.log(string);
}

const callTimeout = (string, time) => {
  setTimeout(() => {
    PrintFruit(string);
  }, time);
}

callTimeout('apple');
callTimeout('pear', 1000);
callTimeout('melon', 3000);
callTimeout('grapes', 5000);


const printFruits = () => {
  setTimeout(() => {console.log('apple');
  }, 0);
  setTimeout(() => {console.log('pear');
  }, 1000);
  setTimeout(() => {console.log('melon');
  }, 3000);
  setTimeout(() => {console.log('grapes');
  }, 5000);
};

printFruits();