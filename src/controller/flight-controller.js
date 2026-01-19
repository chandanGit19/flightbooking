
const { FlightService}  = require("../services")
const { ErrorResponse, SuccessREsponse } = require("../utils/common")


class FlightController {

    static async createFlight(req, res){
        try {

            const flight = await FlightService.createFlight({
             flightNumber: req.body.flightNumber,
             airplaneId: req.body.airplaneId,
             departureAirportId: req.body.departureAirportId,
             arrivalAirportId: req.body.arrivalAirportId,
             arravialTime: req.body.arravialTime,
             departureTime: req.body.departureTime,
             price: req.body.price,
             boardingGate: req.body.boardingGate,
             totalSeats: req.body.totalSeats
            })

            SuccessREsponse.message = "Flight created successfully";

            SuccessREsponse.data = flight;

            res.status(200).json(SuccessREsponse)
            
        } catch (error) {
            console.log("error in the create flight controller", error);

            ErrorResponse.message = "something went wrong while creating flight";

            ErrorResponse.error = error

            res.status(500).json(ErrorResponse)
        }
    }


    static async getflights(req, res){
        try {

            console.log("++++++", req.query)
            console.log(req.query)


            const respone = await FlightService.getAllFlights(req.query)

            SuccessREsponse.message = "flight fetch successfully";

            SuccessREsponse.data = respone;


            res.status(200).json(SuccessREsponse)
        } catch (error) {
            console.log("error in the finding flight, please try some time", error);

            ErrorResponse.message = "Please try in some time";

            ErrorResponse.error = error;

            res.status(500).json(ErrorResponse)
        }
    }

    //  flight/:id
    static async getflight(req, res){
        try {
          const flight = await FlightService.getFlight(req.params.id);

          SuccessREsponse.message = "Flight data fetch successfully";

          SuccessREsponse.data = flight

          res.status(200).json(SuccessREsponse)
            
        } catch (error) {
              console.log("error in the finding flight, please try some time", error);

            ErrorResponse.message = "Please try in some time";

            ErrorResponse.error = error;

            res.status(500).json(ErrorResponse)
            
        }

    }

}



module.exports = FlightController