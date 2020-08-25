'use strict';

const path = require('path');

const playlistController = require('./controllers/playlistController');
const trackController = require('./controllers/trackController');

const route = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(path.resolve('./frontend/index.html'));
  });

  app.use('/playlists', playlistController);
  app.use('/playlist-tracks', trackController);
}

module.exports = {
  route,
};