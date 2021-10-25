const dotenv = require('dotenv').config();

const sequelize = require('./../app/infrastructure/mysql/connection');

const app = require('./../http/app');

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
