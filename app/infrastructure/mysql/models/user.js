const Sequelize = require('sequelize');
const sequelize = require('./../connection');


const User = sequelize.define('users', {
    id: {
        type: Sequelize.CHAR,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;