import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import './NavBar.css'
import './NavBarStyle.scss'
import Logo from '../logo-white.png'
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';




export default class NavBar extends Component {
    render() {
        return (
        <>

            <Navbar className='nav' bg="transparent" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <img src= {Logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='link'><Link to={'/'}>Home</Link> </Nav.Link>
                        <Nav.Link className='link'><Link to={'/About'}>About</Link> </Nav.Link>
                        <Nav.Link className='link'><Link to={'/Work'}>Work</Link> </Nav.Link>
                        <Nav.Link className='link'><Link to={'/Contact'}>Contact</Link> </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='link icon_social'> <Link to={'/'}><FaFacebook /></Link> </Nav.Link>
                        <Nav.Link className='link icon_social'> <Link to={'/'}><FaGithub /></Link> </Nav.Link>
                        <Nav.Link className='link icon_social'> <Link to={'/'}><FaLinkedinIn /></Link> </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                
        </>
        )
    }
}
