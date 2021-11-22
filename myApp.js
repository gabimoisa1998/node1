var express = require('express');
var app = express();

app.use(function middleware(req, res, next) {
    // Do something
    // Call the next function in line:
    next();
  });



























 module.exports = app;
