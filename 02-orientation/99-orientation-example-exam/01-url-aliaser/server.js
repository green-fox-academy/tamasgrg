'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/aliasController');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
controller.aliasController(app);

app.listen(PORT, () => console.log(`The app is listening on ${PORT}`));