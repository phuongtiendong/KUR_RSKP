import React, { Component } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlusSquare,
  faList,
  faEdit,
  faTrash,
  faSave,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import MyToast from "./MyToast";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
    this.state.show = false;
    this.bookChange = this.bookChange.bind(this);
    this.submitBook = this.submitBook.bind(this);
  }
  initialState = { id: "", bookName: "", author: "" ,price: "",bookRating:"",availableQty:"",publishedDate: ""};

  componentDidMount() {

    const bookId = +this.props.match.params.bookId;
    console.log("book id "+bookId);
    if (bookId) {
      this.findBookById(bookId);
    }
  }

  findBookById = (bookId) => {
    axios
      .get("http://localhost:8081/api/manager/books/" + bookId)
      .then((response) => {
        if (response.data != null) {

          this.setState({
            id: response.data.id,
            bookName: response.data.bookName,
            author: response.data.author,
            price:response.data.price,
            bookRating: response.data.bookRating,
            availableQty: response.data.availableQty,
            publishedDate:response.data.publishedDate
          });
        }
      })
      .then((data) =>
      {
             console.log("Book data : "+JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  };

  resetBook = () => {
    this.setState(() => this.initialState);
  };

  //Submit book
  submitBook = (event) => {
   
    event.preventDefault();

    const book = {
      bookName: this.state.bookName,
      author: this.state.author,
      price: this.state.price,
      bookRating: this.state.bookRating,
      availableQty: this.state.availableQty,
      publishedDate: this.state.publishedDate
    };

    axios.post("http://localhost:8081/api/manager/addBook", book).then((response) => {
      if (response.data != null) {
        alert("Book added successfully !");
        window.location.href="http://localhost:3000/manager";
        
      } else {
        alert("Something went wrong, Book not added !");
      }
    });

    this.setState(this.initialState);
  };

  bookChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  bookList = () => {
    return this.props.history.push("/list");
  };

  //update book using PUT
  updateBook = (event) => {
    event.preventDefault();

    const book = {
      id:this.state.id,
      bookName: this.state.bookName,
      author: this.state.author,
      price: this.state.price,
      bookRating: this.state.bookRating,
      availableQty: this.state.availableQty,
      publishedDate: this.state.publishedDate
    };

    axios.put("http://localhost:8081/api/manager/updateBook", book).then((response) => {
      if (response.data != null) {
        alert("Book updated successfully ! ");
        window.location.href="http://localhost:3000/manager";
      } else {
        alert("Something went wrong, Book not updated !");
      }
    }).catch((error) => {
      alert(error);
    });

    this.setState(this.initialState);
  };


  render() {
    const {  bookName, author, price ,bookRating, availableQty, publishedDate} = this.state;
    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message={
              this.state.method === "put"
                ? "Book was updated successfully."
                : "Book was saved successfully."
            }
            type={"success"}
          />
        </div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} />
            {this.state.id ? "Update Book" : "Add New Book"}
          </Card.Header>
          <Form
            onReset={this.resetBook}
            onSubmit={this.state.id ? this.updateBook : this.submitBook}
            id="bookFormId"
          >
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridTitle">
                  <Form.Label>Book </Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="bookName"
                    value={bookName}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter book name"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAuthor">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="author"
                    value={author}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Book Author"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridIsbn">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="price"
                    value={price}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Book price"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridRating">
                  <Form.Label>Book Rating</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="number"
                    min="1"
                    max="10"
                    name="bookRating"
                    value={bookRating}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Book Rating"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridRating">
                  <Form.Label>Available Qty</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="availableQty"
                    value={availableQty}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter book quantity"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridRating">
                  <Form.Label>Published Date</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="date"
                    name="publishedDate"
                    value={publishedDate}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Book publishedDate"
                  />
                  
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave} />{" "}
                {this.state.id ? "Update" : "Save"}
                {""}
              </Button>{" "}
              <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} />
                Reset
              </Button>{" "}
              
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}
