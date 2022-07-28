const mongoose = require("mongoose");
const express = require("express");
// const bcrypt = require("bcryptjs");
const Audio = require("../models/audio.js");
const User = require("../models/user.js");
const ObjectId = require("mongodb").ObjectId;
const audioSave = (req, res) => {
  (async function run() {
    const { id } = req.params;

    const audio = new Audio(req.body);
    await audio.save();

    // let users = await User.find({});
    //  for(let i = 0; i < users.length; i++){
    //   let user = users[i];mongoo
    // const user = await User.findOne({ nickname: "aruzhant" });
    // await User.findOneAndUpdate(mongoose.Types.ObjectId
    // const { _id } = req.params;
    // console.log({ id });
    const user = await User.findOne({ _id: new ObjectId(id) });
    await User.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        audios: [...user?.audios?.map((item) => item._id), audio._id],
      }
    );
    // User.findById("62e2deb83bc880af4b29a0b0", (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(data);
    //   }
    // });
  })();
};

module.exports = {
  audioSave,
};

// router.post("/saveAudio", async (req, res) => {
//   name, g, f, (link = req);
//   console.log(req.body);
//   res.status(200).json({ message: "Succes" });
// });
