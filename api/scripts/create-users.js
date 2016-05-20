var mongoose = require('mongoose')
  , mongoUrl = require('../db/config')
  , User     = require('../models/User')
  ;

mongoose.connect(mongoUrl.url);

console.log('mongoUrl', mongoUrl);

var ben = new User({
  username: 'ben',
  password: 'ben'
});
var ryan = new User({
  username: 'ryan',
  password: 'ryan'
});

ben.save(function(err) {
  if (err) console.log(err);
  ryan.save(function(err) {
    if (err) console.log(err);
    process.exit(0);
  });
});
