const createError = require("http-errors")
const Configuration = require("../configration/congif")
const mongoose = require("mongoose")
const User =require("../models/userSchema")
const bcrypt=require("bcryptjs")
let config = Configuration()

mongoose.connect(config.db, { useNewUrlParser: true,useCreateIndex:true, useUnifiedTopology: true }, () => console.log("db connected"))

const userSignup = (req, res, next) => {
    console.log(req.body)
    let Newuser=new User({
        email:req.body.email,
       password:req.body.password
    })
    Newuser.save()
    res.status(200).json({
        message: "received signup request by the server",
        success: true
    })
}

const userLogin = (req, res, next) => {
    console.log(req.body.username)
    res.status(200).json({
        message: "received Login request by the server",
        success: true
    })
}


module.exports = {
    userLogin, userSignup
}