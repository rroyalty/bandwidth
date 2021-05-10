
import { Sequelize, Table, Column, Model, HasMany, DataType, IsUUID, PrimaryKey, BelongsToMany } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Genre } from './Genre';
import { User_Genre } from './User_Genre'

import sequelize from '../config/connection'

@Table({
    timestamps: true,
    paranoid: true,
    modelName: 'User',
    underscored: true,
    tableName: 'user',
})
export class User extends Model<User> {
    @IsUUID(4)
    @PrimaryKey
    @Column
    id!: string;

    @Column
    name!: string;

    @BelongsToMany(() => Genre, () => User_Genre)
    genres?: Genre[];
}



// // import * as sequelize from '../config/connection';
// // const { Model, DataType, Sequelize } = require('sequelize');
// // import sequelize from '../config/connection';
// // const sequelize = require('../config/connection')
// // const bcrypt = require('bcrypt')

// import {Table, Column, Model, HasMany, DataType } from 'sequelize-typescript'
// const { Sequelize } = require('sequelize/types')
// // const sequelize = require('../config/connection')

// class User extends Model { }

// User.init(
//     {
//         id: {
//             type: DataType.STRING,
//             defaultValue: Sequelize.UUIDV4,
//             required: false,
//             primaryKey: false,
//             autoIncrement: true
//         },
//         displayName: {
//             type: DataType.STRING,
//             allowNull: false,
//             defaultValue: "New User"
//         },
//         firstName: {
//             type: DataType.STRING,
//             allowNull: false,
//             defaultValue: "New"
//         },
//         lastName: {
//             type: DataType.STRING,
//             allowNull: false,
//             defaultValue: "User"
//         },
//         image: {
//             type: DataType.STRING,
//             allowNull: true,
//         },
//         // intending to look for band, members, or just looking network?
//         // status was too general -- future dev may add, say, tourStatus
//         intentionStatus: {
//             type: DataType.STRING,
//             allowNull: false,
//         },
//         // might need to be its own table - many play in 1+ bands
//         bandName: {
//             type: DataType.STRING,
//             allowNull: true,
//         },
//         oidc: {
//             type: DataType.STRING,
//             defaultValue: Sequelize.STRING,
//             required: true,
//             primaryKey: true,
//         },
//         // after showing Contact model to Ryan, opted to just keep on User model for now.
//         email: {
//             type: DataType.STRING,
//             allowNull: true,
//             unique: false,
//         },
//         phone: {
//             type: DataType.STRING,
//             allowNull: true,
//             unique: false,
//         },
//         location: {
//             type: DataType.STRING,
//             allowNull: true,
//             unique: false,
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'user'
//     }
// );


// module.exports = { User }