import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Card  } from 'react-bootstrap';
import Home from './screens/Home';
import Services from './screens/Services';
import Portfolio from './screens/Portfolio';
import Experiences from './screens/Experiences';

function App() {

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary b-bottom">
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand href="#home" className='f-extra-large'><span className='primary-color'>S</span>umit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto f-large'>
            <Nav.Link href="#home" className='me-5'>Home</Nav.Link>
            <Nav.Link href="#services" className='me-5'>Services</Nav.Link>
            <Nav.Link href="#skills" className='me-5'>Skills</Nav.Link>
            <Nav.Link href="#portfolio" className='me-5'>Portfolio</Nav.Link>
            <Nav.Link href="#contact" className='me-5'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>  
    </Navbar>

    <Home />
    <Services />
    <Experiences />
    <Portfolio />
    </>

  )
}

export default App
