const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  city: {
      type: String,
      required: true
  },
  state: {
    type: String,
    required: true
  },
country: {
    type: String,
    required: true
}
});

const schema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    address: [ingredientSchema],
  });
  

module.exports = mongoose.model('Studio', schema);
