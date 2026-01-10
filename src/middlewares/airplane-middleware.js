const { ErrorResponse } = require("../utils/common")



class AirplaneMiddleware {

    static validateCreateRequest(req, res, next){

        if(!req.body.modelNumber){
            ErrorResponse.message = "something went wrong while creating airplane";
            ErrorResponse.error = {
                    explaination: "Modal Number not found in the request"
                }
            return res.status(400).json(ErrorResponse)
        }

        next()

    }
}


module.exports = AirplaneMiddleware