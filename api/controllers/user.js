const User = require('../models/user');

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

exports.saveUserQuery = function() {
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
    }
  );
};
