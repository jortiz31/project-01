var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Size = require("./size");

var SneakerSchema = new Schema({
  sneakerStyle: String,
  sneakerBrand: String,
  releaseDate: String,
  price: String,
  size: [Size.schema]
});

var Sneaker = mongoose.model('Sneaker', SneakerSchema);

module.exports = Sneaker;
