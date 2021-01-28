const express = require('express')
const app = require('../app')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hashedPass) => {
            console.log(hashedPass)
        })
        .catch((hashErr) => console.error(`Hashing the password had the following errors: ${hashErr}`))

})

module.exports = router