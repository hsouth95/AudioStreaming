var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
var Song = require("../models/Song.js");

/** GET - Heartbeat check for this service */
router.get("/hi", function (req, res) {
    res.send(true);
});

/** GET - Retrieve a list of all songs */
router.get("/", function (req, res) {
    Song.find(function (err, songs) {
        if (err) {
            console.error(err);
        } else {
            res.status(200).json(songs);
        }
    });
});

/** GET - Retrieve a song with a specified id */
router.get("/:id", function (req, res) {
    Song.findById(req.params.id, function (err, song) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).json(song);
        }
    });
});

module.exports = router;