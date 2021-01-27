require('dotenv').config()

const express = require('express')

const app = express()

app.use((req, res, next) => {
    let err = new Error('Not found')
    err.status = 404
    next(err)
})

module.exports = app