const express = require("express");

const jokeController = require("./jokeController.js")
const router = express.Router();

router.get('/getAJoke', jokeController.getAJoke);

module.exports = router;