const { Model, DataTypes, Sequelize } = require('sequelize');
import * as sequelize from '../config/connection';
class User_Instrument extends Model {}

User_Instrument.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.STRING,
        references: {
            model: 'user',
            key: 'id'
        },
      },
      instrument_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'instrument',
              key: 'id'
          }
        },
      },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user_instrument',
    }
  );

  module.exports = { User_Instrument }