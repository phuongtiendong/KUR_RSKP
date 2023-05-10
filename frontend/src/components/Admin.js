import React, { Component } from "react";
import { Card, Table, ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCoffee,
  faEdit,
  faTrash,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import MyToast from "./MyToast";
import { Link } from "react-router-dom";

export default class Admin extends Component {
         
  constructor(props) {
    super(props);
    this.state = {
      managers: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8081/api/admin/managerList")
      .then((response) => {
        let managerList = [];
        response.json().then((data) => {
          this.setState({managers:data})
          console.log("Data : "+JSON.stringify(this.state.managers));
        });
        
      })
      
  
  }

  deleteManager = (managerId) => {
    axios.delete("http://localhost:8081/api/admin/manager/" + managerId).then((response) => {
      if (response.data != null) {
        this.setState({ show: true });
        setTimeout(() => this.setState({ show: false }), 3000);
        this.setState({
          managers: this.state.managers.filter((manager) => manager.userid !== managerId)
        });
      
      } else {
        this.setState({ show: false });
      }
    });
  };

   navigateManager = () => {
    // 👇️ navigate to /
    window.location.href="http://localhost:3000/addManager";
  };

  logout = () =>
  {
    sessionStorage.removeItem("loginInfo");
    window.location.href="http://localhost:3000";
  }

    render() 
    
    {
      return (

        <div>
        <button type="button" class="btn btn-primary" onClick={this.navigateManager} style={{margin:"10px"}}>Add Manager</button>
        <button type="button" class="btn btn-danger" onClick={this.logout} style={{position:"relative",left:"55rem"}}>Logout</button>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message={"Manager was deleted successfully."}
            type={"danger"}
          />
        </div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            {" "}
            <FontAwesomeIcon icon={faList} /> {"  "}
            Manager List
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              
                {this.state.managers.length === 0 ? (
                  <tr align="center">
                    <td colSpan="10">{this.state.managers}</td> 
                  </tr>
                ) : (
                  this.state.managers.map((manager) => (
                    <tr key={manager.userid}>
                      <td>{manager.userid} </td>
                      <td>{manager.name} </td>
                      <td>{manager.email} </td>
                      <td>{manager.contact_no} </td>
                      <td>{manager.address} </td>
                      <td>
                        <ButtonGroup>
                          <Link
                            to={"addManager/" + manager.userid}
                            className="btn btn-sm btn-outline-primary"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>{" "}
                          {"  "}
                          {"  "}
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={this.deleteManager.bind(this, manager.userid)}
                          >
                            Delete <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
      );
    }
  }