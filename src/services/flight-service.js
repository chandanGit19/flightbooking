
const { FlightRepository } = require("../repositories");

const flightRepository = new FlightRepository();


class FlightService {

    static async createFlight(){
        try {

            const response = await flightRepository.create(data);

            return response
            
        } catch (error) {
            console.log("error in the flight creation createFlight");

            throw error
        }
    }

}


module.exports = FlightService
