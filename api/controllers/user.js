var User     = require('../models/User.js')
  , Query    = require('../models/Query.js')
  , Mongoose = require('mongoose')
  , requests = require('../requests.js')
  ;

module.exports = {

  getUser: function (req, res) {
    User.findOne({_id: "56a3db668b69b8f197165da7"}).exec(function(err, user){
      if(err){
        return res.send(err);
      } else {
        return res.status(200).send(user);
      }
    })
  },
  saveUserQuery: function(req, res) {
    //console.log('saveUserQuery', req.body);
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
        //console.log('updated model');      
        requests.customSqlQuery(req.body.query, function(response) {
          res.send(response);
        });
    });
  } 

};
