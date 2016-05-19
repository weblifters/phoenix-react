var requests      = require('./api/requests.js')
  , express       = require('express')
  , bodyParser    = require('body-parser')
  , passport      = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , Mongoose      = require('mongoose')
  , mongoUrl      = require('./api/db/config.js')
  , User          = require('./api/models/User')
  , morgan        = require('morgan')
  , cookieParser  = require('cookie-parser')
  , session       = require('express-session')
  , flash         = require('connect-flash')
  , port          = process.env.PORT || 8000
  , app           = express()
  ;

Mongoose.connect(mongoUrl.url);
require('./api/config/passport')(passport);
app.use(morgan('dev'));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({ secret: 'phoenix-from-the-ashes' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Content-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

// app.use('/api', require('./api/routes/api'));

require('./api/routes/api')(app, passport);

app.listen(port);


// passport.use(new LocalStrategy({
//     usernameField: 'email'
//   },
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// app.use(passport.initialize());
// app.use(passport.session());






// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true }),
//   function(req, res) {
//
// });


//leftoff: setup authentication for each route -- need to test and setup react-router and a submission form

// app.post('/sql_query', function(req, res) {
//   requests.customSqlQuery(req.body.query, function(response) {
//     res.send(response);
//   });
// });

// app.post('/login', [bodyParser()],
//          passport.authenticate('local', { failureRedirect: '/login' }),
//          function(req, res) {
//            res.send({ status: 'Authenticated', token: '14714' });
//          });
//
//          var server = app.listen(port, function() {
//            console.log('Phoenix listening on port:%s', port);
//          });
//
//          function signUpUser(req, res) {
//          }
//
//          function loginUser(username, password) {
//            if (username === 'Ben' && password === 'asdfasdf') {
//              return 'd8f-h39ihy8HN4rs@';
//            }
//            return 'Access Denied';
//          }
