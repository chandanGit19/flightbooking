
const { Op } = require("sequelize");
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

        let sortFilter = {}

        console.log("---=", query)

        if(query.trips) {
             const [departureAirportId, arrivalAirportId] = query.trips.split("-")
             if(departureAirportId && arrivalAirportId && departureAirportId !== arrivalAirportId){
                 customfilter.departureAirportId = departureAirportId;
                 customfilter.arrivalAirportId = arrivalAirportId
                }
            }
       
            if(query.price) {
                const [minPrice, maxPrice] = query.price.split("-")
                customfilter.price = {
                    [Op.between] : [minPrice, (maxPrice == undefined) ? 50000 : maxPrice]
                }
            }

            if(query.travellers) {
                customfilter.totalSeats = {
                    [Op.gte] : query.travellers
                }
            }

            if(query.tripDate) {
                customfilter.departureTime = {
                    // [Op.eq] : query.tripDate
                    // [Op.gte] : query.tripDate
                    [Op.between] : [query.tripDate, query.tripDate + " 23:59:00"]

                      
                }
            }

            if(query.sort) {
                let params = query.sort.split(",")

                const sortFilters = params?.map((param)=> param.split("_"))

                sortFilter = sortFilters

            }

          try {
            
            console.log("this is the sorting filter ", sortFilter)
            
          const flights = await flightRepository.getAllFlights(customfilter, sortFilter);

          return flights

          } catch (error) {
            console.log("error in the finding flight", error)

            throw error
          }    


    }

}


module.exports = FlightService
