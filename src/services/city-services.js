
const { CityRepository} = require("../repositories");


const cityRepository = new CityRepository()


class CityService {

    static async createCityService(data){
        try {

            const response =  await cityRepository.create(data)

            return response
            
        } catch (error) {
            console.log("error in the createCityservice")
            throw error
        }
    }


     static async getcities(){
        try {

            const airports = await cityRepository.getAll();

            return airports
            
        } catch (error) {
            console.log("error in the getting airports", error)
            
            throw error   
        }
    }

    static async getCity(airport_id) {
        try {
          
            const airport = await cityRepository.get(airport_id)

            return airport
            
        } catch (error) {
            
            console.log("error in the getAirport", error);

            throw error

        }
    }


    static async deleteCity(airport_id) {
        try {
            
            const response = await cityRepository.destroy(airport_id)

        } catch (error) {
            console.log("error in the deleteAirport ", error);

            throw error
        }
    }

}

module.exports = CityService