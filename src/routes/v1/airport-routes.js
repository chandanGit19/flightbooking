
const express = require("express");
const { AirportController } = require("../../controller");


const route = express.Router()

//   /api/v1/airport  -- post
route.post("/", AirportController.createAirport)



module.exports = route