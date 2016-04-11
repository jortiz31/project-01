var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Size = require("./size");

var SneakerSchema = new Schema({
  shoeStyle: String,
  shoeBrand: String,
  releaseDate: String,
  size: [Size.schema];
});

var Sneaker = mongoose.model('Sneaker', SneakerSchema);

module.exports = Sneaker;
