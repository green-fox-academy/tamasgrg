'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/view'));

app.use(express.static('./frontend'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

app.use(cors());
// controller.trackController(app);
router.route(app);

app.listen(PORT, () => console.log(`The app is listening on ${PORT}`));