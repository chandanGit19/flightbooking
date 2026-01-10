const express = require("express");
const {serverConfig, logger} = require("./config");
const app = express();
const morgan = require("morgan");
const { router } = require("./routes");

app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get("/users", (req, res) => {
  res.json({ users: [] });
});

app.use("/api", router)

app.listen(serverConfig.PORT, async ()=>{
    console.log(`Server is running on the port: ${serverConfig.PORT}`);
    // logger.info("success fully ", "root", )

    // add association from model for sequelixe

    // const {city, Airport} = require("./models")

    // const cityy = await city.findByPk(1)

    // const airport = await Airport.create({name: "Kempegoda Airport", code: "BLR", cityId: 1})

    // const kmpAirport = await cityy.createAirport({name: "Kempegoda Airport", code: "BLR", cityId: 1, address: "Banglore"})

    // console.log("city -=-=--=-" , kmpAirport)



})