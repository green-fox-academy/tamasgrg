'use strict';
let myMap = {};
type myMap = {
  key: number
  value: string
};
console.log(myMap);
if (Object.keys(myMap).length == 0){
  console.log('empty');
}
myMap = {
  97: 'a',
  98: 'b',
  99: 'c',
  65: 'A',
  66: 'B',
  67: 'C',
};
console.log(myMap);
console.log(Object.keys(myMap));
console.log(Object.values(myMap));
myMap[68] = 'D';
console.log(Object.entries(myMap).length);
console.log(myMap[99]);
delete myMap[97];
if (myMap[100] === undefined) {
  console.log('nay chance');  
} else {
  console.log(myMap[100]);  
};
myMap = {};