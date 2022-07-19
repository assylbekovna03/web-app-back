const mongoose = require("mongoose");
const express = require("express");
// const bcrypt = require("bcryptjs");
const Audio = require("../models/audio.js");

const audioSave = (req, res) => {
  run();
  async function run() {
    const audio = new Audio(req.body);
    await audio.save();
    console.log(audio);
  }
};

module.exports = {
  audioSave,
};

// router.post("/saveAudio", async (req, res) => {
//   name, g, f, (link = req);
//   console.log(req.body);
//   res.status(200).json({ message: "Succes" });
// });
