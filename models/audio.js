const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const audioSchema = new Schema(
  {
    name: { type: String, required: true },
    rate: { type: Number, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Audio = model("Audio", audioSchema);
module.exports = {Audio};