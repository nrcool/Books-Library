import React, { Component } from 'react'
import Login from './Login';
import Signup from './Signup';
import image from "../img/2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux"


class LoginSignup extends Component {
    state={
        login:true,
        register:false
      }
      componentDidMount(){
        let localData=JSON.parse(localStorage.getItem("Token4user"))
        if(localData){
          this.props.loginUser({user:localData.username,login:true})
          this.props.history.push("/mainpage")
        }
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

const mapStateToProps=(state)=>{
  return state
}
 const mapDispatchToProps=(dispatch)=>{
  return {
    loginUser:(value)=>dispatch({type:"loggedin",payload:value})
  }
} 

export default  connect(mapStateToProps,mapDispatchToProps)(LoginSignup)