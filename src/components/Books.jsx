import React, { Component } from 'react'
import image from "../img/2.jpg"
import { Col, Row, Container,Image, Button } from "react-bootstrap"

export default class Books extends Component {
    render() {
        return (
            <div className="booksBlock">
                <Container className="rounded mt-1" >
                    <Row className="bg-dark p-1 text-white" style={{boxShadow:"5px 2px 10px 10px black"}}>
                        <Col md={5} xs={5}>
                        <p>Book Title :<span>...... </span></p>
                        <p>Authr Name :<span>...... </span></p>
                        <p>Year:<span>...... </span></p>
                         </Col>
                        <Col md={3} xs={3} className="d-flex flex-column align-items-center">
                        <Button variant="success" className="bg-success">Borrow</Button>
                        <Button variant="warning" className="bg-warning">Return</Button>
                        <h5 className="text-white"><i>Available </i></h5>
                        </Col>
                        <Col md={3} xs={3}>
                            <Image src={image} width="120" height="150" rounded />
                        </Col>
                    </Row>
                </Container>
               
            </div>
        )
    }
}
