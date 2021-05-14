const express = require('express');
// const path = require("path");
const routes = require('./routes/');
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}!`));
});