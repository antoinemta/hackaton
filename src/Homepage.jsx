import React, { Component } from "react";
import MapContainer from "./MapContainer";
import "font-awesome/css/font-awesome.css";

import "./App.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candy: []
    };
  }

  table(event) {
    let initable = [];
    for (let i = 0; i < event[0].length; i++) {
      initable[i] = {
        candy: event[0][i],
        Nmbr: event[1][i]
      };
    }

    this.setState({
      candy: initable
    });
  }

  render() {
    return (
      <div className="row">
        <div className="body col-12">
          <div className="row">
            <div className="col-12 dialect pl-5 pb-5">
              Go around the houses <span className="dot">!</span>
              {/*<div className="col-lg-3 inputSearch">
                <div className="input-group">
                  <input className="form-control border py-2" type="search" />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary border-warning"
                      type="button"
                    >
                      <i className="fa fa-search" />
                    </button>
    </div>
                </div>
    </div>*/}
            </div>
          </div>
          <div className="row nnn d-flex justify-content-center mt-5">
            <div className="col-md-6 square d-flex justify-content-center">
              <div className="col-md-9 descriptif p-4">
                " You can enter your adress and we will return you the houses
                that you can visit around your house and get candy ! You will
                can see the candy that you recolted in your candydex ! "<br />
                <img
                  src="citrouill.png"
                  className="citrouilleImg  d-none d-sm-block"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 square d-flex justify-content-center">
              <div className="col-md-7 stats">
                {" "}
                <div className="lineCenter col-12">You have collected :</div>
                {this.state.candy.map(data => (
                  <div className="line">
                    {data.candy} : {data.Nmbr}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="divBlack" style={{ height: "150px" }} />
          <MapContainer table={e => this.table(e)} />
          <div className="divBlack" style={{ height: "800px" }} />
        </div>
      </div>
    );
  }
}

export default Homepage;
