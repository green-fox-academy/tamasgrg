'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

app.use(bodyParser.json());

//needs further features according to specification + clean code

app.post('/sith', (req, res) => {
  if (req.body.text < 1) {
    res.json({"error": "Feed me some text you have to, padawan young you are. Hmmm."});
  }
  let reqSentence = req.body.text.split('. ');
  let resArray = [];
  reqSentence.forEach(sentence => {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i += 2) {
      [words[i], words[i + 1]] = [words[i + 1], words[i]];
    }
    sentence = words.join(' ').toLowerCase() + '. ';
    const RndYodaWords = ['Arrgh', 'Uhmm', 'Err..err.err.'];
    let RndNum = Math.floor(Math.random() * RndYodaWords.length)
    resArray.push(sentence + RndYodaWords[RndNum]);
  });
  let response = resArray.join('. ');
  console.log(response);
  res.json({"sith_text": response});
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});