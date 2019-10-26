import React from 'react'
import image from "../img/2.jpg"
import "./BookItem.css"

export default function BookItem({location}) {
    console.log(location)
    const {book}=location.state
    return (
        <div className="bookItem" style={{minHeight:"100vh",width:"100vw",color:"white",backgroundImage:`url(${image})`,backgroundSize:"cover"}}>
           <h1 className="bg-dark">{book.title}</h1>
           <div > <p>{book.longDescription}</p></div>
           
           <h2>{book.pageCount}</h2>
           <img src={book.thumbnailUrl} alt="book"/>
        </div>
    )
}
