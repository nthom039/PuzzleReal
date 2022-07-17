import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import React, { useState } from 'react';

function TopNav() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="TopNav">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Title</Navbar.Brand>
          <div>
          <Button variant="light">Cart</Button>
          <Button variant="light" onClick={handleShow}>Launch</Button> 
          </div>
          <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">Our Work</Nav.Link>
                <Nav.Link href="">Premade</Nav.Link>
                <Nav.Link href="">Make Your Own</Nav.Link>
                <Nav.Link href="">Ambitious</Nav.Link>
                <Nav.Link href="">Cart</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNav;