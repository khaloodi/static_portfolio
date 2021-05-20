const express = require('express')
const router = express.Router() // a router is like a mini app in express, you can write middleware and routes to it

// project page
router.get('/', (req, res) => {
    res.render('project')
});

module.exports = router