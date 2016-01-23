var Mongoose = require('mongoose')
  , Schema   = Mongoose.Schema
  ;

var Query = new Schema({
  query: {
    type: String
  },
  date: {
    type: Date
  }
});

module.exports = Mongoose.model('Query', Query);
