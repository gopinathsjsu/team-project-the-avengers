const jwt = require("jsonwebtoken");

const requiresAdmin = function (req, res, next){
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(401).send({message: 'No token provided'});
  }

  try {
    const decoded = jwt.verify(token, "" + process.env.TOKEN_KEY);
    req.user = decoded.user_id;

    if (decoded.user_type === 'admin') {
      return next();
    } else {
      return res.status(401).send({message: 'Unauthorized Access'});
    }
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
}

module.exports= requiresAdmin;