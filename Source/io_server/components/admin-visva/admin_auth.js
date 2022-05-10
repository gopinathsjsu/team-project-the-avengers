const jwt = require("jsonwebtoken");

const requiresAdmin = function (req, res, next){
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

    try {
        const decoded = jwt.verify(token, "" + process.env.TOKEN_KEY);
        req.user = decoded.user_id;
      } catch (err) {
        return res.status(401).send("Invalid Token");
      }
      if(req.user_type=='admin'){
      return next();
      }
      else{
        res.status(401).send("error");
      }

}

module.exports= requiresAdmin;