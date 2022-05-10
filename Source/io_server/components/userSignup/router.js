var express = require("express");
var router = express.Router();

var createUser = require('./createUser');

var login1=require('./login1');
var signup1=require('./signup1');
//var auth=require('./verifyToken');
const verifyToken = require("./auth");
//const requiresAdmin=require("../admin-visva/admin_auth");
/*
router.post('./requiresAdmin', (req,res, next)=>{
    requiresAdmin(req,res, next);
});
*/
router.post('./verifyToken', (req,res)=>{
    verifyToken(req,res);
});
router.post('/createUser', (req, res) =>{
    createUser(req, res);
});

router.post('/signup1', (req, res) =>{
    signup1(req, res);
});


router.post('/login1', (req,res) =>{
    login1(req,res);
});
module.exports = router;