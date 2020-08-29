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
    // if (url === undefined || url === '' || alias == undefined || alias === '') {
    //   return res.status(400);
    // }
    const result = await Alias.Alias.addAlias(url, alias);
    if (result.error) {
      return res.status(400).send(result);
    } else {
      res.send(result);
    }
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