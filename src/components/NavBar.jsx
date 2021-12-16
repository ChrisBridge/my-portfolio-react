import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

import { Link } from 'react-router-dom'




export default class NavBar extends Component {
    render() {
        return (
        <>

            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link> <Link to={'/'}>Home</Link> </Nav.Link>
                        <Nav.Link> <Link to={'/About'}>About</Link> </Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item>Action</NavDropdown.Item>
                        <NavDropdown.Item>Another action</NavDropdown.Item>
                        <NavDropdown.Item>Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                
        </>
        )
    }
}
