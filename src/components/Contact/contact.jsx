import React, { Component } from 'react'
import './contact.scss'
import { Row, Col, Form, FloatingLabel,Button } from 'react-bootstrap'
import Image from '../../img/box-2.png'

export default class contact extends Component {
    render() {
        return (
        <>
            <Row className='form_box align-items-center'>
                <Col sm={12} md={6}>
                    <img src={Image} alt="" className='contact_img' />
                </Col>
                
                <Col sm={12} md={6}>
                    <div className="contact_form">
                        <h2>Here Me...</h2>
                        <p>I am available for freelance work. 
                        Connect with me via phone: 01923 088574 or email: admin@example.com</p>

                        <FloatingLabel label="Nome" className="mb-3">
                            <Form.Control type="text" placeholder="Nome" />
                        </FloatingLabel>
                        <FloatingLabel label="Cognome" className="mb-3">
                            <Form.Control type="text" placeholder="Cognome" />
                        </FloatingLabel>
                        <Form.Select aria-label="Tipo di Richiesta" className="mb-3">
                            <option>Tipo di Richiesta</option>
                            <option value="1">WebSite OnePage Scroll</option>
                            <option value="2">BackEnd</option>
                            <option value="3">E-Commerce</option>
                        </Form.Select>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={5} placeholder="Text Area"/>
                        </Form.Group>
                        <Button variant="outline-warning">Click Here</Button>
                    </div>    
                </Col>
            </Row>
        </>
        )
    }
}
