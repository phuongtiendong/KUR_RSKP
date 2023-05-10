import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";



export default class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = this.loginData;
        this.login = this.login.bind(this);
      }
      loginData = { email: "",password: ""};


      onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };



       //Login
  login = (event) => {
  
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post("http://localhost:8081/login", user).then((response) => {
      if (response.data != null) {
          let authenticatedUser = response.data;
        console.log("User " + JSON.stringify(authenticatedUser));
       alert("Login successful");
        if(authenticatedUser.role=="ADMIN")
        {
          sessionStorage.setItem("loginInfo",authenticatedUser);
          window.location.href="http://localhost:3000/admin";
        }
        if(authenticatedUser.role=="MANAGER")
        {
          sessionStorage.setItem("loginInfo",authenticatedUser);
          window.location.href="http://localhost:3000/manager";
        }

      } else {
        alert("Invalid credentials !!!")
      }
    }).catch((error) =>
    {
        alert("Invalid credentials !!! "+error);
    }
    );

    this.setState(this.loginData);
  };
    

    render() {
        const { email,password } = this.state;

        return (
            <Card className="loginCard" style={{padding:"15px"}}>
            <center><h1>Login</h1></center>
            <form onSubmit={this.login}>
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
               value={password}
               onChange={this.onChange}
               />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Agree terms and conditions</label>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>

          </form>
          </Card>
        )
}
}
