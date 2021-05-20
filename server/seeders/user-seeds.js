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
        blurb: "Forever Lost - looking for the one to find me"
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
        blurb: "My name is Jess, I am looking for a seventh Blue's Brother to play some sweet sweet tunes"
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
        blurb: "Hydrexia looking to Stu-Stu-Stutter with yah!"
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
        blurb: "Raunchy Randy looking to network!"
    },
    {
        nickName: 'King',
        firstName: 'Ryan',
        lastName: 'Royalty',
        image: '',
        intentionStatus: 'Looking to Network',
        bandName: 'Some Elvis PUn',
        oidc: '6081ae3ec9c93e006b81c8cd',
        email: 'bandname@email.com',
        phone: '6664200024',
        location: 'Revere, MA',
        blurb: "I make rockin' Elvis covers"
    },
    {
        nickName: 'Bjorn',
        firstName: 'Bjorn',
        lastName: 'Yourney',
        image: '',
        intentionStatus: 'Looking to Network',
        bandName: 'Bjorn to Rock',
        oidc: '6051ae3ec9c93e006b81c8ce',
        email: 'bjorntorock@email.com',
        phone: '6664200024',
        location: 'Concord, NH',
        blurb: "My name is Bjorn, and I was BORN TO ROCK. Looking for others to Jam with!"
    },
    {
        nickName: 'Cathy',
        firstName: 'Cathy',
        lastName: 'Marchese',
        image: '',
        intentionStatus: 'Looking to Network',
        bandName: 'Cat Clawin',
        oidc: '9tj1x67qvkckubn5xjhofuvl',
        email: 'catclawin@email.com',
        phone: '6664200024',
        location: 'Boston, MA',
        blurb: "Looking for someone to puuuuurrrr with"
    },
    {
        nickName: 'The PUNisher',
        firstName: 'Jonathan',
        lastName: 'Hammond',
        image: '',
        intentionStatus: 'Looking to Network',
        bandName: 'The PUNisher',
        oidc: '9t11x27qvkckubn5xjhofuvl',
        email: 'thepunisher@email.com',
        phone: '6664200024',
        location: 'Boston, MA',
        blurb: "I need a pun for my blurb"
    },
    {
        nickName: 'TPows',
        firstName: 'Toni',
        lastName: 'Powell',
        image: '',
        intentionStatus: 'Looking to Network',
        bandName: 'The Breakdown Baes',
        oidc: '9tj1x27qvkckubn7xjhofuvl',
        email: 'breakdowns@email.com',
        phone: '6664200024',
        location: 'Boston, MA',
        blurb: "I play a mean double bass... and like 3 chords on guitar. "
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

