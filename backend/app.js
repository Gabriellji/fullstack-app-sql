require('dotenv').config()

const express = require('express')
const db = require('./database/config')

const app = express()

const loginRouter = require('./routes/login')
const profileRouter = require('./routes/profile')
const registerRouter = require('./routes/register')

db.connector
    .sync()
    .then(() => console.log('find current DB'))
    .catch((err) => console.error(`sync faild: ${err}`))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
    
app.use('/login', loginRouter)
app.use('/profile', profileRouter)
app.use('/register', registerRouter)

app.use((req, res, next) => {
    let err = new Error('Not found')
    err.status = 404
    next(err)
})

module.exports = app