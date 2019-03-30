var express = require('express');
const Track = require('../models/track.model.js');

const router = express.Router();

/* GET tracks listing. */
router.get('/', (req, res) => {
  Track.find()
    .then(function (tracks) {
      res.send(tracks);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tracks.'
      });
    });
});

/* GET tracks with likes >=10 000. */
router.get('/likesup', (req, res) => {

  Track.countDocuments({likes: { $gte: 10000 }})
    .then(function (countTL) {
      	Track.countDocuments()
	      	.then(function (countTotal) {
		      	var pourcent = (countTL/countTotal)*100;
		      	res.json(pourcent);
	      	})
	      	.catch(err2 => {
		      	res.status(500).send({
		        	message: err.message || 'Some error occurred while calculating.'
		      	});
    		});
    })
    .catch(err => {
      	res.status(500).send({
        	message: err.message || 'Some error occurred while retrieving tracks.'
      	});
    });
});

/* GET one Track. */
router.get('/:id', (req, res) => {
  Track.findById(req.params.id)
    .then(track => {
      if (!track) {
        return res.status(404).send({
          message: 'Track not found with id ' + req.params.id
        });
      }
      res.send(track);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Track not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving track with id ' + req.params.id
      });
    });
});

/* PUT new artist. */
router.put('/', (req, res) => {
  // Validate request
  if (!req.body.title) {
    // If title is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'title can not be empty'
    });
  }


  // Create a new Track
  const track = new Track({
    title: req.body.title,
    duration: req.body.duration || null,
    listenings: req.body.listenings || null,
    likes: req.body.likes || null,
    artist: req.body.artist || null
  });

  // Save Track in the database
  track
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly track integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new track in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Track.'
      });
    });
});

/* DELETE track. */
router.delete('/:id', (req, res) => {
  Track.findByIdAndRemove(req.params.id)
    .then(track => {
      if (!track) {
        return res.status(404).send({
          message: 'Track not found with id ' + req.params.id
        });
      }
      res.send({ message: 'Track deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Track not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete track with id ' + req.params.id
      });
    });
});

/* UPDATE track. */
router.post('/:id', (req, res) => {


  // Find track and update it with the request body
  Track.findById(req.params.id)
    .exec(function(err, track) {
      if (err) {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Track not found with id ' + req.params.id
          });
        }
        return res.status(500).send({
          message: 'Error updating track with id ' + req.params.id
        });
      }

      if (req.body.title) track.title = req.body.title;
      if (req.body.duration) track.duration = req.body.duration;
      if (req.body.listenings) track.listenings = req.body.listenings;
      if (req.body.likes) track.likes = req.body.likes;
      if (req.body.artist) track.artist = req.body.artist;

      track.save(function(err, track) {
        if (err) {
          return res.status(500).send({
            message: 'Error updating track with id ' + req.params.id
          });
        }

        res.json(track);
      })
    });
});


module.exports = router;
