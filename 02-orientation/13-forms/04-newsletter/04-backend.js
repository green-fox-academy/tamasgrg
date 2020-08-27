'use strict';

const express = require('express');
const PORT = 3000;
const app = express();
// const path = require('path');

// app.use(express.static('./frontend'));
app.listen(PORT, () => console.log(`The app is listening on ${PORT}`));

app.post('/signup', (req, res) => {
  // Send back some HTML to the browser with the submitted data:
  // <h1>Thanks {username}, we will send updates to {email}</h1>
  // res.sendFile(path.resolve('./frontend/index.html'));
});