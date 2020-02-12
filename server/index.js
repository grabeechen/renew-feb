/* eslint-disable */
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var port = process.env.PORT || 8000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function () {
  console.log('Server is listening on port ' + port);
});
