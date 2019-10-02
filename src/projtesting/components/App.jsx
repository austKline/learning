import React, { Component } from 'react';
import {Modal, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class App extends Component {

  state = {
    show: false
  };

  handleShow = () => {
    this.setState({show : true});
  };

  handleClose = () => {
    this.setState({show : false});
  };

  goToOtherPage = () => {
    this.props.history.push("/OtherPage");
  };

  render() {

    return (
      <div>
        <h1>React Js modal</h1>
        <Button onClick={this.handleShow}>Popup</Button>
        <Modal show={this.state.show} onHide={this.handleClose} centered className="modal">
          <Modal.Header className="header">
            <Modal.Title >Select Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button className="button" onClick={this.goToOtherPage}>Customer</Button>
            <Button className="button" onClick={this.handleClose}>Restaurant</Button>
            <Button className="button" onClick={this.handleClose}>Driver</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
