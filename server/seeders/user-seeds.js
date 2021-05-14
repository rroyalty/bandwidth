const { User } = require('../models');

const userData = [{
        nickName: 'FOREVER LOST',
        firstName: 'Jonnifer',
        lastName: 'Hammilton',
        image: '',
        intentionStatus: 'Looking for a Musician',
        bandName: 'Scars From Betrayal',
        oidc: '6081ae3ec9c93e006b81c8ce',
        email: 'killerclown427@gmail.com',
        phone: '9788543243',
        location: 'Salem, MA',
    },
    {
        nickName: '',
        firstName: 'Jessica',
        lastName: 'Arials',
        image: '',
        intentionStatus: 'Looking for a Band',
        bandName: 'Jessica and the Seven Blues Brothers',
        oidc: 'n3m1ujeam8qu8r44ozr5pp6u',
        email: 'arials7@hotmail.com',
        phone: '3134235626',
        location: 'Derry, NH',
    },
    {
        nickName: 'Hydrexia',
        firstName: 'Lunessa',
        lastName: 'Hydrix',
        image: '',
        intentionStatus: 'Looking to Network',
        bandName: 'Stutter',
        oidc: '9tz1py2qvkclubm4vlhofuvl',
        email: 'lunessahydrix@hydrix.com',
        phone: '6174039127',
        location: 'New Haven, CT',
    },
    {
        nickName: 'Raunchy',
        firstName: 'Randy',
        lastName: 'Rhodes',
        image: '',
        intentionStatus: 'Looking to Network',
        bandName: 'Black Sabbath',
        oidc: '9tj1x27qvkckubn5xjhofuvl',
        email: 'rrhodes@aol.com',
        phone: '6664200024',
        location: 'Dallas, TX',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

