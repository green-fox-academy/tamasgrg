'use strict';

const express = require('express');
const controller = require('./controllers/controller');
// const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./static'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

controller.redditController(app);

app.listen(3000, () => {
  console.log("The app is listening on port 3000...");
});