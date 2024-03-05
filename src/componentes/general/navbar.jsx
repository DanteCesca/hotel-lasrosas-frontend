import React from 'react';
import { Navbar, Container, Button, Form, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.jpg'

const NavScrollExample = () => {
  
  return (
    <Navbar expand="lg" className="navbar fixed-top">
      <Container fluid>
        <Navbar.Brand href="#" className='d-flex align-items-center'>
          <Image
            className='rounded-circle me-2'
            src={logo} 
            alt="Las Rosas Logo"
            style={{width: '60px', height: '70px'}}
          />
          <div>
            <h2 style={{ margin: 0, padding: 0 }}>Las Rosas</h2>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
      <Form className="ms-auto">
        <Button className='btn my-custom-button me-2'>Habitaciones</Button>
        <Button className='btn my-custom-button me-2'>Register</Button>
        <Button className='btn my-custom-button me-2'>Log-In</Button>
      </Form>
    </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
