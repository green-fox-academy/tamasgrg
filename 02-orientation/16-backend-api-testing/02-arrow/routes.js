'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  let distance = parseInt(req.query.distance);
  let time = parseInt(req.query.time);
  if (distance >= 0 && time > 0) {
    res.status(200);
    res.json({
      "distance": distance,
      "time": time,
      "speed": distance / time,
    });
  } else {
    res.status(400);
    res.json("Please provide valid distance and speed values!");
  }
});

module.exports = app;