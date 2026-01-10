const { city } = require("../models");
const CrudRepository = require("./curd-reposetory");


class CityRepository extends CrudRepository {
    constructor(){
        super(city)
    }
}


module.exports = CityRepository