var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');

var port = process.env.PORT || 3000;

var app = express();
app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));




// app.use(express.static(__dirname + '/public'));

app.listen(port);