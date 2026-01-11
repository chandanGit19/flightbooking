const CrudRepository = require("./curd-reposetory")
const {Flight} = require("../models")


class FlightRepository extends CrudRepository {
    constructor(){
            super(Flight)
    }
}

module.exports = FlightRepository