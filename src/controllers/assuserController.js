const jwt= require("jsonwebtoken");
const assuserModel= require("../models/assuserModel")

const createUser = async function (abcd, xyz) {
  try{ 
  let data = abcd.body;
    let savedData = await assuserModel.create(data);
    console.log(abcd.newAtribute);
    xyz.status(201).send({ msg: savedData });
  }catch(error){
     xyz.status(500).send({status: false, message : error.message })
  }
};
  
  const loginUser = async function (req, res) {
   try{
    let userName = req.body.emailId;    //let {username,password} = req.body
    let password = req.body.password;   //
  
    let user = await assuserModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({
        status: false,
        msg: "username or the password is not correct",
      });
  
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Lithium",
        organisation: "FUnctionUp",
      },
      "functionup-Lithium"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token });
  }catch(error){
    res.status(500).send({status: false, error: error.message})
  }}
  
  const getUserData = async function (req, res) {
    try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
  
    console.log(token);
   
    let userId = req.params.userId;
     decodedToken=req.user;

    if(userId===decodedToken.userId){

    let userDetails = await assuserModel.findOne({_id:userId});
    if (userDetails){
    res.status(200).send({ status: true, data: userDetails });
    }else{
    return res.status(404).send({ status: false, msg: "No such user exists" })};

  }else{
    res.status(403).send({status: false, message: "Prohibited as maybe trying to accesss a different user's account"})
  }
}catch(error){
   res.status(500).send({status: false, error: error.message})
 }}
  
  const updateUser = async function (req, res) {
    try{
      let token = req.headers["x-Auth-token"];
      if (!token) token = req.headers["x-auth-token"];
    
      if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
    
      console.log(token);
     
      let userId = req.params.userId;
      let decodedToken=req.user;

      if(userId===decodedToken.userId){

      let userDetails = await assuserModel.findOne({_id:userId});
      if (userDetails){
      res.status(200).send({ status: true, data: userDetails });
      }else{
      return res.send({ status: false, msg: "No such user exists" })};

    }else{
      res.status(403).send({status: false, message: "Prohibited as maybe trying to accesss a different user's account"})};

    let userData = req.body;
    let updatedUser = await assuserModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: true, data: updatedUser, new :true });

  }catch(error){
    res.status(500).send({status: false, error: error.message})
  }}

  const deleteUser = async function(req, res){
    try{
      let token = req.headers["x-Auth-token"];
      if (!token) token = req.headers["x-auth-token"];
    
      if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
    
      console.log(token);
     
      let userId = req.params.userId;
      let decodedToken=req.user;

      if(userId===decodedToken.userId){

      let userDetails = await assuserModel.findOne({_id:userId});
      if (userDetails){
      res.status(200).send({ status: true, data: userDetails });
      }else{
      return res.send({ status: false, msg: "No such user exists" })};

    }else{
      res.status(403).send({status: false, message: "Prohibited as maybe trying to accesss a different user's account"})}
  
      let updatedUser = await assuserModel.findOneAndUpdate({ _id: userId }, {$set :{isDeleted: true}});
    res.send({ status: true , data: updatedUser, new :true });

   }catch(error){
    res.status(500).send({status: false, error: error.message})
  }}
  
  
  module.exports.createUser = createUser;
  module.exports.loginUser = loginUser;
  module.exports.getUserData = getUserData;
  module.exports.updateUser = updateUser;
  module.exports.deleteUser = deleteUser
 
  