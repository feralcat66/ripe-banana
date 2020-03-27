const { Router } = require('express');
const Reviewer = require('../lib/models/Reviewer');
const Review = require('../lib/models/Review');

module.exports = Router()
  .post('/', (req, res, next) => {
    Reviewer
      .create(req.body)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Reviewer
      .findById(req.params.id)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Reviewer
      .find()
      .then(reviewers => res.send(reviewers))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Reviewer
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })

  .delete('/:id', async(req, res, next) => {
    const hasReviews = await Review.find({ reviewerId: req.params.id }).count();
    if(hasReviews) {
      res.send('hrmph');
    }
    else {
      Reviewer
        .findByIdAndDelete(req.params.id)
        .then(reviewer => res.send(reviewer))
        .catch(next);
    }});
