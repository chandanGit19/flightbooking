
const express = require("express")
const { CityController } = require("../../controller")
const route = express.Router()


route.post("/", CityController.createCity)

//   /api/v1/airport  -- post
route.post("/", CityController.getCity)


// /api/v1/airport/:id  -- get
route.get("/:id" ,CityController.getcitySingle)


// /api/v1/airport/:id  -- delete
route.delete("/:id" ,CityController.destroyCity)


module.exports = route