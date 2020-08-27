'use strict';

const express = require('express');
const router = express.Router();
const Playlist = require('../models/Playlist');

router.get('/', (req, res) => {
  Playlist.getAll((err, playlists) => {
    if (err) {
      console.error('Error during DB query:', err);
      return;
    }
    res.json(playlists);
  });
});

router.post('/', (req, res) => {
  let newTitle = req.body.title;
  Playlist.addNew(newTitle, (err, playlists) => {
    if (err) {
      console.error('Error during DB query:', err);
      return;
    }
    res.json(playlists);
  });
});

router.delete('/playlists', (req, res) => {
});

module.exports = router;