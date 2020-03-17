// We are going to represent our products in a map where the keys are strings representing the product's name
//and the values are numbers representing the product's price.
// Create a map with the following key-value pairs.
// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
let productDatabase = {
'Eggs':	200,
'Milk':	200,
'Fish':	400,
'Apples':	150,
'Bread': 50,
'Chicken':	550
}
// Create an application which solves the following problems.
// How much is the fish?
console.log('The fish is ' + productDatabase['Fish']);
// What is the most expensive product?
let prices: number[] = Object.keys(productDatabase).map(key => productDatabase[key]);
let mostExpensive: number = Math.max(...prices);
Object.keys(productDatabase).forEach(key => {
  if (productDatabase[key] === mostExpensive){
    console.log(key + ' is the most expensive product');
  }
});
// What is the average price?
let sumPrices: number = prices.reduce((a, b) => {
  return a + b;
});
let avgPrices: number = sumPrices / prices.length;
console.log('The average price is: ' + avgPrices);
// How many products' price is below 300?
// solution #1 w/ If
let productsBelow300If: number = 0;
prices.forEach(value => {
  if (value < 300) {
    productsBelow300If++
  }
});
console.log(productsBelow300If + ' products\' price is below 300');
//solution #2 w/ ternary op
let productsBelow300: number = 0;
prices.forEach(value => value < 300 ? productsBelow300++ : productsBelow300);
console.log(productsBelow300 + ' products\' price is below 300');
//solution #3 w/ .reduce - ???

// Is there anything we can buy for exactly 125?
let productsFor125: number = 0;
prices.forEach(value => value === 125 ? productsFor125++ : productsFor125);
console.log((productsFor125 === 0) ? 'nothing to buy for 125' : `there is(/are) ${productsFor125} product(s) for 125`);
// What is the cheapest product?
let cheapest: number = Math.min(...prices);
Object.keys(productDatabase).forEach(key => {
  if (productDatabase[key] === cheapest){
    console.log(key + ' is the cheapest product');
  }
});