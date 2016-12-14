var mongoose = require('mongoose');
var Schema = mongoose.schema;

var clientSchema = new Schema({
  text: String
});

var Cat = mongoose.model('dog', clientSchema);
module.exports = Cat;
