const express = require("express");
const {serverConfig, logger} = require("./config");
const app = express();
const morgan = require("morgan");
const { router } = require("./routes");

app.use(morgan("dev"))

app.get("/users", (req, res) => {
  res.json({ users: [] });
});

app.use("/api", router)

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server is running on the port: ${serverConfig.PORT}`);
    // logger.info("success fully ", "root", )
})