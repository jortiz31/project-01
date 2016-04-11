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
  db.Sneaker.create(req.body, function(err, createdSneaker){
    console.log("New Sneak", createdSneaker);
    res.json(createdSneaker);
  });

}

function show(req, res) {

}

function destroy(req, res) {

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
