import React from "react"
import {Nav,Form,FormControl,Navbar,Button} from "react-bootstrap"
import ProfileIcon from "./ProfileIcon"
import { connect } from "react-redux"
import config from "../clientConfig"

 class Navigationbar extends React.Component{
   state={
     search:""
   }
  searchbook=(e)=>{
    e.preventDefault()
    fetch(`${config().server}/books/search`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({search:this.state.search})})
    .then(res=>res.json())
    .then(res1=>{
      this.props.SearchedBook([res1.book])
      this.setState({search:""})
      console.log(res1)})
  }

  SortbyAuthor=()=>{
    fetch(`${config().server}/books/searchbyauthor`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({startIndex:this.props.currentPage,endIndex:this.props.nextPage})})
    .then(res=>res.json())
    .then(res1=>{
      this.props.SearchedBook(res1.books)
      console.log(res1)})
  }
  SortbyTitle=()=>{
    fetch(`${config().server}/books/searchbytitle`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({startIndex:this.props.currentPage,endIndex:this.props.nextPage})})
    .then(res=>res.json())
    .then(res1=>{
      this.props.SearchedBook(res1.books)
      console.log(res1)})
  }
  render(){
    return (
        <Navbar bg="dark" variant="dark" style={{width:"85vw"}}>
              <Navbar.Brand href="#home">Books Shelf</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/mainpage">Books</Nav.Link>
                <Nav.Link href="#/mainpage/bytitle" onClick={this.SortbyTitle}>By Title</Nav.Link>
                <Nav.Link href="#/mainpage/byauthor" onClick={this.SortbyAuthor}>By Author Name</Nav.Link>
              </Nav>
              <Form inline onSubmit={this.searchbook}>
                <FormControl type="text" onChange={(e)=>this.setState({search:e.target.value})} placeholder="Search" className="mr-sm-2" />
                <Button type="submit" variant="outline-info">Search</Button>
                <ProfileIcon/>
              </Form>
            </Navbar>
    )
}
  }

  const mapDispatchToProps=(dispatch)=>{
      return{
        SearchedBook:(book)=>dispatch({type:"searchbook",payload:book})
      }
  }
  const mapStateToProps=(state)=>{
    return state
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Navigationbar)