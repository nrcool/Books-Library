const createError = require("http-errors")
const Configuration = require("../configration/congif")
const mongoose = require("mongoose")
const Books =require("../models/bookSchema")
let config = Configuration()
let User=require("../models/userSchema")

mongoose.connect(config.db, { useNewUrlParser: true,useCreateIndex:true, useUnifiedTopology: true }, () => console.log("db connected"))

const getBooks = (req, res, next) => {
    let page=parseInt(req.query.page);
    let limit=parseInt(req.query.limit);
    let startIndex=(page-1)*limit;
    let endIndex=page*limit;
   console.log(page,limit,startIndex,endIndex);
    Books.find({}).then((books)=>{
        let totalPages=books.length/limit;
        if(!Number.isInteger(totalPages)){
            totalPages=Math.ceil(totalPages)
        } 
            let prevPage=page!==1?page-1:0
            let nextPage=page!=totalPages?page+1:0
   
        let reqBooks=books.slice(startIndex,endIndex)
         res.status(200).json({books:reqBooks,nextPage:nextPage,prevPage:prevPage,totalPages:totalPages}) 
    })
  
}

const Borrowbook=(req,res,next)=>{
  
    Books.findOne({_id:req.body.book._id}).then(book=>{
        book.DueDate=req.body.dueDate
        book.save().then((addbook)=>{
             User.findOne({username:req.body.user}).then(user=>{
        user.bookBorrow.push(addbook)
        user.save()
    })
        })
    })
   
}
module.exports={
    getBooks,Borrowbook
}

