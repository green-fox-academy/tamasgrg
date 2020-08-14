'use strict';

const Post = require("../models/Post");
// const path = require('path');

const redditController = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.get('/posts', (req, res) => {
    Post.getAll((err, posts) => {
      res.status(200);
      res.json({"posts": posts});
    });
  });

  app.post('/posts', (req, res) => {
    Post.addPost(req.body, (err, posts) => {
      res.status(200);
      res.json(posts);
    });
  });

  app.put('/posts/:id/upvote', (req, res) => {
    Post.upvote(req.params.id, (err, posts) => {
      res.status(200);
      res.json(posts);
    });
  });


}

module.exports = {
  redditController,
}