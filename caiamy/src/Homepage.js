import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
      src="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg"
      alt="Bedroom" 
    />
    <Carousel.Caption>
      <h3>Residential Cleaning</h3>
      <p>We thoroughly clean all bedrooms, bathrooms, living spaces, and kitchens.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      width={900} height={670} alt="900x500"
      src="https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_1280.jpg"
      alt="Conference Room"
    />

    <Carousel.Caption>
      <h3>Commercial Building Cleaning</h3>
      <p>We ensure that every section of your office building is clean.</p>
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
      <p> From General Cleaning, Green Cleaning, Post Construction Clean Up, we can clean mostly anything.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
         )
    }
}
export default Homepage;
