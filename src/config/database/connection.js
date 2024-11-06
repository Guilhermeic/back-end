const dotenv = require('dotenv')
dotenv.config() //importar do dotenv com segurança, importe dessa forma

const { Sequelize } = require('sequelize')

const connection = new Sequelize ({
    dialect: process.env.DB_DRIVER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DP_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

module.exports = connection;