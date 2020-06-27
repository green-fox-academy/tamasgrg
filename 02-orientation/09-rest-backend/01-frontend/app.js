'use strict';

const path = require('path');
const express = require('express');
const PORT = 8080;
const app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = parseInt(req.query.input);
  res.json(double(input));
});

function double(num) {
  if (!num) return {"error": "Please provide an input!"};
  return {'received': num, 'result': num * 2};
}

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

app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;
  if (!appendable) res.status(404);
  res.json({"appended": `${appendable}a`});
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});