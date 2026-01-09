const { AirplanesRepository } = require("../repositories");
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


    static async getAirplane(req, res){
      try { 
         
         const response = await AirplaneService.getAirplanes();

         SuccessREsponse.message = "All the airplane fetched"

         SuccessREsponse.data = response

         res.status(200).json(SuccessREsponse)

      } catch (error) {
         console.log("error in getAirplane");
         ErrorResponse.message ="something went wrong please try after some time"
         ErrorResponse.error = error
         res.status(500).json(ErrorResponse)
      }
    }

    /**
     *  
     * /airplane/:id
     */


    static async getAirplaneSingle(req, res){
      try {
         const plane_id = req.params.id

         if(!plane_id ){
            ErrorResponse.message = "please provide airplane Id"
            ErrorResponse.error= {
               reason: "PlaneId id is not provide"
            }
            return res.status(400).json(ErrorResponse);
         }

         const response = await AirplaneService.getAirplaneSingle(plane_id);


         SuccessREsponse.message = "Plane details fetch successfully";
         SuccessREsponse.data = response;

         res.status(200).json(SuccessREsponse);

      } catch (error) {
         console.log("error in getAirplane");
         ErrorResponse.message ="something went wrong please try after some time"
         ErrorResponse.error = error
         res.status(500).json(ErrorResponse)
      }
    }

}

module.exports = Airplanecontroller