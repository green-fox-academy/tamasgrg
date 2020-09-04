'use strict';

const Post = require("../models/Post");
// const path = require('path');

const redditController = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  // // #1 approach: callback (redundant sqlQuerry)

  // app.get('/posts', (req, res) => {
  //   Post.getAll((err, posts) => {
  //     if (err) return res.json(err);
  //     res.status(200);
  //     res.json({"posts": posts});
  //   });
  // });
  
  // #2 approach sqlQuery in db.js - async-await try-catch

  // app.get('/posts', async (req, res) => {
  //   try {
  //     const result = await Post.getAll();
  //     return res.status(200).json(result);
  //   } catch(err) {
  //     return res.json(err);
  //   }
  // });

  // #3 approach: promise/then
  
  app.get('/posts', (req, res) => {
    Post.getAll()
      .then(response => res.status(200).json(response))
      .catch(err => res.json(err));
  });

  app.post('/posts', (req, res) => {
    Post.addPost(req.body, (err, post) => {
      res.status(200);
      res.json(post);
    });
  });

  app.put('/posts/:id/upvote', (req, res) => {
    Post.upvote(req.params.id, (err, post) => {
      res.status(200);
      res.json(posts);
    });
  });

}

module.exports = {
  redditController,
}