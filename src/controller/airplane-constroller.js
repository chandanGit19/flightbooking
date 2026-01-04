const { AirplaneService } = require("../services")

class Airplanecontroller {

   static async createAirplane(req, res){
         try {
            console.log("conroller in airplane01")

            const airplane = await AirplaneService.createAiplane({modelNumber: req.body.modelNumber, capacity: req.body.capacity})
            
            res.status(200).json({
                success: true,
                message: "Plane create successfully",
                data: airplane,
                error: {}
            })

         } catch (error) {
            res.status(500).json({
                success: false,
                message: "somethign went wrong",
                data:{},
                error:error
            })
         }
    }

}

module.exports = Airplanecontroller