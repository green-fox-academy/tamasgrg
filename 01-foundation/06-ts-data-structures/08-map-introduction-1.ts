'use strict';
// We are going to play with maps. Feel free to use the built-in methods where possible.
// Create an empty map where the keys are integers and the values are characters
let myMap = {};
type myMap = {
  key: number
  value: string
};
console.log(myMap);
// Print out whether the map is empty or not
if (Object.keys(myMap).length == 0) {
  console.log('empty');
}
// Add the following key-value pairs to the map
// Key	Value
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
myMap = {
  97: 'a',
  98: 'b',
  99: 'c',
  65: 'A',
  66: 'B',
  67: 'C',
};
console.log(myMap);
// Print all the keys
console.log(Object.keys(myMap));
// Print all the values
console.log(Object.values(myMap));
// Add value D with the key 68
myMap[68] = 'D';
// Print how many key-value pairs are in the map
console.log(Object.entries(myMap).length);
// Print the value that is associated with key 99
console.log(myMap[99]);
// Remove the key-value pair where with key 97
delete myMap[97];
// Print whether there is an associated value with key 100 or not
if (myMap[100] === undefined) {
  console.log('nay chance');  
} else {
  console.log(myMap[100]);  
};
// Remove all the key-value pairs
myMap = {};
export{};