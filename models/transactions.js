var mongoose = require('mongoose');
mongoose.Promise = global.Promise
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  memberid:  String,
  days: Number,
  out_date: {
    type: Date,
    default: Date.now
  },
  due_date: {
    type: Date,
    default: Date.now
  },
  in_date: {
    type: Date,
    default: Date.now
  },
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId, ref: 'Book'
  }]
});

let Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
