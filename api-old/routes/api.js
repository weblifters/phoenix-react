var express     = require('express')
  , user          = require('../controllers/user.js')
  , passport      = require('passport')
  ;

// User Routes

module.exports = function(app, passport) {
  app.get('/test', function(req, res) {
    res.send('sup!');
  });
  app.get('/user/get-user',
    isLoggedIn,
    user.getUser
  );
  app.post('/user/save-user-query',
  isLoggedIn,
  user.saveUserQuery
  );
  app.post('/user/save',
  isLoggedIn,
  user.saveUser
  );
  app.post('./signup',
  passport.authenticate('local-signup', {
    // successRedirect : '/query_page', // redirect to the secure profile section
    // failureRedirect : '/entry', // redirect back to the signup page if there is an error
    // failureFlash : true // allow flash messages
  })
  );
  app.post('/login', passport.authenticate('local-login', {
    // successRedirect : '/query_page', // redirect to the secure profile section
    // failureRedirect : '/entry', // redirect back to the signup page if there is an error
    // failureFlash : true // allow flash messages
  }));
};

function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
  return next();

  // if they aren't redirect them to the home page
  res.redirect('/entry');
}
