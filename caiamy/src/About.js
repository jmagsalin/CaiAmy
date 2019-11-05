import React, {Component} from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

class About extends Component {
  render(){
    return (
    <React.Fragment>
        <Jumbotron fluid className = "aboutJumbotron">
             
             <Container>
             <h1></h1>
             <p className = "aboutText"></p><br></br>
             </Container>
         </Jumbotron>
                      
     <Container>
       <br></br>
      <div className="about">
        <h3 className = "cats">About Our Company...</h3><br></br>
        <p className = "aboutText">When it comes to cleaning services, San Diego has been relying on CaiAmy for over 15 years. 
            Our passion is cleaning San Diego offices, homes, schools and businesses. We are proud to call ourselves your 
            cleaning experts. Our home cleaning service, office cleaning services, and maintenance services are guaranteed 
            to provide you with a safe, spotless home or office. CaiAmy understands how busy people can get and we know that providing 
            affordable, efficient, and reliable local cleaning services is important to the success of businesses and residents 
            alike.</p><br></br>
        <h3 className = "cats">Our Core Values…</h3>
        <br></br>
 
        <h4 className = "cats">Professionalism</h4>
            <p className = "aboutText">Our employees are all industry professionals who work as a team dedicated to ensuring that their service is thorough, 
            complete, and always professional. We place our staff through continuous training to make sure they always maintain 
            the CaiAmy Industries level of commitment to quality and professionalism.</p><br></br>
            
        <h4 className = "cats">Reliability</h4>
            <p className = "aboutText">CaiAmy has great pride in our work and we want to make sure we do it right every time and on time. Our teams 
            have a system in place to make sure every client is serviced on a timely basis as agreed.</p> <br></br>
            
        <h4 className = "cats">Consistency</h4>
            <p className = "aboutText">CaiAmy wants to continuously be your service provider. We have our own service check list to make sure we provide 
            the same high quality services the same way all the time, every time.</p><br></br><br></br>
      </div>
     </Container>
     </React.Fragment>
    )
  }
}

export default About