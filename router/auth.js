// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User, validate } = require("../models/user.js");
const { Login, Register } = require("../controller/auth");
const { user, getAllUsers } = require("../controller/user.js");

router.get("/login", Login);
router.post("/register", async (req, res) => {
  const new_user = await user;
  console.log(new_user);
  res.status(200).send(new_user);
});

module.exports = router;
