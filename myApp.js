var express = require('express');
var app = express();
//console.log("HellO World");

app.get("/", (request, response) => response.sendFile(__dirname + "/views/index.html"));

























 module.exports = app;
