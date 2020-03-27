require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app'); 
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
// const Actor = require('../lib/models/Actor');
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
  it('creates an actor', () => {
    return request(app)
      .post('/api/v1/actors')
      .send({
        name: 'Shrek Buscemi',
        dateOfBirth: '01/28/1420',
        placeOfBirth: 'The depths of the Buscemi family swamp'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Shrek Buscemi',
          dateOfBirth: '01/28/1420',
          placeOfBirth: 'The depths of the Buscemi family swamp',
          __v: 0
        });
      });
  });
});
