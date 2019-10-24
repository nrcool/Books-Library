import React from "react"
import {Nav,Form,FormControl,Navbar,Button} from "react-bootstrap"
import ProfileIcon from "./ProfileIcon"


export default function Navigationbar() {
    return (
        <Navbar bg="dark" variant="dark" style={{width:"85vw"}}>
              <Navbar.Brand href="#home">Books Shelf</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Books</Nav.Link>
                <Nav.Link href="#features">By Title</Nav.Link>
                <Nav.Link href="#pricing">By Author Name</Nav.Link>
              </Nav>
              <Form inline onSubmit={()=>console.log("Search")}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button type="submit" variant="outline-info">Search</Button>
                <ProfileIcon/>
              </Form>
            </Navbar>
    )
}
