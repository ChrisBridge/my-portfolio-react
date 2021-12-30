import React, { Component } from 'react'
import './contact.scss'
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap'

export default class contact extends Component {
    render() {
        return (
        <>
            <Row>
                <Col sm={12} md={6}>
                    <h2>Here Me</h2>
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
                        <Form.Control as="textarea" rows={6} placeholder="Text Area"/>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                    colonna due
                </Col>
            </Row>
        </>
        )
    }
}
