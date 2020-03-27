const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  rating: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5]
  },
  company: {
    type: String,
    required: true
  },
 
});

  

module.exports = mongoose.model('Review', schema);
