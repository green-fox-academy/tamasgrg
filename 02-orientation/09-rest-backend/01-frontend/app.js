'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const PORT = 8080;
const app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//doubling
  app.get('/doubling', (req, res) => {
  let input = parseInt(req.query.input);
  res.json(double(input));
});

function double(num) {
  if (!num) return {"error": "Please provide an input!"};
  return {'received': num, 'result': num * 2};
}

//greeter
app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (!name && !title) {
    res.status(400);
    res.json({"error": "Please provide a name and a title!"});
  } else if (!name) {
    res.status(400);
    res.json({"error": "Please provide a name!"});
  } else if (!title) {
    res.status(400);
    res.json({"error": "Please provide a title!"});
  } else {
    res.json({"welcome_message": `Oh, hi there ${name}, my dear ${title}!`});
  }
});

//append-a
app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;
  // if (!appendable) res.status(404);
  res.json({"appended": `${appendable}a`});
});

//do-until
app.post('/dountil/:action', (req, res) => {
  let action = req.params.action;
  let num = parseInt(req.body.until);
  
  if (!num) {
    res.json({"error": "Please provide a number!"});
  } else if (action == 'sum') {
    res.json({"result": sum(num)});
  } else if (action == 'factor') {
    res.json({"result": factorio(num)});
  }
});

function sum(num) {
  for (let i = num - 1; i > 0; i--) {
    num += i;
  }
  return num;
}

function factorio(num) {
  for (let i = num - 1; i > 0; i--) {
    num = num * i;
  }
  return num;
}

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});