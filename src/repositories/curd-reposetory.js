const {logger} = require("../config")
class CrudRepository {
        constructor(model){
                this.model = model
            }

    async create(data){
        try {
            
            logger.info("data is created")
            console.log("data -------", data)
            return await this.model.create(data)
        } catch (error) {
            logger.error("something went wrong in the crud repositorty")
            console.log("err0r", error)
            throw error
        }    
    }


    async destroy(data){
        try {
            
            const response = await this.model.destroy({
                where:{
                    id: data
                }
            })

            return response

        } catch (error) {
            logger.error("something went wrong in the destroy repositorty")
            throw error
        }
    }


    async get(data){
        try {
            const response = await this.model.findByPk(data)
            return response
            
        } catch (error) {
            logger.error("something went wrong in the get repositorty")
            throw error
        }
    }

     async getAll(){
        try {
            const response = await this.model.findAll()
            return response
            
        } catch (error) {
            logger.error("something went wrong in the getAll repositorty")
            throw error
        }
    }


     async update(data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id: id
                }
            })
            
            return response

        } catch (error) {
            logger.error("something went wrong in the getAll repositorty")
            throw error
        }
    }
}

module.exports = CrudRepository