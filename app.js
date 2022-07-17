// require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Auth = require("./router/auth.js");
const Audio = require("./router/audio.js");

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
//adasdasd
//asdasd//adada/adadasd
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

// import routes
app.use("/", Audio);
app.use("/api/auth", Auth);


module.exports = app;
