const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
class User_Genre extends Model {}

User_Genre.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        },
      },
      genre_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'genre',
              key: 'id'
          }
        },
      },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user_genre',
    }
  );
  module.exports = User_Genre;




// const { Model, DataTypes, Sequelize } = require('sequelize');
// import * as sequelize from '../connection/connection';
// class User_Genre extends Model {}
// import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
// import { User } from "./User";
// import { Genre } from "./Genre";

// @Table
// export class User_Genre extends Model<User_Genre> {

//   @ForeignKey(() => User)
//   @Column
//   user_id!: number;

//   @ForeignKey(() => Genre)
//   @Column
//   genre_id!: number;
// }