const seedUsers = require('./user-seeds');
const seedGenre = require('./genre-seeds');
const seedInstruments = require('./instrument-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedGenre();
    await seedInstruments();
    process.exit(0);
};

seedAll();