// require('dotenv').config();
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const Audio = require("./routes/audio.js");
const userRoutes = require("./routes/user.js");

var corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "device-remember-token",
    "Access-Control-Allow-Origin",
    "Origin",
    "Accept",
  ],
};

// use parsing middleware
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use("/", Audio);

app.use("/api", userRoutes);

module.exports = app;
