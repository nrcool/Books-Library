const mongoose=require("mongoose");
const Schema=mongoose.Schema

let Book=new Schema({
        title: String,
      pageCount:Integer,
      publishedDate:String,
      thumbnailUrl:String ,
      shortDescription:String,
      longDescription: String,
      BorrowStatus:Boolean,
      BorrowDate:Date,
      ReturnDate:Date,
      authors:String,
      categories:String
})



module.exports=mongoose.model("books",Book) 