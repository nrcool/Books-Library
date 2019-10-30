import React, { Component } from 'react'
import {Dropdown,DropdownButton} from "react-bootstrap"
import {withRouter} from "react-router-dom"

class ProfileIcon extends Component {
    handleSignout=()=>{
        localStorage.removeItem("Token4user")
        this.props.history.push("/")
    }
    render() {
        return (
            <DropdownButton id="dropdown-basic-button" title="Profile">
            <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Books Borrowed</Dropdown.Item>
            <Dropdown.Item onClick={this.handleSignout}>SignOut</Dropdown.Item>
          </DropdownButton>
        )
    }
}

export default withRouter(ProfileIcon)