import React, { Component } from 'react'
import Login from './Login';
import Signup from './Signup';
import image from "../img/2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default class LoginSignup extends Component {
    state={
        login:true,
        register:false
      }
    render() {
        return (
            <div className="App" style={{backgroundImage:`url(${image})`,backgroundSize:"cover"}}>
            <div className="login-page-cont">
              <div className="forms-cont" id="signInSection">
                {this.state.login?<Login/>:<Signup/>       
                }
                <button type="button" className="btn signin-btn" onClick={()=>this.setState({login:!this.state.login})} id="goToSignInSection">
                  {this.state.login?<span id="signup" >Sign-up</span>:<span id="login">Login</span> }
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        )
    }
}
