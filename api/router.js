const Authentication  = require('./controllers/authentication');
const User            = require('./controllers/user');
const passportService = require('./services/passport');
const passport        = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'super secret code' });
  });
  app.post('/signin',
    requireSignin,
    Authentication.signin
  );
  app.post('/signup',
    Authentication.signup
  );
  app.get('/user/recent-queries',
    requireAuth,
    User.getRecentQueries
  );
  app.post('/user/save-user-query',
    requireAuth,
    User.saveUserQuery
  );
};
