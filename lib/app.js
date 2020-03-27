const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/studios', require('../Routes/studios'));
app.use('/api/v1/reviewers', require('../Routes/reviewers'));
app.use('/api/v1/reviews', require('../Routes/reviews'));
app.use('/api/v1/actors', require('../Routes/actors'));
app.use('/api/v1/films', require('../Routes/films'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
