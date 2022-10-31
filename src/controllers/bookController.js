const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const PublisherModel=require("../models/PublisherModel")
const createBook= async function (req, res) {
    let data = req.body
    let {author_id, Publisher_id} = data
    if(!author_id){
        return res.send({msg:"authorId Key is Required"})
    }
    else if(!Publisher_id){
        return res.send({msg:"PublisherId Key is required"})
    }
    let Publisher=await PublisherModel.findById({_id:Publisher_id})
    let Author=await authorModel.findById({_id:author_id})

    if(!Publisher){
        res.send({msg:"this Publisher is not found in Database"})
    }else if(!Author){
        res.send({msg:"this Author is not found in Database"})
    }else{

        let bookCreated = await bookModel.create(data)
        res.send({data: bookCreated})
    }
    
}

const getBooksWithAuthorDetailsAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('Publisher_id')
    res.send({data: specificBook})

 }


 const getBooksData= async function (req, res) {
    let books = await bookModel.updateMany({$set: {isHardCover:false,upsert:true,new:true}})
    res.send({data: books})
}

const updatingkeyvalue = async function (req, res) {
    
    let saveData = await PublisherModel.find({ $or: [{ name: 'Penguin' }, { name: 'HarperCollins' }] }).select({ _id: 1 })
    let arr = []
    for (let index = 0; index < saveData.length; index++) {
        const element = saveData[index];
        let id = element._id
        let book = await bookModel.updateMany({ Publisher_id: id }, { isHardCover: true })
        arr.push(book)
    }
    res.send({ msg:arr})

}

const updatingbookprice = async function (req, res) {
    let saveData = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let arr = []
    for (let index = 0; index < saveData.length; index++) {
        const element = saveData[index];
        let id = element._id
        let book = await bookModel.updateMany({ author_id: id }, { price: 60 })
        arr.push(book)
    }
    res.send({msg:arr})

}
  
  
module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetailsAndPublisherDetails= getBooksWithAuthorDetailsAndPublisherDetails
module.exports.getBooksData= getBooksData
module.exports.updatingkeyvalue=updatingkeyvalue
module.exports.updatingbookprice=updatingbookprice