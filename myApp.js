var express = require('express');
var app = express();
//console.log("HellO World");

//app.get("/", (request, response) => response.sendFile(__dirname + "/view/index.html"));


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

  /*app.get('/:word/hello', (req, res)=>{
      let word = req.params.word
      res.json({echo : word})
  })*/

 /* app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    var { first: firstName, last: lastName } = req.query;
    res.json({
      name: `${firstName} ${lastName}`
    });
  });*/

  var bodyParser = require("body-parser");

  






















 module.exports = app;
