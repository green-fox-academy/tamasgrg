'use strict';

const Alias = require('../models/Alias');
// const path = require('path');
const aliasController = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(__dirname, 'index.html');
  });

  app.post('/api/links', async (req, res) => {
    const url = req.body.url;
    const alias = req.body.alias;
    if (url === undefined || url === '' || alias == undefined || alias === '') {
      return res.send(400);
    }
    const result = await Alias.Alias.addAlias(url, alias);
    // console.log(result);
    res.send(result);
    // console.log(req.body);
  });

  app.get('a/', (req, res) => {

  });

  app.get('api/links', (req, res) => {

  });

  app.delete('api/links/', (req, res) => {

  });

}

module.exports = {
  aliasController,
};