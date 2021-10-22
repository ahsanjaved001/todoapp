const passport = require('passport');
'https://www.youtube.com/watch?v=o9e3ex-axzA';
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: "624266625695-6hotv38ddh3vuj08h2ejrqi9sj22gujl.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));