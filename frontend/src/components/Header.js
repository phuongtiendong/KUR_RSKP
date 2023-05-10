import React, { Component } from "react";
import logo from "./library-books.jpg";
import logo2 from "./logo2.jpg";
import book from "./book.jpg";

export default class Header extends Component {
  render() {
    return (
      <header className="row">
         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
       <div class="carousel-item active">
      <img class="d-block w-100" src={logo} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={logo2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={book} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      </header>
    );
  }
}
