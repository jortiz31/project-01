//database moved--

var db = require('../models');

// get /api/sneakers
function index(req, res) {
  db.Sneaker.find({}, function(err, allSneakers){
    res.json(allSneakers);
  });
}

function create(req, res) {
  console.log('body', req.body);

  db.Sneaker.create(req.body, function(err, sneaker){
    if (err) { console.log('error', err); }
    console.log("New Sneak", sneaker);
    res.json(sneaker);
  });

}

function show(req, res) {
  db.Sneaker.findById(req.params.sneakerId, function(err, foundSneaker) {
    if (err) { console.log('sneakerController.show error', err); }
    console.log('sneakerController.show responding with', foundSneaker);
    res.json(foundSneaker);
  })

}

function destroy(req, res) {
  db.Sneaker.findOneAndRemove({_id: req.params.sneakerId}, function(err, foundSneaker){
    res.json(foundSneaker);
  });
}

function update(req, res) {
  console.log('Sanity update with data', req.body);
  db.Sneaker.findById(req.params.sneakerId, function(err, foundSneaker){
    if (err) { console.log('sneakerController.update error', err); }
    foundSneaker.sneakerBrand = req.body.sneakerBrand;
    foundSneaker.sneakerStyle = req.body.sneakerStyle;
    foundSneaker.releaseDate = req.body.releaseDate;
    foundSneaker.price = req.body.price;
    foundSneaker.save(function(err, savedSneaker){
      if (err) { console.log('saving edited sneaker item didnt work!'); }
      res.json(savedSneaker);
    });
  });

}


module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
