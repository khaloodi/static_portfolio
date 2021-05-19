// import module
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// express function returns an express application
// app is the central part of our application, we will extend it with routes, middleware, and other settings
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/static', express.static('public'))

// tells express which template engine to use, by default templates are saved in a folder called views
app.set('view engine', 'pug')

// setup developmentserver
// takes port number as parameter
app.listen(3000, () => {
    console.log('The application is running on localhost 3000!')
})