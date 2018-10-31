import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Homepage from "./Homepage";
import Candydex from "./Candydex";
import { Switch, BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "black";
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/candydex" component={Candydex} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
