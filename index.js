//dependencies
const express = require("express")
const methodOverride = require('method-override')
const { Sequelize } = require('sequelize')
require('dotenv').config()

// CONFIGURATION / MIDDLEWARE
const app = express()
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

//routes