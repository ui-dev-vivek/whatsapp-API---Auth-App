const express = require("express");
const app = express();
const port = prosess.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello W");
});


app.listen(port, () => {
    console.log("Live");
});