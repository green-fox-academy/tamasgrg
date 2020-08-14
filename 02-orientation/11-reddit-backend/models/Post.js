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
    result(null, posts);    
  });
}

Post.addPost = function(posts, result) {
  const insert = `INSERT INTO posts SET ?;`;
  db.query(insert, posts, (err, dbResult) => {
    if (err) {
      console.error('Error during DB query:', err);
      return result(err, null);
    }
    posts['id'] = dbResult.insertId;
    result(null, posts);
  });
}

Post.upvote = function(posts, result) {
  const upvote = `UPDATE posts SET score = score + 1 WHERE id = ?;`;
  db.query(upvote, posts, (err, dbResult) => {
    if (err) {
      console.error('Error during DB query:', err);
      return result(err, null);
    }
    result(null, posts);
  });
}

module.exports = Post;