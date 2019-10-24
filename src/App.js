import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import MainPage from './components/MainPage';
import LoginSignup from './components/login-signup';

class App extends React.Component {
 
  render(){
    return (
      <Router>
   <Route exact path="/" component={LoginSignup} />
    <Route path="/mainpage" component={MainPage}/>
    </Router>
  );
  }
  
}

export default App;
