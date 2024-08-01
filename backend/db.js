const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://learning:GNO0z745ZWvgVARG@cluster0.stznz.mongodb.net/linkedin");

const userSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        lowercase:true,
        uppercase:true
    },
    user_image:{
        data:buffer,
        contentType:String
    },
    user_age:{
        type:Number,
        required:true
    },
    user_mobileNo:{
        type:Number,
        required:true
    },
    user_email:{
        type:String,
        required:true,
        lowercase:true,
        uppercase:false
    },
    user_password:{
        type:String,
        required:true,
        lowercase:true,
        uppercase:true
    }
},{timestamps:true})

const postSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    post_text:{
        type:String,
        required:true
    },
    post_url:{
        data:buffer,
        contentType:String
    },
    likes_count:{
        type:Number,
        default:0
    }
},{timestamps:true})

const Users = mongoose.model('Users',userSchema)
const Posts = mongoose.model('Posts',postSchema)

module.exports = {
    Users, 
    Posts
}