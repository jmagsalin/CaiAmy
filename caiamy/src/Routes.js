import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Button, Navbar, Nav, Form, NavDropdown, FormControl} from 'react-bootstrap';
import Homepage from "./Homepage"
import About from "./About"
import Residential from "./Residential"

class Routes extends Component {

render (){
    return(
      <React.Fragment>
      <Router>
        <div className = "navBar">
        <Navbar variant = "dark" expand="lg">  
            <Navbar.Brand href="Homepage">
            
            <img
                alt=""
                src="https://images.squarespace-cdn.com/content/5ba145d73e2d09c1cea74e0f/1552208483166-JZ0BOAIBBKTRKSR9JH5X/caiamy-white.jpg?format=1000w&content-type=image%2Fjpeg"
                width="220"
                height="75"
                className="d-inline-block align-top"
            />
        
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="Homepage" style ={{color: "#E19B24"}}>Home</Nav.Link>
            <Nav.Link href="About" style ={{color: "#E19B24"}}>About</Nav.Link>
            <NavDropdown  className = "navDrop" title="Services" style = {{color: "#E19B24", backgroundColor: "black"}}>
              <NavDropdown.Item href="Residential" style ={{color: "#E19B24", backgroundColor: "black"}}>Residential Cleaning</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style ={{color: "#E19B24", backgroundColor: "black"}}>Commercial Cleaning</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" style ={{color: "#E19B24"}}>Schedule Appointment</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/About" component={About} />
        <Route path="/Residential" component={Residential}/>
      </Switch>     
    </Router>
    <footer className = "footer">
      <br></br>
      <Button 
              variant="outline-warning" 
              href = "Appointment" 
              className= "footerb" 
              size = "lg"
              >Schedule an Appointment</Button><br></br>
      <img
              alt=""
              src="https://images.squarespace-cdn.com/content/5ba145d73e2d09c1cea74e0f/1552208483166-JZ0BOAIBBKTRKSR9JH5X/caiamy-white.jpg?format=1000w&content-type=image%2Fjpeg"
              width="220"
              height="75"
              className="d-inline-block align-top"
              />
    </footer>
  </React.Fragment>
         )
    }
}
export default Routes;
