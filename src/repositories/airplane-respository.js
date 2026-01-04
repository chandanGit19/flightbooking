const CrudRepository = require("./curd-reposetory")
const {Airplane} = require("../models")


class AirplanesRepository extends CrudRepository {
    constructor(){
            super(Airplane)
    }
}

module.exports = AirplanesRepository