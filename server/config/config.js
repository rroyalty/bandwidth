require("dotenv").config();

module.exports = {
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PW,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    // "port": process.env.PORT,
    "dialect": "mysql",
    "define": {
      "timestamps": false
    }
  }
}