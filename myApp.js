var express = require('express');
var app = express();




  
app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });

  var response = "Hello json".toUpperCase();

  if (process.env.MESSAGE_STYLE === "allCaps") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }































 module.exports = app;
