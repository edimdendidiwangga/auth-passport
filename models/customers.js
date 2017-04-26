var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name:  String,
  memberid: String,
  address: String,
  zipcode: Number,
  phone: String
});

let Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer
