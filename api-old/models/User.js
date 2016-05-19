var Mongoose = require('mongoose')
  , Schema   = Mongoose.Schema
  , bcrypt   = require('bcrypt-nodejs')
  , SALT_WORK_FACTOR = 10
  ;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    validate: [validateEmail, 'Please fill a valid email address'],
    index: {
      unique: true,
      dropDups: true
    },
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  queries: {
    type: Array,
    default: []
  }
});

function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};



UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = Mongoose.model('User', UserSchema);
