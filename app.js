const express = require("express");

const bodyParser = require("body-parser");

const http = require("https");

const app = express();


app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(process.env.PORT || 3001 , function () {

    console.log("server started at 3001..")

});

app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");

});

