const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ApplicationDetails extends Model {}

ApplicationDetails.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    Streaming_services_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "StreamingServices",
        key: "id"
      }
    },
    In_use_by: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ApplicationDetails',
  }
);

module.exports = ApplicationDetails;