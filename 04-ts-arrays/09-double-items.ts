'use strict';
// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

// long:
function double() {
  return drinks.map(function(item,index) {
    item = [item + item].join("");
    return item;
  });
}
console.log(double());

// short:
let doubleDrinks = drinks.map(function(item){
  return item + item;
  });
  console.log(doubleDrinks);

//shorter:
console.log(drinks.map((item) => {
  return item + item;
}));

export{};