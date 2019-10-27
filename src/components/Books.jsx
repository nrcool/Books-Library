import React, { Component } from 'react'
import { Col, Row, Container, Image, Button, Spinner, Modal, ButtonToolbar} from "react-bootstrap"
import { Link } from "react-router-dom"
import PaginationBasic from "./Pagination"
import { connect } from "react-redux"

class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            limit: 10,
            show: false,
            dueDate:new Date(),
            borrowBook:""
        }
    }

    componentDidMount() {
        this.getBookdData()
    }
    getBookdData = () => {
        fetch(`http://localhost:4000/books?page=${this.props.currentPage}&limit=${this.state.limit}`)
            .then(res => res.json())
            .then(res1 => this.setState({ loading: false }, () => {
                this.props.mybooks(res1)
            })
            )
    }
    handleActive = (num) => {
        this.props.funcCurrentPage(num)
        this.getBookdData()
    }
    borrow = (book,e) => {
        e.preventDefault()
        this.setState({
            show: true,
            borrowBook:book
        })
        console.log("borrow book")
    }
    handleHide = () => {
        this.setState({
            show: false
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleConfirm = () => {
        this.setState({
            show: false
        })
        this.props.borrowBookfunc(this.state.borrowBook)
        console.log(this.props)
    }
    selectDays=(e)=>{
        let dayselected=e.target.value;
        let dueDate=(Date.now()+(dayselected*24*60*60*1000))
        let date=new Date(dueDate)
        this.setState({
            dueDate:date
        })
    }
    render() {
   console.log(this.props)
        return (
            <div className="booksBlock">

                <Container className="bookContainer rounded mt-1 " >
                    {!this.state.loading ? <> {this.props.books.map((book, i) => {
                        return (<Link to={{ pathname: `/${book.title}`, state: { book: book } }} key={i}> <Row className="bg-dark p-1 text-white" style={{ width: "500px", boxShadow: "5px 2px 10px 10px black" }}>
                            <Col md={5} xs={5}>
                                <p>Book Title :<span>{book.title} </span></p>
                                <p>Author Name :<span>{book.authors[0]} </span></p>
                                <p>Year:<span>{book.publishedDate} </span></p>
                            </Col>
                            <Col md={3} xs={3} className="d-flex flex-column align-items-center">
                                <Button variant="success" className="bg-success" disabled={this.props.booksBorrowed.includes(book)} onClick={(e)=>this.borrow(book,e)}>Borrow</Button>
                                <Button variant="warning" className="bg-warning" disabled={!this.props.booksBorrowed.includes(book)} onClick={this.return}>Return</Button>
                                <h5 className="text-white">{this.props.booksBorrowed.includes(book)?<i>Not Available </i> :<i>Available </i> }</h5>
                            </Col>
                            <Col md={3} xs={3}>
                                <Image src={book.thumbnailUrl} width="120" height="150" rounded />
                            </Col>
                        </Row> </Link>)
                    })} <PaginationBasic
                            handleActive={this.handleActive}
                        /> </> : <Spinner style={{ marginTop: "20px", width: "300px", height: "300px" }} animation="border" as="h1" variant="dark" role="status">
                            <span className="sr-only text-white">Loading...</span>
                        </Spinner>}
                        <Modal show={this.state.show} onHide={this.handleHide}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Return Date:</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><ButtonToolbar>Select Days: 
                                    <select name="selectdays" onChange={this.selectDays}> 
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>

                                        </select>
                                        {this.state.dueDate.toUTCString()}
                                </ButtonToolbar></Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
          </Button>
                                    <Button variant="primary" onClick={this.handleConfirm}>
                                        Confirm
          </Button>
                                </Modal.Footer>
                            </Modal>
                </Container>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        mybooks: (res) => dispatch({ type: "getBooks", payload: res }),
        funcCurrentPage: (num) => dispatch({ type: "changecurrentpage", payload: num }),
        borrowBookfunc:(book)=>dispatch({type:"bookborrow",payload:book})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Books)