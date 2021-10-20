const Sequelize = require('sequelize');
const sequelize = require('../../sq_db');
const uuid = require('uuid');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.CHAR,
        defaultValue: uuid.v4(),
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