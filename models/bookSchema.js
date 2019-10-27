const mongoose=require("mongoose");
const Schema=mongoose.Schema

let Book=new Schema({
      title: String,
      pageCount:String,
      publishedDate:String,
      thumbnailUrl:String ,
      shortDescription:String,
      longDescription: String,
      BorrowStatus:Boolean,
      BorrowDate:Date,
      DueDate:Date,
      authors:Array,
      categories:Array
})



module.exports=mongoose.model("books",Book) 