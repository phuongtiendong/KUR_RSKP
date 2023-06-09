import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import { Container, Row, Jumbotron, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Login from "./components/Login";
import axios from "axios";
import Admin from "./components/Admin";

import Aboutus from "./components/Aboutus";
import Addmanager from "./components/Addmanager";
import Manager from "./components/Manager";

function App() {
  const marginTop = { marginTop: "20px" };
  return (
    <Router>
    <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/login" exact component={Login} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/manager" exact component={Manager} />
              <Route path="/Aboutus" exact component={Aboutus} />
              <Route path="/add" exact component={Book} />
              <Route path="/updateBook/:bookId" exact component={Book} />
              <Route path="/addManager/:id" exact component={Addmanager} />
              <Route path="/list" exact component={BookList} />
              <Route path="/addManager" exact component={Addmanager} />
              <Route path="/manager/books" exact component={Manager} />

            </Switch>
          </Col>
        </Row>
      </Container>
      {/* <p>Book Store Management</p> */}
      <Footer />
    </Router>
  );
}
export default App;
