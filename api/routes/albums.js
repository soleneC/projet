var express = require('express');
const Album = require('../models/album.model.js');

const router = express.Router();

/* GET albums listing. */
router.get('/', (req, res) => {
  Album.find()
    .then(function (albums) {
      res.send(albums);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving albums.'
      });
    });
});

/* GET one Album. */
router.get('/:id', (req, res) => {
  Album.findById(req.params.id)
    .then(album => {
      if (!album) {
        return res.status(404).send({
          message: 'Album not found with id ' + req.params.id
        });
      }
      res.send(album);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Album not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving album with id ' + req.params.id
      });
    });
});

/* PUT new album. */
router.put('/', (req, res) => {
  // Validate request
  if (!req.body.title) {
    // If title is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'title can not be empty'
    });
  }

  // Create a new Album
  const album = new Album({
    title: req.body.title,
    realease: req.body.release || null,
    genre: req.body.genre || null,
    cover_url: req.body.cover_url || null,
    tracks: req.body.tracks || null
  });

  // Save Track in the database
  album
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly album integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new album in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Album.'
      });
    });
});

/* DELETE album. */
router.delete('/:id', (req, res) => {
  Album.findByIdAndRemove(req.params.id)
    .then(album => {
      if (!album) {
        return res.status(404).send({
          message: 'Album not found with id ' + req.params.id
        });
      }
      res.send({ message: 'Album deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Album not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete album with id ' + req.params.id
      });
    });
});

/* UPDATE album. */
router.post('/:id', (req, res) => {
  

  // Find album and update it with the request body
  Album.findById(req.params.id)
    .exec(function(err, album) {
      if (err) {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Album not found with id ' + req.params.id
          });
        }
        return res.status(500).send({
          message: 'Error updating album with id ' + req.params.id
        });
      }

      if (req.body.title) album.title = req.body.title;
      if (req.body.realease) album.release = req.body.release;
      if (req.body.genre) album.genre = req.body.genre;
      if (req.body.cover_url) album.cover_url = req.body.url;
      if (req.body.tracks) album.tracks = req.body.tracks;

      album.save(function(err, album) {
        if (err) {
          return res.status(500).send({
            message: 'Error updating album with id ' + req.params.id
          });
        }

        res.json(album);
      })
    });
});


module.exports = router;