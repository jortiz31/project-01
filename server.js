var express = require('express');
var app = express();

var port = process.env.PORT || 1337;
//get verb http request, response
app.get('/', function(req, res){
  res.send('<html><head></head><body><h1>Hello World!!</h1></body></html>');
})

app.get('/api', function(req, res){
  res.json({ firstName: "John", lastName: "Doe" });
})

app.listen(port);





// var http = require('http');
//
// http.createServer(function(req, res) {
//   if (req.url === '/'){
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//   }
//   else if(req.url === '/api'){
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     var obj = {
//       firstName: 'John',
//       lastName: 'Doe',
//       shoeSize: "11.5"
//     };
//     res.end(JSON.stringify(obj));
//   }
//   else {
//     res.writeHead(404);
//     res.end();
//   }
// }).listen(1337);
