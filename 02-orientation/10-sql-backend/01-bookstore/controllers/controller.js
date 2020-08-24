'use strict';

const Book = require('../models/Book');

const bookController = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.get('/titles', (req, res) => {
    Book.getTitles((err, books) => {
      if (err) {
        console.error('Error during DB query:', err);
        return;
      }
      res.render('titles', {
          books,
      });
    });
  });

  app.get('/books', (req, res) => {
    let filter = req.query;
    Book.getData(filter, (err, books) => {
      if (err) {
        console.error('Error during DB query:', err);
        return;
      }
      res.render('all-data', {
          books,
      });
    });
  });

}

module.exports = {
  bookController,
}