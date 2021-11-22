var express = require('express');
var app = express();
//console.log("HellO World");

//app.get("/", (request, response) => response.sendFile(__dirname + "/public/style.css"));

/*app.get(
    "/now",
    (req, res, next) => {
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      res.send({
        time: req.time
      });
    }
  );*/

  app.get("/:word/echo", (req, res) => {
    let  word  = req.params.word
    res.json({
      echo: word})
    });
 























 module.exports = app;
