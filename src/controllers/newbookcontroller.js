const newbookmodel= require("../models/newbookmodel")

const createnewbook= async function (req, res) {
    let data= req.body
    let savedData= await newbookmodel.create(data)
    res.send({msg: savedData})
}

const getnewbook= async function (req, res) {

    let allUsers= await newbookmodel.find().select({bookName:1, authorName:1, _id:0})
    res.send({msg: allUsers})
}


const getBooksInYear= async function (req, res) {
    let data = req.body
   let allUsers= await newbookmodel.find(data)
   res.send({msg: allUsers})
}


const getParticularBook= async function (req, res) {
     let data = req.body
    let allUsers= await newbookmodel.find(data)
    res.send({msg: allUsers})
}

const getXINRBooks= async function (req, res) {
   
   let allUsers= await newbookmodel.find({ "prices.indianPrice":{$in:["100INR","200INR","500INR"]}})
   res.send({msg: allUsers})
}


const getRandomBooks= async function (req, res) {
    
   let allUsers= await newbookmodel.find({totalPages : {$gt:500}})
   res.send({msg: allUsers})
}

module.exports.createnewbook=createnewbook
module.exports.getnewbook=getnewbook
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBook=getParticularBook
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks