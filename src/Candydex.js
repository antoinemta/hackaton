import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React, { Component } from "react";

export class Candydex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: []
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 candydex my-4">Candydex</div>
        </div>
        <div className="row">
          <div className="col-12 candydex my-4">Candydex</div>
        </div>
        <div className="row">
          <div className="col-12 candydex my-4">Candydex</div>
        </div>
        <div className="row">
          <div className="col-12 candydex my-4">Candydex</div>
        </div>
      </div>
    );
  }
}

export default Candydex;
