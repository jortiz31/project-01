'use strict';
var express = require('express');
var app = express();
var PORT = process.env.PORT || 1337;

app.use(express.static('views'));

// app.get('/', function(req, res){
//   res.send('Hello World');
// });

app.listen(PORT, function(){
  console.log('express is lisening on ' + PORT + '!');
});
