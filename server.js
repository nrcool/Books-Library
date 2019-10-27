const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const {errorController}= require("./errorHandler/errorHandler")
const cors=require("cors")
const port = process.env.PORT || 4000;
const userRoute=require("./routes/userRoute")
const bookRouter=require("./routes/booksRoute")
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cors({origin: 'http://localhost:3000'}))



app.use("/",cors(),userRoute,errorController)
app.use("/books",bookRouter,errorController)

app.listen(port,()=>{
    console.log("server is running "+port)
})