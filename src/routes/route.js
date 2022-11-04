const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const assUserController= require("../controllers/assUserController");
const midd1= require("../middleware/auth");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/users", userController.createUser  )

//router.post("/login", userController.loginUser)

//The userId is sent by front end
//router.get("/users/:userId", userController.getUserData)

//router.put("/users/:userId", userController.updateUser)



router.post("/USERS",assUserController.createUSER);
router.post("/LOGIN", assUserController.loginUSER);
router.get("/users/:userId",midd1.midd, assUserController.getUSERData);
router.put("/users/:userId",midd1.midd, assUserController.updateUSER);
router.delete("/users/:userId",midd1.midd, assUserController.deleteUSER);

module.exports = router;