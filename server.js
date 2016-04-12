'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 1337;

//serve static files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//vendor assets
app.use('/vendor', express.static(__dirname + '/bower_components'));


var controllers = require('./controllers');


//*routes*//

//html endpoints
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//json api endpoints
app.get('/api', controllers.api.index);

app.get('/api/sneakers', controllers.sneakers.index);
app.get('/api/sneakers/:sneakerId', controllers.sneakers.show);
app.post('/api/sneakers', controllers.sneakers.create);
app.delete('/api/sneakers/:sneakerId', controllers.sneakers.destroy);
app.post('/api/sneakers/:sneakerId/size', controllers.sneakerSize.create);


app.listen(PORT, function(){
  console.log('express is lisening on ' + PORT + '!');
});
