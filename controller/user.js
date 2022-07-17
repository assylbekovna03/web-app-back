const mongoose = require("mongoose");
const User = require("../models/user.js");

const userCreate = async (req, res) => {
  try {
    await new User({
      nickname: user.nickname,
      name: user.name,
      password: user.password,
      email: user.email
      // lastCheck
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        const dtos = users.map((user) => {
            return {
                name: user.name,
                nickname: user.nickname,
                password: user.password,
                email: user.email
            };
        });

        return res.status(200).json(dtos);
    } catch (err) {
        console.log(err);
        return res.status(502).json({ message: 'some shit on our side' });
    }
};

// console.log(user);
// user.save();

module.exports = {
    userCreate,
    getAllUsers
}
