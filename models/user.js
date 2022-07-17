const mongoose = require("mongoose");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { Schema, models } = mongoose;

const userSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const validate = (data) => {
  const schema = joi.object({
    nickname: joi.string().required(),
    name: joi.string().required(),
    password: passwordComplexity().required(),
  });
  return schema.validate(data);
};
// console.log(module.filename); 
// console.log(module.id); 
// console.log(module.exports); 

module.exports = { User, validate };
