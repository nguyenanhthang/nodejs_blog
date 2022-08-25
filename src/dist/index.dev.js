"use strict";

var express = require('express'); // dowload express library


var path = require('path');

var methodOverride = require('method-override');

var morgan = require('morgan');

var _require = require('express-handlebars'),
    engine = _require.engine;

var app = express();
var port = 4000;

var route = require('./routes');

var db = require('./config/db'); //connect


db.connect();
app.use('/public', express["static"](path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.json()); // HTTP logger

app.use(morgan('combined')); // override with POST having ?_method=DELETE

app.use(methodOverride('_method')); // Template engine

app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: function sum(a, b) {
      return a + b;
    }
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // route

route(app); // 127.0.0.1 - localhost

app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});