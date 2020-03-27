require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app'); 
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  afterAll(() => {
    return mongoose.connection.close();
  });
  it('creates a reviewer', () => {
    return request(app)
      .post('/api/v1/reviewers')
      .send({
        name: 'Shrekly Boi',
        company: 'Opinions That Nobody Cares About LLC'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Shrekly Boi',
          company: 'Opinions That Nobody Cares About LLC',
          __v: 0
        });
      });
  });
});
