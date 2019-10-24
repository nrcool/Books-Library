
  import React, { Component } from 'react'
  import image from "../img/2.jpg"
import Navigationbar from './Navbar'
import PaginationBasic from './Pagination'
import Books from './Books'


  export default class MainPage extends Component {
      render() {
          return (
            <div className="mainpage"style={{backgroundImage:`url(${image})`,backgroundSize:"cover"}}> 
            <Navigationbar/>
            <Books/>
            <PaginationBasic/>
          </div>
          )
      }
  }
  