var express = require('express');
var app = express();

app.use(function middleware(req, res, next) {
    console.log("I'm a middleware...");
    next();
  });



























 module.exports = app;
