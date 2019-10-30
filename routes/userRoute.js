const express=require("express");
const router=express.Router();
const {userLogin,userSignup,userBooks}=require("../controllers/user")


router.post("/login",userLogin)
router.post("/signup",userSignup)
router.post("/userborrowedbooks",userBooks)
module.exports = router