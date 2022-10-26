const mongoose = require('mongoose');

const newbookSchema = new mongoose.Schema( {
    bookName: {type:String,
               required:true,
               unique:true  }, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    year :{ type : Number,
            default:2021} ,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    category:{ type:String,
            enum: ["Motivation", "SciFi", "Horror", "Adventure", "Fantasy", "Travel", "Literature"]   
},
    totalPages:{type : String,
            default:500},
    stockAvailable: {type :String,
            default : true},
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('newbook', newbookSchema) 


