const { AirplaneService } = require("../services")
const { ErrorResponse, SuccessREsponse } = require("../utils/common")

class Airplanecontroller {

   static async createAirplane(req, res){
         try {
            console.log("conroller in airplane01")

            const airplane = await AirplaneService.createAiplane({modelNumber: req.body.modelNumber, capacity: req.body.capacity})
            SuccessREsponse.message = "Plane created successfully";

            SuccessREsponse.data = airplane

            res.status(200).json(SuccessREsponse)

         } catch (error) {
            ErrorResponse.message = "Something went wrong";
            ErrorResponse.error = error
            res.status(500).json(ErrorResponse)
         }
    }

}

module.exports = Airplanecontroller