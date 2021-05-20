const express = require('express')
const router = express.Router() // a router is like a mini app in express, you can write middleware and routes to it

router.use(express.static('public'))

// root route
router.get('/', (req, res) => {
    res.render('index')
});

module.exports = router