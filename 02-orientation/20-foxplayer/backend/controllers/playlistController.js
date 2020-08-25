'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(1);
});

router.post('/playlists', (req, res) => {
});

router.delete('/playlists', (req, res) => {
});

module.exports = router;