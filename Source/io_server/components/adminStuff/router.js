var express = require("express");
var router = express.Router();

var addLocation = require('./addLocation');

router.post('/addLocation', (req, res) =>{
    addLocation(req, res);
});

module.exports = router;