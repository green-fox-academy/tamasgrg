'use strict';
// We are going to represent our products in a map where the keys are strings representing the product's name and
// the values are numbers representing the product's price.
// Create a map with the following key-value pairs.
// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
// : {[key: string]: number} 
let productDB2 = {
  'Eggs': 200,
  'Milk': 200,
  'Fish': 400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550
}
// Create an application which solves the following problems.
// Which products cost less than 201? (just the name)
function lessThan(object: object, price: number): void {
  console.log('Products for less than 201:');
  Object.values(object).forEach(function (value: number, index: number): void {
    if (value < price) {
      console.log(Object.keys(object)[index]);
    }
  })
};
lessThan(productDB2, 201);

// Which products cost more than 150? (name + price)
function moreThan(object: object, price: number): void {
  console.log('Products for more than 150:');
  Object.values(object).forEach(function (value: number, index: number): void {
    if (value > price) {
      console.log(`${Object.keys(object)[index]} ${value}`);
    }
  })
};
moreThan(productDB2, 150);
export{};