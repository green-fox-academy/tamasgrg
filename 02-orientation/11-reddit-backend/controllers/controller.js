'use strict';

const db = require('../db');

// const path = require('path');
// const Book = require('../models/Book');

const redditController = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.get('/posts', (req, res) => {
    const query = 'SELECT * FROM posts';
    db.query(query, (err, posts) => {
      if (err) {
        console.error('Error during DB query:', err);
        return;
      }
      console.log(posts);
      res.status(200);
      res.json({"posts": posts});
      return posts;
    });
  });

}

module.exports = {
  redditController,
}