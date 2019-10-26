
  import React, { Component } from 'react'
  import image from "../img/2.jpg"
import Navigationbar from './Navbar'
import Books from './Books'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
  class MainPage extends Component {
      render() {
          return (
            <div className="mainpage"style={{backgroundImage:`url(${image})`,backgroundSize:"cover"}}> 
           {this.props.loginUser?<> <Navigationbar/>
            <Books/> </>: <Redirect to="/"/>}
          </div>
          )
      }
  }
  const mapStateToProps=(state)=>{
    return state
  }
  export default connect(mapStateToProps)(MainPage)