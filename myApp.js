var express = require('express');
var app = express();
console.log("Hello World");



  
app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });

  var response = "Hello json".toUpperCase();

  if (process.env.VAR_NAME === "allCaps") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }































 module.exports = app;
