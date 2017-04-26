const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const app = express()
const passwordHash = require('password-hash');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection success');
});

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', require('./routes/books'));
app.use('/transactions', require('./routes/transactions'));
app.use('/customers', require('./routes/customers'));
app.use('/users', require('./routes/users'));

app.use(passport.initialize());

passport.use(new Strategy(
  function(username, password, cb) {
    let User = require('./models/users')
    User.findOne({ username: username }, function(err, user) {
      if (err) cb(err)
      if (passwordHash.verify(password, user.password)) {
        cb(null, user)
      } else {
        cb('Password is not correct ulang lagi bro')
      }
    })
  }
));


app.listen(app.get('port'), function(){
  console.log('listening on port '+app.get('port'))
})
