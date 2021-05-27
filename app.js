// import modules
// const serverless = require('serverless-http') // going to serve this on aws lambda
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

//routes
const index = require('./routes')
const about = require('./routes/about')
const project = require('./routes/project')

app.use('/about', about)
app.use('/project', project)
app.use('/', index)

// 404 Error Handler
app.use(function(req, res, next) {
    const err = new Error()
    err.status = 404
    err.message =
        "Oops!  It looks like the page you're looking for does not exist.";
    res.status(404).render("page-not-found", { err })
    next(err)
});

app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404).render("page-not-found", { err });
    } else {
        err.message = "Oops, something went wrong. This maybe a server issue. Please be patient, we are working very hard to fix this."
        res.status(err.status || 500).render("error", { err })
    }
    console.log(err.message);
});

// setup developmentserver
// takes port number as parameter
app.listen(3000, () => {
    console.log('The application is running on localhost 3000!')
})

// wrapper for serverless
// module.exports.handler = serverless(app)