const { Model, DataTypes, Sequelize } = require('sequelize');
import * as sequelize from '../config/connection';
// import sequelize from '../config/connection';
// const sequelize = require('../config/connection')
// const bcrypt = require('bcrypt')

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            required: false,
            primaryKey: false,
            autoIncrement: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "New User"
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "New"
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "User"
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // intending to look for band, members, or just looking network?
        // status was too general -- future dev may add, say, tourStatus
        intentionStatus: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // might need to be its own table - many play in 1+ bands
        bandName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        oidc: {
            type: DataTypes.STRING,
            defaultValue: Sequelize.STRING,
            required: true,
            primaryKey: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = { User }