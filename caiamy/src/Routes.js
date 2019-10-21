import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'



class Routes extends Component {
    render(){
        
    // const {} = this.props
        return(
            <Router>
               <Navbar bg="dark" variant="dark">
                 <Navbar.Brand href="Homepage">Home</Navbar.Brand>
                   <Nav className="mr-auto">
                  <Nav.Link href="NewCat">Create Profile</Nav.Link>
                  <Nav.Link href="Cats">Cat List</Nav.Link>
          
                </Nav>            
              </Navbar>
                <Switch>
                    <Route path="/NewCat" render={(props) => <NewCat {...props} handleNewCat={handleNewCat} />} />
                    <Route path="/Cats" render={(props) => <Cats {...props} cats={cats} />} />
                    <Route exact path="/" component={Homepage} />
                    <Route path="/Homepage" component={Homepage} />

          
                </Switch>
            </Router>
            )
    }
}
export default Routes;