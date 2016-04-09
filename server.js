var express = require('express');
var app = express();
var PORT = process.env.PORT || 1337;

app.get('/', function(req, res){
  res.send('Todo API Root');
});

app.listen(PORT, function(){
  console.log('express is lisening on ' + PORT + '!');
});
