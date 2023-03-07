const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StreamingServices extends Model {}

Streaming_services.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      types: DataTypes.STRING (10),
      allowNull: false
    },
    application_details_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'applicationDetails',
        key: 'id',
      },
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Streaming_services',
  }
);

module.exports = StreamingServices;