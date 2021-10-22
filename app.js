const path = require('path');
const passport = require('passport');
const express = require('express');
const session = require('express-session');
const mongoDbSession = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser');
require('./passport');


const todoRouter = require('./http/routes/todoRoutes');
const userRouter = require('./http/routes/userRoutes');
const viewRouter = require('./http/routes/viewRoutes');
const passport = require('passport');

const app = express();

app.use(cookieParser());

const store = new mongoDbSession({
    uri: 'mongodb+srv://ahsan001:ahsan001@cluster0.s5ahb.mongodb.net/todoapp?retryWrites=true&w=majority',
    collection: 'sessions'
});

app.use(session({
    secret: 'secretKEY ',
    resave: false,
    saveUninitialized: false,
    store
})
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/todo',
        failureRedirect: '/'
    }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', viewRouter);
app.use('/api/todo', todoRouter);
app.use('/api/users', userRouter);

app.all('*', (req, res, next) => {
    res.status(400).json({
        message: "That url is not available on server"
    });
});

module.exports = app;