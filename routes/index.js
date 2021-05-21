const express = require('express')
const router = express.Router() // a router is like a mini app in express, you can write middleware and routes to it
const { projects } = require("../data.json")

// root route
router.get('/', (req, res) => {
    res.render('index', { projects })
});

module.exports = router