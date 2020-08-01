'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('yondu endpoint ok', (t) => {
  request(app)
    .get('/yondu')
    .query({
      "distance": 2,
      "time": 2,
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      else {
        let expected = {
          "distance": 2,
          "time": 2,
          "speed": 1,
        }
        t.deepEqual(res.body, expected);
        t.end();
      }
    });
});

test('yondu endpoint zero distance', (t) => {
  request(app)
    .get('/yondu')
    .query({
      "distance": 0,
      "time": 2,
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      else {
        let expected = {
          "distance": 0,
          "time": 2,
          "speed": 0,
        }
        t.deepEqual(res.body, expected);
        t.end();
      }
    });
});

test('yondu endpoint zero time', (t) => {
  request(app)
    .get('/yondu')
    .query({
      "distance": 2,
      "time": 0,
    })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      else {
        let expected = "Please provide valid distance and speed values!";
        t.equals(res.body, expected);
        t.end();
      }
    });
});

test('yondu endpoint invalid params', (t) => {
  request(app)
    .get('/yondu')
    .query({
      "distance": -2,
      "time": 2,
    })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      else {
        let expected = "Please provide valid distance and speed values!";
        t.equals(res.body, expected);
        t.end();
      }
    });
});

test('yondu endpoint invalid params', (t) => {
  request(app)
    .get('/yondu')
    .query({
      "distance": "text",
      "time": 2,
    })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      else {
        let expected = "Please provide valid distance and speed values!";
        t.equals(res.body, expected);
        t.end();
      }
    });
});

test('yondu endpoint missing params', (t) => {
  request(app)
    .get('/yondu')
    .query({
      "distance": undefined,
      "time": 2,
    })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      else {
        let expected = "Please provide valid distance and speed values!";
        t.equals(res.body, expected);
        t.end();
      }
    });
});