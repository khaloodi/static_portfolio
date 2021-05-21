const express = require('express')
const router = express.Router() // a router is like a mini app in express, you can write middleware and routes to it
const { projects } = require("../data.json")

// project page
router.get('/:id', (req, res) => {
    const projectId = req.params.id
    res.render('project', { project: projects[projectId] })
});

module.exports = router