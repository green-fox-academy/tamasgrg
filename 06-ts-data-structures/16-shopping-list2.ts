'use strict';
// Represent the following products with their prices
// Product	Amount
// Milk	1.07
// Rice	1.59
// Eggs	3.14
// Cheese	12.60
// Chicken Breasts	9.40
// Apples	2.31
// Tomato	2.58
// Potato	1.75
// Onion	1.10
let prices: {[key:string]: number} = {
  'Milk':	1.07,
  'Rice':	1.59,
  'Eggs':	3.14,
  'Cheese':	12.60,
  'Chicken Breasts':	9.40,
  'Apples':	2.31,
  'Tomato':	2.58,
  'Potato':	1.75,
  'Onion':	1.10
}
// Represent Bob's shopping list
// Product	Amount
// Milk	3 
// Rice	2
// Eggs	2
// Cheese	1
// Chicken Breasts	4
// Apples	1
// Tomato	2
// Potato	1
let bobList: {[key:string]: number} = {
  'Milk':	3,
  'Rice':	2,
  'Eggs':	2,
  'Cheese':	1,
  'Chicken Breasts':	4,
  'Apples':	1,
  'Tomato':	2,
  'Potato':	1
}
// Represent Alice's shopping list
// Product	Amount
// Rice	1
// Eggs	5
// Chicken Breasts	2
// Apples	1
// Tomato	10
let aliceList: {[key:string]: number} = {
  'Rice':	1,
  'Eggs':	5,
  'Chicken Breasts':	2,
  'Apples':	1,
  'Tomato':	10,
}
// Create an application which solves the following problems.
// How much does Bob pay?
function spendTotal(list: object): number {
  let sum: number = 0;
  Object.keys(list).forEach(function (value: string): void {
    sum += list[value] * prices[value];
  })
  return sum;
}
console.log('Bob pays: ' + spendTotal(bobList));
// How much does Alice pay?
console.log('Alice pays: ' + spendTotal(aliceList));
// Who buys more Rice?
//solution #1
console.log(bobList['Rice'] > aliceList['Rice'] ? 'Bob buys more Rice': 'Alice buys more Rice')
//solution #2 w/ function
function whoBuysMore(item: string): void {
  console.log(bobList[item] > aliceList[item] ? `Bob buys more ${item}`: `Alice buys more ${item}`);
}
whoBuysMore('Rice');
// Who buys more Potato?
whoBuysMore('Potato');
// Who buys more different products?
console.log(Object.values(bobList).length > Object.values(aliceList).length ?
'Bob buys more different products': 'Alice buys more different products');
// Who buys more products? (piece)
function sumProducts(list: object): number {
  let sumPieces: number = 0;
  sumPieces = Object.values(list).reduce((sum: number, num: number) => sum + num);
  return sumPieces;
}
console.log(sumProducts(bobList) > sumProducts(aliceList) ?
'Bob buys more pieces of products': 'Alice buys more pieces of products')
export{};