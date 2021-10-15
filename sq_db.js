const Sequelize = require('sequelize');

const sequelize = new Sequelize('todoapp', 'root', '6155276@Carbonteq', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;