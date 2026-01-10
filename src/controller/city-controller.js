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

}


module.exports = CityController