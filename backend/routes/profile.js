const express = require('express')
const app = require('../app')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('Your profile')
})

module.exports = router