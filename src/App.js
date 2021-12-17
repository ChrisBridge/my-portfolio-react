import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default class App extends Component {
  render() {
    return (
      <Container>   
        <h1 className='Title mt-5 mb-5'>Colonne Bootstrap</h1>
        <Row>
          <Col>Colonna 1 SX</Col>
          <Col className='text-center'>Colonna 2 DX</Col>
        </Row>
      </Container>
    )
  }
}
