// const { Model, DataTypes } = require('sequelize');
// import * as sequelize from '../connection/connection';

// class Genre extends Model {}

// Genre.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name: {
//             type: DataTypes.STRING,
//         }, 
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'genre',
//       }
// );

// module.exports = { Genre }
// const { Model, DataTypes } = require('sequelize');
// import * as sequelize from '../config/connection';

import { Sequelize, Table, Column, Model, HasMany, DataType, IsUUID, PrimaryKey, BelongsToMany } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { User } from './User';
import { User_Genre } from './User_Genre'

import sequelize from '../config/connection'

@Table({
    timestamps: true,
    paranoid: true,
    modelName: 'Genre',
    underscored: true,
    tableName: 'genre',
})
export class Genre extends Model<Genre> {
    @IsUUID(4)
    @PrimaryKey
    @Column
    id!: string;

    @Column
    name!: string;

    @BelongsToMany(() => User, () => User_Genre)
    users?: User[];
}


// Genre.init(
//     {
//         id: {
//             type: DataType.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name: {
//             type: DataType.STRING,
//         }, 
//     },
//     {
//         connection,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'genre',
//       }
// );

// module.exports = { Genre }
