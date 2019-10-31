import React, {Component} from "react"
import {Card, ListGroup, ListGroupItem, Container, Row, Col, Jumbotron} from "react-bootstrap"

class Residential extends Component {
    render(){
        return(  
        <React.Fragment>
          
             <Jumbotron fluid className = "resJumbotron">
             
                <Container>
                <h1>Residential Cleaning</h1>
                <p className = "aboutText">Our services include general cleaning and maintenance for your homes. Your home will be welcomed 
                                with the same staff every regularly scheduled clean. Our standard checklist for your 
                                basic home services are listed below.</p><br></br>
                </Container>
            </Jumbotron>
                            
              <div class = "d-flex justify-content-around" style = {{padding: "20px"}}>
              <Row> 
                  <Col>
                    <Card style={{ width: '22rem', border: "black"}}>
                    <Card.Img variant="top" height ={230} src="https://cdn.pixabay.com/photo/2016/05/26/04/17/home-1416381_1280.jpg" />
                    <Card.Body className = "cardTitle">
                    <Card.Title className = "cardTitle" style = {{ fontWeight: "bold"}}>Kitchen Checklist</Card.Title>     
                    </Card.Body>               
                    <ListGroup className="cardList" style={{background: "black"}}>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>General dusting</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Wipe all surfaces</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Clean microwave interior and exterior</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Disinfect all counters and table tops</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Clean sink</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Exterior appliance cleaning</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Trash emptied</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Trashcan exterior wiped</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Window sills wiped</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Floors vacuumed and mopped</ListGroupItem>
                    </ListGroup>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '22rem', border: "black" }}>
                    <Card.Img variant="top" height ={230} src="https://cdn.pixabay.com/photo/2016/10/13/09/08/travel-1737171_1280.jpg" />
                    <Card.Body className = "cardTitle">
                    <Card.Title className = "cardTitle" style = {{ fontWeight: "bold"}}>Bathroom Checklist</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem className ="cardList" style={{background: "black", border: "orange"}}>General dusting</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Bathtubs and showers cleaned</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Sinks and vanity cleaned</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Toilets disinfected and cleaned</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Mirrors cleaned</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Window sills wiped</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Trash emptied</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Trash cans exterior wiped</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Floors vacuumed and mopped</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Chrome fixtures shined</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Towels straightened</ListGroupItem>
                    </ListGroup>
                    </Card>
               </Col>
               <Col>
                    <Card style={{ width: '22rem', border: "black" }}>
                    <Card.Img variant="top" height ={230} src="https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg" />
                    <Card.Body className = "cardTitle">
                    <Card.Title className = "cardTitle" style={{height: 25, fontSize: 18, fontWeight: "bold"}}>Bedrooms & Common Areas Checklist</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem className ="cardList" style={{background: "black"}}>General dusting</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Beds Straightened</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Trash emptied</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Trashcan exterior wiped</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Window sills wiped</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Mirrors cleaned</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Lights general straightening</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Disinfect surfaces</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Floors vacuumed and wiped</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Glass doors cleaned</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Ceiling fans dusted</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Light binds dusted</ListGroupItem>
                    <ListGroupItem className ="cardList" style={{background: "black"}}>Lampshades dusted</ListGroupItem>
                    </ListGroup>
                    </Card><br></br>
               </Col>
             </Row>
             </div>
         
         </React.Fragment>
     )
   }
}

export default Residential;