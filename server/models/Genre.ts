const { Model, DataTypes } = require('sequelize');
import * as sequelize from '../config/connection';

class Genre extends Model {}

Genre.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        }, 
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'genre',
      }
);

module.exports = { Genre }