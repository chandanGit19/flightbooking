const express = require("express")

const router = express.Router();

const { Airplanecontroller } = require("../../controller");
const { AirplaneMiddleware } = require("../../middlewares");

// /api/v1/airplane
router.post("/", AirplaneMiddleware.validateCreateRequest ,Airplanecontroller.createAirplane)


module.exports = router