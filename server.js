'use strict';
var express = require('express');
var app = express();
var PORT = process.env.PORT || 1337;

//serve static files
app.use(express.static(__dirname + '/public'));

//vendor assets
app.use('/vendor', express.static(__dirname + '/bower_components'));

// var controllers = require('./controllers');


//*routes*//



//html endpoints
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//json api endpoints
// app.get('/api', controllers.api.index);


app.listen(PORT, function(){
  console.log('express is lisening on ' + PORT + '!');
});
