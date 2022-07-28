// const icecast = require("icecast");
const express = require("express");
const router = express.Router();
const { audioSave } = require("../controller/audio.js");

router.post("/saveAudio/:id", audioSave);
module.exports = router;
