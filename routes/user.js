const express = require("express");
const router = express.Router();
const { signup, signin, signout } = require("../controller/user.js");
const { check } = require("express-validator");

router.post(
  "/signup",
  [
    check("name", "Name at least should be 3 characters").isLength({ min: 3 }),
    check("nickname", "Nickname at least should be 5 characters").isLength({
      min: 5,
    }),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password at least should be 6 characters").isLength({
      min: 6,
    }),
  ],
  signup
);

router.post("/signin", signin);
router.post("/signout", signout);

module.exports = router;
