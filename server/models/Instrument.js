const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Instrument extends Model { }

Instrument.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'instrument',
      }
);

module.exports = Instrument;