var express   = require('express')
  , api       = express.Router()
  , user      = require('../controllers/user.js')
  ;

api.get('/test', function(req, res) {
  console.log('test');
  res.send('test worked!');
});

api.post('/user/save-user-query', user.saveUserQuery);

module.exports = api;
