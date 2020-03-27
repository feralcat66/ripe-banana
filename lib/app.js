const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/actors', require('../Routes/actor-route'));
app.use('/api/v1/studios', require('../Routes/studio-route'));
app.use('/api/v1/reviewers', require('../Routes/reviewer-routes'));
app.use('/api/v1/reviews', require('../Routes/review-route'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
