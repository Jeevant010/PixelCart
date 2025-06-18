const express = require("express");
require("dotenv").config();
const port = 9000;

const app = express();

app.get("/", (req, res) =>{
    res.send("Home Page of this Website");
})

app.listen(port, () => {
    console.log("App is listening on port : http://localhost:" + port);
})

