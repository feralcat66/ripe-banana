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
  it('creates an studio', () => {
    return request(app)
      .post('/api/v1/studios')
      .send({
        name: 'Cringy Films',
        address: [
          {
            city: 'New York',
            state: 'New York',
            country: 'USA'
          }
        ]
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Cringy Films',
          address: [
            {
              _id: expect.any(String),  
              city: 'New York',
              state: 'New York',
              country: 'USA'
            }
          ],
          __v: 0
        });
      });
  });
});
