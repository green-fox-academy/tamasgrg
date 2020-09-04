'use strict';

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
  multipleStatements: true,
});

conn.connect((err) => {
  if (err) {
    console.error('Unable to connect to DB:', err);
    return;
  }
  console.log('Successfully connected to DB.');
});

const dbQuery = (q, params) => {
  return new Promise((resolve, reject) => {
    conn.query(q, params, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  })
}

module.exports = dbQuery;