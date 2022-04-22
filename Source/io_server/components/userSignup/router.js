var express = require("express");
var router = express.Router();

var createUser = require('./createUser');

router.post('/createUser', (req, res) =>{
    createUser(req, res);
});

module.exports = router;