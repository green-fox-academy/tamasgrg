'use strict';

// const path = require('path');
const Book = require('../models/Book');

const bookController = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.get('/books', (req, res) => {
    Book.listAll((err, konyv) => {
      if (err) {
        console.error('Error during DB query:', err);
        return;
      }
      res.render('books', {
          konyv
      });
    });
  });

}

module.exports = {
  bookController,
}