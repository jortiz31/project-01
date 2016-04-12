var db = require("./models");

var sneakerList = [];

sneakerList.push({
             sneakerStyle: 'AJ 1',
             sneakerBrand: 'NIKE',
             releaseDate: '1985, September 15',
             price: '$200'
           });
sneakerList.push({
            sneakerStyle: 'AJ 13',
            sneakerBrand: 'NIKE',
            releaseDate: '1997, September 15',
            price: '$100'
});

var sizeList = [];

sizeList.push({
  size: '11.5'
});
sizeList.push({
  size: '10.5'
});
sizeList.push({
  size: '11'
});
sizeList.push({
  size: '9.5'
});

sneakerList.forEach(function(sneaker){
  sneaker.size = sizeList;
});

db.Sneaker.remove({}, function(err, sneakers){

  db.Sneaker.create(sneakerList, function(err, sneakers){
    if (err) { return console.log('SHIT SON', err); }
    console.log("all sneakers", sneakers);
    console.log("created", sneakers.length, "sneakers");
    process.exit();
  });
});
