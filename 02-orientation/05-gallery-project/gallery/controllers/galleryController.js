const db = require('../db');

const galleryController = (app) => {
  
  app.get('/', (req, res) => {
    let pic = 'pic00.jpg';
    res.render('../views/home.ejs', {
      pic,
      picDb: db.picDb,
      thDb: db.thDb,
    });
  });

  app.get('/:pic', (req, res) => {
    let pic = req.params.pic;
    res.render('../views/home.ejs', {
      pic,
      picDb: db.picDb,
      thDb: db.thDb,
    });
  });

};

module.exports = {
  galleryController,
}