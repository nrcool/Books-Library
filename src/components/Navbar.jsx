import React from "react"
import {Nav,Form,FormControl,Navbar,Button} from "react-bootstrap"
import ProfileIcon from "./ProfileIcon"
import { connect } from "react-redux"
import config from "../clientConfig"
import {NavLink} from "react-router-dom"

 class Navigationbar extends React.Component{
   state={
     search:""
   }
  searchbook=(e)=>{
    e.preventDefault()
    if(this.state.search.trim()!==""){
        fetch(`${config().server}/books/search`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({search:this.state.search})})
    .then(res=>res.json())
    .then(res1=>{
      this.props.SearchedBook([res1.book])
      this.setState({search:""})
      console.log(res1)})
    }
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
              <NavLink to="/"><Navbar.Brand >Books Shelf</Navbar.Brand> </NavLink>
              <Nav className="mr-auto">
                <NavLink to="/mainpage"> <Nav.Link >Books</Nav.Link></NavLink>
                <NavLink to="/mainpage/bytitle"><Nav.Link  onClick={this.SortbyTitle}>By Title</Nav.Link></NavLink>
                <NavLink to="/mainpage/byauthor"> <Nav.Link  onClick={this.SortbyAuthor}>By Author Name</Nav.Link></NavLink>
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