const express = require("express")

const router = express.Router();

const { Airplanecontroller } = require("../../controller");
const { AirplaneMiddleware } = require("../../middlewares");

// /api/v1/airplane  -- Post
router.post("/", AirplaneMiddleware.validateCreateRequest ,Airplanecontroller.createAirplane)

// /api/v1/airplane  -- get
router.get("/" ,Airplanecontroller.getAirplane)


// /api/v1/airplane/:id  -- get
router.get("/:id" ,Airplanecontroller.getAirplaneSingle)


// /api/v1/airplane/:id  -- delete
router.delete("/:id" ,Airplanecontroller.destroyAirplane)




module.exports = router
