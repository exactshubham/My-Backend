const jwt= require("jsonwebtoken");
const assuserModel= require("../models/assuserModel")

const createUser = async function (abcd, xyz) {
    let data = abcd.body;
    let savedData = await assuserModel.create(data);
    console.log(abcd.newAtribute);
    xyz.send({ msg: savedData });
  };
  
  const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await assuserModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
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
    res.send({ status: true, data: token });
  };
  
  const getUserData = async function (req, res) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
   
    let userId = req.params.userId;
    let userDetails = await assuserModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: userDetails });
  };
  
  const updateUser = async function (req, res) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if (!token) return res.send({ status: false, msg: "token must be present" });
   
  
    let userId = req.params.userId;
    let user = await assuserModel.findById(userId);
  
    if (!user) {
      return res.send("No such user exists");
    }
  
    let userData = req.body;
    let updatedUser = await assuserModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: true, data: updatedUser, new :true });
  };

  const deleteUser = async function(req, res){
     let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if (!token) return res.send({ status: false, msg: "token must be present" });
      
    let userId =req.params.userId;
    let user = await assuserModel.findById(userId);

    if (!user) {
        return res.send("No such user exists");
      }
      
   
    let updatedUser = await assuserModel.findOneAndUpdate({ _id: userId }, {$set :{isDeleted: true}});
    res.send({ status: true , data: updatedUser, new :true });
  
  }
  
 
  
  module.exports.createUser = createUser;
  module.exports.loginUser = loginUser;
  module.exports.getUserData = getUserData;
  module.exports.updateUser = updateUser;
  module.exports.deleteUser = deleteUser
 
  