const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AmazonPrime extends Model {}

AmazonPrime.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    login_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
    modelName: 'AmazonPrime',
  }
);

module.exports = AmazonPrime;