var express = require('express');

var app = express();
require('./middleware.js')(app, express);
module.exports = app;