import * as dotenv from 'dotenv';
import sequelize from '../App/Infrastructure/Mysql/Connection';
import App from '../Http/App';

dotenv.config();

const port = process.env.PORT || 5000;
const server = App.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
