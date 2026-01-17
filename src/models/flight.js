'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey: "airplaneId",
        onDelete: "CASCADE",
        as: "airplane-details"
      })

      this.belongsTo(models.Airport,{
        foreignKey: "departureAirportId",
        onDelete: "CASCADE",
        as: "departure-airport"
      })


      this.belongsTo(models.Airport,{
        foreignKey: "arrivalAirportId",
        onDelete: "CASCADE",
        as:"arrival-airport"
      })
    }
  }
  Flight.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departureAirportId:{
      type: DataTypes.STRING,
      allowNull: false
    },
    arravialTime:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    arrivalAirportId:{
      type: DataTypes.STRING,
      allowNull: false
    },
    departureTime:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    boardingGate:  {
      type: DataTypes.STRING,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};