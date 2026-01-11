
const express = require("express");
const { AirportController } = require("../../controller");


const route = express.Router()

//   /api/v1/airport  -- post
route.post("/", AirportController.createAirport)


route.get("/" ,AirportController.getAirport)


// /api/v1/airport/:id  -- get
route.get("/:id" ,AirportController.getAirportSingle)


// /api/v1/airport/:id  -- delete
route.delete("/:id" ,AirportController.destroyAirport)


module.exports = route