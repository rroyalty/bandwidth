const express = require('express');
const routes = require('./routes/');
const { sequelize } = require('./models');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3020;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(routes);

app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, async () => {
  try {
    console.log(`Server up on ${port}`)
    await sequelize.authenticate({})
    console.log('Database Connected!') 
  } catch (err) {
    'Bad promise while connecting to server!!'
  }
})
