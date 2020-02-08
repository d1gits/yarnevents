import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Navbar from "./components/Navbar";
import "./main.scss"; // webpack must be configured to do this
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

export default class DemoApp extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Container fluid>
          <Row>
            <Col>
              <div className="Calendar">
                <Alert variant={"primary"}>
                  Welcome to Yarn Events! A website with a calendar of all
                  upcoming yarn & fiber related events.
                </Alert>
              </div>

              <div className="Calendar">
                <FullCalendar
                  defaultView="dayGridMonth"
                  plugins={[dayGridPlugin]}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
