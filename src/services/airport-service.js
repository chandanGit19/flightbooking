
const { AirportRepositroy } = require("../repositories")


const airportRepository = new AirportRepositroy()

class AirportService {

    static async createAirport(data){
            try {
                const response = await airportRepository.create(data);
             
                return response
                
            } catch (error) {
                console.log("error in the create Airport repository", error);

                throw error
                
            }            
    }

}


module.exports = AirportService