var mongoose = require('mongoose');
var mongoUrl = require('../db/config');

mongoose.connect(mongoUrl.url);

var TestSchema = new mongoose.Schema({
  "Hello": { type: String }
});

mongoose.model('Test', TestSchema);

var Test = mongoose.model('Test');

var test = new Test({
  "Hello": "World3!!!"
});

test.save(function(err){
  if (err) console.log(err);
  console.log('success!');
  process.exit(0);
});
