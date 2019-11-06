import React, {Component} from 'react';
import {Button, Form, FormControl, FormGroup, Row, Col, Container} from 'react-bootstrap';
import * as emailjs from 'emailjs-com'

class Email extends Component {
    constructor(){
        super()  
            this.state = {
                name: '',
                email: '',
                message: '',
                
            }
        
        }

        handleSubmit(e) {
            // e.preventDefault()
            const { name, email, message } = this.state
            let templateParams = {
              from_name: name,
              to_name: 'sinestro542@gmail.com',
              message_html: message,
              email_address: email,
             }
             emailjs.send(
              'gmail',
              'template_1fGDq97r_clone',
               templateParams,
              'user_XmvdS0u8OayF13t06x7dp'
             )
            //  this.resetForm()
         }
        
         resetForm() {
            this.setState({
              name: '',
              email: '',
              message: '',
            })
          }
        
          handleChange = (param, e) => {
            this.setState({ [param]: e.target.value })
          }

    render(){
        return(
            <React.Fragment>
            <Container>
            <body>
            <h1 style = {{color: "#E19B24", textAlign: "left", fontWeight: "bold"}}>Leave a Message</h1>
            <p style = {{textAlign: "left", fontSize: 25}}>We'll get back to you as quickly as possible</p>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                <Row>
                    <Col xs={5}>
                        <FormGroup controlId="formBasicName">
                        <label style = {{fontWeight: "bold", fontSize: 20}}>Name</label>
                            <FormControl
                                type="text"
                                name="name"
                                onChange={this.handleChange.bind(this, 'name')}
                                value={this.state.name}
                                />
                        </FormGroup>
                    </Col>    
                </Row>
                    
                <Row>   
                    <Col xs={5}>
                        <FormGroup controlId="formBasicEmail">
                        <label style = {{fontWeight: "bold", fontSize: 20}}>Email</label>
                                <FormControl
                                type="email"
                                name="email"
                                onChange={this.handleChange.bind(this, 'email')}
                                value={this.state.email}
                                />
                        </FormGroup>
                    </Col>
                </Row>    
                <Row>    
                    <Col>
                        <FormGroup controlId="formBasicMessage">
                        <label style = {{fontWeight: "bold", fontSize: 20}}>Message</label>
                                <FormControl
                                className="textArea"
                                rows="3"
                                // cols="10"
                                type="textbox"
                                name="message"
                                onChange={this.handleChange.bind(this, 'message')}
                                value={this.state.message}
                                />
                        </FormGroup>
                    </Col>     
                </Row> <br></br> 
                <Button  
                    variant="outline-warning" 
                    style = {{backgroundColor: "black"}}
                    className = "footerb" 
                    size = "large"
                    onClick = { this.handleSubmit() }
                >Submit</Button>
                        
                </Form>
                <br></br>
                
    	        </body>
    	        </Container>
            </React.Fragment>
        )
    }
}
export default Email