const CrudRepository = require("./curd-reposetory")
const {Flight} = require("../models")


class FlightRepository extends CrudRepository {
    constructor(){
            super(Flight)
    }

    async  getAllFlights(filter, sortfilter){
         const response = await Flight.findAll({
            where:filter,
            order: sortfilter
            });

            return response

    }
}

module.exports = FlightRepository