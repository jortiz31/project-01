var express = require('express');
var app = express();

var port = process.env.PORT || 1337;

//get verb http request, response
app.get('/', function(req, res){
  res.send('<html><head></head><body><h1>Hello World!!</h1></body></html>');
});

//understanding pattering in express
app.get('/person/:id', function(req, res){
  res.send('<html><head></head><body><h1>Person: ' +
  req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res){
  res.json({ firstName: "John", lastName: "Doe" });
})

app.listen(port);
