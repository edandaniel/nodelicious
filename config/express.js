var express = require('express');
var lokijs = require('lokijs');
var pug = require('pug');
var load = require('express-load');

module.exports = function () {
  var app = express();
  app.set('view engine','pug');

  return app;
};
