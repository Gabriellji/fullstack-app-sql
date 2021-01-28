const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const db = require('../database/config')
const User = db.user

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    (email, password, done) => {
        User.findOne({ where: { email }})
        .then((foundUser) => {
            if(!foundUser) done(null, false, { message: 'Did not find user with this email' })
            bcrypt
            .compare(password, foundUser.password)
            .then((user) => {
                console.log(user)
                if(user) done(null, foundUser.dataValues)
            })
        })
        .catch((err) => console.error(`Query error: ${err}`))
    }
    )
)