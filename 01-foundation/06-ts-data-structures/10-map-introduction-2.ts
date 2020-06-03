'use strict';
// Create a map where the keys are strings and the values are strings with the following initial values
// Key	Value
// 978-1-60309-452-8	A Letter to Jo
// 978-1-60309-459-7	Lupus
// 978-1-60309-444-3	Red Panda and Moon Bear
// 978-1-60309-461-0	The Lab
let books = {};
type books = {
    key: string
    value: string
  };
books = {
  '978-1-60309-452-8':	'A Letter to Jo',
  '978-1-60309-459-7':	'Lupus',
  '978-1-60309-444-3':	'Red Panda and Moon Bear',
  '978-1-60309-461-0':	'The Lab'
}
// Print all the key-value pairs in the following format
// A Letter to Jo (ISBN: 978-1-60309-452-8)
// Lupus (ISBN: 978-1-60309-459-7)
// Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
// The Lab (ISBN: 978-1-60309-461-0)
Object.entries(books).forEach(([key, value]) => {
  console.log(`${value} (ISBN: ${key})`);
});
// Remove the key-value pair with key 978-1-60309-444-3
delete books['978-1-60309-444-3'];
// Remove the key-value pair with value The Lab
delete books[
  Object.keys(books).find(key => books[key] === 'The Lab')
];
// Add the following key-value pairs to the map
// Key	Value
// 978-1-60309-450-4	They Called Us Enemy
// 978-1-60309-453-5	Why Did We Trust Him?
books['978-1-60309-450-4'] = 'They Called Us Enemy';
books['978-1-60309-453-5'] = 'Why Did We Trust Him?';
console.log(books);
// Print whether there is an associated value with key 478-0-61159-424-8 or not
if (books['478-0-61159-424-8'] != undefined) {
  console.log('yay');
} else {
  console.log('nay chance');
}
// Print the value associated with key 978-1-60309-453-5
console.log(books['978-1-60309-453-5']);
export{};