//var verifyToken = require('../userSignup/auth');
/*
router.post('/adminStuff', verifyToken, requiresAdmin, (req, res, next) =>{
    //some stuff that only admin can access
});
*/
function requiresAdmin(req, res, next){
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, "" + process.env.TOKEN_KEY);
        req.user = decoded.user_type;
        req.user=="admin"
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
    /*
    if(req.user.admin !== true){
        res.status(401).end();
    }
    else{
        next();
    }*/
}

module.exports= requiresAdmin;