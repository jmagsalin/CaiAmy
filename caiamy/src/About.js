import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Row, Col, Button, Navbar, Nav, Form, NavDropdown, FormControl} from 'react-bootstrap';

class About extends Component {
  render(){
    return (
     <Container>
       <br></br>
       <br></br>
      <div>
        <h4 className = "cats">About Our Services…</h4>
        <br></br>
 
        <h4 className = "cats">Professionalism</h4>
            <p className = "aboutText">Our employees are all industry professionals who work as a team dedicated to ensuring that their service is thorough, 
            complete, and always professional. We place our staff through continuous training to make sure they always maintain 
            the CAIAMY Cleaning level of commitment to quality and professionalism.</p><br></br>
            
        <h4 className = "cats">Reliability</h4>
            <p className = "aboutText">CAIAMY has a great emphasis in our work and we want to make sure we do it right every time and on time. Our teams 
            have a system in place to make sure every client is serviced on a timely basis as agreed.</p> <br></br>
            
        <h4 className = "cats">Consistency</h4>
            <p className = "aboutText">CAIAMY wants to continuously be your service provider. We have our own service check list to make sure we provide 
            the same high quality services the same way all the time, every time.</p>
      </div>
     </Container>
    )
  }
}

export default About