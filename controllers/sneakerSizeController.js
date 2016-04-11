var db = require ('../models');

function create(req, res) {
  db.Sneaker.findById(req.params.sneakerId, function(err, foundSneaker) {
    var newSize = new db.Size(req.body);
    foundSneaker.size.push(newSize);
    foundSneaker.save(function(err, savedSneaker) {
      console.log("newSize created: ", newSize);
      res.json(newSize);
    });
  });
}

module.exports = {
  create: create
}
