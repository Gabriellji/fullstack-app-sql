const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../database/config");
const User = db.user;

router.post("/", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPass) => {
      User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: hashedPass,
        email: req.body.email,
      })
        .then(() =>
          res.status(201).send({ msg: "You have succesfuly signed up" })
        )
        .catch((err) => console.error(`User error: ${err}`));
    })
    .catch((hashErr) =>
      console.error(`Hashing the password had the following errors: ${hashErr}`)
    );
});

module.exports = router;
