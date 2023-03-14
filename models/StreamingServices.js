const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const colored = require('colored');

class StreamingServices extends Model {}

StreamingServices.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    stream_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'streamingService'
  }
);

console.log(colored('StreamingServices model loaded', 'green'));

module.exports = StreamingServices;