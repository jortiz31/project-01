'use strict';
var fs = require('fs');

var http = require('http');

http.createServer(function(req, res) {
  if (req.url === '/'){
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  else if(req.url === '/api'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
      firstName: 'John',
      lastName: 'Doe',
      shoeSize: "11.5"
    };
    res.end(JSON.stringify(obj));
  }
  else {
    res.writeHead(404);
    res.end();
  }
}).listen(1337);
