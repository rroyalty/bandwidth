const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
// import sequelize from '../config/connection';
// const sequelize = require('../config/connection')
const bcrypt = require('bcrypt');


class User extends Model { }

// Need to make oidc Primary Key and test delete
// Need to re-seed as well
User.init(
    {
        // Manually define the primary key
        // This might not be necessary with oidc
        // id: {
        //     type: DataTypes.INTEGER,
        //     required: false,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        nickName: {
            type: DataTypes.STRING,
            allowNull: true,
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
            allowNull: true,
            defaultValue: "Available"
        },
        // might need to be its own table - many play in 1+ bands
        bandName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // technically this is the sub key
        oidc: {
            type: DataTypes.STRING,
            defaultValue: Sequelize.STRING,
            // required: true,
            primaryKey: true,
            unique: true
        },
        // after showing Contact model to Ryan, opted to just keep on User model for now.
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
            validate: {
                isEmail: true,
              },
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
        },
        blurb: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
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
module.exports = User;























// import * as sequelize from '../config/connection';
// // const { Model, DataType, Sequelize } = require('sequelize');
// // import sequelize from '../config/connection';
// // const sequelize = require('../config/connection')
// const bcrypt = require('bcrypt')

// // import {Table, Column, Model, HasMany, DataType } from 'sequelize-typescript'
// // const { Sequelize } = require('sequelize/types')
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


// // 'use strict';
// // const { Model, DataTypes, Sequelize } = require('sequelize');
// // import * as sequelize from '../connection/connection';
// // import sequelize from '../config/connection';
// // const sequelize = require('../config/connection')
// // const bcrypt = require('bcrypt')

// import { Sequelize, Table, Column, Model, HasMany, DataType, IsUUID, PrimaryKey, BelongsToMany } from 'sequelize-typescript';
// import { Optional } from 'sequelize';
// import { Genre } from './Genre';
// import { User_Genre } from './User_Genre'

// import sequelize from '../config/connection'

// @Table({
//     timestamps: true,
//     paranoid: true,
//     modelName: 'User',
//     underscored: true,
//     tableName: 'user',
// })
// export class User extends Model<User> {
//     @IsUUID(4)
//     @PrimaryKey
//     @Column
//     id!: string;

//     @Column
//     name!: string;

//     @BelongsToMany(() => Genre, () => User_Genre)
//     genres?: Genre[];
// }



