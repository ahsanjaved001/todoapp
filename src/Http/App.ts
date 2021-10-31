// import path from 'path';
import * as express from 'express';
import * as session from 'express-session';
// import mongoDbSession from 'connect-mongodb-session')(session);
import * as cookieParser from 'cookie-parser';


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

// Used to set views and static files in public folder
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json({ limit: '10kb' }));

app.use('/api/todo', todoRouter);
app.use('/api/users', userRouter);

app.use('/google/callback', (req,res,next)=>{
    console.log(req);
    console.log('-----------------------------------------');
    res.status(200).json({
        message: "User logged in successfully!"
    });
});

app.all('*', (req, res, next) => {
    res.status(400).json({
        message: "That url is not available on server"
    });
});

export default app;