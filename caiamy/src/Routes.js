import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Button, Navbar, Nav, Dropdown, NavItem} from 'react-bootstrap';
import Homepage from "./Homepage"
import About from "./About"
import Residential from "./Residential"
import Commercial from "./Commercial"
import Appointment from "./Appointment"
import Caiamy from "./caiamy-white.jpg"

class Routes extends Component {

render (){
    return(
      <React.Fragment>
      <Router>
        <div className = "navBar">
        <Navbar variant = "dark"  expand="lg">  
            <Navbar.Brand href="Homepage">
            
            <img
                alt=""
                src={Caiamy}
                width="220"
                height="75"
                className="d-inline-block align-top"
            />
        
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{color: "#E19B24"}}  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="Homepage" style ={{color: "#E19B24"}}>Home</Nav.Link>
            <Nav.Link href="About" style ={{color: "#E19B24"}}>About</Nav.Link>
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={Nav.Link} style = {{color: "#E19B24"}}>Services</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="Residential" style ={{color: "#E19B24", backgroundColor: "black"}}>Residential</Dropdown.Item>
                <Dropdown.Item href="Commercial" style ={{color: "#E19B24", backgroundColor: "black"}}>Commercial</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>      
            <Nav.Link href="Appointment" style ={{color: "#E19B24"}}>Schedule Appointment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="https://www.facebook.com/kaoathletics/" target = "blank">
        <img
                alt=""
                src="https://www.iconsdb.com/icons/preview/orange/facebook-xxl.png"
                width="50"
                height="35"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Brand href="https://www.instagram.com/kaobasketball/?hl=en" target = "blank">
        <img
                alt=""
                src="http://www.myiconfinder.com/uploads/iconsets/256-256-0213aa8165c20cbbc11e5b6fc91abf64-instagram.png"
                width="50"
                height="35"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
      </Navbar>
      </div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/About" component={About} />
        <Route path="/Residential" component={Residential}/>
        <Route path= "/Commercial" component={Commercial}/>
        <Route path= "/Appointment" component={Appointment}/>
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
              src={Caiamy}
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
