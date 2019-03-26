var mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
     title : String,
     release : Date,
     genre :{type: String,enum: ['Rap','Rock','Jazz','Pop']},
     cover_url : String,

     tracks:{
     	type:mongoose.Schema.Types.ObjectId,
     	ref:'Track'
     }
	});

module.exports = mongoose.model('Album', AlbumSchema, 'Album');