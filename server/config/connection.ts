require('dotenv').config();

// const Sequelize = require('sequelize-typescript');
import { Sequelize } from 'sequelize-typescript'

const sequelize = () => {
  const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        repositoryMode: true,
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
        },
      });
}

export default sequelize;