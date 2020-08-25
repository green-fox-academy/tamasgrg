'use strict';

const mysql = require('mysql');

const conn = mysql.createConnection({
  host     : 'localhost',
  database : 'foxplayer',
  user     : 'root',
  password : 'password',
  port     : 3306,
  multipleStatements: true,
});

conn.connect((err) => {  
  if (err) {
    console.error('Unable to connect to DB:', err);
    return;
  }
  console.log('Successfully connected to DB.');
});

module.exports = conn;