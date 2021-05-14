const { Instrument } = require('../models');

const instrumentData = [{
        name: 'Guitar'
    },
    {
        name: 'Drums'
    },
    {
        name: 'Vocals'
    },
    {
        name: 'Piano'
    }
];

const seedInstruments = () => Instrument.bulkCreate(instrumentData);

module.exports = seedInstruments;

