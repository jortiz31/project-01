'use strict';
var fs = require('fs');

var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  var header = 'Seaky..';
  html = html.replace('{Header}', header);
  res.end(html);

}).listen(1337);
