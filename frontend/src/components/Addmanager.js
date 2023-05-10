import React, { Component } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import axios from "axios";


export default class Addmanager extends Component {
  constructor(props) {
    super(props);
  
    this.state = this.initialState;
    this.state = {
      id : ""
    }
    this.onChange = this.onChange.bind(this);
    this.updateManager =this.updateManager.bind(this);
    this.submitManager = this.submitManager.bind(this);

  }
  
  initialState = {userid:"",name: "", email: "", password:"",contact_no: "", address: "",role:""};
 

   componentDidMount() {
    const managerId = +this.props.match.params.id;
    this.setState({ id:managerId });
    console.log(managerId)
        if(managerId)
        {
          console.log("In mount");

        document.getElementById("head").innerText="Edit Manager";
        document.getElementById("button").innerText="Update";
            fetch("http://localhost:8081/api/admin/manager/" +managerId)
              .then((response) => response.json())
              .then((data) => 
              { 
                this.setState({ 
                userid: data.userid,
                name: data.name,
                email: data.email,
                password: data.password,
                contact_no: data.contact_no,
                address: data.address,
                role:data.role
              });
                console.log("Manager data : "+JSON.stringify(data))
            })
        }
      
  }



  //Submit manager
  submitManager = (event) => {

    event.preventDefault();

    const manager = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      contact_no: this.state.contact_no,
      address: this.state.address,
      role: "MANAGER"
    };

    axios.post("http://localhost:8081/api/admin/addManager", manager).then((response) => {
      if (response.data != null) {
        alert("Manager added successfully !");
        window.location.href="http://localhost:3000/admin";
        
      } else {
        alert("Something went wrong, Manager not added !");
      }
    }).catch((error) => {
      alert(error);
    });

    this.setState(this.initialState);
  };

  updateManager = (event) => {
    event.preventDefault();

    const updatedManager = {
      userid:this.state.userid,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      contact_no: this.state.contact_no,
      address: this.state.address,
      role: this.state.role
    };

    console.log("Updated manager : "+JSON.stringify(updatedManager));

    axios.put("http://localhost:8081/api/admin/updateManager", updatedManager).then((response) => {
      if (response.data != null) {
        alert("Manager updated successfully ! ");
        window.location.href="http://localhost:3000/admin";
      } else {
        alert("Something went wrong, Manager not updated !");
      }
    }).catch((error) => {
      alert(error);
    });

    this.setState(this.initialState);
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { userid, name, email, password, contact_no, address} = this.state;
    return (
      <center><div>
      <Card className="managerCard" style={{padding:"10px",marginBottom:"5rem",width:"35rem"}}>
            <center><h1 id="head">Add Manager</h1></center>
            <form onSubmit={this.state.id ? this.updateManager : this.submitManager}>
            <div class="form-group">
              <label for="exampleInputName">Name </label>
              <input type="text" class="form-control" id="exampleInputName"  placeholder="Enter name"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                 
              />
              </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
              />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"
               placeholder="Password"
               name="password"
               autoComplete="off"
               value={password}
               onChange={this.onChange}
               />
            </div>

            <div class="form-group">
              <label for="exampleInputContact">Contact number</label>
              <input type="tel" class="form-control" id="exampleInputContact"
               placeholder="Contact number"
               maxLength="10"
               name="contact_no"
               value={contact_no}
               onChange={this.onChange}
               />
            </div>

            <div class="form-group">
              <label for="exampleInputAddress">Address</label>
              <input type="text" class="form-control" id="exampleInputAddress"
               placeholder="Enter address"
               name="address"
               value={address}
               onChange={this.onChange}
               />
            </div>
           

            <button type="submit" id="button" class="btn btn-primary">Add</button>

          </form>
          </Card> 
      </div></center>
    );
  }
}
