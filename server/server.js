const express = require('express')
const routes = require('./routes/');
const { sequelize } = require('./models')

const app = express()
const PORT = process.env.PORT || 3020;
//const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(`${PORT}`, async () => {
    console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})
