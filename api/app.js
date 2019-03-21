var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artistsRouter = require('./routes/artists');
var albumsRouter = require('./routes/albums');
var tracksRouter = require('./routes/tracks');

var app = express();


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
