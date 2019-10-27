const express=require("express");
const booksRouter=express.Router();
const {getBooks,Borrowbook}=require("../controllers/books")


booksRouter.get("/",getBooks)
booksRouter.post("/bookborrow",Borrowbook)

module.exports = booksRouter