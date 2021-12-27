import React, { Component } from 'react'
import './feature.scss'
import {Row, Col} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Image from '../img/Feature.png'

export default class feature extends Component {
    render() {
        return (
        <>
        <Row className="align-items-center" >
            <Col xs={12} md={6}>
                <img src={Image} alt="" className='feature_img' />
            </Col>  
            <Col xs={12} md={6}>
                <div className="feature_content mt-5">
                    <h2 className='mt-5 pt-5'>Lorem Ipsum</h2>
                    <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro praesentium ipsa voluptas, quis quibusdam sunt eligendi molestias quod adipisci ipsum similique laboriosam culpa mollitia dignissimos tempora, reprehenderit odit harum maiores.</p>
                    <Button variant="warning" size="lg" className='mt-4'>Large button</Button>{' '}
                    <blockquote className='mt-5 pt-5'>
                        <p>[...] fatti non foste a viver come bruti, ma per seguir virtute e canoscenza</p>
                        <cite>Inferno Canto XXVI - La Divina Commedia</cite>
                    </blockquote>
                </div>
            </Col> 
        </Row>  
        </>
        )
    }
}
