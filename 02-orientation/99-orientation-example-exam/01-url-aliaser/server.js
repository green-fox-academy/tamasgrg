'use strict';

const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const controller = require('./controllers/aliasController');

const PORT = process.env.PORT || 3000;
const app = express();
// const path = require('path');
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '../frontend/view'));

app.use(express.static('./static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
controller.aliasController(app);
// app.use(cors());
app.listen(PORT, () => console.log(`The app is listening on ${PORT}`));