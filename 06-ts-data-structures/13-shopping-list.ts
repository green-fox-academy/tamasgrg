// We are going to represent a shopping list in a list containing strings.
// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
let shoppingList: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];
// Create an application which solves the following problems.
// Do we have milk on the list?
if (shoppingList.find(element => element === 'milk')){
  console.log('We have milk on the list')
} else {
  console.log('We don\'t have milk on the list')
}
// Do we have bananas on the list?
if (shoppingList.find(element => element === 'bananas')){
  console.log('We have bananas on the list')
} else {
  console.log('We don\'t have bananas on the list')
}

// universal solution w/ function
function findElement(value, array){
if (array.find(element => element === value)){
  console.log(`We have ${value} on the list`)
} else {
  console.log(`We don\'t have ${value} on the list`)
}}
findElement('milk', shoppingList)