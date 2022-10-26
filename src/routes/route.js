const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


const newbookcontroller= require("../controllers/newbookcontroller")


router.get("/test-me", function (req, res) {
   
    res.send("My first ever api!")
})


router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )


router.get("/getBooksData", BookController.getBooksData)



router.post("/createnewbook", newbookcontroller.createnewbook )

router.get("/getnewbook", newbookcontroller.getnewbook)

router.post("/getBooksInYear",newbookcontroller.getBooksInYear)

router.get("/getParticularBook", newbookcontroller.getParticularBook)

router.get("/getXINRBooks", newbookcontroller.getXINRBooks)

router.get("/getRandomBooks", newbookcontroller.getRandomBooks)

module.exports = router;