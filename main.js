const express = require("express");
const bodyParser = require("body-parser");

// 서버 생성
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

// API
app.post("/user", (req, res) => {

    res.status(201).json({
        status: "success",
        userId: req.body.userId
    })
});

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(8080, "localhost", () => {
    console.log("server is running");
});

// module.exports = app;