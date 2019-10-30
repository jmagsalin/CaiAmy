import React, {Component} from "react"
import {Card, ListGroup, ListGroupItem, Container, Row, Col, Jumbotron} from "react-bootstrap"

class Appointment extends Component {
    render(){
        return (
        <React.Fragment>
        <Jumbotron fluid className = "appJumbotron">
             
             <Container>
             <h1></h1>
             <p className = "aboutText"></p><br></br>
             </Container>
         </Jumbotron>
         </React.Fragment>
        )
    }
}

export default Appointment