const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
    console.log("From express middleware 2");
    res.send("Hello User");
});


app.use("/",(req, res, next) => {
    console.log("From express middleware 1");
    res.send("Get started with express");
});

app.listen(3000);