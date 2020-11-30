// ----------------------------------------
// import node modules
// ----------------------------------------
const passport       = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

// ----------------------------------------
// import local node modules
// ----------------------------------------
const config     = require('../config/config')[process.env.NODE_ENV || 'development'];
const { ROUTES } = require('../config/ROUTES');
const User       = require('../models/user'); 


passport.serializeUser((user, done) => {
    done(null, user);
}); 
passport.deserializeUser((user, done) => {
    User.findById(user._id, (err, user) => {
        done(err, user);
    });
});


passport.use(new GoogleStrategy({
        clientID:     config.GOOGLE_OAUTH2_CLIENT_ID,
        clientSecret: config.GOOGLE_OAUTH2_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback   : true
    },
    async (request, accessToken, refreshToken, profile, done) => {
        try {
            const user = await User.findOne({ email: profile.email });
            if (user) {
                console.log(user);
                console.log('user found');
                return done(null, user);
            } else {
                const newUser = await User.create({
                    firstname:     profile.given_name, 
                    lastname:      profile.family_name,
                    email:         profile.email,
                    profilePicUrl: profile.picture,
                    verified:      profile.verified,
                });
                console.log('user created');
                return done(null, newUser);
            }
        } catch (err) {
            return done(err, null);
        }
    }
));