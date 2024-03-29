import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginSignup from "./components/login-signup";
import BookItem from "./components/BookItem";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginSignup} />
          <Route path="/mainpage" component={MainPage} />
          <Route exact path="/:booktitle" component={BookItem} />
          <Route path="/mainpage/bytitle" component={MainPage} />
          <Route path="/mainpage/byauthor" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
