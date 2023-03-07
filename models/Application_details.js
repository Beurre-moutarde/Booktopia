const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Application_details extends Model {}

Application_details.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Application_login: {
      type: DataTypes.STRING (200),
      allowNull: false,
    },
    Application_password: {
        type: DataTypes.STRING (200),
        allowNull: false,
      },
    description: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Application_details',
  }
);

module.exports = Application_details;