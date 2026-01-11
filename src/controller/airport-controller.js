const { AirportService } = require("../services");
const { ErrorResponse, SuccessREsponse } = require("../utils/common");



class AirportController {

    static async createAirport(req, res){
        try {
            const response = await AirportService.createAirport({name: req.body.name, code: req.body.code, address: req.body.address, cityId: req.body.cityId})
            
            console.log(response);

            SuccessREsponse.message = "Airport created successfully";

            SuccessREsponse.data = response;

        
            res.status(200).json(SuccessREsponse)

        } catch (error) {
            console.log("error in the createAirport controller", error);

            ErrorResponse.message = "Please try after some time";

            ErrorResponse.error = error

            res.status(500).json(ErrorResponse)

        }
    }


    static async getAirport(req, res){
      try { 
         
         const response = await AirportService.getAirports();

         SuccessREsponse.message = "All the airplane fetched"

         SuccessREsponse.data = response

         res.status(200).json(SuccessREsponse)

      } catch (error) {
         console.log("error in Airportcontroller");
         ErrorResponse.message ="something went wrong please try after some time"
         ErrorResponse.error = error
         res.status(500).json(ErrorResponse)
      }
    }

    /**
     *  
     * /airplane/:id
     */


    static async getAirportSingle(req, res){
      try {
         const airport_id = req.params.id

         if(!airport_id_id ){
            ErrorResponse.message = "please provide airplane Id"
            ErrorResponse.error= {
               reason: "PlaneId id is not provide"
            }
            return res.status(400).json(ErrorResponse);
         }

         const response = await AirportService.getAirport(airport_id);


         SuccessREsponse.message = "Plane details fetch successfully";
         SuccessREsponse.data = response;

         res.status(200).json(SuccessREsponse);

      } catch (error) {
         console.log("error in getAirplane");
         ErrorResponse.message ="something went wrong please try after some time"
         ErrorResponse.error = error
         res.status(error.status || 500).json(ErrorResponse)
      }
    }

   static async destroyAirport(req, res){
      try {

         const airport_id = req.params.id

         const response =  await AirportService.deleteAirport(airport_id)

         SuccessREsponse.message = "Plane deleted successfully";

         SuccessREsponse.data = response

         res.status(200).json(SuccessREsponse)
         
      } catch (error) {
         ErrorResponse.message= error.explanation ||  "Please delete after some time";
         ErrorResponse.error = error;

         res.status(error.status || 400).json(ErrorResponse)
      }
   }



}


module.exports = AirportController