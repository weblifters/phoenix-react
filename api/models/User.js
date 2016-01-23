var Mongoose = require('mongoose')
  , Schema   = Mongoose.Schema
  , Query    = require('./Query.js')
  ;

var User = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  queries: {
    type: Array,
    default: []
  } 
});

module.exports = Mongoose.model('User', User);
