

const { Airport } = require("../models");
const CrudRepository = require("./curd-reposetory");


class AirportRepositroy extends CrudRepository {
    constructor(){
        super(Airport)
    }
}

module.exports = AirportRepositroy