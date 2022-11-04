const jwt = require("jsonwebtoken");


const midd= function (req, res, next) {
    
    let token = req.headers["x-auth-token"];
   // if (!token) token = req.headers["x-Auth-token"];
  
   
    if (!token) return res.send({ status: false, msg: "token must be present" });

   let decodedToken = jwt.verify(token, "functionup-Lithium-very-very-secret-key");
   if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    next()
}

module.exports.midd=midd