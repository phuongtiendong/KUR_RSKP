import React, { Component } from "react";
import { Card } from "react-bootstrap";
import logo2 from "./logo2.jpg";
import logo4 from "./logo4.jpg";

const cardStyle1 = {
   
    transitionDuration: "0.3s",
    height: "5vw",
    width: "80vw"
    
  };

  const cardStyle2 = {
   
    transitionDuration: "0.3s",
    height: "140px",
    width: "80vw"
    
  };

const Aboutus =()=>{
    return (
        
        <div>
       <Card style={cardStyle1}>
       <center><h1>Bookstore Inventory System</h1></center>
         </Card>
         <div className="row">
        <div className="col">
              <img  src={logo4} width="1060" height="400" />
         
         
        <Card style={cardStyle2}>
         <p style={{color: "black"} }>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bookstore is the place where the people will be able to get the books of their choice at reasonable price. There can be various kinds of books available at the book store. 
        But if it is the giant bookstore then the management of it will be very difficult. 
        So the bookstore inventory system application will help in maintaining all these details at one stretch. The bookstore inventory system will help in maintaining the details of the books available,
         employee details and many other details..
         It is being produced for a maintaining inventory details of books in bookstore via the Internet.
         </p>
         </Card>
         </div>
       </div>
       </div>
       
    )
}
export default Aboutus;