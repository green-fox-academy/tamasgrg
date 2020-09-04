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

router.delete('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400);
    res.json({'Error': 'Please provide a valid number as playlist ID'});
  } else {
    Playlist.delete(id, (err, playlists) => {
      if (err) {
        console.error('Error during DB query:', err);
        return;
      }
      res.json(playlists);
    });
  }
});

module.exports = router;