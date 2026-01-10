const express = require("express");

const router = express.Router();

const airplaneRoute = require("./airplane-router");
const cityRoute = require("./city-routes");

router.use("/airplane", airplaneRoute)

router.use("/city", cityRoute)



router.get("/info", (req, res)=>{
    return res.status(200).json({
        success: true,
        message: "Ok"
    })
});





module.exports = router