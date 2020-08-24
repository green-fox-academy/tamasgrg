'use strict';

const db = require('../db');
const Book = function() {
}

Book.getTitles = (titles) => {
  const query = `SELECT book_name FROM book_mast`;
  db.query(query, (err, books) => {
    if (err) {
      console.error('Error during DB query:', err);
      return titles(err, null);
    }
    titles(null, books);
  });
}

Book.getData = function(filter, booklist) {
  let query = `
    SELECT book_name, aut_name, cate_descrip, pub_name, book_price
    FROM bookstore.book_mast
    JOIN author
    ON author.aut_id = book_mast.aut_id
    JOIN category
    ON category.cate_id = book_mast.cate_id
    JOIN publisher
    ON publisher.pub_id = book_mast.pub_id
  `;
  let filters = [];
  let values = [];
  
  Object.keys(filter).forEach(key => {
    switch (key) {
      case 'category':
        filters.push(`cate_descrip like ?`);
        break;
      case 'publisher':
        filters.push(`pub_name like ?`);
        break;      
      case 'plt':
        filters.push(`book_price < ?`);
        break;    
      case 'pgt':
        filters.push(`book_price > ?`);
        break;
      default:
        break;
    }
    values.push(filter[key]);
  });

  if (filter) query += ` WHERE ${filters.join(' AND ')}`;

  db.query(query, values, (err, books) => {
    if (err) {
      console.error('Error during DB query:', err);
      return booklist(err, null);
    }
    booklist(null, books);
  });
}

module.exports = Book;