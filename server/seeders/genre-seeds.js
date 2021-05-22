const { Genre } = require('../models');

const genreData = [{
        name: 'Power Metal',
        // oidc: 1
    },
    {
        name: 'Black Metal',
        // oidc: 2
    },
    {
        name: 'Synth Pop',
        // oidc: 3
    },
    {
        name: 'Blues',
        // oidc: 4
    }
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;

