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

  /*var bodyParser = require("body-parser");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.post("/name", function(req,res){
      var string = req.body.first + " " + req.body.last;
      res.json({name: string});
  });*/

  if (process.env.MESSAGE_STYLE=='uppercase'){
    app.get('/json', function(req, res) {
      res.json({ "message": "HELLO JSON" })
    }); 
  }
  else {
    app.get('/json', function(req, res) {
    res.json({ "message": "Hello json" })
  }); 
  
  }
  























 module.exports = app;
