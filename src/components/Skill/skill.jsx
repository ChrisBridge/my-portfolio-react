import React, { Component } from 'react'
import './skill.scss'
import { Link } from 'react-router-dom';
import { Row, Col, ProgressBar,Nav } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';


export default class skill extends Component {
    render() {
        const WebDesign = 100;
        const React = 90;
        const MongoDB = 60;
        const FireBase = 70;
        const Vue = 50;
        return (
            <div className='skill'>
                <Row>
                    <Col xs={12} md={6} className='pe-5 skill_content'>
                        <div className="bar"></div>
                        <h1>I'm a Full Stack web developer working from home</h1>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit nisi vitae feugiat vestibulum. Aliquam porta nulla vel odio scelerisque, pretium volutpat dui euismod. Integer porttitor dolor placerat malesuada dictum. Fusce enim dolor, dignissim quis ornare at, elementum nec turpis. Donec ac interdum libero.</p>
                        <Nav className='socialIcon my-3'>
                            <Nav.Link className='link icon_social'> <Link to={'/'}><FaFacebook /></Link> </Nav.Link>
                            <Nav.Link className='link icon_social'> <Link to={'/'}><FaGithub /></Link> </Nav.Link>
                            <Nav.Link className='link icon_social'> <Link to={'/'}><FaLinkedinIn /></Link> </Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs={12} md={6}>
                        <h5>Web Design</h5>
                        <ProgressBar className='mb-4' now={WebDesign} label={`${WebDesign}%`}/>
                        <h5>React</h5>
                        <ProgressBar className='mb-4' now={React} label={`${React}%`}/>
                        <h5>MongoDB</h5>
                        <ProgressBar className='mb-4' now={MongoDB} label={`${MongoDB}%`}/>
                        <h5>FireBase</h5>
                        <ProgressBar className='mb-4' now={FireBase} label={`${FireBase}%`}/>
                        <h5>Vue</h5>
                        <ProgressBar className='mb-4' now={Vue} label={`${Vue}%`}/>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
