'use strict';

const path = require('path');
const express = require('express');
const PORT = 8080;
const app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});