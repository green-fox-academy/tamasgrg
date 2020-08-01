'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint response', (t) => {

  t.ok(

    request(app)
      .get('/groot')
      .query({ message: 'kecske' })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({
        "received": "kecske",
        "translated": "I am Groot!"
      })
      .end(function(err, res) {
        if (err) throw err;
      })
  );
  t.end();

});


test('groot endpoint no-query', (t) => {

  t.ok(

    request(app)
      .get('/groot')
      .query({ message : undefined })
      .expect(400)
      .expect('Content-Type', /json/)
      .expect({
        "error": "I am Groot!"
      })
      .end(function(err, res) {
        if (err) throw err;
      })
  );
  t.end();

});