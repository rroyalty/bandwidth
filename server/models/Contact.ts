const { Model, DataTypes, Sequelize } = require('sequelize');
import * as sequelize from '../config/connection';

class Contact extends Model { }

Contact.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'contact'
    }
);


module.exports = { Contact }