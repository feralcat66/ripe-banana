const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  rating: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5]
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reviewer',
    required: true
  },
  review: {
    type: String,
    max: 140
  },
  film: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Film'
  }
 
});

  

module.exports = mongoose.model('Review', schema);
