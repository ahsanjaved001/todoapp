import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('todoapp', 'root', '6155276@Carbonteq', {
    dialect: 'mysql',
    host: 'localhost'
});

sequelize.sync().then(result => {
    console.log('Mysql connection successful!');
}).catch(err => console.log(err));

export default sequelize;