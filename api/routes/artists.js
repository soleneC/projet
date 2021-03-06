var express = require('express');
const Artist = require('../models/artist.model.js');

const router = express.Router();

/* GET artists listing. */
router.get('/', (req, res) => {
  Artist.find()
    .then(function (artists) {
      res.send(artists);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving artists.'
      });
    });
});

/* GET nombre d'artistes nés le même mois. */
router.get('/Artistsbirth', (req, res) => {
  Artist.aggregate([
      {
        $group: {
          _id:{
            $month:"$dateOfBirth"
          },
        count : {
          $sum: 1       
      }
    }
  }
      
  ]).then (resultats => {
      res.send(resultats);
    });
});

/* GET one Artist. */
router.get('/:id', (req, res) => {
  Artist.findById(req.params.id)
    .then(artist => {
      if (!artist) {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.id
        });
      }
      res.send(artist);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving artist with id ' + req.params.id
      });
    });
});

/* PUT new artist. */
router.put('/', (req, res) => {
  // Validate request
  if (!req.body.name) {
    // If name is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'name can not be empty'
    });
  }

  if (!req.body.dateOfBirth) {
    return res.status(400).send({
      message: 'date of birth can not be empty'
    });
  }

  // Create a new Artist
  const artist = new Artist({
    name: req.body.name,
    dateOfBirth: req.body.dateOfBirth,
    followers: req.body.followers || null,
    albums : req.body.albums || null
  });

  // Save Artist in the database
  artist
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly artist integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new artist in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Artist.'
      });
    });
});

/* DELETE artist. */
router.delete('/:id', (req, res) => {
  Artist.findByIdAndRemove(req.params.id)
    .then(artist => {
      if (!artist) {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.id
        });
      }
      res.send({ message: 'Artist deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete artist with id ' + req.params.id
      });
    });
});

/* UPDATE artist. */
router.post('/:id', (req, res) => {
  

  // Find artist and update it with the request body
  Artist.findById(req.params.id)
    .exec(function(err, artist) {
      if (err) {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Artist not found with id ' + req.params.id
          });
        }
        return res.status(500).send({
          message: 'Error updating artist with id ' + req.params.id
        });
      }

      if (req.body.name) artist.name = req.body.name;
      if (req.body.dateOfBirth) artist.dateOfBirth = req.body.dateOfBirth;
      if (req.body.followers) artist.followers = req.body.followers;
      if (req.body.albums) artist.albums = req.body.albums;

      artist.save(function(err, artist) {
        if (err) {
          return res.status(500).send({
            message: 'Error updating artist with id ' + req.params.id
          });
        }

        res.json(artist);
      })
    });
});


module.exports = router;





