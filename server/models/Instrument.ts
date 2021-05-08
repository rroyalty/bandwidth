const { Model, DataTypes } = require('sequelize');
import * as sequelize from '../config/connection';
class Instrument extends Model { }

Instrument.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // instrument name ie - name: guitar 
        name: {
            type: DataTypes.STRING,
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

module.exports = { Instrument }