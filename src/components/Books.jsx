import React, { Component } from 'react'
import { Col, Row, Container, Image, Button, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import PaginationBasic from "./Pagination"
import {connect} from "react-redux"

class Books extends Component {
    constructor(props){
        super(props)
    this.state = {
        loading: true,
        limit:10,
    }  
    }
    
    componentDidMount() {
           this.getBookdData()       
    }
    getBookdData=()=>{
        fetch(`http://localhost:4000/books?page=${this.props.currentPage}&limit=${this.state.limit}`)
        .then(res => res.json())
        .then(res1 =>this.setState({loading: false },()=>{
                this.props.mybooks(res1) 
            })  
       )
    }
    handleActive=(num)=>{
    this.props.funcCurrentPage(num) 
       this.getBookdData()
    }
    render() {
        return (
            <div className="booksBlock">

                <Container className="bookContainer rounded mt-1 " >
                   {!this.state.loading ?<> {this.props.books.map((book, i) => {
            return (<Link to={{ pathname: `/${book.title}`, state: { book: book} }} key={i}> <Row className="bg-dark p-1 text-white" style={{ width:"500px",boxShadow: "5px 2px 10px 10px black" }}>
                <Col md={5} xs={5}>
                    <p>Book Title :<span>{book.title} </span></p>
                    <p>Authr Name :<span>...... </span></p>
                    <p>Year:<span>...... </span></p>
                </Col>
                <Col md={3} xs={3} className="d-flex flex-column align-items-center">
                    <Button variant="success" className="bg-success">Borrow</Button>
                    <Button variant="warning" className="bg-warning">Return</Button>
                    <h5 className="text-white"><i>Available </i></h5>
                </Col>
                <Col md={3} xs={3}>
                    <Image src={book.thumbnailUrl} width="120" height="150" rounded />
                </Col>
            </Row> </Link>)
        })} <PaginationBasic 
        handleActive={this.handleActive}
        /> </> : <Spinner style={{marginTop:"20px" ,width:"300px",height:"300px"}} animation="border" as="h1" variant="dark"  role="status">
                        <span className="sr-only text-white">Loading...</span>
                    </Spinner>}
                </Container>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
return state
}

const mapDispatchToProps=(dispatch)=>{
    return{
        mybooks:(res)=>dispatch({type:"getBooks",payload:res}),
        funcCurrentPage:(num)=>dispatch({type:"changecurrentpage",payload:num})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Books)