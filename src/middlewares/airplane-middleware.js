class AirplaneMiddleware {

    static validateCreateRequest(req, res, next){

        if(!req.body.modelNumber){
            return res.status(400).json({
                success: false,
                message: "something went wrong while creating airplane",
                data:{},
                error: {
                    explaination: "Modal Number not found in the request"
                }
            })
        }

        next()

    }
}


module.exports = AirplaneMiddleware