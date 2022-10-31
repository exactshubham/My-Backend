const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    //console.log("this line will execute before the above line") due to async behaviour which we made by using async,await
    // Javascript is Synchronous,Single Threaded with Blocking Model.
    // By async, await we made it Asynchronous, Multi Threaded, Non Blocking Model.
    res.send({data: authorCreated})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData
