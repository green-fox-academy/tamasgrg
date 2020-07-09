'use strict';

// const path = require('path');
const Book = require('../models/Book');

const bookController = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.get('/books', (req, res) => {
    Book.getData((err, books) => {
      if (err) {
        console.error('Error during DB query:', err);
        return;
      }
      res.render('books', {
          books
      });
    });
  });

}

module.exports = {
  bookController,
}