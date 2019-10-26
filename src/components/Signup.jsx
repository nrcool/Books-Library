import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faAt, faUser } from '@fortawesome/free-solid-svg-icons'
import {withRouter} from "react-router-dom"

class Signup extends Component {
  state={
    error:null
  }
    signupSubmit=(e)=>{
        e.preventDefault();
        let form= new FormData(e.target)
        let data=new URLSearchParams();
        
        for(const pair of form){
            console.log(pair)
            data.append(pair[0],pair[1])
        }
        e.target.reset()
        fetch("http://localhost:4000/signup",{method:"POST",body:data})
        .then(res=>res.json())
        .then(res1=>{
          if(res1.success){
             this.setState({
               error:res1.message
             },()=>this.props.history.push("/mainpage") )
          }else{
            this.setState({
              error:res1.message
            })
          }
        })
        .catch((err)=>console.log(err.message))

    }

    render() {
      console.log(this.props)
        return (
            <div className="register-form">
            <form className="form-inputs" name="signInForm" onSubmit={this.signupSubmit}>
              <p className="auth-logo">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0id2luZG93cy0xMjUyIj8+DQo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0MnB4IiBoZWlnaHQ9IjQzOC41NDJweCIgdmlld0JveD0iMCAwIDQzOC41NDIgNDM4LjU0MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0MiA0MzguNTQyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQoJPGcgZmlsbD0iIzAwODQ5OCI+DQoJCTxwYXRoIGQ9Ik00MTQuNDEsNjAuNjc2Yy0xNi4wODQtMTYuMDgzLTM1LjQ0Ni0yNC4xMjUtNTguMTAyLTI0LjEyNWgtOTEuMzU3Yy0yLjQ3OCwwLTQuNDI5LDAuNjE0LTUuODUzLDEuODU1ICAgIGMtMS40MzEsMS4yMzctMi4zODIsMy4wOTMtMi44NTQsNS41NjhjLTAuNDc5LDIuNDc0LTAuNzYsNC43MDktMC44NTMsNi43MDdjLTAuMDk2LDEuOTk3LTAuMDUxLDQuNTIxLDAuMTQ0LDcuNTY1ICAgIGMwLjE4NiwzLjA0NiwwLjI4MSw0Ljk0OSwwLjI4MSw1LjcxM2MwLjU3MSwxLjUyNCwwLjc2NywyLjgxLDAuNTcxLDMuODU1Yy0wLjE5MSwxLjA0MywwLjQ3NiwxLjkwMywxLjk5OCwyLjU2OCAgICBjMS41MiwwLjY2NiwyLjI3OSwxLjE5MSwyLjI3OSwxLjU2OWMwLDAuMzc4LDEuMDk2LDAuNjYyLDMuMjg1LDAuODU1YzIuMTksMC4xOTIsMy4yODksMC4yODQsMy4yODksMC4yODRoMy43MTNoMy4xNDJoODIuMjI4ICAgIGMxMi41NiwwLDIzLjMxMiw0LjQ3MSwzMi4yNTgsMTMuNDIyYzguOTUyLDguOTQ1LDEzLjQyMiwxOS42OTYsMTMuNDIyLDMyLjI2MVYzMTkuNzdjMCwxMi41NjMtNC40NywyMy4zMTItMTMuNDIyLDMyLjI1OCAgICBjLTguOTQ1LDguOTQ4LTE5LjY5OCwxMy40MjEtMzIuMjU4LDEzLjQyMWgtOTEuMzU3Yy0yLjQ3OCwwLTQuNDM2LDAuNjItNS44NTMsMS44NTVjLTEuNDMsMS4yNDItMi4zODIsMy4wOTQtMi44NTcsNS41NjQgICAgYy0wLjQ3NiwyLjQ3OC0wLjc2Myw0LjcxNi0wLjg1NSw2LjcxNGMtMC4wOTIsMS45OTUtMC4wNTEsNC41MTgsMC4xNDQsNy41NjNjMC4xOTUsMy4wNDYsMC4yODgsNC45NDgsMC4yODgsNS43MDggICAgYzAsMi40NzgsMC44OTYsNC42MTMsMi43MDcsNi40MjdjMS44MSwxLjgwNywzLjk0OSwyLjcxLDYuNDI3LDIuNzFoOTEuMzU3YzIyLjY0OCwwLDQyLjAxOC04LjA0Miw1OC4wOTUtMjQuMTMzICAgIGMxNi4wODQtMTYuMDc3LDI0LjEyNi0zNS40NDYsMjQuMTI2LTU4LjA5NVYxMTguNzY5QzQzOC41MzMsOTYuMTE4LDQzMC40OTEsNzYuNzU0LDQxNC40MSw2MC42NzZ6Ii8+DQoJCTxwYXRoIGQ9Ik0zMzguMDQ3LDIxOS4yN2MwLTQuOTQ4LTEuODEzLTkuMjMzLTUuNDI3LTEyLjg1TDE3Ny4zMDIsNTEuMTAxYy0zLjYxNi0zLjYxMi03Ljg5NS01LjQyNC0xMi44NDctNS40MjQgICAgYy00Ljk1MiwwLTkuMjMzLDEuODEyLTEyLjg1LDUuNDI0Yy0zLjYxNSwzLjYxNy01LjQyNCw3LjkwNC01LjQyNCwxMi44NXY4Mi4yMjZIMTguMjc0Yy00Ljk1MiwwLTkuMjM1LDEuODEyLTEyLjg1MSw1LjQyNCAgICBDMS44MDcsMTU1LjIxOSwwLDE1OS41MDMsMCwxNjQuNDUydjEwOS42MzVjMCw0Ljk0OSwxLjgwNyw5LjIzMyw1LjQyNCwxMi44NDhjMy42MTksMy42MSw3LjkwMiw1LjQyNywxMi44NTEsNS40MjdoMTI3LjkwNiAgICB2ODIuMjI1YzAsNC45NDUsMS44MDksOS4yMzMsNS40MjQsMTIuODQ3YzMuNjIxLDMuNjE3LDcuOTAyLDUuNDI4LDEyLjg1LDUuNDI4YzQuOTQ5LDAsOS4yMzEtMS44MTEsMTIuODQ3LTUuNDI4bDE1NS4zMTgtMTU1LjMxMiAgICBDMzM2LjIzNCwyMjguNTAxLDMzOC4wNDcsMjI0LjIxNiwzMzguMDQ3LDIxOS4yN3oiLz4NCgk8L2c+DQo8IS0tIENvZGUgaW5qZWN0ZWQgYnkgbGl2ZS1zZXJ2ZXIgLS0+CjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij4KCS8vIDwhW0NEQVRBWyAgPC0tIEZvciBTVkcgc3VwcG9ydAoJaWYgKCdXZWJTb2NrZXQnIGluIHdpbmRvdykgewoJCShmdW5jdGlvbiAoKSB7CgkJCWZ1bmN0aW9uIHJlZnJlc2hDU1MoKSB7CgkJCQl2YXIgc2hlZXRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgibGluayIpKTsKCQkJCXZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImhlYWQiKVswXTsKCQkJCWZvciAodmFyIGkgPSAwOyBpIDwgc2hlZXRzLmxlbmd0aDsgKytpKSB7CgkJCQkJdmFyIGVsZW0gPSBzaGVldHNbaV07CgkJCQkJdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50RWxlbWVudCB8fCBoZWFkOwoJCQkJCXBhcmVudC5yZW1vdmVDaGlsZChlbGVtKTsKCQkJCQl2YXIgcmVsID0gZWxlbS5yZWw7CgkJCQkJaWYgKGVsZW0uaHJlZiAmJiB0eXBlb2YgcmVsICE9ICJzdHJpbmciIHx8IHJlbC5sZW5ndGggPT0gMCB8fCByZWwudG9Mb3dlckNhc2UoKSA9PSAic3R5bGVzaGVldCIpIHsKCQkJCQkJdmFyIHVybCA9IGVsZW0uaHJlZi5yZXBsYWNlKC8oJnxcPylfY2FjaGVPdmVycmlkZT1cZCsvLCAnJyk7CgkJCQkJCWVsZW0uaHJlZiA9IHVybCArICh1cmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICsgJ19jYWNoZU92ZXJyaWRlPScgKyAobmV3IERhdGUoKS52YWx1ZU9mKCkpOwoJCQkJCX0KCQkJCQlwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbSk7CgkJCQl9CgkJCX0KCQkJdmFyIHByb3RvY29sID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonID8gJ3dzOi8vJyA6ICd3c3M6Ly8nOwoJCQl2YXIgYWRkcmVzcyA9IHByb3RvY29sICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnL3dzJzsKCQkJdmFyIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYWRkcmVzcyk7CgkJCXNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnKSB7CgkJCQlpZiAobXNnLmRhdGEgPT0gJ3JlbG9hZCcpIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsKCQkJCWVsc2UgaWYgKG1zZy5kYXRhID09ICdyZWZyZXNoY3NzJykgcmVmcmVzaENTUygpOwoJCQl9OwoJCQlpZiAoc2Vzc2lvblN0b3JhZ2UgJiYgIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0lzVGhpc0ZpcnN0VGltZV9Mb2dfRnJvbV9MaXZlU2VydmVyJykpIHsKCQkJCWNvbnNvbGUubG9nKCdMaXZlIHJlbG9hZCBlbmFibGVkLicpOwoJCQkJc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnSXNUaGlzRmlyc3RUaW1lX0xvZ19Gcm9tX0xpdmVTZXJ2ZXInLCB0cnVlKTsKCQkJfQoJCX0pKCk7Cgl9CgllbHNlIHsKCQljb25zb2xlLmVycm9yKCdVcGdyYWRlIHlvdXIgYnJvd3Nlci4gVGhpcyBCcm93c2VyIGlzIE5PVCBzdXBwb3J0ZWQgV2ViU29ja2V0IGZvciBMaXZlLVJlbG9hZGluZy4nKTsKCX0KCS8vIF1dPgo8L3NjcmlwdD48L3N2Zz4=" alt="Icon" width="100" />
              </p>
              <div className="form-group">
                <label className="input-label" htmlFor="username"><FontAwesomeIcon icon={faUser} /> Confirm
                        Password*</label>
                <input type="text" className="form-control" name="username" id="username"
                  placeholder="UserName" />
              </div>
              <div className="form-group">
                <label className="input-label" htmlFor="signInEmail"><FontAwesomeIcon icon={faAt} /> Email*</label>
                <input type="email" className="form-control" name="email" id="signInEmail"
                  placeholder="example@gmail.com" />
              </div>
              <div className="form-group">
                <label className="input-label" htmlFor="crtePassword"><FontAwesomeIcon icon={faLock} /> Create Password*</label>
                <input type="password" className="form-control" name="password" id="crtePassword"
                  placeholder="password" />
              </div>
              <button type="submit" style={{width:"100px",margin:"0 auto"}} className="btn btn-primary btn-block">Register</button>
              {this.state.error&& <div>{this.state.error}</div>}
            </form>
          </div>
        )
    }
}

export default withRouter(Signup)