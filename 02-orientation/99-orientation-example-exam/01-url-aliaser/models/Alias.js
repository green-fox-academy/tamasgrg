'use strict';

const dbQuery = require('../db');

class Alias {
  constructor(id, url, alias, hitCount, secretCode) {
    this.id = id;
    this.url = url;
    this.alias = alias;
    this.hitCount = hitCount;
    this.secretCode = secretCode;
  }

  static async addAlias(url, alias) {
    let secretCode = Math.floor(1000 + Math.random() * 9000);
    const add = (await dbQuery('INSERT INTO aliases(url, alias, secretCode) VALUES(?, ?, ?)', [url, alias, secretCode])).insertId;
    const result = await dbQuery('SELECT * FROM aliases WHERE url=?', [url]);
    return new Alias(result[0].id, result[0].url, result[0].alias, result[0].hitCount, result[0].secretCode);
  }
}

module.exports = {
  Alias,
}