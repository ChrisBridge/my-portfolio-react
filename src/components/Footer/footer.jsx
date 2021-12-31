import React, { Component } from 'react'
import './footer.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../img/logo-white.png'


export default class footer extends Component {
    render() {
        return (
            <div className='footer'>
            <Container className='mt-5 py-5'>
                <Row className='align-items-center'>
                    <Col xs={12} md={4}><img src={Logo} alt="Future" className='logo_footer' /></Col>
                    <Col xs={12} md={4}>2 of 3 (wider)</Col>
                    <Col xs={12} md={4}>Copyright © 2021 Rainbow-Themes. All Rights Reserved.</Col>     
                </Row> 
            </Container>
              
            </div>
        )
    }
}
