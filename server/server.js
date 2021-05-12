const express = require('express');
const User = require('./models/User');
// const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
// const router = require('./routes/router');
const sequelize = require('./config/connection')

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/dist/bench-strength")));
// }

// app.use(router(db));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/bench-strength/index.html"));
// });

// GET all books
app.get('/', (req, res) => {
  // Get all books from the book table
  User.findAll().then((userData) => {
    res.json(userData);
  });
});



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}!`));
});