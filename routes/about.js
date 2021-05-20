const express = require('express')
const router = express.Router() // a router is like a mini app in express, you can write middleware and routes to it

// root route
router.get('/', (req, res) => {
    res.render('about')
});

module.exports = router