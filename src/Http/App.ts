// import path from 'path';
import * as express from 'express';
import * as session from 'express-session';
// import mongoDbSession from 'connect-mongodb-session')(session);
import * as cookieParser from 'cookie-parser';
// import passport from 'passport');
// require('./passport-setup');


import todoRouter from './Routes/TodoRoutes';
import userRouter from './Routes/UserRoutes';

const app = express();

app.use(cookieParser());

// const store = new mongoDbSession({
//     uri: 'mongodb+srv://ahsan001:ahsan001@cluster0.s5ahb.mongodb.net/todoapp?retryWrites=true&w=majority',
//     collection: 'sessions'
// });

app.use(session({
    secret: 'secretKEY ',
    resave: false,
    saveUninitialized: false,
    //store
})
);

// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/google',
//     passport.authenticate('google', {
//         scope:
//             ['profile', 'email']
//     }
//     ));

// app.get('/google/callback',
//     passport.authenticate('google', {failureRedirect: '/'}),
//     function(req, res){
//         res.redirect('/todo');
//     });


// Used to set views and static files in public folder
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({ limit: '10kb' }));

app.use('/api/todo', todoRouter);
app.use('/api/users', userRouter);

app.all('*', (req, res, next) => {
    res.status(400).json({
        message: "That url is not available on server"
    });
});

export default app;