import { Sequelize } from 'sequelize';
import config from '../Config';

const mysql = config.mysql;

const sequelize = new Sequelize(mysql.DB, mysql.USERNAME, mysql.PASSWORD, {
    dialect: 'mysql',
    host: mysql.HOST
});

sequelize.sync().then(result => {
    console.log('Mysql connection successful!');
}).catch(err => console.log(err));

export default sequelize;