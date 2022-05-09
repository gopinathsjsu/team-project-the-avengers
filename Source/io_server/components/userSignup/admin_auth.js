//var verifyToken = require('../userSignup/auth');
/*
var express = require("express");
var router = express.Router();

router.post('/adminStuff', requiresAdmin, (req, res, next) =>{
    //some stuff that only admin can access
    console.log("admin stuff");
   // "message":"admin stuff message";
});
*/

function requiresAdmin(req, res, next){
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

    const decoded = jwt.verify(token, "" + process.env.TOKEN_KEY);
    req.user = decoded.user;
    if(decoded.user_type==="admin"){
        return next();
    }
    else{
        return res.status(401).send("not an admin");
    }
    
    /*
    if(req.user.admin !== true){
        res.status(401).end();
    }
    else{
        next();
    }*/
}

module.exports= requiresAdmin;