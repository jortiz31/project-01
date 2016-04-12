var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Sizes = require("./size");

var SneakerSchema = new Schema({
  sneakerStyle: String,
  sneakerBrand: String,
  releaseDate: String,
  price: String,
  size: [Sizes.schema]
});

var Sneaker = mongoose.model('Sneaker', SneakerSchema);

module.exports = Sneaker;
