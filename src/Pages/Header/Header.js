import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link as={Link} className='text-light' to="/">Home</Nav.Link>
                        <Nav.Link className='text-light' href="#pricing">Completed Tasks</Nav.Link>
                        <Nav.Link className='text-light' href="#pricing">To-Do</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="/calender">Calendar</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;