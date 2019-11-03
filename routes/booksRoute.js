const express=require("express");
const booksRouter=express.Router();
const {getBooks,Borrowbook,search,sortByTitle,sortByAuthor,bookReturn}=require("../controllers/books")


booksRouter.get("/",getBooks)
booksRouter.post("/bookborrow",Borrowbook)
booksRouter.post("/search",search)
booksRouter.post("/searchbytitle",sortByTitle)
booksRouter.post("/searchbyauthor",sortByAuthor)
booksRouter.post("/returnbook",bookReturn)
module.exports = booksRouter