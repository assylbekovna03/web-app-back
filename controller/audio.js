const mongoose = require("mongoose");
const express = require("express");
// const bcrypt = require("bcryptjs");
const { Audio } = require("../models/audio.js");

module.exports = () => {
  console.log(Audio);
  run();
  async function run() {
    const audio = new Audio({
      name: "first",
      rate: 4,
      message: "audio",
    });
    await audio.save();
    console.log(audio);
  }
};
