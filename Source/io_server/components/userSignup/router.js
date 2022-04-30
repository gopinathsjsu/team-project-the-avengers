var express = require("express");
var router = express.Router();

var createUser = require('./createUser');
var signup = require('./signup');
var login=require('./login');

router.post('/createUser', (req, res) =>{
    createUser(req, res);
});

router.post('/signup', (req, res) =>{
    signup(req, res);
});

router.post('/login', (req,res) =>{
    login(req,res);
});

module.exports = router;