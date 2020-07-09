'use strict';

const db = require('../db');

const Book = function() {

}

Book.listAll = function(booklist) {
  db.query('SELECT * FROM book_mast;', (err, konyv) => {
    if (err) {
      console.error('Error during DB query:', err);
      return booklist(err, null);
    }
    booklist(null, konyv);
  });
}

module.exports = Book;