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

}


module.exports = AirportController