let mongoose = require('mongoose')
const bcrypt = require('bcrypt')
let schema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    // nickName:{
    //     type:String,
    //     default:''
    // },
    password:{type:String, required:true},
    passwordAgain:{type:String, required:true},
});

schema.pre('save', function (next){
    const user = this

    bcrypt.hash(user.password,10,(error, hash) => {
        user.password = hash
        next()
    })
})

let userModel = new mongoose.model('User',schema);
module.exports = userModel;

/*
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
var uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please provide username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    }
});

UserSchema.plugin(uniqueValidator)

UserSchema.pre('save', function (next){
    const user = this

    bcrypt.hash(user.password,10,(error, hash) => {
        user.password = hash
        next()
    })
})

const User = mongoose.model('User',UserSchema)
module.exports = User
* */