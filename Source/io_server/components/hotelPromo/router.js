var express = require("express");
var router = express.Router();
const path = require('path');

const email = require('./../emailer/accountCreatedEmail');

const hotelImage = require("./hotelImage");

router.get('/hotelImage', (req, res)=>{
    hotelImage(req, res);
});

router.get('/sendEmail', (req, res)=>{
    email(req, res);
});

module.exports = router;