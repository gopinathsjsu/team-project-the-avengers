var express = require("express");
var router = express.Router();
const multer = require('multer');
const path = require('path');

var verifyToken = require('../userSignup/auth');
var uploadFiles = require('./uploadFiles');


let storage = multer.diskStorage({
    destination: function(req, file, cb){
        // cb(null, './storage/admin/adminCSVFiles/');
        cb(null, path.join('.', 'storage', 'admin', 'adminCSVFiles'));
    },
    filename: function(req, file, cb){
        cb(null, req.body.fileType + '.csv');
    }
});
let upload = multer({storage: storage});

router.post('/uploadFiles', upload.single('dataFile'), verifyToken, requiresAdmin, (req, res, next) =>{
    uploadFiles(req, res, req.body.fileType);
});

function requiresAdmin(req, res, next){
    if(req.user.admin !== true){
        res.status(401).end();
    }
    else{
        next();
    }
}

module.exports = router;