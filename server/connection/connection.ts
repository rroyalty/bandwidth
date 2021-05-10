require('dotenv').config();

const Sequelize = require('sequelize');


export default function () {
  const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
  
    const db = { sequelize, Sequelize };
  
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
}



// export default function () {
//   const sequelize = process.env.JAWSDB_URL
//     ? new Sequelize(process.env.JAWSDB_URL)
//     : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//         host: 'localhost',
//         dialect: 'mysql',
//         dialectOptions: {
//           decimalNumbers: true,
//         },
//       });

// }