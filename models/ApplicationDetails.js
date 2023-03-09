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
    application_login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    application_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    streaming_services_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'streamingService',
        key: 'id'
      },
    },
    in_use_by: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true 
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'applicationDetails'
  }
);

module.exports = ApplicationDetails;