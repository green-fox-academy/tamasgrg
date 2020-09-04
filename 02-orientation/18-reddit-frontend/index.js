'use strict';

const express = require('express');
const PORT = 3000;
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('./static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// app.get('/', (req, res) => {
//   res.render('home.ejs');
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});