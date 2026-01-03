const express = require("express")

const v1Routes = require("./v1")

const v2Route = require("./v2")

const router = express.Router()


router.use("/v1", v1Routes)

router.use("/v2", v2Route)




module.exports = {
    router
}