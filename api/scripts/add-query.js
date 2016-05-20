var mongoose = require('mongoose')
  , mongoUrl = require('../db/config')
  , User     = require('../models/User')
  ;

mongoose.connect(mongoUrl.url);


var newQuery = {
  query: 'SELECT FIRST_NAME, LAST_NAME, MAILING_STATE FROM STUDENTS',
  date: new Date()
};

User.findByIdAndUpdate(
  '573f20fd1c8751c0522153c1',
  { $push: { "queries": newQuery  } },
  {safe: true, upsert: true, new : true},
  function(err, model) {
    if (err) console.log('err', err);
    console.log('model', model);
    process.exit(0);
});
