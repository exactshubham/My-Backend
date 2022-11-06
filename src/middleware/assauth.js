const jwt = require("jsonwebtoken")
const assuserModel=require("../models/assuserModel")


const authenticate = async function(req, res, next) {
    let userId = req.params.userId;
    let user = await assuserModel.findById(userId);

    if (!user) {
        return res.send("No such user exists")
      };

      let token = req.headers["x-auth-token"];
      if (!token) token = req.headers["x-Auth-token"];
    
      if (!token) return res.send({ status: false, msg: "token must be present" });
     
    let decodedToken = jwt.verify(token, "functionup-Lithium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
    //check the token in request header
    //validate this token

    next()
}

module.exports.authenticate=authenticate
