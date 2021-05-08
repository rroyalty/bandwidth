const { Model, DataTypes } = require('sequelize');
import * as sequelize from '../config/connection';
class User_Contact extends Model {}

User_Contact.init(
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
      contact_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'contact',
              key: 'id'
          }
        },
      },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user_contact',
    }
  );

  module.exports = { User_Contact }