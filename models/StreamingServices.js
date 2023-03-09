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
<<<<<<< HEAD
      type: DataTypes.STRING,
=======

      type: DataTypes.STRING,


>>>>>>> 097894bd3d9e8c8c734309c57ee13a7ed57142ff
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'streamingService'
=======

    modelName: 'streamingService'

>>>>>>> 097894bd3d9e8c8c734309c57ee13a7ed57142ff
  }
);

module.exports = StreamingServices;