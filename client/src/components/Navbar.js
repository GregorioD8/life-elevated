import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = ({ onNavClick }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">LIFE ELEVATED</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" onClick={onNavClick}>Home</Nav.Link>
            <Nav.Link href="#services" onClick={onNavClick}>Services</Nav.Link>
            <Nav.Link href="#about" onClick={onNavClick}>About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;