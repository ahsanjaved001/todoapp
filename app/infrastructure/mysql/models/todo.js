const Sequelize = require('sequelize');
const sequelize = require('./../connection');

const Todo = sequelize.define('todos', {
    id: {
        type: Sequelize.CHAR,
        allowNull: false,
        primaryKey: true
    },
    userID: {
        type: Sequelize.CHAR,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    } 
});

module.exports = Todo;