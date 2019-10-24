import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faUser } from '@fortawesome/free-solid-svg-icons'

export default class Login extends Component {

    loginSubmit=(e)=>{
        e.preventDefault();
        let data=new URLSearchParams();
        for(const pair of new FormData(e.target)){
            console.log(pair)
            data.append(pair[0],pair[1])
        }
        console.log(data)
    }
    render() {
        return (
            <div className="login-form">
            <form className="form-inputs" name="loginForm" onSubmit={this.loginSubmit}>
              <p className="auth-logo">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0id2luZG93cy0xMjUyIj8+DQo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDkyLjA2OXB4IiBoZWlnaHQ9IjQ5Mi4wNjlweCIgdmlld0JveD0iMCAwIDQ5Mi4wNjkgNDkyLjA2OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkyLjA2OSA0OTIuMDY5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBmaWxsPSIjMDA4NDk4Ij4NCgk8cGF0aCBkPSJNMjY4LjY1NiwxNDQuMjdjMC02Mi42OTctNTAuOTk4LTExMy42OTktMTEzLjY5OC0xMTMuNjk5QzkyLjI1MywzMC41NzEsNDEuMjYsODEuNTczLDQxLjI2LDE0NC4yN3Y1Ny4yNSAgICAgQzE1LjczNSwyMjkuMTQ3LDAsMjY1Ljk2MiwwLDMwNi41Mzd2MTI1LjUwOGMwLDE2LjI2NiwxMy4xODksMjkuNDU0LDI5LjQ3MiwyOS40NTRoMjUwLjk4NyAgICAgYzE2LjI2NiwwLDI5LjQ1NC0xMy4xODgsMjkuNDU0LTI5LjQ1NHYtMTI1LjVjMC00MC41ODMtMTUuNzM1LTc3LjQwNy00MS4yNTYtMTA1LjAzNEwyNjguNjU2LDE0NC4yN0wyNjguNjU2LDE0NC4yN3ogICAgICBNMTc2Ljg1MiwzMTcuMDQ5djM1Ljk0OWMwLDEyLjA5NS05LjgwNSwyMS44OTgtMjEuODk0LDIxLjg5OGMtMTIuMDk0LDAtMjEuODk4LTkuODA1LTIxLjg5OC0yMS44OTh2LTM1Ljk0OSAgICAgYy04LjkxNi02LjY5MS0xNC43NjUtMTcuMjUyLTE0Ljc2NS0yOS4yNTZjMC0yMC4yNDIsMTYuNDEzLTM2LjY0OSwzNi42NjQtMzYuNjQ5czM2LjY2NCwxNi40MDcsMzYuNjY0LDM2LjY0OSAgICAgQzE5MS42MjEsMjk5Ljc5NywxODUuNzY3LDMxMC4zNTYsMTc2Ljg1MiwzMTcuMDQ5eiBNMjE5LjEyNywxNjUuNjI1Yy0xOS41NzMtOC45MzQtNDEuMjYtMTQuMDM4LTY0LjE2OS0xNC4wMzggICAgIGMtMjIuOTEzLDAtNDQuNTk2LDUuMTA0LTY0LjE2OCwxNC4wMzhWMTQ0LjI3YzAtMzUuMzg0LDI4Ljc3NS02NC4xNjksNjQuMTY4LTY0LjE2OWMzNS4zODksMCw2NC4xNjksMjguNzg1LDY0LjE2OSw2NC4xNjkgICAgIFYxNjUuNjI1TDIxOS4xMjcsMTY1LjYyNXoiLz4NCgk8cGF0aCBkPSJNNDA5LjMyNiw4Ni40NTdjLTQ1LjY5MSwwLTgyLjc0MSwzNy4wNDUtODIuNzQxLDgyLjc1NGMwLDMyLjQ4MywxOC44NzcsNjAuMjk4LDQ2LjEwOSw3My44NDd2MTM3LjQzMyAgICAgYzAsMjguMTM0LDIyLjgxMiw1MC45NDgsNTAuOTQ3LDUwLjk0OGMxMi4zMTcsMCwyMi4zMTQtOS45NzksMjIuMzE0LTIyLjI5OFYyNDMuMDU4YzI3LjIxNC0xMy41NDQsNDYuMTEzLTQxLjM2Myw0Ni4xMTMtNzMuODQ3ICAgICBDNDkyLjA3MSwxMjMuNTAyLDQ1NS4wMTgsODYuNDU3LDQwOS4zMjYsODYuNDU3eiBNNDA5LjMyNiwxNTQuNDk2Yy0xMC43MzgsMC0xOS40NDMtOC43MDUtMTkuNDQzLTE5LjQzNCAgICAgYzAtMTAuNzI5LDguNzA1LTE5LjQzOCwxOS40NDMtMTkuNDM4czE5LjQ0Miw4LjcwOSwxOS40NDIsMTkuNDM4UzQyMC4wNjQsMTU0LjQ5Niw0MDkuMzI2LDE1NC40OTZ6Ii8+DQo8L2c+DQo8IS0tIENvZGUgaW5qZWN0ZWQgYnkgbGl2ZS1zZXJ2ZXIgLS0+CjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij4KCS8vIDwhW0NEQVRBWyAgPC0tIEZvciBTVkcgc3VwcG9ydAoJaWYgKCdXZWJTb2NrZXQnIGluIHdpbmRvdykgewoJCShmdW5jdGlvbiAoKSB7CgkJCWZ1bmN0aW9uIHJlZnJlc2hDU1MoKSB7CgkJCQl2YXIgc2hlZXRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgibGluayIpKTsKCQkJCXZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImhlYWQiKVswXTsKCQkJCWZvciAodmFyIGkgPSAwOyBpIDwgc2hlZXRzLmxlbmd0aDsgKytpKSB7CgkJCQkJdmFyIGVsZW0gPSBzaGVldHNbaV07CgkJCQkJdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50RWxlbWVudCB8fCBoZWFkOwoJCQkJCXBhcmVudC5yZW1vdmVDaGlsZChlbGVtKTsKCQkJCQl2YXIgcmVsID0gZWxlbS5yZWw7CgkJCQkJaWYgKGVsZW0uaHJlZiAmJiB0eXBlb2YgcmVsICE9ICJzdHJpbmciIHx8IHJlbC5sZW5ndGggPT0gMCB8fCByZWwudG9Mb3dlckNhc2UoKSA9PSAic3R5bGVzaGVldCIpIHsKCQkJCQkJdmFyIHVybCA9IGVsZW0uaHJlZi5yZXBsYWNlKC8oJnxcPylfY2FjaGVPdmVycmlkZT1cZCsvLCAnJyk7CgkJCQkJCWVsZW0uaHJlZiA9IHVybCArICh1cmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICsgJ19jYWNoZU92ZXJyaWRlPScgKyAobmV3IERhdGUoKS52YWx1ZU9mKCkpOwoJCQkJCX0KCQkJCQlwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbSk7CgkJCQl9CgkJCX0KCQkJdmFyIHByb3RvY29sID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonID8gJ3dzOi8vJyA6ICd3c3M6Ly8nOwoJCQl2YXIgYWRkcmVzcyA9IHByb3RvY29sICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnL3dzJzsKCQkJdmFyIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYWRkcmVzcyk7CgkJCXNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnKSB7CgkJCQlpZiAobXNnLmRhdGEgPT0gJ3JlbG9hZCcpIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsKCQkJCWVsc2UgaWYgKG1zZy5kYXRhID09ICdyZWZyZXNoY3NzJykgcmVmcmVzaENTUygpOwoJCQl9OwoJCQlpZiAoc2Vzc2lvblN0b3JhZ2UgJiYgIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0lzVGhpc0ZpcnN0VGltZV9Mb2dfRnJvbV9MaXZlU2VydmVyJykpIHsKCQkJCWNvbnNvbGUubG9nKCdMaXZlIHJlbG9hZCBlbmFibGVkLicpOwoJCQkJc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnSXNUaGlzRmlyc3RUaW1lX0xvZ19Gcm9tX0xpdmVTZXJ2ZXInLCB0cnVlKTsKCQkJfQoJCX0pKCk7Cgl9CgllbHNlIHsKCQljb25zb2xlLmVycm9yKCdVcGdyYWRlIHlvdXIgYnJvd3Nlci4gVGhpcyBCcm93c2VyIGlzIE5PVCBzdXBwb3J0ZWQgV2ViU29ja2V0IGZvciBMaXZlLVJlbG9hZGluZy4nKTsKCX0KCS8vIF1dPgo8L3NjcmlwdD48L3N2Zz4=" alt="Icon" width="100" />
              </p>
              <div className="form-group">
                <label className="input-label" htmlFor="usernamel"><FontAwesomeIcon icon={faUser} /> Email</label>
                <input type="email" className="form-control" name="username" id="username"
                  placeholder="UserName" />
              </div>
              <div className="form-group">
                <label className="input-label" htmlFor="inputPassword"><FontAwesomeIcon icon={faLock} /> Password</label>
                <input type="password" className="form-control" name="password" id="inputPassword"
                  placeholder="password" />
              </div>
              <div className="form-group form-check">
                <p className="remember-check-box">
                  <input type="checkbox" className="form-check-input" name="remember" id="inputRemember" />
                  <label className="check-box fas fa-check" htmlFor="inputRemember"></label>
                  <label className="form-check-label" htmlFor="inputRemember">Remember me</label>
                </p>
              </div>
              <button type="submit" style={{width:"100px",margin:"0 auto"}} className=" btn btn-primary btn-block">Submit</button>
            </form>
          </div>
        )
    }
}
