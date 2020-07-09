'use strict';

const db = require('../db');

const Book = function() {
}

Book.getTitles = function(booklist) {
  db.query('SELECT book_name FROM book_mast;', (err, books) => {
    if (err) {
      console.error('Error during DB query:', err);
      return booklist(err, null);
    }
    booklist(null, books);
  });
}

module.exports = Book;