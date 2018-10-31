import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 5
    };
  }

  render() {
    return (
      <header className="row">
        <div className="header d-flex justify-content-center col-12">
          <div className="col-2 empty" />
          <div className="col-8 pt-5 divTitle">
            <span className="title">Welcome to CandyGo!</span>
          </div>
          <div className="col">
            <img src="Bonbonboutton.png" class="BtnImg mt-3 ml-5" alt="" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
