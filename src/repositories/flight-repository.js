const CrudRepository = require("./curd-reposetory")
const {Flight, Airplane, Airport, city} = require("../models");
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
                        },
                        include:{
                                model: city
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


     async updateRemaningSeats(flight_id, seats, dec= true ) {
       
        console.log("+_+_+_+_+_", flight_id, seats, dec)

        const flight = await Flight.findByPk(flight_id);

        try {
                if (parseInt(dec)) {
                       await flight.decrement("totalSeats",{by: seats})

                } else {
                      await  flight.increment("totalSeats",{by: seats})
                }

                flight.save()

                return flight


        } catch (error) {
                console.log("error in the updateRemanigseat")
                throw error
        }

    }


}

module.exports = FlightRepository