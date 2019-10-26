const express=require("express");
const booksRouter=express.Router();
const {getBooks}=require("../controllers/books")


booksRouter.get("/",getBooks)


module.exports = booksRouter