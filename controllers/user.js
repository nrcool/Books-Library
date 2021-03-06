const createError = require("http-errors")
const Configuration = require("../configration/congif")
const mongoose = require("mongoose")
const User =require("../models/userSchema")
const bcrypt=require("bcrypt")
let config = Configuration()
const jwt = require("jsonwebtoken")

mongoose.connect(config.db, { useNewUrlParser: true,useCreateIndex:true, useUnifiedTopology: true }, () => console.log("db connected"))

const userSignup = (req, res, next) => {
    console.log(req.body)
    if(req.body.username!==""&&req.body.email!==""&&req.body.password!==""){
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            if(err){
                res.status(500).json({
                    success: false,
                    message:"Error from server"
                }) 
            }else{     
        let Newuser=new User({
        username:req.body.username,
        email:req.body.email,
       password:hash
    })
    Newuser.save().then(()=>{
        console.log(config.secretKey);
        jwt.sign({username:req.body.username},config.secretKey,{expiresIn:"1h"},(err,token)=>{
            if(err){
                res.status(500).json({
                    success: false,
                    message:"Error from server"
                }) 
            }else{
               res.status(200).json({
        user: req.body.username,
        success: true,
        message:null,
        token:token

    })  
            }
        })
       
    })
    
            }
        })
        
    }else{
        res.status(200).json({
            success: false,
            message:"Please fill the missing field"
        })
    }
    
}

const userLogin = (req, res, next) => {
    
    User.findOne({username:req.body.username,}).then(user=>{
        if(user){
            bcrypt.compare(req.body.password,user.password).then(result=>{
               if(result){
                jwt.sign({username:req.body.username},config.secretKey,{expiresIn:"1h"},(err,token)=>{
                    if(err){
                        res.status(500).json({
                            success: false,
                            message:"Error from server"
                        }) 
                    }else{
                       res.status(200).json({
                user: req.body.username,
                success: true,
                message:null,
                token:token
        
            })  
                    }
                })
               }
            })
            
        }else{
            res.status(200).json({
                success: false,
                message:"username or password incorrect"
            })
        }
    })
}

const userBooks=(req,res,next)=>{
    console.log(req.body.user);
    User.findOne({username:req.body.user}).then(user=>{
        if(user){
            res.status(500).json({
                success: true,
                message:null,
                user:user
            })
        }else{
            res.status(500).json({
                success: false,
                message:"something wrong"
            })
        }
    })
}

module.exports = {
    userLogin, userSignup,userBooks
}