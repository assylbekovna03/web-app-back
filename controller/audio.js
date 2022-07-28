const mongoose = require("mongoose");
const express = require("express");
// const bcrypt = require("bcryptjs");
const Audio = require("../models/audio.js");
const User = require("../models/user.js");

const audioSave = (req, res) => {
  (async function run() {
    // const { id } = req.params;

    const audio = new Audio(req.body);
    await audio.save();

    // let users = await User.find({});
    //  for(let i = 0; i < users.length; i++){
    //   let user = users[i];
    //   let _id = user._id;
    //   let mid = mongoose.Types.ObjectId(_id);
    //   let story = await 
    //  }
    

    //   const user = await User.findOne({ nickname: "aruzhant" });
    //   await User.findOneAndUpdate(
    //     { nickname: "aruzhant" },
    //     { audios: [...user?.audios?.map((el) => el._id), audio._id] }
    //   );
    // })()\

    // const { id } = req.params._id;
    // console.log({ id });

      const user = await User.findById({ _id: mongoose.Types.ObjectId });
      await User.findByIdAndUpdate(user._id, {
        audios: [...user?.audios?.map((item) => item._id), audio._id],
      });

    console.log(user);
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
