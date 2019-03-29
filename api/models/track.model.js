var mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
     title : String,
     duration : Number,
     listenings : Number,
     likes : Number,

     artist:{
     	type:mongoose.Schema.Types.ObjectId,
     	ref:'Artist'
     }
	});

module.exports = mongoose.model('Track', TrackSchema, 'Track');
