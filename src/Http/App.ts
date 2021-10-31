import * as express from 'express';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

import todoRouter from './Routes/TodoRoutes';
import userRouter from './Routes/UserRoutes';

const app = express();

app.use(cookieParser());

app.use(session({
    secret: 'secretKEY ',
    resave: false,
    saveUninitialized: false,
})
);

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