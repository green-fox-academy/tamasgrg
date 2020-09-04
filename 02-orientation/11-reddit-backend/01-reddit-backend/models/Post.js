'use strict';

const dbQuery = require('../db');

const Post = function () {
}

// // #1 approach: callback (redundant sqlQuery)
// Post.getAll = function(result) {
//   const query = 'SELECT * FROM posts;';
//   dbQuery(query, (err, posts) => {
//     if (err) {
//       console.error('Error during DB query:', err);
//       return result(err, null);
//     }
//     result(null, posts);    
//   });
// }

// #2 approach: sqlQuery in db.js
Post.getAll = async function() {
  const query = 'SELECT * FROM posts;';
  let posts = await dbQuery(query);
  return posts;
}

Post.addPost = function(post, result) {
  post.timestamp = Math.floor(Date.now()/1000);
  const insert = `INSERT INTO posts SET ?;`;
  db.query(insert, post, (err, dbResult) => {
    if (err) {
      console.error('Error during DB query:', err);
      return result(err, null);
    }
    post['id'] = dbResult.insertId;
    result(null, post);
  });
}

Post.upvote = function(post, result) {
  const upvote = `UPDATE posts SET score = score + 1 WHERE id = ?`;
  db.query(upvote, post, (err, dbResult) => {
    if (err) {
      console.error('Error during DB query:', err);
      return result(err, null);
    }
    console.log(dbResult.changedRows);
    result(null, post.changedRows);
  });
}

module.exports = Post;