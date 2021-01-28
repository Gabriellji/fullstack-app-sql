require('dotenv').config()
const chalk = require('chalk')

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT } = process.env
const Sequelize = require('sequelize')

const connector = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT
})

const authenticate = async (connector) => {
    try {
        await connector.authenticate()
        console.log(chalk.blue('We are Connected!'))
    } catch(err) {
        console.log(`Something failed on the DB connection: ${err}`)
    }
}

authenticate(connector)

const db = {}

db.Sequelize = Sequelize
db.connector = connector
db.user = require('../models/user.model')(Sequelize, connector)

module.exports = db