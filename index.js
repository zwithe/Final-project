//dependencies
const express = require("express")
const methodOverride = require('method-override')
const { Sequelize } = require('sequelize')
require('dotenv').config()

// CONFIGURATION / MIDDLEWARE
const app = express()
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

//routes
const searchController = require('./controllers/search')
const bookController = require('./controllers/Book')
app.use('/search', searchController)
app.use('/books', bookController)
