const express = require("express")

const router = express.Router();

const { Airplanecontroller } = require("../../controller")

// /api/v1/airplane
router.post("/", Airplanecontroller.createAirplane)


module.exports = router