const express = require('express');
const router = express.Router();
const posts = require('../data/post');

//rotta per la bacheca
router.get('/bacheca', (req, res) => {
    res.json(posts);
});

module.exports = router;