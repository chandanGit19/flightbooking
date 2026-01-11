
const express = require("express");
const { FlightController } = require("../../controller");

const route = express.Router();


route.post("/", FlightController.createFlight)



// /api/v1/flights?trips=MUM-DEl  -- get
route.get("/" , FlightController.getflights)

module.exports = route