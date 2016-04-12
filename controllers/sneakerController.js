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

}


module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
