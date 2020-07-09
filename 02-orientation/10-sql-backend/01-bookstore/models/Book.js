'use strict';

const db = require('../db');

const Book = function() {
}

Book.getData = function(booklist) {

  const query = `
    SELECT book_name, aut_name, cate_descrip, pub_name, book_price
    FROM bookstore.book_mast
    JOIN author
    ON author.aut_id = book_mast.aut_id
    JOIN category
    ON category.cate_id = book_mast.cate_id
    JOIN publisher
    ON publisher.pub_id = book_mast.pub_id
  `;

  db.query(query, (err, books) => {
    if (err) {
      console.error('Error during DB query:', err);
      return booklist(err, null);
    }
    booklist(null, books);
  });
}

module.exports = Book;