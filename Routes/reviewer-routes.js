const { Router } = require('express');
const Reviewer = require('../lib/models/Reviewer');
module.exports = Router()
  .post('/', (req, res, next) => {
    Reviewer
      .create(req.body)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  });
