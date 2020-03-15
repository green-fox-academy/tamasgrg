'use strict';
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
Object.entries(books).forEach(([key, value]) => {
  console.log(`${value} (ISBN: ${key})`);
});
delete books['978-1-60309-444-3'];
delete books[
  Object.keys(books).find(key => books[key] === 'The Lab')
]
books['978-1-60309-450-4'] = 'They Called Us Enemy';
books['978-1-60309-453-5'] = 'Why Did We Trust Him?';
console.log(books);
if (books['478-0-61159-424-8'] != undefined){
  console.log('yay');
} else {
  console.log('nay chance');
}
console.log(books['978-1-60309-453-5']);