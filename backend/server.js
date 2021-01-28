const chalk = require('chalk')
const server = require('./app')
const port = process.env.PORT || 5000

server.listen(port, () => console.log(chalk.blue(`App is running at ${port} port`)))