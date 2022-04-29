var express = require("express");
var router = express.Router();

var createUser = require('./createUser');
var signup = require('./signup');

router.post('/createUser', (req, res) =>{
    createUser(req, res);
});


router.post('/signup', (req, res) =>{
    signup(req, res);
});

module.exports = router;