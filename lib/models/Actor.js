const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
  },
  placeOfBirth: {
    type: String,
  }
});

  

module.exports = mongoose.model('Actor', schema);
