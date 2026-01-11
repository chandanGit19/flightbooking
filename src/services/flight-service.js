
const { FlightRepository } = require("../repositories");

const flightRepository = new FlightRepository();


class FlightService {

    static async createFlight(data){
        try {

            const response = await flightRepository.create(data);

            return response
            
        } catch (error) {
            console.log("error in the flight creation createFlight");

            throw error
        }
    }

    static async getAllFlights(query){
        
        let customfilter ={}

        console.log("---=", query)

        if(query.trips) {
             const [departureAirportId, arrivalAirportId] = query.trips.split("-")
             customfilter.departureAirportId = departureAirportId;
             customfilter.arrivalAirportId = arrivalAirportId
       }
          try {
            
          const flights = await flightRepository.getAllFlights(customfilter);

          return flights

          } catch (error) {
            console.log("error in the finding flight", error)

            throw error
          }    


    }

}


module.exports = FlightService
