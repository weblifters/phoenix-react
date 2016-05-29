const User   = require('../models/user');
const oracle = require('./oracle');

exports.getUser = function() {
  User.findOne({username: "sunjieming"}).exec(function(err, user){
    if(err){
      return res.send(err);
    } else {
      return res.status(200).send(user);
    }
  })
};

exports.getRecentQueries = function(req, res) {
  res.send(req.user.queries);
};

exports.saveUserQuery = function(req, res) {
  var newQuery = {
    query: req.body.query,
    date: new Date()
  };

  User.update(
    { email: req.user.email },
    { $push: { "queries": newQuery } },
    null,
    function(err, model) {
      if (err) console.log('err', err);
      oracle.customSqlQuery(req.body.query, function(response) {
        res.send(response);
      });
    }
  );
};
