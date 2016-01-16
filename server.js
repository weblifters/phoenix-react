var requests   = require('./api/requests.js')
  , express    = require('express')
  , bodyParser = require('body-parser')
  , passport   = require('passport')
  , LocalStrategy = require('passport-local')
  , app        = express()
  , port       = 8000
  ;

passport.use(new LocalStrategy(
  function(username, password, done) { 
    if (username === 'Ben' && password === 'asdfasdf') {
      done(null, { id: 14714, username: 'Ben Nelson'});
    }
  }
));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Content-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/get_sample_students', [bodyParser()], function(req, res) {
  requests.getSampleStudents(function(sampleStudents) {
    var formattedObj = {};
    formattedObj.students = [];
    sampleStudents.rows.forEach(function(e) {
      formattedObj.students.push({
        firstName: e[0],
        lastName: e[1],
        mailingState: e[2]
      });
    });
    res.send(formattedObj);
  });
});

app.post('/signup', function(req, res) {
  signUpUser();       
});

app.post('/sql_query', [bodyParser()],  function(req, res) {
  //Need to handle errors somehow
  requests.customSqlQuery(req.body.query, function(response) {
    res.send(response);
  });
});

app.post('/login', [bodyParser()], 
         passport.authenticate('local', { failureRedirect: '/login' }),
         function(req, res) {
           res.send({ status: 'Authenticated', token: '14714' });
         });

         var server = app.listen(port, function() {
           console.log('Phoenix listening on port:%s', port);
         });

         function signUpUser(req, res) {
         }

         function loginUser(username, password) {
           if (username === 'Ben' && password === 'asdfasdf') {
             return 'd8f-h39ihy8HN4rs@';
           }
           return 'Access Denied';
         }
