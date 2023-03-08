const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StreamingServices extends Model {}

StreamingServices.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING (100),
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'StreamingServices',
  }
);

module.exports = StreamingServices;