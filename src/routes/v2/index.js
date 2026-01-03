const express = require("express");

const router = express.Router();


router.get("/info", (req, res)=>{
    return res.status(200).json({
        success: true,
        message: "Ok  from v2"
    })
});

module.exports = router