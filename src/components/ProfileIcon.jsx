import React, { Component } from 'react'
import {Dropdown,DropdownButton} from "react-bootstrap"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import config from "../clientConfig"

class ProfileIcon extends Component {
    handleSignout=()=>{
        localStorage.removeItem("Token4user")
        this.props.loginUser({user:"",login:false})
        this.props.history.push("/")
    }
    borrowBooks=()=>{
            fetch(`${config().server}/userborrowedbooks`,{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify({
                    user:this.props.User
                })
            }).then(res=>res.json())
            .then(res1=>this.props.SearchedBook(res1.user.bookBorrow) )
    }
    render() {
        return (
            <DropdownButton id="dropdown-basic-button" title="Profile">
            <Dropdown.Item onClick={this.borrowBooks}>Books Borrowed</Dropdown.Item>
            <Dropdown.Item onClick={this.handleSignout}>SignOut</Dropdown.Item>
          </DropdownButton>
        )
    }
}
const mapStateToProps=(state)=>{
    return state
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
      loginUser:(value)=>dispatch({type:"loggedin",payload:value}),
      SearchedBook:(book)=>dispatch({type:"searchbook",payload:book})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(ProfileIcon))