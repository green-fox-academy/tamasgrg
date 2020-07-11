'use strict';

const db = require('../db');

const Post = function() {
}

Post.getAll = function(result) {
  const query = 'SELECT * FROM posts;';
  db.query(query, (err, posts) => {
    if (err) {
      console.error('Error during DB query:', err);
      return result(err, null);
    }
    // console.log(posts);
    result(null, posts);    
  });
}

module.exports = Post;