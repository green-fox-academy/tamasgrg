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

  static async getByAlias(alias) {
    return await dbQuery('SELECT * FROM aliases WHERE alias=?', [alias]);
  }

  static async getAll() {
    let allRecords = await dbQuery('SELECT * FROM aliases');
    return allRecords.map(r => new Alias(r.id, r.url, r.alias, r.hitCount));
  }

  static async addAlias(url, alias) {
    let record = await Alias.getByAlias(alias);
    if (record.length > 0) {
      return {'error': 'Your alias is already in use!'};
    } else {
      let secretCode = Math.floor(1000 + Math.random() * 9000);
      const add = (await dbQuery('INSERT INTO aliases(url, alias, secretCode) VALUES(?, ?, ?)', [url, alias, secretCode])).insertId;
      let newRecord = await Alias.getByAlias(alias);
      return new Alias(newRecord[0].id, newRecord[0].url, newRecord[0].alias, newRecord[0].hitCount, newRecord[0].secretCode);
    }
  }

  static async hitAlias(alias) {
    let record = await Alias.getByAlias(alias);
    console.log(record);
    if (record.length > 0) {
      const increment = await dbQuery(`UPDATE aliases SET hitCount = hitCount + 1 WHERE alias = ?`, [alias]);
      return record[0];
    } else {
      return {'error': 'This alias is not in the database'};
    }
  }

  static async deleteAlias(id, code) {
    let record = await dbQuery('SELECT * FROM aliases WHERE id=?', [id]);
    if (record.length < 1) {
      return {'error': 'The given ID is not in the database'};
    } else if (record[0].secretCode !== code) {
      return {'error': 'The secret code is wrong'};
    } else {
      const del = await dbQuery('DELETE FROM aliases WHERE id = ?', [id]);
      return record[0];
    }
  }

}

module.exports = {
  Alias,
}