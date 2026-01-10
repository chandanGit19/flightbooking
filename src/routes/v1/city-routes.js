
const express = require("express")
const { CityController } = require("../../controller")
const route = express.Router()


route.post("/", CityController.createCity)



module.exports = route