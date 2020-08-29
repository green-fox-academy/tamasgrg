'use strict';

const Alias = require('../models/Alias');
const aliasController = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(__dirname, 'index.html');
  });

  app.post('/api/links', async (req, res) => {
    const url = req.body.url;
    const alias = req.body.alias;
    if (url === undefined || url === '' || alias == undefined || alias === '') {
      return res.status(400).send({'error': 'You need to provide valid url and alias values'});
    }
    const result = await Alias.Alias.addAlias(url, alias);
    if (result.error) {
      return res.status(400).send(result);
    } else {
      res.send(result);
    }
  });

  app.get('/api/links', async (req, res) => {
    const result = await Alias.Alias.getAll();
      res.send(result);
  });

  app.get('/a/:alias', async (req, res) => {
    const alias = req.params.alias;
    const result = await Alias.Alias.hitAlias(alias);
    if (result.error) { 
      console.log(result.error);
      return res.status(404).send(result);
    } else {
      res.send(result);
    } 
  });

  app.delete('/api/links/:id', async (req, res) => {
    const id = req.params.id;
    const code = req.body.secretCode;
    if (code === undefined || code === '') {
      res.status(404).send('You need to provide a secret code to delete a record');
    } else {
      const result = await Alias.Alias.deleteAlias(id, code);
      res.status(204).send(result);
    }
  });

}

module.exports = {
  aliasController,
};