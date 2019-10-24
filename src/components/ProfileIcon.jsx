import React, { Component } from 'react'
import {Dropdown,DropdownButton} from "react-bootstrap"

export default class ProfileIcon extends Component {
    render() {
        return (
            <DropdownButton id="dropdown-basic-button" title="Profile">
            <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Books Borrowed</Dropdown.Item>
            <Dropdown.Item href="#/action-3">SignOut</Dropdown.Item>
          </DropdownButton>
        )
    }
}
