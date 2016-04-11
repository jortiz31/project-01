var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sneaky');

var Sneaker = require('./sneaker');

module.exports.Sneaker = Sneaker;
module.exports.Size = require('./size');
