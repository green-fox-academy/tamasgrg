'use strict';

const express = require('express');
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');

app.listen(PORT, () => console.log(`The app is listening on ${PORT}`));
app.use(express.static('./'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/signup', (req, res) => {
  res.render('04-signup', {
    data: req.body,
  });
});