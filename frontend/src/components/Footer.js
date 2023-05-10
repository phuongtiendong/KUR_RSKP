import React, { Component } from "react";
import { Container, Row, Jumbotron, Col, Navbar } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      
        <Container>
          <Col lg={12} className="text-center text-muted">
            { <div>Bookstore Inventory System</div> }
          </Col>
        </Container>
       
    );
  }
}
