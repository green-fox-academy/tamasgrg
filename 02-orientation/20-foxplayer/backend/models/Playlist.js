'use strict';

const db = require('../db');
const Playlist = function() {
}

Playlist.getAll = (allPlaylists) => {
  const query = `SELECT * FROM playlists`;
  db.query(query, (err, playlists) => {
    if (err) {
      console.error('Error during DB query:', err);
      return allPlaylists(err, null);
    }
    allPlaylists(null, playlists);
  });
}

Playlist.addNew = (title, allPlaylists) => {
  const insert = `INSERT INTO playlists (title) VALUES (?)`;
  const query = `SELECT * FROM foxplayer.playlists ORDER BY id DESC`;

  db.query(insert, title, (err, playlists) => {
    if (err) {
      console.error('Error during DB query:', err);
      return allPlaylists(err, null);
    }
  });

  db.query(query, (err, playlists) => {
    if (err) {
      console.error('Error during DB query:', err);
      return allPlaylists(err, null);
    }
    allPlaylists(null, playlists);
  });

}

module.exports = Playlist;