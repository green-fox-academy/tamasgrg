'use strict';

const express = require('express');
const app = express();
const db = require('./db');
const Ship = require('./models/Ship');

app.get('/rocket', (req, res) => {
  res.json(db);
});

app.get('/rocket/fill', (req, res) => {
  let queryString = req.query;
  res.json(Ship.fillShip(queryString));
  // let caliber = parseInt(req.query.caliber);
  // let amount = parseInt(req.query.amount);
  // res.json({
  //   "received": ".50",
  //   "amount": 5000,
  //   "shipstatus": "40%",
  //   "ready": false,
  // })
});

module.exports = app;