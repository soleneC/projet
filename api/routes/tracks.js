var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

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