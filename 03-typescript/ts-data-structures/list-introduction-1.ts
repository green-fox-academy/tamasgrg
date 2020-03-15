'use strict';
let list: string [] = [];
list.push('William');
console.log(list.length);
console.log(list);
if (list.length === 0){
  console.log('empty');
} else {
    console.log('not empty');
};
list.push('John');
list.push('Amanda ');
console.log(list.length);
console.log(list[2]);
list.forEach(function(value){
  console.log(value);
});
list.forEach(function(value, index){
  console.log(index + 1 + ".", value);
});
list.splice(1, 1);
console.log(list);
list.reverse().forEach(function(value){
  console.log(value);
});
list.splice(0, 2);
console.log(list);