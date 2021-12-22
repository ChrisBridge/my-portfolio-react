import React, { Component } from 'react'
import './card.scss'

import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { CardGroup } from 'react-bootstrap'

import ImageOne from '../img/box-1.png'
import ImageTwo from '../img/box-2.png'
import ImageTree from '../img/box-3.png'

export default class str extends Component {
    render() {
        return (
            <div>
<CardGroup>

<Col>
  <Card>
    <Card.Img variant="top" src={ImageOne} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>

<Col>
   <Card>
    <Card.Img variant="top" src={ImageTwo} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
</Col>   

<Col>
  <Card>
    <Card.Img variant="top" src={ImageTree} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>    
</CardGroup>
            </div>
        )
    }
}
