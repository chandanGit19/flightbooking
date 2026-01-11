const { CityService } = require("../services");
const { ErrorResponse, SuccessREsponse } = require("../utils/common");


class CityController{

    static async createCity(req, res){
        try {
          const response = await CityService.createCityService({name: req.body.name})
          SuccessREsponse.message = "City created successfully";
          SuccessREsponse.data = response
          res.status(200).json(SuccessREsponse)
        } catch (error) {
            console.log("error in the createCity");
            ErrorResponse.message = error?.explanation || "Please try after sometime"
            ErrorResponse.error = error
            res.status(error.status || 500).json(ErrorResponse)
        }
    }


    
    static async getCity(req, res){
      try { 
         
         const response = await CityService.getCity();

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


    static async getcitySingle(req, res){
      try {
         const city_id = req.params.id

         if(!city_id ){
            ErrorResponse.message = "please provide airplane Id"
            ErrorResponse.error= {
               reason: "PlaneId id is not provide"
            }
            return res.status(400).json(ErrorResponse);
         }

         const response = await CityService.getCity(city_id);


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

   static async destroyCity(req, res){
      try {

         const city_id = req.params.id

         const response =  await CityService.deleteCity(airport_id)

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


module.exports = CityController