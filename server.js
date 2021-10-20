const dotenv = require('dotenv').config();
let mongoose, sequelize;

if (process.env.DATABASE_DRIVER === 'mongoose')
  mongoose = require('./models/mongoose/connection');
else
  sequelize = require('./models/mysql/connection');

const app = require('./app');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
