import React, { Component } from 'react'
import { Container,} from 'react-bootstrap'
import Hero from './components/Hero'
import Str from './components/str'

export default class App extends Component {
  render() {
    return (
      <Container> 
        <section>
          <Hero />
        </section>
        <section>
          <Str />
        </section>
        
      </Container>
    )
  }
}
