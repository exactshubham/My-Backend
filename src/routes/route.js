const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const assuserController=require("../controllers/assuserController")
const middleware=require("../middleware/assauth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

//The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

// router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)


router.post("/users", assuserController.createUser)

router.post("/login", assuserController.loginUser)


router.get("/users/:userId",middleware.authenticate, assuserController.getUserData)
router.put("/users/:userId",middleware.authenticate, assuserController.updateUser)
router.delete('/users/:userId',middleware.authenticate, assuserController.deleteUser)

module.exports = router;