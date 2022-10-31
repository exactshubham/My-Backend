const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author"
    }, 
    Publisher_id: {
        type: ObjectId,
        ref: "Publisher"
    },
    price: Number,
    ratings: Number,
    isHardCover:{
        type:String,
        default:false
    }

}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
