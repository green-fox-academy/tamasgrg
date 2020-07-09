'use strict';

const express = require('express');
// const controller = require('./controllers/beerController');
// const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./static'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// controller.beerController(app);

const mysql = require('mysql');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/books', (req, res) => {
  conn.query('SELECT * FROM book_mast;', (err, konyv) => {
    // console.log('Data received from Db:\n');
    if (err) {
      console.error('Error during DB query:', err);
      return;
    }
    res.render('books', {
    konyv
    });
    console.log(konyv);
  });
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
});

conn.connect((err) => {
  if (err) {
    console.error('Unable to connect to DB:', err);
    return;
  }
  console.log('Successfully connected to DB.');
});

app.listen(3000, () => {
  console.log("The app is listening on port 3000...");
});