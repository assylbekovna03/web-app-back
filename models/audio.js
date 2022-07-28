const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const audioSchema = new Schema(
  {
    audio_url: { type: String },
    rate: { type: Number },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

const Audio = model("Audio", audioSchema);
module.exports = Audio;
