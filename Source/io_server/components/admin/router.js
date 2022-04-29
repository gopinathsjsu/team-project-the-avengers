var express = require("express");
var router = express.Router();
const multer = require('multer');


var uploadFiles = require('./uploadFiles');


let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, 'Yo.csv');
    }
});
let upload = multer({storage: storage});

router.post('/uploadFiles', upload.single('dataFile'), (req, res) =>{
    uploadFiles(req, res);
});


module.exports = router;