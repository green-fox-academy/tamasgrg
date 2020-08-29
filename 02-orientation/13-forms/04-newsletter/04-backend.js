'use strict';

const express = require('express');
const PORT = 3000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer  = require('multer');
const forms = multer();

app.listen(PORT, () => console.log(`The app is listening on ${PORT}`));
app.use(express.static('./'));
app.use(cors());
app.use(forms.array()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/signup', (req, res) => {
  console.log(req.body);

  res.sendFile(__dirname + '/04-signup.html');
});


