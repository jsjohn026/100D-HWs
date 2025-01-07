const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function(passport) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, 
  async (accessToken, refreshToken, profile, done) => {
    const newUser = {
      googleId: profile.id,
      displayName: profile.displayName, 
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      image: profile.photos[0].value
    }

    try {
      let user = await User.findOne({ googleId: profile.id })

      if (user) {
        done(null,user)
      } else {
        user = await User.create(newUser)
        done(null, user)
      }
    }catch (err) {
      console.error(err)
    }
  }
))

  // From the documentation:
  // passport.serializeUser((user, done) => 
    //   process.nextTick(function() {
  //     return done(null, user.id);
  //   })
  // );
  
  passport.serializeUser((user, done) => done(null, user.id))
  
  // From the documentation:
  // passport.deserializeUser((id, done) => {
  //   db.get('SELECT * FROM users WHERE id = ?', [ id ], function(err, user) {
  //     if (err) { return done(err); }
  //     return done(null, user);
  //   });
  // });

  passport.deserializeUser(async(id, done) => {
    // Find the user by Id and pass it to the 'done' callback
    User.findById(id)
      .then(user => done(null, user))
      .catch(err => done(err, null))
  })
  
}