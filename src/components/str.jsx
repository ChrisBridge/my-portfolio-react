import React, { Component } from 'react'
import './card.scss'
import { Card, Col } from 'react-bootstrap'

export default class str extends Component {
    render() {
        return (
<<<<<<< Updated upstream
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
=======
            <div>
<CardGroup>

<Col>
  <Card>
    <Card.Img variant="top" src={ImageOne} />
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

<Col>
   <Card>
    <Card.Img variant="top" src={ImageTwo} />
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
>>>>>>> Stashed changes
        )
    }
}
