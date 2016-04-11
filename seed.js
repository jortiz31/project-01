var db = require("./models");

var sneakerList = [];

sneakerList.push({
             shoeStyle: 'AJ 1',
             brand: 'NIKE',
             releaseDate: '1985, September 15',
             colorWay: [ 'Black', 'Red' ]
           });
sneakerList.push({
            shoeStyle: 'AJ 13',
            brand: 'NIKE',
            releaseDate: '1997, September 15',
            colorWay: [ 'Black', 'Red', 'White/True' ]
});

var sizesList = [];

sizesList.push({
  size: '11.5'
});
sizesList.push({
  size: '10.5'
});
sizesList.push({
  size: '11'
});
sizesList.push({
  size: '9.5'
});

sneakerList.forEach(function(sneaker){
  sneaker.size = sizesList;
});

db.Sneaker.remove({}, function(err, sneakers){
  db.Sneaker.create(sneakerList, sizesList, function(err, sneakers){
    if (err) { return console.log('SHIT SON', err); }
    console.log("all sneakers", sneakers);
    console.log("created", sneakers.length, "sneakers");
    process.exit();
  });
});
