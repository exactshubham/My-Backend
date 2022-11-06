const authenticate = async function(req, req, next) {
    let userId =req.params.userId;
    let user = await assuserModel.findById(userId);

    if (!user) {
        return res.send("No such user exists");
      }
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
    //check the token in request header
    //validate this token

    next()
}

module.exports.authenticate=authenticate
