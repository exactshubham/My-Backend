const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package
const underscore = require('underscore');
const wel = require("../logger1/logger");
const ddd = require("../util/helper");

const eee = require("../validator/formatter")
router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Pritesh', 'Akash', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    console.log(wel.welcome());
    console.log(ddd.Currentdate(), ddd.getBatchInfo());
  
    console.log(eee.publicthree());
    console.log(eee.lodashpackage())
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;


