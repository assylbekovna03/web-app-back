// require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const Auth = require("./router/auth.js");

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

app.use("/api/auth", Auth);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));

module.exports = app;
