const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    console.log(user);
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "624266625695-6hotv38ddh3vuj08h2ejrqi9sj22gujl.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));