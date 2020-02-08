import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class DemoApp extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Yarn Events</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Calendar</Nav.Link>
            <Nav.Link href="#home">Map</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Suggest an event</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
