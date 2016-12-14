var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();
mongoose.connect('mongodb://localhost/journies');

var Cat = require('./clientInfo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.post('/journey', function(req){

  var cat = new Cat(req.body);

  cat.save(function(err, savedCat) {
    if (err) { return next(err); }
    res.send(savedCat);
});

app.listen(8000);
