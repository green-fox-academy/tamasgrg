'use strict';

const mysql = require('mysql');

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

module.exports = conn;