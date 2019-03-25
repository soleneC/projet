const mongoose = require('mongoose');

const ArtisteSchema = new mongoose.Schema({
     name : String,
     dateOfBirth : Date,
     followers : Number,
     albums:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Album'
     }
  });

module.exports = mongoose.model('Artist', ArtisteSchema, 'Artist');
