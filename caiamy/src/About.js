import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Row, Col, Button, Navbar, Nav, Form, NavDropdown, FormControl} from 'react-bootstrap';

class About extends Component {
  render(){
    return (
     <Container>
        <h1>CaiAmy Cleaning</h1>
        <div>
        <h4>Thank you for considering CAIAMY Cleaning Services to be your provider of cleaning services for your organization. 
         CAIAMY Cleaning staff has over fifteen years of experience serving the Greater San Diego area with professional residential and commercial services. Our services include general cleaning and maintenance for your homes. Your home will be welcomed
         with the same staff every regularly scheduled clean.  
         Our standard checklist for you basic home services are as follows:</h4>
         </div>
     </Container>
    )
  }
}

export default About