import React, { Component } from 'react'
import './card.scss'
import { Card, Col } from 'react-bootstrap'

export default class str extends Component {
    render() {
        return (
          <>
          <Col>
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
