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

  app.get('/:word/echo', function(req, res){
    console.log(req.params.word)
    })




















 module.exports = app;
