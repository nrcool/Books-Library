import React from 'react'
import image from "../img/2.jpg"
import "./BookItem.css"

export default function BookItem({location}) {
    console.log(location)
    const {book}=location.state
    return (
        <div className="bookItem" style={{minHeight:"100vh",width:"100vw",color:"white",backgroundImage:`url(${image})`,backgroundSize:"cover"}}>
             <img className="imagebook" src={book.thumbnailUrl} width="150" height="200" alt="book"/>
           <h1 className="bg-dark">{book.title}</h1>
           <div > <p>{book.longDescription}</p></div>
           
           <h4 className="bg-dark">Number of Pages :{book.pageCount}</h4>
         
        </div>
    )
}
