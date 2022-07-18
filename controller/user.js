const User = require("../models/user.js");
const { validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");

const signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }
  const user = new User(req.body);
  user.save((err, newUser) => {
    if (err) {
      return res.status(400).json({
        message: "Unable to add user",
      });
    }
    return res.json({
      message: "Success",
      newUser,
    });
  });
};

const signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Email was not found",
      });
    }
    // authenticate user

    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not much",
      });
    }

    // Created token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    // Put token in cookie 
    res.cookie("token", token, {expire: new Date() + 1});

    // send response (front)
    const {_id, nickname,name, email} = user;
    return res.json({
      token,
      user: {
        _id,
        name,
        nickname,
        email
      }
    })
  });
};

const signout = (req, res) => {
  res.clearCookie("token")
  return res.json({
    message: "User signout succesfull"
  })
}
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({});
//     const dtos = users.map((user) => {
//       return {
//         name: user.name,
//         nickname: user.nickname,
//         password: user.password,
//         email: user.email,
//       };
//     });

//     return res.status(200).json(dtos);
//   } catch (err) {
//     console.log(err);
//     return res.status(502).json({ message: "some shit on our side" });
//   }
// };

module.exports = {
  signup,
  signin,
  signout
};
