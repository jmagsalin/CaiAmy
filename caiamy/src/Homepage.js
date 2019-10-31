import React, {Component} from 'react';
import {Carousel, Card, Container} from 'react-bootstrap';


class Homepage extends Component {

render (){
    return(
      <React.Fragment>
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
</Carousel><br></br>
</div>
<Container>
  <h6 style = {{textAlign: "left"}}>Why Choose CaiAmy?</h6>
  <h1 style = {{textAlign: "left", color: "#E19B24", fontWeight: "bold"}}>Details Are Key</h1><br></br>
 
            <p className = "aboutText">Our employees are all industry professionals who work as a team dedicated to ensuring that their service is thorough, 
            complete, and always professional. We place our staff through continuous training to make sure they always maintain 
            the CAIAMY cleaning level of commitment.</p><br></br>
            <p className = "aboutText">With regular maintenance, your home and work environment will remain peaceful and problem free.
            Our janitorial services can ensure that your home and office will remain an oasis of comfort and professionalism. As a leading provider of residential and commercial 
            cleaning services throughout San Diego, we are a company that's dedicated to comprehensive cleaning solutions 
            for all your janitorial and maintenance needs.  We take pride in servicing your home, your company, and our city. </p><br></br>
<Card className = "testimonials">
  <Card.Header style = {{backgroundColor: "#E19B24", color: "black", fontWeight: "bold", fontSize: 20}}>Testimonials</Card.Header>
  <Card.Body style = {{backgroundColor: "black",}}>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “Claire and crew have done several small and large projects for my home in CIELO and my office in Del Mar. 
        They are always incredibly professional and accommodating. I know I can trust them to work diligently even 
        when I’m away on vacation.”{' '}
      </p>
      <footer className="blockquote-footer" style = {{color: "white"}}>
         <cite title="Source Title">Jonny Swindlessome</cite>
      </footer>
    </blockquote>
  </Card.Body>
  <Card.Body style = {{backgroundColor: "black"}}>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “People have been complimenting my bathroom nonstop since CAIAMY remodeled it last year.
         They are one of PQ’s finest.”{' '}
      </p>
      <footer className="blockquote-footer" style = {{color: "white"}}>
         <cite title="Source Title">Omar Beneveeds</cite>
      </footer>
    </blockquote>
  </Card.Body>
  <Card.Body style = {{backgroundColor: "black"}}>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “I’ve been hiring the CAIAMY and CO for years. They’ve done a great job with my home and I am very pleased. 
        There’s nothing that CAIAMY can’t do.”{' '}
      </p>
      <footer className="blockquote-footer" style = {{color: "white"}}>
         <cite title="Source Title">Arthur Jenes</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card><br></br>
</Container>
</React.Fragment>
         )
    }
}
export default Homepage;
