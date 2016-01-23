var User     = require('../models/User.js')
  , Query    = require('../models/Query.js')
  , Mongoose = require('mongoose')
  , requests = require('../requests.js')
  ;

module.exports = {
  saveUserQuery: function(req, res) {
    console.log('saveUserQuery', req.body);
    var newQuery = new Query({
      query: req.body.query,
      date: new Date()
    });
    
    User.findByIdAndUpdate(
      req.body.userid, 
      { $push: { "queries": newQuery  } }, 
      null, 
      function(err, model) {
        if (err) console.log('err', err);
        console.log('updated model');      
        requests.customSqlQuery(req.body.query, function(response) {
          res.send(response);
        });
    });
  } 
};
