const mongoose = require('mongoose');
// const csv = require('csvtojson');



const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date
  },
  rating: {
    type: Number
  },
  genres: {
    type: [String]
  },
  tagline: {
    type: String
  },
  overview: {
    type: String
  }
});
module.exports = mongoose.model('Deck', schema);
