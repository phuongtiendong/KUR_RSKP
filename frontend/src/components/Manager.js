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
import $ from 'jquery';



export default class Manager extends Component {
         
    constructor(props) {
      super(props);
      this.state = {
      books: [],
      qty : ""
      };

      
    }

      
    componentDidMount() {
       
         this.fetchBooks();
          
      
      }

      fetchBooks = () =>
      {
        fetch("http://localhost:8081/api/manager/books")
        .then((response) => {
          let bookList = [];
          response.json().then((data) => {
            this.setState({books:data})
            console.log("Data : "+JSON.stringify(this.state.books));
          });
          
        })

         

      }

     
      deleteBook = (bookId) => {
        axios.delete("http://localhost:8081/api/manager/deleteBook/" + bookId).then((response) => {
          if (response.data != null) {
            this.setState({ show: true });
            setTimeout(() => this.setState({ show: false }), 3000);
            this.setState({
              books: this.state.books.filter((book) => book.id !== bookId)
            });
          
          } else {
            this.setState({ show: false });
          }
        });
      };
    
      navigatebook = () => {
        // 👇️ navigate to /
        window.location.href="http://localhost:3000/add";
      };

        logout = () =>
        {
          sessionStorage.removeItem("loginInfo");
          window.location.href="http://localhost:3000";
        }

    
        search = () =>
        {
          console.log("In search");
                  // Declare variables
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
  
          console.log(input.value.toString());
            // Loop through all table rows, and hide those who don't match the search query
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[1];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
        }

        sold = (bookId) =>
        {
            
          axios.put("http://localhost:8081/api/manager/sold/" + bookId).then((response) => {
            if (response.data != null) {
                alert("Book sold");
                 this.fetchBooks();
               
            }
          }).catch((error) =>
          {
            alert(error);
          })
              
                    
                
               
        }

        purchase = (bookId) =>
        {
              axios.put("http://localhost:8081/api/manager/purchase/" + bookId).then((response) => {
                if (response.data != null) {
                    alert("Book purchased !");
                    this.fetchBooks();
                  
                }
              }).catch((error) =>
              {
                alert(error);
              })
              
        }
        
    
        render() 
        
        {
          return (
    
            <div>
            <button type="button" class="btn btn-primary" onClick={this.navigatebook} style={{margin:"10px"}}>Add Book</button>
            <input type="text" id="myInput" onKeyUp={this.search} placeholder="Search for book names.."/>
            <button type="button" class="btn btn-danger" onClick={this.logout} style={{position:"relative",left:"45rem"}}>Logout</button>
            <div style={{ display: this.state.show ? "block" : "none" }}>
              <MyToast
                show={this.state.show}
                message={"Book was deleted successfully."}
                type={"danger"}
              />
            </div>
            <Card className={"border border-dark bg-dark text-white"}>
              <Card.Header id="h">
                {" "}
                <FontAwesomeIcon icon={faList} /> {"  "}
                Book List
              </Card.Header>
              <Card.Body>
                <Table id="myTable" striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>BookId</th>
                      <th>Book Name</th>
                      <th>Author</th>
                      <th>Price</th>
                      <th>Book rating</th>
                      <th>Available Quantity</th>
                      <th>Published Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    {this.state.books.length === 0 ? (
                      <tr align="center">
                        <td colSpan="10">{this.state.books}</td> 
                      </tr>
                    ) : (
                      this.state.books.map((book) => (
                        <tr key={book.id}>
                          <td>{book.id} </td>
                          <td>{book.bookName} </td>
                          <td>{book.author} </td>
                          <td>{book.price} </td>
                          <td>{book.bookRating} </td>
                          <td>{book.availableQty} 
                         
                          <Button variant="danger" onClick={() => this.sold(book.id)} size="sm" style={{position:"relative",left:"5px"}}> Sold</Button>{' '}
                          <Button variant="primary" onClick={() => this.purchase(book.id)} size="sm" style={{position:"relative",left:"5px"}} >  Purchase</Button>{' '}
                          </td>
                         
                          <td>{book.publishedDate} </td>
                          <td>
                            <ButtonGroup>
                              <Link
                                to={"updateBook/" + book.id}
                                className="btn btn-sm btn-outline-primary"
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </Link>{" "}
                              {"  "}
                              {"  "}
                              <Button
                                size="sm"
                                variant="outline-danger"
                                onClick={this.deleteBook.bind(this, book.id)}
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

