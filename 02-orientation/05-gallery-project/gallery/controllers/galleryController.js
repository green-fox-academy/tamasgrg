'use strict';
const db = require('../db');

const galleryController = (app) => {
  
  app.get('/', (req, res) => {
    let pic = 'pic00.jpg';
    res.render('../views/home.ejs', {
      pic,
      picDb: db.picDb,
      getPicIndex,
    });
  });

  app.get('/:pic', (req, res) => {
    let pic = req.params.pic;
    res.render('../views/home.ejs', {
      pic,
      picDb: db.picDb,
      getPicIndex,
    });
  });

};

const getPicIndex = (pic) => {
  return db.picDb.findIndex(p => p.picSrc === pic);
}

module.exports = {
  galleryController,
  getPicIndex,
}