var express = require("express");
var router = express.Router();


const hotelImage = require("./hotelImage");

router.get('/hotelImage', (req, res)=>{
    hotelImage(req, res);
});


module.exports = router;