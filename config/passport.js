var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
const localOptions = { usernameField: 'email', passwordField: 'password' };  // This is telling Passport that when it wants to have access to the username, it needs to look at the 'email' property of the request
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {

  // Verify this username and password, call done with the user, if it is the correct username/password.
  // Otherwise call done with false

  console.log(`email: ${email}`);
  console.log(`password: ${password}`);
  console.log(`done: ${done}`);

  // When a user tries to sign in this code runs
  db.Users.findOne({
    where: { email: email }
  }).then(function (dbUser) {
    // If there's no user with the given email

console.log('dbUser.dataValues');
console.log(dbUser.dataValues);

    if (!dbUser) {
      return done(null, false, { message: "Incorrect email." });
    }
    // If there is a user with the given email, but the password the user gives us is incorrect
    else if (!dbUser.validPassword(password)) {
      return done(null, false, { message: "Incorrect password." });
    }
    // If none of the above, return the user
    return done(null, dbUser, JSON.stringify(dbUser.dataValues) );
  });
})

passport.use(localLogin);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
