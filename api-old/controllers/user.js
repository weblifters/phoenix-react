var User     = require('../models/User.js')
  , requests = require('../requests.js')
  ;

module.exports = {

  saveUser: function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err) {
      if (err) {
        console.log('err', err);
        return res.send(err.errmsg);
      } else {
        res.send('user successfully created');
      }
    });
  },
  getUser: function (req, res) {
    User.findOne({username: "sunjieming"}).exec(function(err, user){
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

    User.update(
      { username: req.body.username },
      { $push: { "queries": newQuery } },
      null,
      function(err, model) {
        if (err) console.log('err', err);
        requests.customSqlQuery(req.body.query, function(response) {
          res.send(response);
        });
      });
    }

  };
