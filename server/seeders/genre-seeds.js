const { Genre } = require('../models');

const genreData = [{
        name: 'Power Metal'
    },
    {
        name: 'Black Metal'
    },
    {
        name: 'Synth Pop'
    },
    {
        name: 'Blues'
    }
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;

