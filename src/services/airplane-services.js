const {AirplanesRepository} = require("../repositories")

const airplanerespository  = new AirplanesRepository()

class AirplaneService {
    
   static async createAiplane(data){
        console.log("here in the airplaneservice")
        try {
            const airplane = await airplanerespository.create(data)
            return airplane
        } catch (error) {
          throw error   
        }
    }


}


module.exports = AirplaneService