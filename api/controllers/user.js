var User     = require('../models/User.js')
  , Mongoose = require('mongoose')
  , requests = require('../requests.js')
  ;

module.exports = {

  getUser: function (req, res) {
    console.log('GET USER!');
    User.findOne({_id: "573f20fd1c8751c0522153c1"}).exec(function(err, user){
      console.log('USER', err, user);
      if(err){
        return res.send(err);
      } else {
        return res.status(200).send(user);
      }
    })
  },
  saveUserQuery: function(req, res) {
    var newQuery = {
      query: req.body.query,
      date: new Date()
    };

    console.log('newQuery', newQuery);
    User.findByIdAndUpdate(
      '573f20fd1c8751c0522153c1',
      { $push: { "queries": newQuery  } },
      null,
      function(err, model) {
        if (err) console.log('err', err);
        requests.customSqlQuery(req.body.query, function(response) {
          res.send(response);
        });
    });
  }

};
