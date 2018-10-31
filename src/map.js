import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Homepage from "./Homepage";
import MapContainer from "./MapContainer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Homepage />
        <MapContainer />
      </div>
    );
  }
}

export default App;
