var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

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

const Artiste = new mongoose.Schema({
     name : String,
     dateOfBirth : Date,
     followers : Number,
     albums:{
     	type:mongoose.Schema.Types.ObjectId,
     	ref:'Album'
     }
	});

const Album = new mongoose.Schema({
     title : String,
     genre :{type: String,enum: ['rap','rock','jazz','pop']},
     tracks:{
     	type:mongoose.Schema.Types.ObjectId,
     	ref:'Track'
     }
	});

const Track = new mongoose.Schema({
     title : String,
     duration : Number,
     listenning : Number,
     like : Number,
     artist:{
     	type:mongoose.Schema.Types.ObjectId,
     	ref:'Artist'
     }
	});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artists', artistsRouter);
app.use('/albums', albumsRouter);
app.use('/tracks', tracksRouter);

const PORT = process.env.PORT ||8000;
app.listen(PORT, function() {
   console.log('Listening at http:localhost:${PORT}/');
});

module.exports = app;
