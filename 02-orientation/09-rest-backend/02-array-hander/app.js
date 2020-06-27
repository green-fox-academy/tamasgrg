'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const PORT = 8080;
const app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

app.post('/arrays', (req, res) => {
  let action = req.body.what;
  let numbers = req.body.numbers;
  
  if (numbers.length > 0 && (action === "sum" || action === "multiply" || action === "double")) {

    if (action === "sum") {
      res.json({
        "result": numbers.reduce((n, sum) => {
          return n + sum;
        })
      });
    } else if (action === "multiply") {
      res.json({
        "result": numbers.reduce((n, sum) => {
          return n * sum;
        })
      });
    } else if (action === "double") {
      res.json({
        "result": numbers.map((n) => {
          return n * 2;
        })
      });
    }

  } else {
    res.json({
      "error": "Please provide what to do with the numbers!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});