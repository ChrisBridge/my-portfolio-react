import React, { Component } from 'react'
import { Container,} from 'react-bootstrap'
import Hero from './components/Hero'

export default class App extends Component {
  render() {
    return (
      <Container> 
        <section>
          <Hero />
        </section>  
        
      </Container>
    )
  }
}
