import React, {Component} from 'react';
import {Container, Row, Col, Button, Navbar, Nav, Form, NavDropdown, FormControl, Carousel} from 'react-bootstrap';


class Homepage extends Component {

render (){
    return(
      <div className = "carousel">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      width={900} height={670} alt="900x500"
      src="https://cdn.pixabay.com/photo/2016/03/26/22/19/bedroom-1281580_1280.jpg"
      alt="Bedroom" 
    />
    <Carousel.Caption>
      <h3>Residential Cleaning</h3>
      <p style = {{fontSize: "20px"}}>We thoroughly clean all bedrooms, bathrooms, living spaces, and kitchens.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      width={900} height={670} alt="900x500"
      src="https://cdn.pixabay.com/photo/2017/01/17/23/14/office-space-1988480_1280.jpg"
      alt="Conference Room"
    />

    <Carousel.Caption>
      <h3>Commercial Building Cleaning</h3>
      <p style = {{fontSize: "20px"}}>We ensure that every section of your office building is clean.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      width={900} height={670} alt="900x500"
      src="https://cdn.pixabay.com/photo/2016/10/16/10/30/office-space-1744803_1280.jpg"
      alt="Office"
    />

    <Carousel.Caption>
      <h3>General Cleaning</h3>
      <p style = {{fontSize: "20px"}}> From General Cleaning, Green Cleaning, Post Construction Clean Up, we can clean almost anything.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
         )
    }
}
export default Homepage;
