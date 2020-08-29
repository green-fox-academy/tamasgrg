'use strict';

const dbQuery = require('../db');
const { query } = require('express');

class Alias {
  constructor(id, url, alias, hitCount, secretCode) {
    this.id = id;
    this.url = url;
    this.alias = alias;
    this.hitCount = hitCount;
    this.secretCode = secretCode;
  }

  static async addAlias(url, alias) {
    let getByAlias = await dbQuery('SELECT * FROM aliases WHERE alias=?', [alias]);
    if (getByAlias.length > 0) {
      return {'error': 'Your alias is already in use!'};
    } else {
      let secretCode = Math.floor(1000 + Math.random() * 9000);
      const add = (await dbQuery('INSERT INTO aliases(url, alias, secretCode) VALUES(?, ?, ?)', [url, alias, secretCode])).insertId;
      getByAlias = await dbQuery('SELECT * FROM aliases WHERE alias=?', [alias]);
      return new Alias(getByAlias[0].id, getByAlias[0].url, getByAlias[0].alias, getByAlias[0].hitCount, getByAlias[0].secretCode);
    }
  }
}

module.exports = {
  Alias,
}