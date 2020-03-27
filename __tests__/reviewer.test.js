const request = require('supertest');
const app = require('../lib/app');
const { getReviewer, getReviewers } = require('../db/data-helpers');
const Review = require('../lib/models/Review');
const Reviewer = require('../lib/models/Reviewer');



describe('reviewer routes', () => {
  it('creates a reviewer', () => {
    return request(app)
      .post('/api/v1/reviewers')
      .send({
        name: 'Shrek Buscemi',
        company: 'Shitty Opinions LLC'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Shrek Buscemi',
          company: 'Shitty Opinions LLC',
          __v: 0
        });
      });
  });

  it('gets a reviewer by id', async() => {
    const reviewer = await getReviewer();
    return request(app)
      .get(`/api/v1/reviewers/${reviewer._id}`)
      .then(res => {
        expect(res.body).toEqual(reviewer);
      });
  });

  it('gets all reviewers', async() => {
    const reviewers = await getReviewers();
    return request(app)
      .get('/api/v1/reviewers')
      .then(res => {
        expect(res.body).toEqual(reviewers);
      });
  });

  it('updates a reviewer by id', async() => {
    const reviewer = await getReviewer();
    return request(app)
      .patch(`/api/v1/reviewers/${reviewer._id}`)
      .send({ company: 'Shitty Opinions LLC' })
      .then(res => {
        expect(res.body).toEqual({
          ...reviewer,
          company: 'Shitty Opinions LLC'
        });
      });
  });

  it('deletes a reviewer by id', async() => {
    const reviewer = await Reviewer.create({ name: 'Shrek Buscemi',
      company: 'Shitty Opinions LLC' });
    return request(app)
      .delete(`/api/v1/reviewers/${reviewer._id}`)
      .then(res => {
        expect(res.body).toEqual({ _id: expect.any(String), name: 'Shrek Buscemi',
          company: 'Shitty Opinions LLC', __v: 0 });
      });
  });

  it('cannot delete reviewer if reviews present', async() => {
    const reviewer = await getReviewer();
    await Review.create({ 
      reviewerId: reviewer._id, 
      rating: 5,
      review: {
        reviewText: 'this movie was shite' 
      } 
    });
    return request(app)
      .delete(`/api/v1/reviewers/${reviewer._id}`) 
      .then(res => {
        expect(res.text).toEqual('hrmph');
      });
  });
});
