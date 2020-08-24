'use strict';

const express = require('express');
const controller = require('./controllers/controller');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./static'));
controller.bookController(app);

app.listen(3000, () => {
  console.log("The app is listening on port 3000...");
});