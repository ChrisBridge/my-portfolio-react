import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import image from '../../img/hero.png'
import './Hero.scss'


function Hero() {
    return (  
        <section className='hero'>    
            <Row>
                <Col md={6}> 
                    <div className="hero_content">
                        <h1 className='hero_title'>
                            <span title="Explore" className='bigTitle'>Explore</span> the Future</h1>
                        <p className='hero_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nisi, similique cupiditate voluptatum </p>
                        <Button variant="warning" size="lg">Warning</Button>{' '}
                    </div>
                </Col>
                <Col md={6}>
                    <img src={image} alt="Future" className='scale-up-center hero_image'/>
                </Col>
            </Row>
        </section>
    )
}

export default Hero
