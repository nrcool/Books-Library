const mongoose=require("mongoose");
const Schema=mongoose.Schema

const User=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    bookBorrow:{
        type:Array
    }
})

module.exports=mongoose.model("user",User)