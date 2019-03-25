var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Album = new mongoose.Schema({
     title : String,
     genre :{type: String,enum: ['rap','rock','jazz','pop']},
     tracks:{
     	type:mongoose.Schema.Types.ObjectId,
     	ref:'Track'
     }
	});