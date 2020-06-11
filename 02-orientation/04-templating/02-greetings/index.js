'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

// When a user visits our /?name={name} route, greet them on their name.
app.get('/', (req, res) => {
    res.render('home', {
      name: req.query.name,
    });
  });
  
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});