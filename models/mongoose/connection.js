const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connection successful!'));

module.exports = mongoose;