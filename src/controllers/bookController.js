const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let {author_id, name} = req.body
    if(!author_id){
        return res.send("authorId is Required")
    }
    if(!name){
        return res.send("name is required")
    }
    let body = req.body
    let bookCreated = await bookModel.create(body)
    res.send({data: bookCreated})
}

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

const getBooksWithAuthorDetailsAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('Publisher_id')
    res.send({data: specificBook})

 }

module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetailsAndPublisherDetails = getBooksWithAuthorDetailsAndPublisherDetails
