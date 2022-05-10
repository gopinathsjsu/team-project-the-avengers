var express = require("express");
var router = express.Router();

//const requiresAdmin=require("./admin_auth");

const requiresAdmin1=require("./admin_auth1");
/*
router.post('./requiresAdmin', (req,res, next)=>{
    requiresAdmin(req,res, next);
});
*/
module.exports = router;
/*
app.get('/admin',(req,res, next)=>{
    res.json({
        'status':true
    })
})
*/