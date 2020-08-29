'use strict';

const path = require('path');

// const playlistController = require('./controllers/playlistController');
// const trackController = require('./controllers/trackController');

const route = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(__dirname, 'index.html');
  });

  app.post('/api/links', (req, res) => {
    console.log(req.body);

  });

  // app.use('/playlists', playlistController);
  // app.use('/playlist-tracks', trackController);
}

module.exports = {
  route,
};