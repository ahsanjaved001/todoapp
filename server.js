const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const dbS = require('./models');

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

dbS.sequelize.sync().then(() => {
  console.log('Sequelize connected successfully');
})

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
