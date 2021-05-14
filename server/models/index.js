const User = require('./User');
const Instrument  = require('./Instrument')
const Genre = require('./Genre');
const User_Instrument = require('./User_Instrument');
const User_Genre = require('./User_Genre');


// TO DO:
// 1 - Understand how to seed some sample data into mysql
// 2 - Understand how to test seeded data for expectations

    // Determine through which model as well as the foreign key
    Instrument.belongsToMany(User, {
        through: User_Instrument,
        foreignKey: 'instrument_id',
    });
    
    // Determine through which model as well as the foreign key
    User.belongsToMany(Instrument, {
        through: User_Instrument,
        foreignKey: 'user_oidc',
    });
    
    // Determine through which model as well as the foreign key
    Genre.belongsToMany(User, {
        through: User_Genre,
        foreignKey: 'genre_id',
    });
    
    // Determine through which model as well as the foreign key
    User.belongsToMany(Genre, {
        through: User_Genre,
        foreignKey: 'user_oidc',
    });



module.exports = { User, Instrument, Genre, User_Instrument, User_Genre };