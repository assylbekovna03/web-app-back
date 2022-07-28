// const icecast = require("icecast");
const express = require("express");
const router = express.Router();
const { audioSave } = require("../controller/audio.js");

router.post("/saveAudio", audioSave);
module.exports = router;
