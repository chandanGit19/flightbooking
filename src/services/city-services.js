
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

}

module.exports = CityService