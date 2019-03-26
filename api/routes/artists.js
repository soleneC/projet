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
        message: 'Error retrieving user with id ' + req.params.id
      });
    });
});

/* PUT new artist. */
router.put('/', (req, res) => {
  // Validate request
  if (!req.body.name) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'name can not be empty'
    });
  }

  // Create a new Artist
  const artist = new Artist({
    name: req.body.name,
    dateOfBirth: req.body.dateOfBirth || null,
    followers: req.body.followers || null
  });

  // Save Artist in the database
  artist
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
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

/* UPDATE user. */
router.post('/:id', (req, res) => {
  

  // Find user and update it with the request body
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





