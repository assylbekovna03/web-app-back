const mongoose = require("mongoose");
const joi = require("joi");
const crypto = require("crypto");
const passwordComplexity = require("joi-password-complexity");
const { Schema, model } = mongoose;
const uuidv1 = require("uuidv1");
const userSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })

  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";

    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};
const User = model("User", userSchema);

// const validate = (data) => {
//   const schema = joi.object({
//     nickname: joi.string().required(),
//     name: joi.string().required(),
//     password: passwordComplexity().required(),
//     email: joi.string().required(),
//   });
//   return schema.validate(data);
// };
// console.log(module.filename);
// console.log(module.id);
// console.log(module.exports);

module.exports = User;
