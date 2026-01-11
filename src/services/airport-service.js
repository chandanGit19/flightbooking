
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

    static async getAirports(){
        try {

            const airports = await airportRepository.getAll();

            return airports
            
        } catch (error) {
            console.log("error in the getting airports", error)
            
            throw error   
        }
    }

    static async getAirport(airport_id) {
        try {
          
            const airport = await airportRepository.get(airport_id)

            return airport
            
        } catch (error) {
            
            console.log("error in the getAirport", error);

            throw error

        }
    }


    static async deleteAirport(airport_id) {
        try {
            
            const response = await airportRepository.destroy(airport_id)

        } catch (error) {
            console.log("error in the deleteAirport ", error);

            throw error
        }
    }

}


module.exports = AirportService