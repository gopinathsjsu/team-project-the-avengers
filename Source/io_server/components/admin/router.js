var express = require("express");
var router = express.Router();
const multer = require('multer');


var uploadFiles = require('./uploadFiles');


let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './storage/admin/adminCSVFiles/');
    },
    filename: function(req, file, cb){
        cb(null, req.body.fileType + '.csv');
    }
});
let upload = multer({storage: storage});

router.post('/uploadFiles', upload.single('dataFile'), (req, res) =>{
    uploadFiles(req, res, req.body.fileType);
});


module.exports = router;