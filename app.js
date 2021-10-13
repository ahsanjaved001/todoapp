const express = require('express');

//const todoRouter = require('./routes/todoRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//app.use('/api/todo', todoRouter);
app.use('/api/users', userRouter);

module.exports = app;