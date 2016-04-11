var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SizeSchema = new Schema({
  size: String,
});

var Size = mongoose.model('Size', SizeSchema);

module.exports = Size;
