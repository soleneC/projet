var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require("cors");

mongoose.connect('mongodb://localhost:27017/DB');
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function (){
    console.log("Connexion à la base OK");
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artistsRouter = require('./routes/artists');
var albumsRouter = require('./routes/albums');
var tracksRouter = require('./routes/tracks');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artists', artistsRouter);
//app.use('/albums', albumsRouter);
//app.use('/tracks', tracksRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
   console.log('Listening at http:localhost:${PORT}/');
});

module.exports = app;
