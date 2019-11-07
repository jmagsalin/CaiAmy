import React, {Component} from 'react';
import {Button, Form, FormControl, FormGroup, Row, Col, Container} from 'react-bootstrap';
import * as emailjs from 'emailjs-com'

class Email extends Component {
    constructor(){
        super()
            this.state = {
                name: '',
                email: '',
                phone: '',
                message: '',
                success: undefined,
            }
        }   
        
        handleSubmit = (e) => {
             e.preventDefault()
            
            const { name, email, message, phone, success } = this.state
            let templateParams = {
              from_name: name,
              to_name: 'sinestro542@gmail.com',
              message_html: message,
              phone_number: phone,
              email_address: email,
             }
             emailjs.send(
              'gmail',
              'template_1fGDq97r_clone',
               templateParams,
              'user_XmvdS0u8OayF13t06x7dp'
             )
             let redirect = success === undefined ? true : false
             this.setState({ success: redirect })
             this.resetForm()
         }
        
         resetForm() {
            this.setState({
              name: '',
              email: '',
              phone: '',
              message: '',
            })
          }
        
          handleChange = (param, e) => {
            this.setState({ [param]: e.target.value })
          }

    render(){
        const { success } = this.state
        return(
            <React.Fragment>
            <Container>
            <body>
            <h1 style = {{color: "#E19B24", textAlign: "left", fontWeight: "bold"}}>Leave a Message</h1>
            <p style = {{textAlign: "left", fontSize: 25}}>We'll get back to you as quickly as possible</p>
                <Form onSubmit={this.handleSubmit.bind(this)} className = "formBack">
                <Row>
                    <Col xs={3}>
                        <FormGroup controlId="formBasicName">
                        <label style = {{fontWeight: "bold", fontSize: 20, color: "black"}}>Name</label>
                            <FormControl
                                type="text"
                                name="name"
                                style = {{borderColor: "black"}}
                                onChange={this.handleChange.bind(this, 'name')}
                                value={this.state.name}
                                />
                        </FormGroup>
                    </Col>    
                </Row>         
                <Row>   
                    <Col xs={3}>
                        <FormGroup controlId="formBasicEmail">
                        <label style = {{fontWeight: "bold", fontSize: 20, color: "black"}}>Email</label>
                                <FormControl
                                type="email"
                                name="email"
                                style = {{borderColor: "black"}}
                                onChange={this.handleChange.bind(this, 'email')}
                                value={this.state.email}
                                />
                        </FormGroup>
                    </Col>
                </Row>    
                <Row>   
                    <Col xs={3}>
                        <FormGroup controlId="formBasicEmail">
                        <label style = {{fontWeight: "bold", fontSize: 20, color: "black"}}>Phone</label>
                                <FormControl
                                type="phone"
                                name="phone"
                                style = {{borderColor: "black"}}
                                onChange={this.handleChange.bind(this, 'phone')}
                                value={this.state.phone}
                                />
                        </FormGroup>
                    </Col>
                </Row>   
                <Row>    
                    <Col xs = {6}>
                        <FormGroup controlId="formBasicMessage">
                        <label style = {{fontWeight: "bold", fontSize: 20, color: "black"}}>Message</label>
                                <FormControl
                                as = "textarea"
                                className="textArea"
                                style = {{borderColor: "black"}}
                                type="text"
                                name="message"
                                onChange={this.handleChange.bind(this, 'message')}
                                value={this.state.message}
                                />
                        </FormGroup>
                    </Col>     
                </Row> <br></br> 
                <Button  
                    variant="outline-warning"
                    style = {{borderColor: "#E19B24", fontWeight: "bold"}}
                    className = "footerb" 
                    size = "large"
                    onClick = { this.handleSubmit }
                >Submit</Button>
                <h3>''</h3>  
                {success === true &&
                <h2 style = {{textAlign: "left", color: "#E19B24", outlineColor: "#E19B24" }}>Form Submitted!</h2>
                } 
                </Form>
                <br></br>              
    	        </body>         
    	        </Container>               
            </React.Fragment>
        )
    }
}
export default Email