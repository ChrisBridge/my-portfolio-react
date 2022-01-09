import React, { Component } from 'react'
import './box-intro.scss'
import { Card, Col } from 'react-bootstrap'

export default class str extends Component {
    render() {
        return (
          <>
          <Col xs={12} md={12} lg={4}>
            <Card>
              <Card.Img variant="top" src={this.props.immagine} />
              <Card.Body>
                <Card.Title>{this.props.nome}</Card.Title>
                <Card.Text>{this.props.testo}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </>
        )
    }
}
