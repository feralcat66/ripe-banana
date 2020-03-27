const mongoose = require('mongoose');
const Studio = require('../models/Studio');
const Actor = require('../models/Actor');

const schema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  studio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Studio',
    required: true
  },
  released: {
    type: Number,
    minlength: 4,
    maxlength: 4,
    required: true
  },
  cast: [{
    role: String,
    actor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Actor',
      required: true
    }
  }]
});

  

module.exports = mongoose.model('Actor', schema);
