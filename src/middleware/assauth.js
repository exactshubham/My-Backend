const jwt = require("jsonwebtoken")
const assuserModel=require("../models/assuserModel")


const authenticate = async function(req, res, next) {
   try{ let userId = req.params.userId;                                     
    let user = await assuserModel.findById(userId);          
    if(!userId) {
      return res.status(400).send("userId is Required")
    };

    if (!user) {
        return res.status(404).send("No such user exists")
      };

      let token = req.headers["x-auth-token"];
      if (!token) token = req.headers["x-Auth-token"];
    
      if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
     else{
    let decodedToken = jwt.verify(token, "functionup-Lithium")
         if(decodedToken){
          req.user=decodedToken
          next();
      }else{
        res.status(401).send({status: false, msg : "The authentication token is invalid"})
      
      }
    }
    
}catch(error){
  return res.status(500).send({status:false, message : error.message})  // || "Invalid auth Token"
}}
    // if (!decodedToken)
    //   return res.send({ status: false, msg: "token is invalid" });
    //check the token in request header
    //validate this token

    // let decodedToken = jwt.verify(token, "functionup-Lithium",function(error){
    // if(error){
    //   res.status(401).send({status: false, msg : "token is invalid"})





module.exports.authenticate=authenticate




