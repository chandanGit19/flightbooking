const express = require("express");

const router = express.Router();

const airplaneRoute = require("./airplane-router")

router.use("/airplane", airplaneRoute)



router.get("/info", (req, res)=>{
    return res.status(200).json({
        success: true,
        message: "Ok"
    })
});





module.exports = router