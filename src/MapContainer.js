import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React, { Component } from "react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: [],
      candy: [
        "haribo",
        "chamalo",
        "carambar",
        "smarties",
        "sucettes",
        "reglis",
        "malabar",
        "dragibus",
        "kinder",
        "betises"
      ],
      candyAdded: [],
      candyNmbrAdded: [],
      idMarker: [],
      nbr: null,
      candie: ""
    };
    this.appearModal = this.appearModal.bind(this);
  }

  appearModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    fetch("http://192.168.1.16:8000/street")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          adress: data
        });
      });

    fetch("http://192.168.1.16:8000/searchCandy")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  recolt(event) {
    let adress = [];
    for (let i = 0; i < this.state.adress.length; i++) {
      if (this.state.adress[i].latitude !== event.position.lat) {
        adress.push({
          latitude: this.state.adress[i].latitude,
          longitude: this.state.adress[i].longitude
        });
      }
    }

    let candyAdded = this.state.candyAdded;
    let candyNmbrAdded = this.state.candyNmbrAdded;
    let bol = true;
    for (let i = 0; i < this.state.candyAdded.length; i++) {
      if (event.title === candyAdded[i]) {
        candyNmbrAdded[i] += event.number;
        bol = false;
      }
    }
    if (bol === true) {
      candyAdded.push(event.title);

      candyNmbrAdded.push(event.number);
    }

    this.setState({
      candyAdded: candyAdded,
      candyNmbrAdded: candyNmbrAdded,
      adress: adress,
      nbr: event.number,
      candie: event.title,
      modal: !this.state.modal
    });

    this.props.table([candyAdded, candyNmbrAdded]);
  }

  render() {
    return (
      <div className="col-12">
        <Map
          google={this.props.google}
          initialCenter={{ lat: 50.62944, lng: 3.060897 }}
          zoom={15}
          style={{
            width: "70%",
            height: "70vh",
            marginLeft: "13%"
          }}
        >
          <Marker
            title={"The marker`s title will appear as a tooltip."}
            name={"SOMA"}
            position={{ lat: 50.62944, lng: 3.060897 }}
            icon={{
              url: "BonhommeNoir.png"
            }}
          />

          {this.state.adress.map(data => (
            <Marker
              title={
                this.state.candy[Math.floor(Math.random() * Math.floor(10))]
              }
              name={"SOMA"}
              number={Math.floor(Math.random() * Math.floor(10))}
              position={{ lat: data.latitude, lng: data.longitude }}
              onClick={event => this.recolt(event)}
              icon={{
                url: "citrouille.png"
              }}
            />
          ))}

          <Modal
            isOpen={this.state.modal}
            toggle={this.appearModal}
            className={this.props.className}
          >
            <ModalHeader toggle={this.appearModal} />
            <ModalBody>
              <img src="witch.jpeg" className="mr-2" alt="" />
              Haha ! You have got {this.state.nbr + " "}
              {this.state.candie + " "}!
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.appearModal}>
                Continue
              </Button>
            </ModalFooter>
          </Modal>

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div />
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDqYjcpINHMV34r1u09_pKqa6XwrkEDzSs"
})(MapContainer);
