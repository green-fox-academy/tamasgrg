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
      // console.log(posts);
  });
}

module.exports = {
  redditController,
}