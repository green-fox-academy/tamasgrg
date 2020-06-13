'use strict'
const express = require('express');
const controller = require('./controllers/galleryController');
const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('./static'));

controller.galleryController(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});