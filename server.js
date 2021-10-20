// const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
let mongoose, sequelize;

if (process.env.DATABASE_DRIVER === 'mongoose')
  mongoose = require('./models/mongoose/connection');
else
  sequelize = require('./models/mysql/connection');

//const sequelize = require('./sq_db');
const app = require('./app');

// const DB = process.env.DATABASE.replace(
//   '<password>',
//   process.env.DATABASE_PASSWORD
// );

// // sequelize.sync().then(result => {
// //   console.log('Mysql connection');
// // }).catch(err => console.log(err));

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
