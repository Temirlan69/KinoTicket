let mongoose = require('mongoose')
let schema = new mongoose.Schema({
    author:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        default:''
    },
    nickname:{
        type:String,
        default:''
    },
    number:{type:String, required:true},

});
let bookModel = new mongoose.model('Booking',schema);
module.exports = bookModel;