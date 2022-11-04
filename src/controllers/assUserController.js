const jwt = require("jsonwebtoken");
const assUserModel = require("../models/assUserModel");


const createUSER = async function (abcd, xyz) {
 
  let data = abcd.body;
  let savedData = await assUserModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};

const loginUSER = async function (req, res) {
  let emailId = req.body.emailId;
  let password = req.body.password;

  let user = await assUserModel.findOne({ emailId: emailId, password: password });
  if (!user) return res.send({ status: false, msg: "username or the password is not correct" })
  console.log(user) 
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Lithium",
      organisation: "FunctionUp",
    },
    "functionup-Lithium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

const getUSERData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

 
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

 
  let decodedToken = jwt.verify(token, "functionup-Lithium-very-very-secret-key");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await assUserModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
 
};

const updateUSER = async function (req, res) {
  
  let userId = req.params.userId;
  let user = await assUserModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

 
  if (!token) return res.send({ status: false, msg: "token must be present" });


  let userData = req.body;
  let updatedUser = await assUserModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUSER  = async function (req, res) {
  let userId = req.params.userId;
  let user = await assUserModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });


  let deleteData= req.body;
  let deleteUser= await assUserModel.findOneAndUpdate({_id: userId}, {isDeleted:true} , deleteData);
  res.send({ status: deleteUser, data:deleteUser})
}


module.exports.createUSER = createUSER;
module.exports.getUSERData = getUSERData;
module.exports.updateUSER = updateUSER;
module.exports.loginUSER = loginUSER;
module.exports.deleteUSER = deleteUSER
