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


     static async getAirplanes(){
      try {
        
        const airplanes = await airplanerespository.getAll();

        return airplanes


      } catch (error) {
         console.log("error in getAirplane");
         throw error
      }
    }

    static async getAirplaneSingle(plane_id){
      try {
        const airplane = await airplanerespository.get(plane_id)
        // if(!airplane) throw new Error()
        return  airplane
      } catch (error) {
        throw error      
      }

    }


}


module.exports = AirplaneService