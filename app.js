const express = require('express');
const session = require('express-session');
const mongoDbSession = require('connect-mongodb-session')(session);

//const todoRouter = require('./routes/todoRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

const store = new mongoDbSession({
    uri: 'mongodb+srv://ahsan001:ahsan001@cluster0.s5ahb.mongodb.net/todoapp?retryWrites=true&w=majority',
    collection: 'sessions'
})

app.use(session({
    secret: 'secretKEY ',
    resave: false,
    saveUninitialized: false,
    store
  })
);
 

app.use(express.json({ limit: '10kb' }));

//app.use('/api/todo', todoRouter);
app.use('/api/users', userRouter);

module.exports = app;