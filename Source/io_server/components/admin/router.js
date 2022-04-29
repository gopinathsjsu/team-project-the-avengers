var express = require("express");
var router = express.Router();

// var admin = require('./admin');

router.get('/', (req, res) =>{
    res.send('admin check');
});

module.exports = router;