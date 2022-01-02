import React, { Component } from 'react'
import './Global.scss'
import { CardGroup, Col, Container,} from 'react-bootstrap'
import Hero from './components/Hero/Hero'
import Tech from './components/Tech/technology'
import Feature from './components/Feature/feature'
import Contact from './components/Contact/contact'

import BoxIntro from './components/BoxIntro/box-intro'
import { Row } from 'react-bootstrap'

import ImageOne from './img/box-1.png'
import ImageTwo from './img/box-2.png'
import ImageTree from './img/box-3.png'

import Skill from './components/Skill/skill'

export default class App extends Component {
  state ={
    cards: [
      {id: 0, nome: 'Card-1', immagine: ImageTree, testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi.'},
      {id: 1, nome: 'Card-2', immagine: ImageTwo,  testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi'},
      {id: 2, nome: 'Card-3', immagine: ImageOne,  testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi'},
    ]
  }
  render() {
    return (
      <Container>
        <Hero /> 
        <section>
          <Tech />
        </section>    
        <Row>
          <CardGroup>
            {this.state.cards.map(card => (
              <BoxIntro 
              key={card.id}
              nome={card.nome}
              testo={card.testo}
              immagine={card.immagine}
              />
            ))}
          </CardGroup>
        </Row>
        <Feature />
        <Skill />
        <Contact />
      </Container>
    )
  }
}
