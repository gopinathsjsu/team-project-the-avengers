var express = require("express");
var router = express.Router();

var createUser = require('./createUser');
var signup = require('./signup');
var login=require('./login');
var login1=require('./login1');
var signup1=require('./signup1');
//var auth=require('./verifyToken');
const verifyToken = require("./auth");

router.post('./verifyToken', (req,res)=>{
    verifyToken(req,res);
});
router.post('/createUser', (req, res) =>{
    createUser(req, res);
});

router.post('/signup', (req, res) =>{
    signup(req, res);
});

router.post('/signup1', (req, res) =>{
    signup1(req, res);
});

router.post('/login', (req,res) =>{
    login(req,res);
});

router.post('/login1', (req,res) =>{
    login1(req,res);
});
module.exports = router;