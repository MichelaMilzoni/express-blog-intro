const express = require('express');
const router = express.Router();

// rotta principale 
router.get('/', (req, res) => {
    res.send("Server del mio blog");
});

module.exports = router;