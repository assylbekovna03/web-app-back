// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/user.js");
const controller = require('../controller/auth');

router.get("/login", controller.login);

router.get("/register", controller.login);


module.exports = router;
