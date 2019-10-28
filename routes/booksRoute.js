const express=require("express");
const booksRouter=express.Router();
const {getBooks,Borrowbook,search,sortByTitle}=require("../controllers/books")


booksRouter.get("/",getBooks)
booksRouter.post("/bookborrow",Borrowbook)
booksRouter.post("/search",search)
booksRouter.post("/searchbytitle",sortByTitle)
module.exports = booksRouter