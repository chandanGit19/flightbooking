const CrudRepository = require("./curd-reposetory")
const {Flight, Airplane, Airport} = require("../models");
const { Sequelize } = require("sequelize");


class FlightRepository extends CrudRepository {
    constructor(){
            super(Flight)
    }

    async  getAllFlights(filter, sortfilter){
         const response = await Flight.findAll({
            where:filter,
            order: sortfilter,
            include: [
                {
                    model: Airplane,
                    required: true,
                     as: "airplane-details"
                },
                {
                        model: Airport,
                        required: true,
                        as: "departure-airport",
                        on: {
                            col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=" , Sequelize.col("departure-airport.code"))
                        }
                },
                 {
                        model: Airport,
                        required: true,
                        as:"arrival-airport",
                        on: {
                            col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=" , Sequelize.col("arrival-airport.code"))
                        }
                }
            ]
            });

            return response

    }
}

module.exports = FlightRepository